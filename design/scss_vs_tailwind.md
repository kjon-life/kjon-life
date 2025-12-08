# Tailwind vs SCSS Architecture
**Last Update**: 2025-12-08

TL;DR: Tailwind = atomic utilities in markup. Our setup = traditional SCSS architecture (7-1 pattern) with Bootstrap as a foundation, compiled by Parcel. This favors separation of concerns and semantic naming; Tailwind would favor co-located, scannable utility classes.

## Comparison Table

| Aspect | **Tailwind** | **This Project (SCSS)** |
|--------|-------------|-------------------------|
| **Philosophy** | Utility-first: inline classes like `p-8`, `flex`, `text-xl` | Component-based: semantic classes like `.navbar`, `.intro-section` |
| **Styling location** | In HTML/JSX markup | In separate SCSS partials organized by concern |
| **Build tool** | PostCSS (JIT compilation) | Parcel processing SCSS |
| **Layout** | `flex`, `grid`, `gap-4` utilities | Custom SCSS in `layout/` (grid, container, footer, etc.) |
| **Spacing** | Preset scale: `p-4`, `m-8`, `gap-2` | Manual `rem` values + SCSS variables |
| **Typography** | `text-sm`, `font-bold`, `leading-6` | `$font-stack`, custom font partials in `base/` |
| **Colors** | `bg-blue-500`, `text-gray-900` | SCSS maps (`$brand-colors`) + CSS custom properties |
| **Theming** | `dark:` variant prefix | Separate `themes/_dark.scss` and `themes/_light.scss` |
| **Responsiveness** | `md:`, `lg:` breakpoint prefixes | Custom mixins in `utils/_mixins.scss` |
| **Framework** | None (or pairs with any) | Bootstrap (via `vendors/_bootstrap.scss`) |

## Summary

**Tailwind** = atomic utilities in markup.

**This project** = traditional SCSS architecture (7-1 pattern) with Bootstrap as a foundation, compiled by Parcel.

Both achieve the same ends—this project favors separation of concerns and semantic naming; Tailwind favors co-located, scannable utility classes.