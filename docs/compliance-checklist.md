# Scrum + GitHub Compliance Checklist

## Scope Covered
Mini-sprint scope implemented from course flow:
- SS-1 User Registration
- SS-2 Product Catalog Browsing
- SS-3 Shopping Cart

## Jira Foundations
- Project key style used in commits and branch names: `SS-*`
- Stories mapped and completed in code: SS-1, SS-2, SS-3

## Branching Strategy
- `main`: production snapshot
- `develop`: integration branch
- `feature/SS-1-register`
- `feature/SS-2-catalog`
- `feature/SS-3-cart`

## Development Workflow Evidence
- Feature work implemented on isolated branches
- Story-linked commits exist for each feature
- Feature branches merged into `develop`
- `develop` merged into `main`

## Code Review Simulation
Expected review note used:
- "Code looks clean and meets requirements"

Status in this repo:
- Simulated and documented in sprint artifacts
- API-based auto review/approval was blocked by integration permissions

## Sprint Closure
- Sprint summary prepared: `docs/sprint-summary.md`
- Retrospective prepared: `docs/retrospective.md`
- Stories logically marked complete: SS-1, SS-2, SS-3

## Remaining Manual Admin Steps (outside code)
1. Protect `main` branch in GitHub settings (no direct push).
2. Open/verify PRs in GitHub UI and ensure reviewer approval is recorded.
3. Ensure Jira board columns reflect final state: Backlog -> To Do -> In Progress -> Code Review -> QA Test -> Done.
4. Move SS-1, SS-2, SS-3 to Done in Jira sprint board.
