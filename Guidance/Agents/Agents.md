# Agent System

## Goal

This agent set should be MECE:

- Mutually exclusive: each agent owns a distinct artifact and decision space.
- Collectively exhaustive: together they cover strategy, narrative, visual design, implementation, and review.

The cleanest way to avoid overlap is to assign ownership by output, not by vague discipline labels.

## Pemberley Brand Source Of Truth

All agents should treat the uploaded logo package as the primary visual authority:

- `Pemberley Logos/pem-logo-guide-2025.12.05.pdf`
- `Pemberley Logos/Pemberley Logo Package/...`
- social/favicon reference files in `Pemberley Logos/`

The brand system visible in the assets is clear and should govern all work:

- Primary brand color: `forest` `#304622`
- Supporting colors: `sage` `#9EA393`, `dusk` `#4D656F`, `garnet` `#812D1D`
- Core neutrals: `white`, `black`
- Limited supporting tint seen in knockout tile art: `#9BAFB5`

The visual character is:

- heritage
- literary
- cultivated
- garden-estate
- premium but warm
- restrained rather than loud

The brand should not drift into:

- generic modern DTC minimalism
- bright cheerful farmhouse styling
- rustic kitsch
- loud luxury
- playful cottagecore overload

## Brand Defaults

- Default web brand color is `forest`.
- Default primary brand mark for storytelling moments is the bun lockup:
  `Pemberley Logos/Pemberley Logo Package/lockup-bun/forest/web/pem-lockup-bun-forest-rgb.svg`
- Default compact website mark is the tagged logotype:
  `Pemberley Logos/Pemberley Logo Package/logotype-tag/forest/web/pem-logotype-tag-forest-rgb.svg`
- Default favicon/social/avatar mark is the circular `P`:
  `Pemberley Logos/Pemberley Logo Package/logomark-circle-p/forest-white/web/pem-logomark-circle-p-forest-white-rgb.svg`
- `sage`, `dusk`, and `garnet` are approved supporting colorways, not replacements for the whole brand system.
- Use white logo variants only on dark or saturated brand-color fields.
- Tile marks and knockout tile variants are special-use assets for badges, seals, packaging moments, or editorial accents, not the default site masthead.
- The rabbit motif is a signature emblem and should be used sparingly. It should feel intentional, not repeated as decoration.
- The tagline `Celebrating the Life of a Gardener` is a brand asset, not mandatory chrome. Use it in hero, footer, About, or brand moments rather than every small logo placement.

## Typography Direction

Inferred from the supplied marks:

- Favor elegant editorial serif display typography with high contrast and classic proportions.
- Pair it with restrained body typography that feels timeless and readable.
- Script or calligraphic styling should be used only as a subtle accent when echoing the tagline energy.
- Avoid geometric-tech typography, bubbly scripts, or stark utilitarian branding.

## Experience Direction

The brand should feel like entering a refined garden estate or personal horticultural journal:

- calm pacing
- generous breathing room
- quiet confidence
- textured, seasonal richness
- thoughtful composition over dense merchandising

## Recommended Roster

1. `orchestrator`
2. `ux-strategy`
3. `brand-and-content`
4. `ui-design`
5. `front-end`
6. `design-qa`

## Why The Current Set Is Not Yet MECE

The current draft names point in the right direction, but on their own they create predictable collisions:

- `ui-design` and `front-end` both tend to make layout and component decisions unless one owns spec and the other owns code.
- `brand-and-content` and `ui-design` often overlap on hierarchy, CTA wording, and information density unless copy and visual system are separated.
- `orchestrator` can become a shadow designer unless it is limited to sequencing, arbitration, and quality gates.
- There is no explicit owner for flows, IA, user journeys, and requirements translation. That is a major design gap.
- There is no explicit verification owner for accessibility, consistency, and spec compliance. That creates quality drift.

## MECE Rule

Each agent should answer yes to exactly one of these questions:

- Who defines what problem and user flow we are solving?
- Who defines what we say?
- Who defines what it looks like?
- Who builds it?
- Who checks that it meets the brief?
- Who coordinates the whole system?

If two agents both answer the same question, the system is not MECE.

## Ownership Matrix

| Area | Owner | Not Owner |
| --- | --- | --- |
| Project brief, sequencing, handoffs, decision log | `orchestrator` | Final design or code choices |
| Personas, journeys, IA, wireframe logic, feature prioritization | `ux-strategy` | Final copy polish, final visual styling, implementation |
| Brand voice, messaging, page narrative, headlines, CTA copy, microcopy | `brand-and-content` | Layout, component visuals, engineering |
| Visual language, layout system, components, states, responsive behavior spec | `ui-design` | Product strategy, final implementation |
| Production UI code, interactions, responsiveness, accessibility implementation | `front-end` | Brand direction, UX strategy, visual exploration |
| QA review, acceptance checks, accessibility audit, design/spec drift detection | `design-qa` | Net-new strategy, copywriting, visual redesign, implementation |

## Standard Workflow

1. `orchestrator` writes the task brief, constraints, and acceptance criteria.
2. `ux-strategy` defines the user flow, page goals, and information architecture.
3. `brand-and-content` defines message hierarchy and copy guidance.
4. `ui-design` turns strategy plus copy into visual direction and component specs.
5. `front-end` implements the approved spec in code.
6. `design-qa` audits the result against the brief, spec, accessibility, and brand.
7. `orchestrator` resolves conflicts and decides whether another pass is needed.

## Handoff Contract

Every agent should produce:

- Inputs required
- Outputs produced
- Decisions it may make alone
- Decisions it must escalate
- Explicit non-goals

Without that contract, overlap returns immediately.

## Decision Rights

- `orchestrator` decides priority, sequencing, and tie-breaks.
- `ux-strategy` decides flow logic and content structure.
- `brand-and-content` decides wording and voice.
- `ui-design` decides visual system and component behavior spec.
- `front-end` decides implementation details that do not change approved behavior.
- `design-qa` decides pass/fail against acceptance criteria, but does not redesign the work.

## Design Coverage Check

This roster is comprehensive for design because it covers:

- problem framing
- user experience structure
- narrative and voice
- visual design system
- implementation
- review and accessibility

If you want a leaner setup, combine `ux-strategy` and `design-qa` into `orchestrator` only temporarily. For a serious design workflow, keep them separate.
