# Testing Brand Palette Component

## Quick Start

```bash
# Start the development server
pnpm start

# Navigate to the brand palette
open http://localhost:3000/brand
```

## Visual Verification Checklist

### Desktop (≥ 768px)
- [ ] Light mode section displays 4 columns of color cards
- [ ] Dark mode section displays 4 columns of color cards
- [ ] Semantic tokens display 4 columns
- [ ] Color strips display all colors in horizontal row
- [ ] Text is readable on all color backgrounds
- [ ] Card shadows are visible and appropriate
- [ ] SCSS code block is syntax highlighted and readable

### Tablet (768px - 1024px)
- [ ] Layout maintains 4 column grid
- [ ] Cards resize appropriately
- [ ] Text remains readable at reduced sizes
- [ ] Spacing feels balanced

### Mobile (< 768px)
- [ ] Light mode section displays 2 columns
- [ ] Dark mode section displays 2 columns
- [ ] Semantic tokens display 2 columns
- [ ] Color names don't wrap awkwardly
- [ ] Cards stack properly
- [ ] Touch targets are adequate (44px minimum)

## Browser Testing

Test in the following browsers:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## Color Accuracy

Compare rendered colors with source:

### Light Mode
```
text-primary:  #1b1b1b (almost black)
text-secondary: #333333 (dark gray)
background:    #F5F3F5 (off-white)
primary:       #150050 (navy blue)
secondary:     #3f0071 (indigo)
highlight:     #C88304 (orange)
accent-cool:   #0072af (blue)
accent-warm:   #582707 (brown)
```

### Dark Mode
```
text-primary:  #F5F3F5 (off-white)
text-secondary: #B8B5B8 (light gray)
background:    #0D0D12 (near black)
primary:       #1E0A5C (dark purple)
secondary:     #5A1A9E (purple)
highlight:     #E09A1A (gold)
accent-cool:   #54B7EC (light blue)
accent-warm:   #F07C52 (coral)
```

Use DevTools color picker to verify hex values.

## Contrast Testing

All text should meet WCAG AA standards (4.5:1 for normal text):

| Background | Text Color | Expected |
|------------|------------|----------|
| #1b1b1b | #F5F3F5 | High contrast ✓ |
| #F5F3F5 | #150050 | High contrast ✓ |
| #150050 | #F5F3F5 | High contrast ✓ |
| #0D0D12 | #F5F3F5 | High contrast ✓ |

Use browser DevTools or [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

## Responsive Testing

### Chrome DevTools
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
3. Test these presets:
   - iPhone SE (375px)
   - iPad (768px)
   - iPad Pro (1024px)
   - Desktop (1920px)

### Manual Resize
1. Open browser window
2. Gradually resize from 320px → 1920px
3. Watch for:
   - Layout shifts at 768px breakpoint
   - Text wrapping issues
   - Card size changes
   - Spacing consistency

## Cross-Implementation Testing

Compare EJS and JSX versions side-by-side:

1. **EJS Version:** `http://localhost:3000/brand`
2. **JSX Version:** Open `public/brand/kjon-brand-palette.jsx` in React app

Verify:
- [ ] Same hex values
- [ ] Same color names
- [ ] Same usage descriptions
- [ ] Similar visual appearance
- [ ] Consistent section ordering

## Performance Testing

### Load Time
```bash
# Lighthouse audit
pnpm dlx lighthouse http://localhost:3000/brand --view
```

Expected metrics:
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

### Bundle Size
Check that EJS partial doesn't bloat page size:
- Open Network tab in DevTools
- Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
- Verify total page size < 500KB

## Accessibility Testing

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus states are visible
- [ ] No keyboard traps

### Screen Reader Testing
Test with:
- macOS: VoiceOver (Cmd+F5)
- Windows: NVDA or JAWS
- Check:
  - [ ] Headings announce correctly
  - [ ] Color names are read
  - [ ] Section structure is clear

### Automated Tools
```bash
# Run accessibility audit
pnpm dlx lighthouse http://localhost:3000/brand --only-categories=accessibility --view
```

Target: 100 accessibility score

## Common Issues

### Issue: Colors don't match
**Solution:** Check that inline styles are correctly applied. EJS string interpolation should output raw hex values.

### Issue: 2-column layout on desktop
**Solution:** Verify Bootstrap is loaded. Check that `row-cols-md-4` class is applied.

### Issue: Text unreadable on some backgrounds
**Solution:** Verify `getTextColor()` function is calculating correctly. Check luminance threshold (0.5).

### Issue: SCSS code block not formatted
**Solution:** Ensure `<pre><code>` tags are used. Check that newlines are preserved.

## Integration Testing

### Include in Other Pages
Test that partial works when included elsewhere:

```ejs
<!-- Create test page -->
<%- include('partials/brand_palette') %>
```

Verify:
- [ ] No styling conflicts
- [ ] No JavaScript errors
- [ ] Layout remains intact
- [ ] Page scrolls smoothly

## Reporting Issues

When reporting a bug, include:
1. Browser and version
2. Screen size / device
3. Screenshot showing the issue
4. Console errors (if any)
5. Steps to reproduce

Example:
```
Browser: Chrome 120.0
Device: iPhone 13 Pro (390x844)
Issue: Color cards overlap on portrait mode
Steps: Navigate to /brand, view on mobile
Console: No errors
Screenshot: [attached]
```

