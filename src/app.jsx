// Root app — composes sections + Tweaks panel + applies tokens at runtime

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#5b8cff",
  "accentSoft": "#8aaaff",
  "dark": true,
  "displayFont": "Geist",
  "italicFont": "Instrument Serif",
  "showParticles": true,
  "heroVariant": "rotor"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  ["#5b8cff", "#8aaaff"], // electric blue (default)
  ["#00d4ff", "#7eecff"], // cyan
  ["#8b6bff", "#b29bff"], // violet
  ["#c4ff3d", "#dcff8a"], // lime
  ["#ff7a59", "#ffa98f"], // ember
];

const FONT_OPTIONS = [
  "Geist",
  "Bricolage Grotesque",
  "Space Grotesk",
  "Manrope",
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const r = document.documentElement.style;
    const accent = Array.isArray(t.accent) ? t.accent[0] : t.accent;
    const accentSoft = Array.isArray(t.accent) ? t.accent[1] : t.accentSoft;
    r.setProperty("--accent", accent);
    r.setProperty("--accent-soft", accentSoft);
    r.setProperty("--accent-glow", hexToRgba(accent, 0.45));
    r.setProperty("--f-sans", `"${t.displayFont}", "Inter", ui-sans-serif, system-ui, sans-serif`);
    r.setProperty("--f-serif", `"${t.italicFont}", "Times New Roman", serif`);
    document.body.classList.toggle("light", !t.dark);
  }, [t]);

  const currentAccent = Array.isArray(t.accent) ? t.accent : [t.accent, t.accentSoft];

  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Products />
      <Founder />
      <Contact />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakColor
          label="Accent palette"
          value={currentAccent}
          options={ACCENT_OPTIONS}
          onChange={(v) => setTweak({ accent: v[0], accentSoft: v[1] })}
        />
        <TweakToggle
          label="Dark mode"
          value={t.dark}
          onChange={(v) => setTweak("dark", v)}
        />

        <TweakSection label="Typography" />
        <TweakSelect
          label="Display font"
          value={t.displayFont}
          options={FONT_OPTIONS}
          onChange={(v) => setTweak("displayFont", v)}
        />
        <TweakSelect
          label="Italic accent"
          value={t.italicFont}
          options={["Instrument Serif", "Playfair Display", "DM Serif Display"]}
          onChange={(v) => setTweak("italicFont", v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

function hexToRgba(hex, a) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return `rgba(${r},${g},${b},${a})`;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
