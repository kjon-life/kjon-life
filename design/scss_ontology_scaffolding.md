Title: SCSS Ontology Scaffolding Plan

Purpose: define the tree of SCSS concerns, describe the “living palette” guardrails, and break each enhancement scaffold into token-budgeted segments so you can implement them sequentially.

## Ontology Tree

1. **Token Hub (base variables)**
   - Semantic colors (`$background-color`, `$text-primary`, `$primary-color`, `$highlight-color`, complementary helpers) are centralized in `src/scss/base/_variables.scss`.
   - Derived helpers (`$border-color`, `$hover-color`, `$shadow-color`, `$box-color`, `$base-color`) live here and are the source of truth for gradients, shadows, and interactive states.
   - Typography/spacing anchors (`$font-stack`, `$breakpoint-mobile`, `$intro-section-height`) feed the rest of the site.

2. **Theme Overlays**
   - Theme files (`src/scss/themes/_dark.scss`, `_light.scss`) wrap overrides inside `.dark-mode` / `.light-mode`.
   - Themes redefine the same semantic slot names so components automatically respect the new look without duplication.
   - Complementary tokens are kept in sync so the curtain-of-wind backdrop, accents, and support tones stay harmonious.

3. **Utility Functions**
   - `_functions.scss` houses contrast/luminance helpers that automate accessible color pairings.
   - These functions ensure new tokens can plug in without manually calculating ratios elsewhere.

4. **Mixins & Shared Components**
   - `_mixins.scss` exposes reusable structures (flex layouts, buttons, cards, media queries, animation keyframes).
   - Components extend `%button-base`, `%card-base`, and rely on semantic colors so they react to theme changes.

5. **Reset/Core Styles**
   - `_reset.scss` locks down box-sizing, spacing reset, body background, and default typography, all sourced from the token hub.
   - It is the first layer every page sees to keep the architecture clean.

6. **Guardrails**
   - The `.cursor/rules/scss-patterns.mdc` file documents the semantic rules and desired behavior for agents.
   - Future enforcement will pair documentation with automated linting/mapping so stray hex values and rogue spacing patterns can’t creep in.

## Enhancement Scaffolds

Each scaffold below represents a structured enhancement that maintains simplicity while giving you room to extend the palette for new channels (HeyGen, youtu.be, x.com). Each segment lists an estimated token budget out of your 100k token allocation.

### Scaffold A: Token Map + CSS Variable Layer
Purpose: turn semantic colors into a reusable map and expose CSS custom properties for runtime theming.
| Segment | Tokens | Deliverable |
| --- | --- | --- |
| A1 | 25k | Define `$brand-colors: (saffron: #c88304, dusk: #150050, mist: #f5f3f5, ...);` and helper `@function brand-color($key)` so new tokens are added in one place. |
| A2 | 20k | Generate CSS custom properties from the map in `:root` and theme wrappers (dark/light). This lets components consume `var(--brand-saffron)` alongside Sass tokens. |
| A3 | 15k | Refactor key mixins/components (buttons, cards, sections) to reference the new helper so the palette can be extended without touching each file. |
| A Status | — | A1–A3 complete: the brand map, helper, `:root` CSS var generator, and theme wrappers are live; dark/light overlays export their own maps via `export-brand-vars`, and buttons/cards already consume `brand-color()`. |

### Scaffold B: Theme Module & Use Layering
Purpose: adopt `@use` modules so dependencies are explicit and overrides stay contained.
| Segment | Tokens | Deliverable |
| B1 | 15k | Split `_variables.scss`, `_mixins.scss`, `_functions.scss`, and theme files into proper `@use` modules (e.g., `@use "base/variables" as vars;`). |
| B2 | 10k | Update components/pages to `@use` the minimal subset they need, preventing accidental variable redefinitions. |
| B3 | 5k | Document the module graph in `design/scss_ontology_scaffolding.md` so future updates follow the same import discipline. |
| B Status | — | B is in progress: `main.scss` now calls each shared file via `@use`, every layout/page/theme pulls the base/mixin leftovers through `@use`, and documenting the module graph is the next step. |
| Module Graph | — | Captured below so future contributors know who `@use`s what. |

#### Module Graph Details
1. `base/variables` – exports `$brand-colors`, `brand-color()`, `export-brand-vars`, typography/breakpoint anchors, and all derived helpers; it also `@use`s `sass:color` to ensure `scale`, `grayscale`, and any future adjustments stay namespaced and compatible with Dart Sass 3.0+.
2. `utils/mixins` – pulls in `base/variables` and forwards `%button-base`, `%card-base`, flex helpers, spacing scale mixins, and the `@layer utilities` classes; export only what is needed to keep modules lean.
3. `utils/functions` – provides `contrast()`/`luminance()` and any future ratio helpers; `@use` this module when you need accessibility-aware color logic.
4. Layout modules (`layout/grid`, `layout/intro`, `layout/purpose`, `layout/footer`, etc.) – `@use` `utils/mixins` and `base/variables` so they stay aligned with the documented helpers and can expose their own placeholders as needed.
5. Component/page/theme modules – `@use` the minimal mixins/rules they require; `main.scss` orchestrates the load order so each partial sees only what it needs without re-exporting globals.
6. Theme wrappers (`themes/dark`, `themes/light`) continue to `@use` `base/variables` for overrides and `export-brand-vars` so CSS custom properties remain tied to the semantic map.

### Scaffold C: Utility/Mixin Layer Expansion
Purpose: expand and document helper mixins so everyone reaches for the same building blocks.
| Segment | Tokens | Deliverable |
| C1 | 10k | Add mixins for gradients, brand shadows, spacing utilities, and responsive containers that reference the token map. |
| C2 | 5k | Document usage patterns inside the design doc (e.g., “use `@include brand-gradient($from, $to)` for hero backgrounds”) and reinforce them in `scss-patterns.mdc`. |
| C3 | 5k | Introduce layer-based utilities (spacing, text, display) guarded by `@layer base`/`@layer components` for future CSS layering. |
| C Status | — | C1–C3 are complete: mixin usage is documented (brand-gradient, brand-shadow/text, spacing stack helpers, responsive container, brand border, and brand transition) and the new `@layer utilities` block exposes spacing, text, background, gradient, shadow, responsive container, border, and transition utility classes that all rely on `brand-color()` so agents can reuse them consistently. |

### Scaffold D: Guardrails & Validation
Purpose: ensure new tokens/styles respect the curated system.
| Segment | Tokens | Deliverable |
| D1 | 5k | Expand `.cursor/rules/scss-patterns.mdc` with the new token map, theme module policy, and mixin references. |
| D2 | 5k | Draft a checklist for agents (e.g., “always extend `%button-base`”, “only add colors via `brand-color()` map”) and capture it in the doc. |
| D3 | 5k | Ship `scripts/validate-brand-colors.js` that checks every partial for raw hex values outside the brand map and run it via `pnpm run validate:brand`. |
| D Status | — | D1 and D2 are done, and D3 is complete: the validation script runs through `pnpm run validate:brand` (also aliased as `pnpm test`) so any new hex value is flagged unless it is part of the official palette. |

## Next Steps

1. Turn Scaffold B into action: split the shared Sass files into `@use` modules and document the module graph.
2. Once B’s module discipline is stable, keep expanding component mixins through the documented utilities (already on Scaffold C).
3. Harden the guardrails by finishing the validation script mentioned in Scaffold D to prevent stray hexes.

Use this document and the upcoming `.mdc` updates as the roadmap whenever you spend tokens on SCSS enhancements.

