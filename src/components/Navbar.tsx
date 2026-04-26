"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll progress
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setScrollProgress(progress);

      // Active section detection
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on click outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".mobile-menu") && !target.closest(".nav-mobile")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [menuOpen]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    padding: "0 1.5rem",
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 0.3s ease",
    background: scrolled ? "rgba(5, 11, 20, 0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled
      ? "1px solid rgba(0, 200, 255, 0.08)"
      : "1px solid transparent",
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={navStyle}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a href="#home" className="nav-brand">
          J<span>.</span>D
        </a>

        {/* Desktop links */}
        <div
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href.slice(1) ? "active" : ""}`}
            >
              {link.label}
              {active === link.href.slice(1) && (
                <motion.div
                  layoutId="activeNav"
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "var(--accent-cyan)",
                    boxShadow: "0 0 8px var(--accent-cyan)",
                  }}
                />
              )}
            </a>
          ))}
          <a href="#contact" className="nav-cta">
            Hire Me
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile"
          style={{ display: "none" }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  position: "fixed",
                  inset: 0,
                  top: "64px",
                  background: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(4px)",
                  zIndex: -1,
                }}
              />
              <motion.div
                className="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                role="menu"
                style={{
                  position: "absolute",
                  top: "64px",
                  left: 0,
                  right: 0,
                  background: "rgba(5, 11, 20, 0.98)",
                  backdropFilter: "blur(20px)",
                  borderBottom: "1px solid rgba(0, 200, 255, 0.1)",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    role="menuitem"
                    style={{
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-md)",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(0, 200, 255, 0.05)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "transparent";
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />
    </>
  );
}
