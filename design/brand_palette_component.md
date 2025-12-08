# Brand Palette Component  
**Last Update:** 2025-12-08

## Overview

The brand palette component displays the complete kjon.life color system in an interactive, visual format. Available in two implementations: React/JSX (for external use) and EJS (for the main site).

## Implementations

### 1. JSX Component (External)
- **File:** `public/brand/kjon-brand-palette.jsx`
- **Styling:** Tailwind CSS
- **Purpose:** Standalone component for external documentation, React apps

### 2. EJS Partial (Internal)
- **File:** `views/partials/brand_palette.ejs`
- **Page:** `views/brand.ejs`
- **Route:** `/brand`
- **Styling:** Custom SCSS (`src/scss/pages/_brand.scss`)
- **Purpose:** Integrated into kjon.life site

## Structure

Both implementations display four sections:

### Section 1: Light Mode Palette
- 8 color swatches in responsive grid (2 cols mobile, 4 cols desktop)
- Each card shows:
  - Color preview (4rem height)
  - Variable name (e.g., `text-primary`)
  - Hex value (e.g., `#1b1b1b`)
  - Usage description (e.g., "Primary text, headings")
- Color strip showing all colors in sequence

### Section 2: Dark Mode Palette
- Same structure as light mode
- 8 color swatches with dark theme values
- Color strip visualization

### Section 3: Semantic Tokens
- 4 state color cards (success, warning, error, info)
- Split preview showing light/dark variants side-by-side
- Hex values for both modes

### Section 4: SCSS Variables Reference
- Syntax-highlighted code block
- Copy-ready SCSS variable definitions
- Shows both light and dark maps
- Includes semantic token definitions

## Responsive Behavior

### Semantic CSS (EJS) Version

| Breakpoint | Columns | Gap |
|------------|---------|-----|
| < 768px (mobile) | 2 | 1rem |
| ≥ 768px (tablet/desktop) | 4 | 1.5rem |

Classes used:
- `.color-grid` - CSS Grid with responsive columns
- `@include tablet-horizontal` - Project's standard responsive mixin

### Tailwind (JSX) Version

- `grid-cols-2` - 2 columns base
- `md:grid-cols-4` - 4 columns at md breakpoint (768px+)
- `gap-4` - 1rem spacing

## Semantic Classes Reference

### Layout
```
palette-section     - Section wrapper with padding
palette-container   - Max-width responsive container
color-grid          - CSS Grid (2 cols mobile, 4 cols desktop)
```

### Components
```
color-card          - Individual color swatch card
color-preview       - Top color display area
color-info          - Bottom text information area
semantic-card       - Semantic token card
semantic-preview    - Split light/dark preview
semantic-half       - Half of semantic preview
semantic-info       - Semantic token information
```

### Typography
```
color-name          - Variable name heading
color-hex           - Hex value (monospace)
color-usage         - Usage description
palette-subtitle    - Section subtitle
```

### Utilities
```
color-strip         - Horizontal color bar
color-strip-item    - Individual strip segment
code-block          - SCSS code display
light-section       - Light background section
dark-section        - Dark background section
semantic-section    - Semantic token section
code-section        - Code display section
```

## Color Data

### Light Mode Array
```javascript
const lightMode = [
  { hex: '#1b1b1b', name: 'text-primary', usage: 'Primary text, headings' },
  { hex: '#333333', name: 'text-secondary', usage: 'Body text, captions' },
  { hex: '#F5F3F5', name: 'background', usage: 'Main page background' },
  { hex: '#150050', name: 'primary', usage: 'Brand anchor, nav, buttons' },
  { hex: '#3f0071', name: 'secondary', usage: 'Hover states, accents' },
  { hex: '#C88304', name: 'highlight', usage: 'CTAs, links, emphasis' },
  { hex: '#0072af', name: 'accent-cool', usage: 'Info states, secondary actions' },
  { hex: '#582707', name: 'accent-warm', usage: 'Alerts, warnings' }
];
```

### Dark Mode Array
```javascript
const darkMode = [
  { hex: '#F5F3F5', name: 'text-primary', usage: 'Primary text, headings' },
  { hex: '#B8B5B8', name: 'text-secondary', usage: 'Body text, captions' },
  { hex: '#0D0D12', name: 'background', usage: 'Main page background' },
  { hex: '#1E0A5C', name: 'primary', usage: 'Brand anchor, surfaces' },
  { hex: '#5A1A9E', name: 'secondary', usage: 'Elevated surfaces, accents' },
  { hex: '#E09A1A', name: 'highlight', usage: 'CTAs, links, emphasis' },
  { hex: '#54B7EC', name: 'accent-cool', usage: 'Info states, secondary actions' },
  { hex: '#F07C52', name: 'accent-warm', usage: 'Alerts, attention' }
];
```

### Semantic Tokens Array
```javascript
const semanticTokens = [
  { light: '#22C55E', dark: '#4ADE80', name: 'success', usage: 'Success states' },
  { light: '#EAB308', dark: '#FACC15', name: 'warning', usage: 'Warning states' },
  { light: '#EF4444', dark: '#F87171', name: 'error', usage: 'Error states' },
  { light: '#0072af', dark: '#54B7EC', name: 'info', usage: 'Info states' }
];
```

## Helper Functions

### Text Color Calculator
Determines appropriate text color (light/dark) based on background luminance:

```javascript
function getTextColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#150050' : '#F5F3F5';
}
```

Uses relative luminance formula (ITU-R BT.709):
- Luminance > 0.5 → Use dark text (#150050)
- Luminance ≤ 0.5 → Use light text (#F5F3F5)

## Usage

### Viewing the Palette
```bash
# Start the server
pnpm start

# Navigate to
http://localhost:3000/brand
```

### Including in Other Pages
```ejs
<!-- In any EJS view -->
<%- include('partials/brand_palette') %>
```

### Customizing Colors
1. Update color arrays in `views/partials/brand_palette.ejs`
2. Update corresponding SCSS variables in `src/scss/base/_variables.scss`
3. Keep JSX version in sync: `public/brand/kjon-brand-palette.jsx`

## Maintenance

### Adding a New Color
1. Add to appropriate array (lightMode/darkMode/semanticTokens)
2. Update SCSS variable maps
3. Test contrast ratios for accessibility
4. Update this documentation

### Changing a Color
1. Update hex value in EJS partial
2. Update SCSS variable
3. Update JSX component for consistency
4. Verify `getTextColor()` provides adequate contrast
5. Test across all breakpoints

## Accessibility

- All text passes WCAG AA contrast requirements
- Responsive grid adapts to screen readers
- Color names provided as `title` attributes on color strips
- Semantic HTML structure (h1, h2, section, etc.)

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid support required
- Flexbox support required
- No IE11 support (uses CSS custom properties)

