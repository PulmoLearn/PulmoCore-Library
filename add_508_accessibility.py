"""
PulmoCore — 508 Accessibility Enhancement Script
Run automatically via GitHub Actions, or manually: python3 add_508_accessibility.py [folder]

Adds to every lesson HTML file:
  1. aria-label on hotspot buttons  (e.g. "Hotspot 1: Droplet Nuclei")
  2. Focus-visible CSS              (amber outline for keyboard users)
  3. Arrow-key + Home/End nav JS    (navigate between hotspots without a mouse)
  4. aria-live announcement region  (screen reader hears hotspot content on activation)
"""

import re
import os
import sys
import glob

# ── CSS injected before </style> ────────────────────────────────────────────
FOCUS_CSS = """
    /* ── 508 Accessibility: keyboard focus indicators ── */
    .hotspot-btn:focus-visible {
      outline: 3px solid var(--clinical-amber, #F4B860);
      outline-offset: 4px;
      box-shadow: 0 0 0 6px rgba(244,184,96,0.35);
      z-index: 10;
    }
    .hotspot-btn:focus {
      outline: 3px solid var(--clinical-amber, #F4B860);
      outline-offset: 4px;
    }
    .sr-only {
      position: absolute;
      width: 1px; height: 1px;
      padding: 0; margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      white-space: nowrap;
      border: 0;
    }
"""

# ── JS injected before </body> ───────────────────────────────────────────────
KEYBOARD_JS = """
  <script>
  /* ── 508 Accessibility: keyboard navigation for hotspot activities ── */
  (function () {
    function initA11yHotspots() {
      document.querySelectorAll('.hotspot-demo').forEach(function (demo) {
        var buttons = Array.from(demo.querySelectorAll('.hotspot-btn'));
        var panel   = demo.querySelector('.hotspot-panel');

        /* aria-live region so screen readers hear the hotspot content */
        var live = demo.querySelector('[data-a11y-live]');
        if (!live) {
          live = document.createElement('div');
          live.setAttribute('aria-live', 'polite');
          live.setAttribute('aria-atomic', 'true');
          live.setAttribute('data-a11y-live', '1');
          live.className = 'sr-only';
          demo.appendChild(live);
        }

        buttons.forEach(function (btn, idx) {
          /* Arrow-key, Home, End navigation within the hotspot group */
          btn.addEventListener('keydown', function (e) {
            var target;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
              e.preventDefault();
              target = buttons[(idx + 1) % buttons.length];
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
              e.preventDefault();
              target = buttons[(idx - 1 + buttons.length) % buttons.length];
            } else if (e.key === 'Home') {
              e.preventDefault();
              target = buttons[0];
            } else if (e.key === 'End') {
              e.preventDefault();
              target = buttons[buttons.length - 1];
            }
            if (target) target.focus();
          });

          /* On activation, push content to aria-live region */
          btn.addEventListener('click', function () {
            var title = btn.dataset.title || '';
            var text  = btn.dataset.text  || '';
            live.textContent = title + '. ' + text;
            if (panel) panel.setAttribute('aria-label', title + ': ' + text);
          });
        });

        /* When focus enters the hotspot container, route to first unvisited button */
        var container = demo.querySelector('.hotspot-lung');
        if (container && buttons.length > 0) {
          container.addEventListener('focus', function () {
            var first = buttons.find(function (b) {
              return !b.classList.contains('visited');
            }) || buttons[0];
            first.focus();
          }, true);
        }
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initA11yHotspots);
    } else {
      initA11yHotspots();
    }
  })();
  </script>
"""


# ── Patch functions ──────────────────────────────────────────────────────────

def add_aria_labels(content):
    """Add aria-label='Hotspot N: Title' to every .hotspot-btn that lacks one."""
    def replacer(m):
        tag = m.group(0)
        if 'aria-label=' in tag:
            return tag
        title = re.search(r'data-title="([^"]*)"', tag)
        num   = re.search(r'>(\d+)<', tag)
        if not title:
            return tag
        label = 'Hotspot {}: {}'.format(
            num.group(1) if num else '?',
            title.group(1)
        )
        return tag.replace(
            'class="hotspot-btn"',
            'class="hotspot-btn" aria-label="{}"'.format(label),
            1
        )
    return re.sub(
        r'<button class="hotspot-btn"[^>]*data-title="[^"]*"[^>]*>\d+</button>',
        replacer,
        content
    )


def add_focus_css(content):
    if '.hotspot-btn:focus' in content:
        return content
    return content.replace('</style>', FOCUS_CSS + '  </style>', 1)


def add_keyboard_js(content):
    if 'initA11yHotspots' in content:
        return content
    return content.replace('</body>', KEYBOARD_JS + '\n</body>', 1)


def patch_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        original = f.read()

    content = add_aria_labels(original)
    content = add_focus_css(content)
    content = add_keyboard_js(content)

    if content == original:
        return 'unchanged'

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    return 'patched'


def main():
    # Accept an optional folder argument; default to current working directory
    folder = sys.argv[1] if len(sys.argv) > 1 else '.'
    pattern = os.path.join(folder, '**', '*.html')
    files = sorted(glob.glob(pattern, recursive=True))

    if not files:
        print(f'No HTML files found under: {folder}')
        sys.exit(0)

    patched = unchanged = 0
    for fp in files:
        status = patch_file(fp)
        if status == 'patched':
            patched += 1
            print(f'  PATCHED    {os.path.relpath(fp, folder)}')
        else:
            unchanged += 1

    print(f'\n508 accessibility pass complete.')
    print(f'  {patched} file(s) patched, {unchanged} already up to date.')


if __name__ == '__main__':
    main()
