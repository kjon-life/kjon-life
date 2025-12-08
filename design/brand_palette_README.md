# Brand Palette System - Complete Documentation

**Last Update:** 2025-12-08

## Overview

Complete brand palette system for kjon.life with dual implementations (JSX and EJS), centralized SCSS variables, and semantic token support.

## Quick Links

| Document | Purpose |
|----------|---------|
| [Brand Palette Migration](./brand_palette_migration.md) | SCSS refactoring details and changelog |
| [Brand Palette Component](./brand_palette_component.md) | Component structure and API reference |
| [Testing Brand Palette](./testing_brand_palette.md) | Testing procedures and checklists |
| [SCSS vs Tailwind](./scss_vs_tailwind.md) | Comparison of styling approaches |

## File Structure

```
kjon-life-refresh/
├── public/brand/
│   └── kjon-brand-palette.jsx      # JSX/Tailwind version (external)
├── views/
│   ├── brand.ejs                    # Brand palette page
│   └── partials/
│       └── brand_palette.ejs        # EJS/Bootstrap partial
├── routes/
│   └── brand.js                     # Route handler for /brand
├── src/scss/
│   ├── base/
│   │   └── _variables.scss          # 🎯 Single source of truth for colors
│   └── themes/
│       ├── _dark.scss               # Dark mode overrides
│       └── _light.scss              # Light mode overrides
└── design/
    ├── brand_palette_migration.md   # Migration log
    ├── brand_palette_component.md   # Component docs
    ├── testing_brand_palette.md     # Testing guide
    └── README_brand_palette.md      # This file
```

## Color System Architecture

### Hierarchy
```
_variables.scss (Source of Truth)
    ├── $light-brand-colors          → :root CSS variables
    ├── $dark-brand-colors           → .dark-mode CSS variables
    ├── $semantic-colors-light       → :root --semantic-* variables
    └── $semantic-colors-dark        → .dark-mode --semantic-* variables

CSS Custom Properties (Runtime)
    ├── --brand-text-primary
    ├── --brand-background
    ├── --semantic-success
    └── ... (all palette colors)

SCSS Variables (Compile Time)
    ├── $text-primary
    ├── $background-color
    └── ... (derived from maps)
```

### Naming Convention

| Category | Pattern | Examples |
|----------|---------|----------|
| Text | `text-*` | `text-primary`, `text-secondary` |
| Backgrounds | `background` | `background` |
| Brand | `primary`, `secondary` | `primary`, `secondary` |
| Actions | `highlight` | `highlight` |
| Accents | `complementary-accent-*` | `complementary-accent-cool`, `complementary-accent-warm` |
| States | `semantic-*` | `semantic-success`, `semantic-error` |

## Implementations

### 1. EJS/Semantic CSS (Production)

**Purpose:** Integrated into kjon.life site  
**Access:** `http://localhost:3000/brand`  
**Styling:** Custom SCSS with semantic class names

```ejs
<!-- Include anywhere -->
<%- include('partials/brand_palette') %>
```

**Features:**
- Server-side rendering
- SEO-friendly
- No client-side JS required
- Semantic class names (e.g., `palette-container`, `color-card`)
- Consistent with existing site architecture

### 2. JSX/Tailwind (Reference)

**Purpose:** External documentation, React integration  
**File:** `public/brand/kjon-brand-palette.jsx`  
**Styling:** Tailwind CSS utilities

```jsx
import KjonBrandPalette from './kjon-brand-palette';

function App() {
  return <KjonBrandPalette />;
}
```

**Features:**
- Client-side rendering
- Portable to other React apps
- Interactive by nature
- Modern DX

## Usage Patterns

### In SCSS Files

```scss
@use '../base/variables' as *;

.my-component {
    // Use SCSS variables
    background-color: $background-color;
    color: $text-primary;
    border: 1px solid $complementary-accent-cool;

    // Or CSS custom properties for runtime switching
    background-color: var(--brand-background);
    color: var(--brand-text-primary);
}

.success-message {
    color: var(--semantic-success);
}
```

### In EJS Templates

```ejs
<!-- Direct inline styles -->
<div style="background-color: #F5F3F5; color: #1b1b1b;">
    Content
</div>

<!-- Using CSS custom properties -->
<div style="background-color: var(--brand-background); color: var(--brand-text-primary);">
    Content
</div>
```

## Color Palette Quick Reference

### Light Mode Core
```
Navy Blue:  #150050  (primary)
Indigo:     #3f0071  (secondary)
Orange:     #C88304  (highlight)
Blue:       #0072af  (accent-cool)
Brown:      #582707  (accent-warm)
```

### Dark Mode Core
```
Purple:     #1E0A5C  (primary)
Violet:     #5A1A9E  (secondary)
Gold:       #E09A1A  (highlight)
Sky Blue:   #54B7EC  (accent-cool)
Coral:      #F07C52  (accent-warm)
```

### Semantic (Adaptive)
```
Success:    #22C55E / #4ADE80
Warning:    #EAB308 / #FACC15
Error:      #EF4444 / #F87171
Info:       #0072af / #54B7EC
```

## Workflows

### Adding a New Color

1. **Update SCSS**
   ```scss
   // In _variables.scss
   $light-brand-colors: (
       // ... existing colors
       new-color: #hexcode,  /* Usage description */
   );
   ```

2. **Update EJS**
   ```javascript
   // In brand_palette.ejs
   const lightMode = [
       // ... existing colors
       { hex: '#hexcode', name: 'new-color', usage: 'Usage description' }
   ];
   ```

3. **Update JSX** (for consistency)
   ```jsx
   // In kjon-brand-palette.jsx
   const lightMode = [
       // ... existing colors
       { hex: '#hexcode', name: 'new-color', usage: 'Usage description' }
   ];
   ```

4. **Test**
   - [ ] View at `/brand`
   - [ ] Check contrast ratios
   - [ ] Verify responsive layout
   - [ ] Update documentation

### Changing an Existing Color

1. Update hex value in all three locations (SCSS, EJS, JSX)
2. Test contrast ratios
3. Search codebase for hardcoded usages: `grep -r "OLD_HEX"`
4. Update and test affected components
5. Document in migration log

### Theme Switching

The system supports runtime theme switching via CSS classes:

```html
<!-- Light mode -->
<body class="light-mode">

<!-- Dark mode -->
<body class="dark-mode">
```

CSS custom properties cascade automatically.

## Development

### Prerequisites
```bash
node >= 14
pnpm >= 8
express >= 4
ejs >= 3
bootstrap >= 5
```

### Setup
```bash
# Install dependencies
pnpm install

# Start dev server
pnpm start

# View brand palette
open http://localhost:3000/brand
```

### Build Process

```bash
# Compile SCSS
pnpm run build

# Watch for changes (with live reload)
pnpm start:local
```

Parcel processes SCSS with these plugins:
- sass
- autoprefixer
- cssnano (production)

## Testing

See [Testing Brand Palette](./testing_brand_palette.md) for complete testing procedures.

### Quick Test
```bash
# Start server
pnpm start

# Check these URLs
- http://localhost:3000/brand         # Brand palette page
- http://localhost:3000/              # Home page (uses colors)
- http://localhost:3000/colorplay     # Color playground
```

### Automated Tests
```bash
# Run brand color validation
pnpm test

# Lighthouse audit
pnpm dlx lighthouse http://localhost:3000/brand --view
```

## Troubleshooting

### Colors not applying
1. Check that SCSS compiles without errors
2. Verify CSS file is linked in `<head>`
3. Check browser DevTools for CSS custom property values
4. Ensure no conflicting inline styles

### Theme switching not working
1. Verify `.light-mode` or `.dark-mode` class on `<body>`
2. Check that both theme files export variables
3. Look for CSS specificity conflicts
4. Test CSS custom property cascade in DevTools

### Bootstrap conflicts
1. Ensure Bootstrap loads before custom CSS
2. Use `!important` sparingly, only when necessary
3. Scope custom classes to avoid collisions
4. Check for utility class typos

## Best Practices

1. **Always use variables, never hardcode colors**
   ```scss
   // ❌ Bad
   .button { background: #150050; }

   // ✅ Good
   .button { background: $primary-color; }
   ```

2. **Prefer CSS custom properties for runtime changes**
   ```scss
   // Use this for theme-aware components
   .button { background: var(--brand-primary); }
   ```

3. **Use semantic tokens for state colors**
   ```scss
   .error { color: var(--semantic-error); }
   .success { color: var(--semantic-success); }
   ```

4. **Document usage in color definitions**
   ```scss
   highlight: #C88304,  /* CTAs, links, emphasis */
   ```

5. **Test contrast ratios for accessibility**
   - Target: WCAG AA (4.5:1 for normal text)
   - Use WebAIM Contrast Checker

## Maintenance

### Weekly
- [ ] Review color usage across site
- [ ] Check for hardcoded hex values
- [ ] Verify theme switching works

### Monthly
- [ ] Run accessibility audit
- [ ] Update documentation if colors change
- [ ] Sync JSX and EJS implementations

### Per Release
- [ ] Full visual regression testing
- [ ] Cross-browser testing
- [ ] Performance audit

## Support

For questions or issues:
1. Check documentation in `design/` folder
2. Review migration log for recent changes
3. Test in isolation at `/brand` route
4. Check console for CSS errors

## Changelog

See [Brand Palette Migration](./brand_palette_migration.md) for detailed changelog.

### 2025-12-08
- ✅ Created EJS/Bootstrap implementation
- ✅ Refactored SCSS variables to single source of truth
- ✅ Added semantic token support
- ✅ Updated naming convention (accent → complementary-accent-warm, etc.)
- ✅ Created comprehensive documentation
- ✅ Added `/brand` route

