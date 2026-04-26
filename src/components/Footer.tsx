"use client";

export default function Footer() {
  return (
    <footer>
      {/* Gradient separator */}
      <div className="footer-gradient" />

      <div
        className="footer-inner"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "2.5rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--text-secondary)",
            }}
          >
            © {new Date().getFullYear()} Jenil Dabhi
          </span>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--text-faint)",
            }}
          >
            Built with Next.js · Tailwind · Framer Motion
          </p>
        </div>

        <div
          className="footer-links"
          style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
        >
          {[
            {
              label: "GitHub",
              href: "https://github.com/jenildabhi10",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/jenildabhi10",
            },
            {
              label: "Email",
              href: "mailto:jenildabhi10@gmail.com",
            },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="footer-link"
            >
              {label}
            </a>
          ))}

          {/* Back to top */}
          <button
            className="back-to-top"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Scroll back to top of page"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}
