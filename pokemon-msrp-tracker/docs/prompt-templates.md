# Codex Prompt Templates

## 1) Audit Prompt
"Audit the repository structure and summarize: current architecture, data flow, known risks, and missing pieces for the Pokémon MSRP tracker MVP. Do not change code yet."

## 2) Implementation Prompt
"Implement task #<N> from docs/task-backlog.md using a small-batch approach. Respect docs/retailer-rules.md and docs/data-sources.md. Use mock/manual data only unless task explicitly says otherwise."

## 3) Review Prompt
"Review the latest changes for type safety, readability, and policy compliance. Flag any scraping-related risk or accidental live retailer fetching."

## 4) Testing Prompt
"Run lint and build. Report pass/fail for each command, include failures with root cause, and suggest minimal fixes."

## 5) Docs Update Prompt
"Update docs/file-map.md, docs/task-backlog.md, and README to reflect the latest completed task. Keep updates concise and beginner-friendly."
