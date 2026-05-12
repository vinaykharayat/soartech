// Marquee strip — running keywords in mono

function Marquee() {
  const items = [
    "Product studio",
    "Quick commerce",
    "Sacred journeys",
    "Multi-chain signing",
    "Open source",
    "Price transparency",
    "Adi Kailash · Om Parvat",
    "OpenBao plugin",
    "Made in India",
    "Building in public",
    "Crafted from the himalayas",
    "Soartech · 2025",
  ];
  const row = (
    <div className="item">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <span>{it}</span>
          <span className="star"></span>
        </React.Fragment>
      ))}
    </div>
  );
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}

window.Marquee = Marquee;
