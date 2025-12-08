# Global Interaction Patterns

**Last Update:** 2025-12-08

## Philosophy

**Visual hierarchy of interactivity:**
- Orange/Gold (`$highlight-color`) signals "I am clickable"
- Consistent hover, active, and focus states across the entire site
- All interactions driven by SCSS mixins for maintainability

## Available Mixins

All mixins defined in `src/scss/utils/_mixins.scss`

### 1. Button Primary
**Use:** Main call-to-action buttons

```scss
@include button-primary;
```

**Behavior:**
- **Default:** Orange background, white text
- **Hover:** Scale(1.05) + shadow
- **Active:** Scale(1.05) + translateY(2px) + reduced shadow
- **Focus:** Orange outline, 2px offset

**Example:**
```html
<button class="button-primary">Let's talk</button>
```

### 2. Button Secondary
**Use:** Secondary actions

```scss
@include button-secondary;
```

**Behavior:**
- **Default:** Navy background, white text
- **Hover:** Scale(1.05) + shadow
- **Active:** Scale(1.05) + translateY(2px) + reduced shadow
- **Focus:** Navy outline, 2px offset

**Example:**
```html
<button class="button-secondary">Learn more</button>
```

### 3. Link Default
**Use:** Standard text links

```scss
@include link-default;
```

**Behavior:**
- **Default:** Orange color
- **Hover:** Navy color + translateY(-1px)
- **Active:** Indigo color (secondary)
- **Visited:** Indigo color (secondary)
- **Focus:** Orange outline + underline

**Example:**
```html
<a href="/" class="link">Go home</a>
```

### 4. Social Icon
**Use:** Footer social media links

```scss
@include social-icon;
```

**Behavior:**
- **Default:** Burnt sienna color
- **Hover:** White + scale(1.1)
- **Active:** Light blue flash + scale(0.95)
- **Focus:** Orange outline, 4px offset, rounded

**Example:**
```html
<a href="#" class="social-link">
  <i class="fab fa-twitter"></i>
</a>
```

### 5. Card Interactive
**Use:** Clickable cards and containers

```scss
@include card-interactive;
```

**Behavior:**
- **Default:** Normal state
- **Hover:** translateY(-4px) + shadow
- **Active:** translateY(-2px) + shadow
- **Focus:** Orange outline, 4px offset

**Example:**
```html
<div class="project-card">
  <h3>Project Title</h3>
  <p>Description...</p>
</div>
```

### 6. Input Focus
**Use:** Form inputs and textareas

```scss
@include input-focus;
```

**Behavior:**
- **Focus:** Orange border + glow shadow

**Example:**
```scss
input[type="text"] {
  @include input-focus;
}
```

## Color Reference

```scss
$highlight-color: #C88304         // Orange/Gold - "I am clickable"
$primary-color: #150050           // Navy - Hover state, primary actions
$secondary-color: #3f0071         // Indigo - Visited links, secondary
$complementary-accent-cool: #0072af    // Blue - Active flash on social
$complementary-accent-warm: #582707    // Burnt sienna - Social default
$background-color: #F5F3F5        // Off-white - Button text on orange
```

## Implementation Examples

### Purpose Section Buttons
```scss
.button-primary {
  @include button-primary;
}

.button-secondary {
  @include button-secondary;
}
```

### Social Links
```scss
.social-link {
  @include social-icon;
}
```

### Navigation Links
```scss
.nav-link {
  @include link-default;
  font-weight: 600;
}
```

### Project Cards
```scss
.project-card {
  @include card-interactive;
  padding: 2rem;
  border-radius: 0.5rem;
  background: white;
}
```

## Accessibility

All mixins include:
- ✅ Keyboard focus states (`:focus-visible`)
- ✅ Sufficient color contrast (WCAG AA)
- ✅ Clear visual feedback for all states
- ✅ Touch-friendly target sizes (min 44x44px)

## Consistency Rules

1. **NEVER** write custom hover states without using mixins
2. **ALWAYS** use `@include button-primary` or `@include button-secondary` for buttons
3. **ALWAYS** use `@include link-default` for text links
4. **ALWAYS** use `@include social-icon` for footer social icons
5. **ALWAYS** include focus states for keyboard accessibility

## Testing Checklist

Before committing interactive elements:
- [ ] Hover state provides clear feedback
- [ ] Active state is distinct from hover
- [ ] Focus state is visible (keyboard navigation)
- [ ] Visited links are visually distinct
- [ ] Colors meet WCAG AA contrast requirements
- [ ] Touch targets are minimum 44x44px
- [ ] Animations are smooth (0.2s ease)

## Migration Guide

### Old Pattern (Don't Do This)
```scss
.my-button {
  background: orange;
  
  &:hover {
    background: navy;
    transform: scale(1.1);
  }
}
```

### New Pattern (Do This)
```scss
.my-button {
  @include button-primary;
}
```

### Custom Variations
If you need a custom button, extend the mixin:
```scss
.my-special-button {
  @include button-primary;
  // Override specific properties only
  border-radius: 2rem;
  padding: 1rem 2.5rem;
}
```

## Benefits

1. **Consistency:** All interactive elements feel cohesive
2. **Maintainability:** Change once in mixin, update everywhere
3. **Accessibility:** Focus states included by default
4. **Performance:** Reusable CSS, smaller bundle size
5. **Developer Experience:** Clear, semantic mixin names

