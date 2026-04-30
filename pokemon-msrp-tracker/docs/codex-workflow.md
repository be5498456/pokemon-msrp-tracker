# Codex Workflow (Small-Batch)

## Why small batches?
Small changes are easier to review, test, and rollback.

## Standard Loop
1. **Plan**
   - Pick one narrow task from `docs/task-backlog.md`
   - Confirm scope, constraints, and files touched
2. **Implement**
   - Make focused changes in as few files as practical
3. **Validate**
   - Run lint and build locally
4. **Document**
   - Update docs/file map and backlog status if needed
5. **Commit**
   - Use clear commit message with task intent

## Session Hygiene
- Prefer one concern per commit
- Avoid mixing refactors with features
- Keep mock data changes separate from integration logic

## Safety Checklist for Each Session
- No scraping logic added accidentally
- No page-load fetches to retailer websites
- Data source type marked correctly (`mock`, `manual`, `api`, `placeholder`)
