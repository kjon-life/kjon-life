export default function KjonBrandPalette() {
  const lightMode = [
    { hex: '#1b1b1b', name: 'text-primary', usage: 'Primary text, headings' },
    { hex: '#333333', name: 'text-secondary', usage: 'Body text, captions' },
    { hex: '#F5F3F5', name: 'background', usage: 'Main page background' },
    { hex: '#150050', name: 'primary', usage: 'Brand anchor, nav, buttons' },
    { hex: '#3f0071', name: 'secondary', usage: 'Hover states, accents' },
    { hex: '#C88304', name: 'highlight', usage: 'CTAs, links, emphasis' },
    { hex: '#0072af', name: 'accent-cool', usage: 'Info states, secondary actions' },
    { hex: '#582707', name: 'accent-warm', usage: 'Alerts, warnings' },
  ];

  const darkMode = [
    { hex: '#F5F3F5', name: 'text-primary', usage: 'Primary text, headings' },
    { hex: '#B8B5B8', name: 'text-secondary', usage: 'Body text, captions' },
    { hex: '#0D0D12', name: 'background', usage: 'Main page background' },
    { hex: '#1E0A5C', name: 'primary', usage: 'Brand anchor, surfaces' },
    { hex: '#5A1A9E', name: 'secondary', usage: 'Elevated surfaces, accents' },
    { hex: '#E09A1A', name: 'highlight', usage: 'CTAs, links, emphasis' },
    { hex: '#54B7EC', name: 'accent-cool', usage: 'Info states, secondary actions' },
    { hex: '#F07C52', name: 'accent-warm', usage: 'Alerts, attention' },
  ];

  const semanticTokens = [
    { light: '#22C55E', dark: '#4ADE80', name: 'success', usage: 'Success states' },
    { light: '#EAB308', dark: '#FACC15', name: 'warning', usage: 'Warning states' },
    { light: '#EF4444', dark: '#F87171', name: 'error', usage: 'Error states' },
    { light: '#0072af', dark: '#54B7EC', name: 'info', usage: 'Info states' },
  ];

  const getTextColor = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? '#150050' : '#F5F3F5';
  };

  return (
    <div className="min-h-screen">
      {/* Light Mode Section */}
      <div className="p-8" style={{ backgroundColor: '#F5F3F5' }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-1" style={{ color: '#150050' }}>{'{k}'} Brand System</h1>
          <p className="mb-6" style={{ color: '#C88304' }}>kjon.life · Functional palette</p>
          
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#150050' }}>Light Mode</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {lightMode.map((color) => (
              <div
                key={color.name}
                className="rounded-lg overflow-hidden shadow-md"
                style={{ backgroundColor: color.hex }}
              >
                <div className="h-16" />
                <div 
                  className="p-3 text-sm"
                  style={{ 
                    color: getTextColor(color.hex),
                    backgroundColor: color.hex 
                  }}
                >
                  <p className="font-semibold">{color.name}</p>
                  <p className="font-mono text-xs opacity-80">{color.hex}</p>
                  <p className="text-xs mt-1 opacity-70">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex rounded-lg overflow-hidden shadow-md h-12 mb-8">
            {lightMode.map((color) => (
              <div
                key={color.hex}
                className="flex-1"
                style={{ backgroundColor: color.hex }}
                title={`${color.name}: ${color.hex}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Dark Mode Section */}
      <div className="p-8" style={{ backgroundColor: '#0D0D12' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#F5F3F5' }}>Dark Mode</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {darkMode.map((color) => (
              <div
                key={color.name}
                className="rounded-lg overflow-hidden shadow-lg"
                style={{ backgroundColor: color.hex }}
              >
                <div className="h-16" />
                <div 
                  className="p-3 text-sm"
                  style={{ 
                    color: getTextColor(color.hex),
                    backgroundColor: color.hex 
                  }}
                >
                  <p className="font-semibold">{color.name}</p>
                  <p className="font-mono text-xs opacity-80">{color.hex}</p>
                  <p className="text-xs mt-1 opacity-70">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex rounded-lg overflow-hidden shadow-lg h-12 mb-8">
            {darkMode.map((color) => (
              <div
                key={color.hex}
                className="flex-1"
                style={{ backgroundColor: color.hex }}
                title={`${color.name}: ${color.hex}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Semantic Tokens */}
      <div className="p-8" style={{ backgroundColor: '#150050' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#F5F3F5' }}>Semantic Tokens</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {semanticTokens.map((token) => (
              <div key={token.name} className="rounded-lg overflow-hidden shadow-lg bg-white/10">
                <div className="flex h-16">
                  <div className="flex-1" style={{ backgroundColor: token.light }} />
                  <div className="flex-1" style={{ backgroundColor: token.dark }} />
                </div>
                <div className="p-3 text-sm" style={{ color: '#F5F3F5' }}>
                  <p className="font-semibold">{token.name}</p>
                  <p className="font-mono text-xs opacity-70">L: {token.light} / D: {token.dark}</p>
                  <p className="text-xs mt-1 opacity-60">{token.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SCSS Export Reference */}
      <div className="p-8" style={{ backgroundColor: '#1b1b1b' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#C88304' }}>SCSS Variables</h2>
          <pre className="text-xs overflow-x-auto p-4 rounded-lg" style={{ backgroundColor: '#0D0D12', color: '#F5F3F5' }}>
{`// Light Mode
$light-brand-colors: (
  text-primary: #1b1b1b,
  text-secondary: #333333,
  background: #F5F3F5,
  primary: #150050,
  secondary: #3f0071,
  highlight: #C88304,
  accent-cool: #0072af,
  accent-warm: #582707
);

// Dark Mode
$dark-brand-colors: (
  text-primary: #F5F3F5,
  text-secondary: #B8B5B8,
  background: #0D0D12,
  primary: #1E0A5C,
  secondary: #5A1A9E,
  highlight: #E09A1A,
  accent-cool: #54B7EC,
  accent-warm: #F07C52
);

// Semantic (mode-aware)
$semantic-colors: (
  success: (light: #22C55E, dark: #4ADE80),
  warning: (light: #EAB308, dark: #FACC15),
  error: (light: #EF4444, dark: #F87171),
  info: (light: #0072af, dark: #54B7EC)
);`}
          </pre>
        </div>
      </div>
    </div>
  );
}
