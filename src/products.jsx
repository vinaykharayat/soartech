// Products / ShopSwiftly — animated phone with live price comparison

function Products() {
  // The catalog — items the search field cycles through
  const catalog = [
    {
      query: "Onions 1kg",
      emoji: "🧅",
      qty: "1 kg",
      prices: { instamart: 49, blinkit: 42, zepto: 45, bigbasket: 47 },
    },
    {
      query: "Amul milk 1L",
      emoji: "🥛",
      qty: "1 litre · Amul Gold",
      prices: { instamart: 78, blinkit: 76, zepto: 79, bigbasket: 74 },
    },
    {
      query: "Maggi noodles",
      emoji: "🍜",
      qty: "Pack of 12 · 70g each",
      prices: { instamart: 168, blinkit: 162, zepto: 156, bigbasket: 159 },
    },
    {
      query: "Bananas 1 dozen",
      emoji: "🍌",
      qty: "Robusta · 1 dozen",
      prices: { instamart: 64, blinkit: 58, zepto: 60, bigbasket: 55 },
    },
    {
      query: "Tomatoes 500g",
      emoji: "🍅",
      qty: "500 g · hybrid",
      prices: { instamart: 32, blinkit: 28, zepto: 34, bigbasket: 30 },
    },
  ];

  const [step, setStep] = React.useState(0);
  const item = catalog[step % catalog.length];

  React.useEffect(() => {
    const id = setInterval(() => setStep(s => s + 1), 3400);
    return () => clearInterval(id);
  }, []);

  // figure out best (lowest) price
  const merchants = [
    { key: "instamart", name: "Instamart", initial: "I", color: "#fc8019" },
    { key: "blinkit",   name: "Blinkit",   initial: "B", color: "#f8cd1c" },
    { key: "zepto",     name: "Zepto",     initial: "Z", color: "#7c2cf0" },
    { key: "bigbasket", name: "BigBasket", initial: "G", color: "#84c225" },
  ];
  const best = Object.entries(item.prices).reduce(
    (a, [k, v]) => (v < a.v ? { k, v } : a),
    { k: "", v: Infinity }
  );
  const max = Math.max(...Object.values(item.prices));
  const savePct = Math.round(((max - best.v) / max) * 100);

  return (
    <section className="shell products" id="work" data-screen-label="Work">
      <div className="inner">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span style={{ display: "inline-block", width: 28, height: 1, background: "var(--accent)", marginRight: 12, verticalAlign: "middle" }}></span>
              Flagship product
            </div>
            <h2>
              One product, <em>shipped.</em><br/>
              Many more <em>on the workbench.</em>
            </h2>
          </div>
            <div className="meta">
              ShopSwiftly<br/>
              v0.9 · Beta<br/>
              India only
            </div>
        </div>

        <div className="shop-showcase">
          {/* phone mockup */}
          <div className="phone-wrap">
            <Phone item={item} merchants={merchants} bestKey={best.k} savePct={savePct} />
          </div>

          {/* product description */}
          <div className="shop-side">
            <div className="shop-tag">
              <span className="badge">● Available now</span>
              <span>iOS · Android · Beta</span>
            </div>

            <h3 className="shop-name">
              ShopSwiftly <em>—</em><br/>
              one search,<br/>
              every <em>quick-commerce</em><br/>
              app.
            </h3>

            <p className="shop-blurb">
              The smart shopping companion that compares prices across India's biggest
              quick-commerce apps in one tap. We do the math; you save the rupees —
              groceries and essentials, side-by-side, without bouncing between four apps.
            </p>

            <div className="shop-pills">
              <span className="pill">Instant price compare</span>
              <span className="pill">Location-aware</span>
              <span className="pill">Quick search</span>
              <span className="pill">Price-drop alerts</span>
              <span className="pill">No hidden fees</span>
            </div>

            <div className="shop-merchants">
              <div className="head">
                <span>Connected merchants</span>
                <span>4 / 4 live</span>
              </div>
              {merchants.map(m => (
                <div className="merch-card" key={m.key}>
                  <div className="nm" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{
                      width: 16, height: 16, borderRadius: 4,
                      background: m.color,
                      display: "inline-grid", placeItems: "center",
                      fontSize: 9, fontWeight: 700, color: "#fff",
                      fontFamily: "var(--f-mono)"
                    }}>{m.initial}</span>
                    {m.name}
                  </div>
                  <div className="desc">live · synced</div>
                </div>
              ))}
            </div>

            <div className="shop-stats">
              <div className="cell">
                <div className="num">~<em>22%</em></div>
                <div className="lbl">avg savings per cart</div>
              </div>
              <div className="cell">
                <div className="num"><em>4</em></div>
                <div className="lbl">merchants compared</div>
              </div>
              <div className="cell">
                <div className="num">&lt;<em>2s</em></div>
                <div className="lbl">to find best price</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Phone({ item, merchants, bestKey, savePct }) {
  // typewriter effect on the search query
  const [typed, setTyped] = React.useState("");
  React.useEffect(() => {
    setTyped("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(item.query.slice(0, i));
      if (i >= item.query.length) clearInterval(id);
    }, 60);
    return () => clearInterval(id);
  }, [item.query]);

  return (
    <div className="phone">
      <div className="phone-screen">
        <div className="phone-statusbar">
          <span>9:41</span>
          <span className="icons">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><path d="M2 7h2v2H2zM5 5h2v4H5zM8 3h2v6H8zM11 1h2v8h-2z"/></svg>
            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" stroke="currentColor" strokeWidth="1"><rect x="0.5" y="3" width="9" height="6" rx="1"/><rect x="10.5" y="5" width="2" height="2" rx="0.4" fill="currentColor"/></svg>
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" stroke="currentColor" strokeWidth="1"><rect x="0.5" y="0.5" width="17" height="9" rx="2"/><rect x="2" y="2" width="14" height="6" rx="1" fill="currentColor"/><rect x="18" y="3.5" width="1.5" height="3" rx="0.5" fill="currentColor"/></svg>
          </span>
        </div>

        <div className="phone-app-head">
          <div className="logo">
            <span className="swift-mark">S</span>
            ShopSwiftly
          </div>
          <div className="avatar">VK</div>
        </div>

        <div className="phone-search">
          <span className="icon">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="6" cy="6" r="4.5"/><line x1="9.5" y1="9.5" x2="13" y2="13"/></svg>
          </span>
          <span className="typed-product">{typed}</span>
          <span className="caret"></span>
        </div>

        <div className="phone-result">
          <div className="phone-result-head">
            <div className="thumb">{item.emoji}</div>
            <div>
              <div className="name">{item.query}</div>
              <div className="qty">{item.qty}</div>
            </div>
            {savePct > 0 && (
              <div className="save">SAVE {savePct}%</div>
            )}
          </div>

          <div className="phone-merchants">
            {merchants.map(m => {
              const price = item.prices[m.key];
              const isBest = m.key === bestKey;
              return (
                <div className={"phone-merch" + (isBest ? " best" : "")} key={m.key}>
                  <span className="logo-pill" style={{ background: m.color }}>
                    {m.initial}
                  </span>
                  <span className="name">{m.name}</span>
                  <span className="price">₹{price}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="phone-cta">
          <span>Open in {merchants.find(m => m.key === bestKey)?.name}</span>
          <span className="arr">→</span>
        </div>
      </div>
    </div>
  );
}

window.Products = Products;
