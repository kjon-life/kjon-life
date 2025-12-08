# Brand Palette Migration
**Last Update:** 2025-12-08  

## Overview

Update SCSS color system to align with the `kjon-brand-palette.jsx` component, establishing  light/dark mode palettes and introducing semantic tokens.

## Changes Made

### 1. Updated `src/scss/base/_variables.scss`

**Before:** Single `$brand-colors` map with mixed light/dark values  
**After:** Separate `$light-brand-colors`, `$dark-brand-colors`, and semantic token maps

#### New Color Naming Convention

| Old Name | New Name | Rationale |
|----------|----------|-----------|
| `accent` | `complementary-accent-warm` | Aligns with brand palette naming |
| `complementary-accent` | `complementary-accent-cool` | Distinguishes warm/cool accents |
| `complementary-primary` | *Removed* | Gold - mapped to `$highlight-color` |
| `complementary-secondary` | *Removed* | Light Coral - mapped to `$complementary-accent-warm` |

#### New Additions

- **Semantic tokens** for state colors:
  - `success`, `warning`, `error`, `info`
  - Light and dark mode variants
  - Exported as CSS custom properties: `--semantic-success`, etc.

- **CSS Custom Properties:**
  - `--brand-text-primary`, `--brand-text-secondary`, etc.
  - `--semantic-success`, `--semantic-warning`, `--semantic-error`, `--semantic-info`

### 2. Updated Theme Files

#### `src/scss/themes/_dark.scss`

- Removed local `$dark-brand-colors` definition
- Now uses centralized palette from `_variables.scss`
- Exports semantic tokens via `@include export-semantic-vars($semantic-colors-dark)`

#### `src/scss/themes/_light.scss`

- Removed local `$light-brand-colors` definition
- Now uses centralized palette from `_variables.scss`
- Exports semantic tokens via `@include export-semantic-vars($semantic-colors-light)`

### 3. Updated Component Files

#### `src/scss/layout/_intro.scss`

- Changed `$complementary-primary` → `$highlight-color`
- Updated animation to use `$highlight-color` and `$complementary-accent-cool`

#### `src/scss/pages/_error.scss`

- Changed `$complementary-secondary` → `$complementary-accent-warm`

## Color Palette Reference

### Light Mode
```scss
text-primary: #1b1b1b           // Primary text, headings
text-secondary: #333333         // Body text, captions
background: #F5F3F5             // Main page background
primary: #150050                // Brand anchor, nav, buttons
secondary: #3f0071              // Hover states, accents
highlight: #C88304              // CTAs, links, emphasis
complementary-accent-cool: #0072af   // Info states, secondary actions
complementary-accent-warm: #582707   // Alerts, warnings
```

### Dark Mode
```scss
text-primary: #F5F3F5           // Primary text, headings
text-secondary: #B8B5B8         // Body text, captions
background: #0D0D12             // Main page background
primary: #1E0A5C                // Brand anchor, surfaces
secondary: #5A1A9E              // Elevated surfaces, accents
highlight: #E09A1A              // CTAs, links, emphasis
complementary-accent-cool: #54B7EC   // Info states, secondary actions
complementary-accent-warm: #F07C52   // Alerts, attention
```

### Semantic Tokens
```scss
// Light Mode
success: #22C55E
warning: #EAB308
error: #EF4444
info: #0072af

// Dark Mode
success: #4ADE80
warning: #FACC15
error: #F87171
info: #54B7EC
```

## Benefits

1. **Single Source of Truth:** All palettes defined in `_variables.scss`
2. **Mode-Aware:** Proper CSS custom property overrides for `.light-mode` / `.dark-mode`
3. **Semantic Tokens:** State colors (success/warning/error/info) now available
4. **Consistency:** Naming aligns with `kjon-brand-palette.jsx` component
5. **Maintainability:** Future palette changes happen in one place

## New Components

### Brand Palette Viewer

Created Bootstrap-based EJS implementation of the brand palette:

- **File:** `views/partials/brand_palette.ejs`
- **Route:** `/brand` (via `routes/brand.js`)
- **Page:** `views/brand.ejs`

Mirrors the JSX component but uses Bootstrap 5 classes:
- Grid system: `row`, `row-cols-*`, `g-4`
- Cards: `card`, `card-body`, `shadow-sm`
- Typography: `display-4`, `lead`, `fw-bold`, `font-monospace`
- Utilities: `py-5`, `mb-4`, `d-flex`, `flex-fill`

Access at: `http://localhost:3000/brand`

## Testing Checklist

- [ ] Test light/dark mode switching
- [ ] Verify intro section h1 animation colors
- [ ] Verify error page color display
- [ ] Check all components using old variable names
- [ ] Validate CSS custom properties in DevTools
- [ ] View brand palette at `/brand` route
- [ ] Verify responsive layout on mobile/tablet
- [ ] Compare EJS palette with JSX version for consistency

## Next Steps

1. Consider using semantic tokens (`--semantic-error`, etc.) in appropriate contexts
2. Audit remaining hardcoded colors in components
3. Update documentation to reference new variable names
4. Consider adding more semantic states (e.g., `disabled`, `focus`)
5. Add brand palette link to main navigation

