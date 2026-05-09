// Contact + Footer

function Contact() {
  return (
    <section className="shell contact" id="contact" data-screen-label="Contact">
      <div className="inner">
        <div className="eyebrow" style={{ marginBottom: 32 }}>
          <span
            style={{
              display: "inline-block",
              width: 28,
              height: 1,
              background: "var(--accent)",
              marginRight: 12,
              verticalAlign: "middle",
            }}
          ></span>
          Get in touch
        </div>

        <h2 className="contact-mega">
          Let's <em>build</em>
          <br />
          something <em>new.</em>
        </h2>

        <div className="contact-row">
          <div className="col">
            <h4>Email</h4>
            <a href="mailto:contact@soartech.in" className="big">
              contact@soartech.in
              <span style={{ fontSize: 18, opacity: 0.7 }}>↗</span>
            </a>
            <p style={{ marginTop: 10 }}>
              Collaborations, partnerships, hiring, or just to say hi.
            </p>
          </div>
          <div className="col">
            <h4>Studio</h4>
            <div className="big" style={{ fontWeight: 400, lineHeight: 1.3 }}>
              H. No. 126,
              <br />
              Hanuman Mandir Road,
              <br />
              Pithoragarh, UK · 262501
            </div>
          </div>
          <div className="col">
            <h4>Press &amp; Brand</h4>
            <a href="mailto:contact@soartech.in" className="big">
              press@soartech.in
              <span style={{ fontSize: 18, opacity: 0.7 }}>↗</span>
            </a>
            <p style={{ marginTop: 10 }}>
              Logos, screenshots, founder photos, brand guidelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="left">
        <SoarMark size={16} />
        <span>Soartech · 2025</span>
        <span style={{ opacity: 0.5 }}>·</span>
        <span>All rights reserved</span>
      </div>
      <div>Crafted from the himalayas, IN</div>
    </footer>
  );
}

window.Contact = Contact;
window.Footer = Footer;
