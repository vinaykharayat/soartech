// More work — compact two-up cards for MultiChainSign + Finding Kailash.
// Sits below the ShopSwiftly flagship spread.

function MoreWork() {
  return (
    <section className="shell more-work" id="more-work" data-screen-label="MoreWork">
      <div className="inner">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span style={{ display: "inline-block", width: 28, height: 1, background: "var(--accent)", marginRight: 12, verticalAlign: "middle" }}></span>
              Also from the studio
            </div>
            <h2>
              An open-source <em>vault</em>,<br/>
              and a brand for the <em>Himalayas</em>.
            </h2>
          </div>
          <div className="meta">
            01 own product<br/>
            01 client engagement<br/>
            Both shipped · 2025
          </div>
        </div>

        <div className="mw-grid">
          <MultiChainSignCard />
          <FindingKailashCard />
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────── */

function MultiChainSignCard() {
  const chains = [
    { key: "eth", name: "Ethereum", color: "#627eea" },
    { key: "btc", name: "Bitcoin",  color: "#f7931a" },
    { key: "sol", name: "Solana",   color: "#9945ff" },
    { key: "tron", name: "Tron",    color: "#ef0027" },
  ];
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive(a => (a + 1) % chains.length), 2400);
    return () => clearInterval(id);
  }, [paused, chains.length]);

  return (
    <a
      href="https://github.com/vinaykharayat/vault-plugin-secrets-multichainsign"
      target="_blank"
      rel="noopener noreferrer"
      className="work-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="work-card-visual mcs-mini-visual">
        <div className="mcs-mini-glow"></div>
        <div className="mcs-mini">
          <div className="mcs-mini-bar">
            <span className="lights">
              <span style={{ background: "#ff5f57" }}></span>
              <span style={{ background: "#febc2e" }}></span>
              <span style={{ background: "#28c840" }}></span>
            </span>
            <span className="title">signer · openbao</span>
            <span className="seal">
              <span className="dot-live" style={{ width: 5, height: 5 }}></span>
              sealed
            </span>
          </div>
          <div className="mcs-mini-tabs">
            {chains.map((c, i) => (
              <span
                key={c.key}
                className={"mt-tab" + (i === active ? " active" : "")}
                style={i === active ? { borderTopColor: c.color } : {}}
              >
                <span className="dotc" style={{ background: c.color }}></span>
                {c.name}
              </span>
            ))}
          </div>
          <div className="mcs-mini-body">
            <div className="mt-line">
              <span className="prompt">$</span>
              <span className="cmd">bao write signer/hd/{chains[active].key}/sign</span>
            </div>
            <div className="mt-line dim">
              <span className="indent" /><span className="cmd">path=&quot;m/44'/{chains[active].key === 'btc' ? '0' : chains[active].key === 'sol' ? "501'" : chains[active].key === 'tron' ? '195' : '60'}'/0'/0/0&quot;</span>
            </div>
            <div className="mt-out">
              <div><span className="k">chain</span><span className="v">{chains[active].name.toLowerCase()}</span></div>
              <div><span className="k">tx_hash</span><span className="v">0xc8a4…e7f1</span></div>
              <div><span className="k">signed</span><span className="v" style={{ color: "var(--good)" }}>✓ key zeroed</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="work-card-body">
        <div className="work-card-tags">
          <span className="tag own">● Own product</span>
          <span className="tag">Open source · Apache 2.0</span>
        </div>
        <h3 className="work-card-title">
          MultiChain<em>Sign</em>
        </h3>
        <p className="work-card-blurb">
          An OpenBao secrets engine that turns the vault into a chain-aware
          signing service for ETH, BTC, SOL &amp; TRON. Keys stay seal-wrapped,
          and are zeroed in memory the instant a signature is returned.
        </p>
        <div className="work-card-stats">
          <div className="cell">
            <div className="k">Chains</div>
            <div className="v"><em>4</em></div>
          </div>
          <div className="cell">
            <div className="k">Stack</div>
            <div className="v">Go · OpenBao</div>
          </div>
          <div className="cell">
            <div className="k">Status</div>
            <div className="v">v0.2 · live</div>
          </div>
        </div>
        <div className="work-card-cta">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <span>View on GitHub</span>
          <span className="arr">↗</span>
        </div>
      </div>
    </a>
  );
}

/* ──────────────────────────────────────────────────────────── */

function FindingKailashCard() {
  return (
    <a
      href="https://findingkailash.com"
      target="_blank"
      rel="noopener noreferrer"
      className="work-card fk-card-shell"
    >
      <div className="work-card-visual fk-mini-visual">
        <div className="fk-mini">
          <div className="fk-mini-sky"></div>
          <div className="fk-mini-stars">
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                style={{
                  left: `${(i * 47) % 100}%`,
                  top: `${(i * 31) % 40}%`,
                  animationDelay: `${i * 0.3}s`,
                  opacity: 0.4 + ((i * 5) % 10) / 16,
                }}
              />
            ))}
          </div>
          <div className="fk-mini-sun"></div>
          <svg className="fk-mini-mountains" viewBox="0 0 600 420" preserveAspectRatio="xMidYMax slice">
            <path d="M0,290 L80,240 L150,270 L220,210 L290,260 L360,220 L430,250 L500,210 L600,240 L600,420 L0,420 Z" fill="rgba(60,80,140,0.55)"/>
            <path d="M0,340 L70,280 L150,320 L220,250 L280,290 L300,140 L320,290 L390,240 L470,300 L540,260 L600,310 L600,420 L0,420 Z" fill="rgba(28,38,80,0.85)"/>
            <path d="M260,340 L300,150 L340,340 Z" fill="#10162c"/>
            <path d="M296,190 L300,180 L304,190 L303,225 L297,225 Z" fill="rgba(245,247,255,0.92)"/>
            <path d="M289,240 L311,240 L309,254 L291,254 Z" fill="rgba(245,247,255,0.85)"/>
            <path d="M0,380 L60,345 L150,365 L240,335 L320,360 L400,335 L480,360 L560,340 L600,360 L600,420 L0,420 Z" fill="rgba(8,12,28,0.95)"/>
          </svg>
          <div className="fk-mini-om">ॐ</div>
          <div className="fk-mini-label">№ Finding · Kailash</div>
          <div className="fk-mini-name serif-i">Adi Kailash &amp; Om Parvat</div>
          <div className="fk-mini-grain"></div>
        </div>
      </div>

      <div className="work-card-body">
        <div className="work-card-tags">
          <span className="tag client">● Client engagement</span>
          <span className="tag">Brand · Product · Web</span>
        </div>
        <h3 className="work-card-title">
          Finding <em>Kailash</em>
        </h3>
        <p className="work-card-blurb">
          Soartech partnered with the Finding Kailash team to shape their
          brand and booking experience — a quiet, considered digital home
          for small-group expeditions to the lesser-Kailash circuit of
          Uttarakhand.
        </p>
        <div className="work-card-stats">
          <div className="cell">
            <div className="k">Sector</div>
            <div className="v">Travel</div>
          </div>
          <div className="cell">
            <div className="k">Routes</div>
            <div className="v"><em>4</em></div>
          </div>
          <div className="cell">
            <div className="k">Year</div>
            <div className="v">2025</div>
          </div>
        </div>
        <div className="work-card-cta">
          <span>findingkailash.com</span>
          <span className="arr">↗</span>
        </div>
      </div>
    </a>
  );
}

window.MoreWork = MoreWork;
