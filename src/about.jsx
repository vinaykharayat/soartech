// About — editorial lead + numbered principles

function About() {
  const principles = [
    {
      h: "User-first, always",
      p: "We design for the person at the other end of the screen. Every flow is interrogated until friction disappears."
    },
    {
      h: "Transparent by default",
      p: "Hidden prices, hidden fees, hidden trade-offs — none of it. Our products surface what matters and skip what doesn't."
    },
    {
      h: "Quietly ambitious",
      p: "Small team, sharp ideas. We'd rather ship one thoughtful product than five rushed ones."
    },
    {
      h: "Built where we live",
      p: "Crafted from Pithoragarh, Uttarakhand — for the millions of Indians shopping, paying, and living online today."
    },
  ];

  return (
    <section className="shell about" id="approach" data-screen-label="Approach">
      <div className="inner">
        <div className="about-grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 32 }}>
              <span style={{ display: "inline-block", width: 28, height: 1, background: "var(--accent)", marginRight: 12, verticalAlign: "middle" }}></span>
              Approach
            </div>
            <p className="about-lead">
              Technology should feel <em>obvious in hindsight</em> — like the answer was always there,
              waiting for someone to bother building it. That's the bar we hold ourselves to.
              Every product Soartech ships starts from a small, real frustration in someone's day.
            </p>
          </div>

          <div className="about-side">
            {principles.map((pr, i) => (
              <div className="principle" key={i}>
                <div className="num">0{i + 1}</div>
                <div>
                  <h4>{pr.h}</h4>
                  <p>{pr.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
