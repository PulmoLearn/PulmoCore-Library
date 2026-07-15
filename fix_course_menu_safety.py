#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
from pathlib import Path


def patch_course_menu_builder(html: str) -> tuple[str, bool]:
    marker = "#courseMenuList not found; course menu build skipped."
    if marker in html:
        return html, False

    pattern = re.compile(
        r'''const\s+(?P<var>[A-Za-z_$][\w$]*)\s*=\s*
            document\.getElementById\(\s*["']courseMenuList["']\s*\)\s*;\s*
            (?=(?P=var)\.innerHTML\s*=)''',
        re.VERBOSE,
    )

    changed = False

    def replace(match: re.Match[str]) -> str:
        nonlocal changed
        changed = True
        var_name = match.group("var")
        return (
            f'const {var_name}=document.getElementById("courseMenuList");\n'
            f'    if(!{var_name}){{\n'
            "      console.warn('PulmoLearn: #courseMenuList not found; course menu build skipped.');\n"
            "      return;\n"
            "    }\n    "
        )

    return pattern.sub(replace, html), changed


def add_menu_aria_controls(html: str) -> tuple[str, bool]:
    if 'id="courseMenuButton"' not in html:
        return html, False
    if 'aria-controls="courseMenuPanel"' in html:
        return html, False

    old = 'id="courseMenuButton" aria-expanded="false" aria-haspopup="true"'
    new = 'id="courseMenuButton" aria-expanded="false" aria-haspopup="true" aria-controls="courseMenuPanel"'

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
    parser.add_argument("target", nargs="?", default=".")
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
