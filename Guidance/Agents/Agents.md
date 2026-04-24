# Pemberley Agents

This folder contains the agent system for the Pemberley website.

Pemberley is a simple, elegant flower and garden retail website focused on visual storytelling, refined UI, and artful presentation of flowers, gardens, arrangements, and seasonal offerings.

The site is not a full ecommerce store yet. The current focus is a landing page, gallery-forward visual experience, light brand storytelling, and simple product or service presentation.

---

## How to Use These Agents

Start with the **Orchestrator Agent**.

The Orchestrator is responsible for understanding the request, deciding which specialist agents should contribute, and combining their input into one clear recommendation or implementation plan.

Do not start with the specialist agents unless the task is clearly limited to one area.

Default entry point:

```txt
guidance/agents/orchestrator.md

# Pemberley Codex Instructions

Before writing or changing code, always read and align with:

1. `guidance/vision.md`
2. `guidance/plan.md`
3. `guidance/agents/agents.md`
4. `guidance/agents/orchestrator.md`

For any coding task, act through the Orchestrator first.

The Orchestrator should decide which specialist guidance applies:

- `brand-content-agent.md` for copy, messaging, page purpose, and tone
- `ui-design-agent.md` for layout, visual hierarchy, imagery, gallery treatment, spacing, and aesthetic
- `frontend-agent.md` for React, TypeScript, component structure, CSS, routing, and implementation
- `quality-agent.md` for accessibility, responsiveness, consistency, performance, and polish

## Project Goal

Pemberley is a simple, elegant flower and garden retail website.

The site should prioritize:

- Artful flower and garden photography
- A refined landing page experience
- Calm, beautiful UI
- Gallery-forward visual storytelling
- Simple product or service presentation
- No full ecommerce system yet

## Coding Rules

- Keep the app simple.
- Do not over-engineer.
- Prefer clear React components.
- Keep imagery central to the experience.
- Before adding features, check whether they support the current plan.
- Before finalizing work, apply the Quality Agent checklist.

## Definition of Done

A change is done when it:

- Supports the Pemberley vision
- Fits the current plan
- Has clear, maintainable code
- Looks good on mobile and desktop
- Uses accessible headings, alt text, and contrast
- Does not introduce unnecessary complexity