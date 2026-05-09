// Founder section — editorial portrait + quote + bio

function Founder() {
  return (
    <section className="shell founder" id="founder" data-screen-label="Founder">
      <div className="inner">
        <div className="founder-grid">
          <div className="founder-card">
            <div className="founder-portrait">
              <div className="silhouette"></div>
              <div className="glint"></div>
              <div className="grain"></div>
            </div>
            <div className="founder-meta">
              <div className="who">
                <h4>Vinay <em>Kharayat</em></h4>
                <div className="role">Founder · CEO · Pithoragarh</div>
              </div>
              <div className="sig">vk</div>
            </div>
          </div>

          <div className="founder-side">
            <h3>The person behind it</h3>
            <p className="founder-quote">
              <span className="open-q">"</span>I started Soartech because I kept finding myself
              opening four grocery apps before checkout — and getting the price wrong anyway.
              <em> The best technology fixes things you didn't even realise were broken.</em><span className="close-q">"</span>
            </p>
            <p className="founder-bio">
              Vinay is a technology entrepreneur with a long-running interest in consumer
              products that make everyday Indian life a little easier. After years of
              shipping engineering work for other people's companies, he started Soartech
              to chase the small, daily frustrations he kept noticing — and to build the
              quiet, sharp tools that fix them.
            </p>
            <p className="founder-bio">
              Soartech is currently a one-person studio. That's intentional, for now.
            </p>

            <div className="founder-trio">
              <div className="cell">
                <div className="k">Based in</div>
                <div className="v">Pithoragarh, <em>Uttarakhand</em></div>
              </div>
              <div className="cell">
                <div className="k">Working on</div>
                <div className="v">ShopSwiftly + <em>more soon</em></div>
              </div>
              <div className="cell">
                <div className="k">Open to</div>
                <div className="v">Collaborations, <em>partnerships</em></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Founder = Founder;
