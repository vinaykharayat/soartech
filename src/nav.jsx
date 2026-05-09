// Top navigation
function Nav() {
  return (
    <nav className="nav" data-screen-label="Nav">
      <a href="#home" className="nav-logo">
        <SoarMark className="mark" />
        <span>Soartech</span>
      </a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#approach">Approach</a>
        <a href="#founder">Founder</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#contact" className="nav-cta">
        <span className="dot-live"></span>
        <span>Available for work</span>
      </a>
    </nav>
  );
}

function SoarMark({ className, size = 22 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="sm-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--accent-soft, #8aaaff)" />
          <stop offset="1" stopColor="var(--accent, #5b8cff)" />
        </linearGradient>
      </defs>
      <path
        d="M12 2 L22 14 L17 14 L12 8 L7 14 L2 14 Z"
        fill="url(#sm-grad)"
      />
      <path
        d="M12 11 L20 21 L15 21 L12 17 L9 21 L4 21 Z"
        fill="url(#sm-grad)"
        opacity="0.55"
      />
    </svg>
  );
}

window.Nav = Nav;
window.SoarMark = SoarMark;
