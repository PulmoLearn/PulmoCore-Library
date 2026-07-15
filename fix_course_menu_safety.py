#!/usr/bin/env python3
\"\"\"
PulmoCore course-menu safety patch.

Supports both lesson layouts:
1. Lessons that include #courseMenuList:
   - The menu is built normally.
2. Lessons that do not include #courseMenuList:
   - Menu construction is skipped safely instead of throwing a TypeError.

The patch is idempotent and can be run repeatedly.
\"\"\"

from __future__ import annotations

import argparse
import re
from pathlib import Path


NULL_GUARD = '''const list=document.getElementById("courseMenuList");
    if(!list){
      console.warn('PulmoLearn: #courseMenuList not found; course menu build skipped.');
      return;
    }'''


def patch_course_menu_builder(html: str) -> tuple[str, bool]:
    \"\"\"Insert a null check before courseMenuList.innerHTML assignments.\"\"\"
    if "#courseMenuList not found; course menu build skipped." in html:
        return html, False

    changed = False

    compact = re.compile(
        r\"\"\"const\\s+list\\s*=\\s*document\\.getElementById\\(\\s*[\"']courseMenuList[\"']\\s*\\)\\s*;\\s*
            (?=list\\.innerHTML\\s*=)\"\"\",
        re.VERBOSE,
    )

    def compact_replacement(match: re.Match[str]) -> str:
        nonlocal changed
        changed = True
        return NULL_GUARD + "\\n    "

    html = compact.sub(compact_replacement, html)

    generic = re.compile(
        r\"\"\"const\\s+(?P<var>[A-Za-z_$][\\w$]*)\\s*=\\s*
            document\\.getElementById\\(\\s*[\"']courseMenuList[\"']\\s*\\)\\s*;\\s*
            (?=(?P=var)\\.innerHTML\\s*=)\"\"\",
        re.VERBOSE,
    )

    def generic_replacement(match: re.Match[str]) -> str:
        nonlocal changed
        changed = True
        var_name = match.group("var")
        return (
            f'const {var_name}=document.getElementById("courseMenuList");\\n'
            f'    if(!{var_name}){{\\n'
            "      console.warn('PulmoLearn: #courseMenuList not found; course menu build skipped.');\\n"
            "      return;\\n"
            "    }\\n    "
        )

    html = generic.sub(generic_replacement, html)
    return html, changed


def add_menu_aria_controls(html: str) -> tuple[str, bool]:
    \"\"\"Add aria-controls when the standard course-menu button exists.\"\"\"
    if 'id="courseMenuButton"' not in html or 'aria-controls="courseMenuPanel"' in html:
        return html, False

    patterns = [
        (
            'id="courseMenuButton" aria-expanded="false" aria-haspopup="true"',
            'id="courseMenuButton" aria-expanded="false" aria-haspopup="true" aria-controls="courseMenuPanel"',
        ),
        (
            "id='courseMenuButton' aria-expanded='false' aria-haspopup='true'",
            "id='courseMenuButton' aria-expanded='false' aria-haspopup='true' aria-controls='courseMenuPanel'",
        ),
    ]

    for old, new in patterns:
        if old in html:
            return html.replace(old, new, 1), True

    return html, False


def patch_file(path: Path) -> bool:
    original = path.read_text(encoding="utf-8")
    updated, changed_menu = patch_course_menu_builder(original)
    updated, changed_aria = add_menu_aria_controls(updated)

    if not (changed_menu or changed_aria):
        return False

    path.write_text(updated, encoding="utf-8")
    print(f"Patched: {path}")
    return True


def iter_html_files(root: Path):
    if root.is_file():
        if root.suffix.lower() == ".html":
            yield root
        return

    for path in root.rglob("*.html"):
        if any(part in {".git", "node_modules", "vendor"} for part in path.parts):
            continue
        yield path


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "target",
        nargs="?",
        default=".",
        help="HTML file or directory to patch (default: current directory)",
    )
    args = parser.parse_args()

    root = Path(args.target).resolve()
    if not root.exists():
        raise SystemExit(f"Target does not exist: {root}")

    scanned = 0
    patched = 0

    for html_file in iter_html_files(root):
        scanned += 1
        try:
            if patch_file(html_file):
                patched += 1
        except UnicodeDecodeError:
            print(f"Skipped non-UTF-8 file: {html_file}")

    print(f"Course-menu safety scan complete: {patched} patched / {scanned} scanned.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
