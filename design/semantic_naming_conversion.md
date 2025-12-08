# Semantic Naming Conversion - Brand Palette
**Date:** 2025-12-08

## Overview

Converted the brand palette from Bootstrap utility classes to semantic, self-documenting class names that match the existing kjon.life codebase style.

## Naming Philosophy

> "Classes should tell you what something IS, not what it LOOKS LIKE."

The existing code uses semantic names:
- `gallery-container` not `container mx-auto`
- `image-box` not `col-md-4`
- `text-box` not `p-4 bg-white`
- `video-container` not `position-relative h-100`

## Class Name Conversions

### Container & Layout

| Bootstrap | Semantic | Purpose |
|-----------|----------|---------|
| `container` | `palette-container` | Main container for palette sections |
| `row row-cols-2 row-cols-md-4` | `color-grid` | Grid of color cards |
| `py-5` | `palette-section` | Section wrapper with padding |
| `col` | (grid-child) | Implicit grid items |

### Cards

| Bootstrap | Semantic | Purpose |
|-----------|----------|---------|
| `card` | `color-card` | Individual color swatch card |
| `card-body` | `color-info` | Color information container |
| `card-title` | `color-name` | Color variable name |
| `card-text` | `color-hex`, `color-usage` | Hex value and usage description |

### Typography

| Bootstrap | Semantic | Purpose |
|-----------|----------|---------|
| `display-4 fw-bold` | `h1` (styled) | Page title |
| `lead` | `palette-subtitle` | Subtitle text |
| `h3 fw-semibold` | `h2` (styled) | Section headings |
| `font-monospace small` | `color-hex` (styled) | Monospace hex values |

### Utilities

| Bootstrap | Semantic | Purpose |
|-----------|----------|---------|
| `d-flex` | `color-strip` | Horizontal color bar |
| `flex-fill` | `color-strip-item` | Individual strip segment |
| `rounded` | (inline border-radius) | Rounded corners |
| `shadow-sm` / `shadow-lg` | (inline box-shadow) | Card shadows |

## New Semantic Classes

### Section Classes
```scss
.palette-section       // Wrapper for each major section
  .light-section       // Light mode background
  .dark-section        // Dark mode background
  .semantic-section    // Semantic tokens background
  .code-section        // SCSS code background
```

### Color Classes
```scss
.color-grid            // 2-col mobile, 4-col desktop grid
.color-card            // Individual color display card
.color-preview         // Top color swatch area
.color-info            // Bottom text information area
  .color-name          // Variable name (e.g., "primary")
  .color-hex           // Hex value (e.g., "#150050")
  .color-usage         // Usage description
```

### Semantic Token Classes
```scss
.semantic-card         // Semantic token card
.semantic-preview      // Split light/dark preview
  .semantic-half       // Half of the split (light or dark)
.semantic-info         // Token information
```

### Strip Classes
```scss
.color-strip           // Horizontal color bar
.color-strip-item      // Individual color segment
```

### Code Classes
```scss
.code-block            // SCSS code display area
```

## Responsive Behavior

### Grid Breakpoints
```scss
// Mobile (< 768px)
.color-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

// Desktop (≥ 768px)
@include tablet-horizontal {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
}
```

### Using Existing Mixins
The SCSS uses your project's responsive mixins:
- `@include tablet-horizontal` - for larger screens
- `@include smartphone-vertical` - for mobile adjustments

No Bootstrap breakpoint classes (`row-cols-md-4`, etc.)

## Comparison: Before & After

### Before (Bootstrap)
```html
<div class="container">
  <div class="row row-cols-2 row-cols-md-4 g-4">
    <div class="col">
      <div class="card shadow-sm border-0">
        <div class="card-body p-3">
          <h6 class="card-title fw-semibold">text-primary</h6>
          <p class="card-text font-monospace small">#1b1b1b</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

### After (Semantic)
```html
<div class="palette-container">
  <div class="color-grid">
    <div class="color-card">
      <div class="color-preview"></div>
      <div class="color-info">
        <h3 class="color-name">text-primary</h3>
        <p class="color-hex">#1b1b1b</p>
        <p class="color-usage">Primary text, headings</p>
      </div>
    </div>
  </div>
</div>
```

## Benefits of Semantic Naming

### 1. **Readability**
```html
<!-- Bootstrap: What does this do? -->
<div class="row row-cols-2 row-cols-md-4 g-4 mb-4">

<!-- Semantic: Obvious what this is -->
<div class="color-grid">
```

### 2. **Maintainability**
```scss
// Bootstrap: Scattered utility classes in HTML
<div class="p-3 bg-primary text-white rounded shadow-sm">

// Semantic: Centralized styling in SCSS
.color-card {
    padding: 1rem;
    background: $primary-color;
    color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### 3. **Consistency**
Your entire codebase uses semantic naming:
- `cards-container`, `featured-card`
- `gallery-container`, `image-box`
- `video-container`, `overlay`
- `palette-container`, `color-card` ✅

### 4. **Searchability**
```bash
# Find all color cards
grep -r "color-card" views/

# vs. finding all Bootstrap cards (too many false positives)
grep -r "card" views/
```

### 5. **Self-Documentation**
```html
<!-- What are we looking at? -->
<div class="semantic-card">
  <div class="semantic-preview">
    <div class="semantic-half light"></div>
    <div class="semantic-half dark"></div>
  </div>
  <div class="semantic-info">
    <!-- Instantly understand: light/dark preview of semantic token -->
  </div>
</div>
```

## SCSS Structure

All styles defined in one place:
```
src/scss/pages/_brand.scss
```

Imported in main.scss:
```scss
@use 'pages/brand';
```

No scattered utility classes in HTML templates.

## Naming Conventions Used

Following your existing patterns:

### Container Suffix
```scss
.palette-container   // Like gallery-container, cards-container
.video-container     // Existing pattern
```

### Box/Card Suffix
```scss
.color-card          // Like image-box, text-box
.semantic-card       // Card variant
```

### Info Suffix
```scss
.color-info          // Information container
.semantic-info       // Semantic token info
```

### Section Suffix
```scss
.palette-section     // Major section wrapper
.light-section       // Section variant
```

### Grid/Group Pattern
```scss
.color-grid          // Like your existing 'group' class
```

## Future Additions

When adding new palette features, follow the pattern:

```html
<!-- New gradient section -->
<div class="palette-section gradient-section">
  <div class="palette-container">
    <h2>Gradients</h2>
    <div class="gradient-grid">
      <div class="gradient-card">
        <div class="gradient-preview"></div>
        <div class="gradient-info">
          <h3 class="gradient-name">sunset</h3>
          <p class="gradient-stops">3 stops</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

Corresponding SCSS:
```scss
.gradient-section { /* ... */ }
.gradient-grid { /* ... */ }
.gradient-card { /* ... */ }
.gradient-preview { /* ... */ }
.gradient-info { /* ... */ }
```

## Key Takeaway

Bootstrap classes describe **HOW things look** (`p-3`, `d-flex`, `shadow-sm`)  
Our semantic classes describe **WHAT things are** (`color-card`, `palette-container`, `semantic-preview`)
