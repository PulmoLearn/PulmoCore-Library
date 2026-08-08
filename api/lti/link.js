import {
  jwtVerify,
  importSPKI
} from "jose";

import {
  createClient
} from "@supabase/supabase-js";


/* ============================================================
   ENVIRONMENT
============================================================ */

const LTI_PUBLIC_KEY =
  process.env.LTI_PUBLIC_KEY?.replace(/\\n/g, "\n");

const SITE =
  "https://www.pulmolearn.com";


/* ============================================================
   SUPABASE CLIENTS
============================================================ */

// Service-role client.
// Used for:
//
// • lti_users
// • lti_launch_context
// • user_access
//
// This runs only on the server.
const admin =
  createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE
  );


// Used to validate the learner's Supabase access token.
const authClient =
  createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE
  );


/* ============================================================
   VERIFY SIGNED LTI HANDOFF
============================================================ */

async function verifyHandoff(token) {

  if (!LTI_PUBLIC_KEY) {

    throw new Error(
      "Missing LTI_PUBLIC_KEY"
    );

  }


  const key =
    await importSPKI(
      LTI_PUBLIC_KEY,
      "RS256"
    );


  const { payload } =
    await jwtVerify(
      token,
      key,
      {

        issuer:
          SITE,

        audience:
          "pulmolearn-lti-link"

      }
    );


  /*
    Expected handoff payload:

    {
      sub,
      email,
      lessonId,
      lessonUrl,
      agsLineItem,
      agsScopes
    }
  */

  return payload;

}


/* ============================================================
   MAIN HANDLER
============================================================ */

export default async function handler(
  req,
  res
) {

  if (
    req.method !== "POST"
  ) {

    return res
      .status(405)
      .json({

        error:
          "Method not allowed"

      });

  }


  try {

    const body =
      typeof req.body === "string"
        ? JSON.parse(req.body)
        : req.body;


    const ltiToken =
      body?.lti_token;


    const accessToken =
      body?.access_token;


    if (
      !ltiToken ||
      !accessToken
    ) {

      return res
        .status(400)
        .json({

          error:
            "Missing lti_token or access_token"

        });

    }


    /* ========================================================
       STEP 1
       VERIFY SIGNED PULMOLEARN HANDOFF
    ======================================================== */

    let handoff;


    try {

      handoff =
        await verifyHandoff(
          ltiToken
        );


    } catch (error) {

      return res
        .status(401)
        .json({

          error:
            "Invalid or expired lti_token",

          details:
            error.message

        });

    }


    if (
      !handoff.sub
    ) {

      return res
        .status(400)
        .json({

          error:
            "LTI handoff is missing Canvas user identifier"

        });

    }


    /* ========================================================
       STEP 2
       IDENTIFY AUTHENTICATED PULMOLEARN USER
    ======================================================== */

    const {
      data: userData,
      error: userError
    } =
      await authClient.auth.getUser(
        accessToken
      );


    if (
      userError ||
      !userData?.user
    ) {

      return res
        .status(401)
        .json({

          error:
            "Invalid PulmoLearn session",

          details:
            userError?.message

        });

    }


    const userId =
      userData.user.id;


    /* ========================================================
       STEP 3
       LINK CANVAS IDENTITY TO PULMOLEARN ACCOUNT
    ======================================================== */

    const {
      error: linkError
    } =
      await admin
        .from(
          "lti_users"
        )
        .upsert(
          {

            lti_sub:
              handoff.sub,

            user_id:
              userId,

            lti_email:
              handoff.email || null,

            linked_at:
              new Date().toISOString()

          },

          {

            onConflict:
              "lti_sub"

          }
        );


    if (linkError) {

      return res
        .status(500)
        .json({

          error:
            "Canvas account link failed",

          details:
            linkError.message

        });

    }


    /* ========================================================
       STEP 4
       STORE CANVAS AGS PASSBACK CONTEXT

       launch.js put the assignment-specific AGS information
       inside the signed handoff token.

       We now persist it so it remains available after the
       short-lived handoff token expires.
    ======================================================== */

    const lessonId =
      handoff.lessonId || "";


    const agsLineItem =
      handoff.agsLineItem || null;


    const agsScopes =
      Array.isArray(
        handoff.agsScopes
      )
        ? handoff.agsScopes
        : [];


    if (
      lessonId &&
      agsLineItem
    ) {

      const {
        error: contextError
      } =
        await admin
          .from(
            "lti_launch_context"
          )
          .upsert(
            {

              user_id:
                userId,

              lti_sub:
                handoff.sub,

              lesson_id:
                lessonId,

              line_item_url:
                agsLineItem,

              scopes:
                agsScopes,

              updated_at:
                new Date().toISOString()

            },

            {

              onConflict:
                "user_id,lesson_id"

            }
          );


      if (contextError) {

        console.error(
          "PulmoLearn: Failed to save Canvas AGS context:",
          contextError.message
        );


        /*
          Do not block the student from opening the lesson
          solely because grade-passback storage failed.

          We log the problem so it can be diagnosed without
          breaking the learning experience.
        */

      } else {

        console.log(
          "PulmoLearn: Canvas AGS context saved:",
          {

            userId,

            lessonId,

            lineItemPresent:
              true,

            scopeCount:
              agsScopes.length

          }
        );

      }


    } else {

      console.log(
        "PulmoLearn: No AGS line item supplied for this launch:",
        {

          userId,

          lessonId,

          lineItemPresent:
            Boolean(
              agsLineItem
            )

        }
      );

    }


    /* ========================================================
       STEP 5
       CHECK PULMOLEARN ENTITLEMENT
    ======================================================== */

    const {
      data: access,
      error: accessError
    } =
      await admin
        .from(
          "user_access"
        )
        .select(
          "user_id"
        )
        .eq(
          "user_id",
          userId
        )
        .maybeSingle();


    if (accessError) {

      return res
        .status(500)
        .json({

          error:
            "PulmoLearn access lookup failed",

          details:
            accessError.message

        });

    }


    /* ========================================================
       STEP 6
       DETERMINE LESSON DESTINATION
    ======================================================== */

    const lessonUrl =
      handoff.lessonUrl ||
      `${SITE}/dashboard.html`;


    const finalLessonUrl =
      lessonUrl.includes("?")

        ? `${lessonUrl}&lti=1`

        : `${lessonUrl}?lti=1`;


    /* ========================================================
       ACTIVE ACCESS
       RETURN TO EXACT CANVAS-ASSIGNED LESSON
    ======================================================== */

    if (access) {

      return res
        .status(200)
        .json({

          ok:
            true,

          redirect:
            finalLessonUrl

        });

    }


    /* ========================================================
       NO ACTIVE ACCESS

       Do NOT send bookstore students to checkout.

       Send them to account/access recovery so they can:

       • sign in with the correct account
       • or proceed to signup and redeem their voucher
    ======================================================== */

    return res
      .status(200)
      .json({

        ok:
          true,

        redirect:

          `${SITE}/login.html` +

          `?lesson=${encodeURIComponent(
            lessonId
          )}` +

          `&lti=1` +

          `&access=required`

      });


  } catch (error) {

    return res
      .status(500)
      .json({

        error:
          "LTI link endpoint failed",

        details:
          error.message

      });

  }

}
