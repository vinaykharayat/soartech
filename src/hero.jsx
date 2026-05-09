// Hero — kinetic editorial type with rotating italic word + ambient orb + drifting particles

function Hero() {
  const words = ["product", "moment", "rupee", "click", "idea"];
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, []);

  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <section className="hero" id="home" data-screen-label="Hero">
      <div className="grid-bg"></div>
      <div className="hero-orb"></div>
      <Particles count={18} />

      <div className="inner" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-eyebrow">
          <span className="bar"></span>
          <span className="eyebrow">Soartech &nbsp;·&nbsp; Product studio &nbsp;·&nbsp; est. 2025</span>
        </div>

        <h1>
          <span className="line">Innovating the future,</span>
          <span className="line">
            one&nbsp;
            <span
              className="rotor serif-i"
              style={{
                width: `${longest.length * 0.52}em`,
              }}
            >
              <span
                className="rotor-track"
                style={{ transform: `translateY(-${idx * 1.05}em)` }}
              >
                {words.map((w, i) => (
                  <span key={i} className="rotor-word serif-i">{w}</span>
                ))}
              </span>
            </span>
            &nbsp;at a time.
          </span>
        </h1>

        <p className="hero-sub">
          We build transformative consumer products from the foothills of Uttarakhand.
          Soft-launched in 2025 with one product live and more in the works —
          quietly shipping things that simplify everyday life.
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            See our work
            <span className="arr">→</span>
          </a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </div>

        <div className="hero-meta">
          <div className="cell">
            <div className="k">Live products</div>
            <div className="v">01 / ShopSwiftly</div>
          </div>
          <div className="cell">
            <div className="k">Founded</div>
            <div className="v">2025 · Pithoragarh, IN</div>
          </div>
          <div className="cell">
            <div className="k">Focus</div>
            <div className="v">Quick commerce, fintech, daily life</div>
          </div>
          <div className="cell">
            <div className="k">Status</div>
            <div className="v" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span className="dot-live"></span>
              Building in public
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Particles({ count = 14 }) {
  const items = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        left: Math.random() * 100,
        bottom: -10,
        delay: Math.random() * 18,
        duration: 14 + Math.random() * 18,
        scale: 0.6 + Math.random() * 1.4,
      });
    }
    return arr;
  }, [count]);

  return (
    <div className="hero-particles">
      {items.map((p, i) => (
        <span
          key={i}
          style={{
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `scale(${p.scale})`,
          }}
        />
      ))}
    </div>
  );
}

window.Hero = Hero;
