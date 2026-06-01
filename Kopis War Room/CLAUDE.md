# Kopis War Room — CLAUDE.md

Global Claude rules live at `/Users/daniel/.claude/CLAUDE.md`. This file extends only what's project-specific.

## Prime Directive

Continue from local changes. Do not restart from scratch. Preserve dirty files.

## Startup

1. Read `AGENTS.md` in this folder.
2. Read `docs/next-implementation-map.md` if implementation is in progress.
3. Read `tasks/todo.md` if concrete tasks need tracking.
4. Open `index.html` only for the section you need — it is ~1400 lines.

## Single-File Constraint

This is a single HTML file. No build step. No external JS. All changes go to `index.html`.

- Read the relevant section before editing.
- Verify with the gate checklist in `AGENTS.md` after edits.
- Do not introduce `color-mix()` — use static `rgba()` values instead.
- Do not add new external script or stylesheet dependencies.

## Frontend Skill

Activate the `frontend-design` skill for any visual redesign or major aesthetic change.
