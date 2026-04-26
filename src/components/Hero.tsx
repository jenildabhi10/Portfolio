"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const roles = [
  "Data Scientist",
  "ML Engineer",
  "Generative AI Developer",
  "NLP Practitioner",
  "ETL Pipeline Builder",
  "Data Analyst",
];

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  dur: number;
  delay: number;
  color: string;
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        dur: Math.random() * 6 + 4,
        delay: Math.random() * 4,
        color:
          i % 3 === 0
            ? "var(--accent-cyan)"
            : i % 3 === 1
              ? "var(--accent-blue)"
              : "var(--accent-green)",
      }))
    );
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;
    if (!isDeleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      return;
    }
    timeoutRef.current = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
      );
    }, speed);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, isDeleting, roleIndex]);

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "5rem 1.5rem 0",
      }}
    >
      {/* Glow orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          left: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,119,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "20%",
          right: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,200,255,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          aria-hidden="true"
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: p.color,
            opacity: 0.25,
            pointerEvents: "none",
          }}
        />
      ))}

      <div
        style={{
          maxWidth: "920px",
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="badge" style={{ marginBottom: "2rem" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--accent-green)",
                boxShadow: "0 0 8px var(--accent-green)",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--accent-cyan)",
                letterSpacing: "0.1em",
              }}
            >
              open_to_opportunities: true
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 800,
            color: "var(--text-primary)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          Jenil{" "}
          <span
            style={{
              background:
                "linear-gradient(120deg, var(--accent-cyan) 0%, var(--accent-blue) 55%, var(--accent-purple) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 24px rgba(0, 200, 255, 0.18))",
            }}
          >
            Dabhi
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.95rem, 2.5vw, 1.4rem)",
            color: "var(--accent-cyan)",
            marginBottom: "1.5rem",
            height: "2.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
          }}
        >
          <span style={{ color: "var(--text-faint)" }}>{"// "}</span>
          <span>{displayed}</span>
          <span
            aria-hidden="true"
            style={{
              width: "2px",
              height: "1.4rem",
              background: "var(--accent-cyan)",
              animation: "blink 1s step-end infinite",
              borderRadius: "1px",
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            color: "var(--text-muted)",
            lineHeight: 1.8,
            maxWidth: "640px",
            margin: "0 auto 2.5rem",
          }}
        >
          MS Computer Science student at{" "}
          <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>
            California State University, San Bernardino
          </span>{" "}
          — specializing in Machine Learning, Generative AI, and Data Analytics.
          Oracle OCI & Google Cloud certified.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="hero-cta-group"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.a
            variants={fadeUp}
            href="#projects"
            className="btn-primary"
          >
            View Projects
          </motion.a>
          <motion.a
            variants={fadeUp}
            href="#contact"
            className="btn-secondary"
          >
            Get in Touch
          </motion.a>
          <motion.a
            variants={fadeUp}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label="Download resume PDF"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </motion.a>
          <motion.a
            variants={fadeUp}
            href="https://github.com/jenildabhi10"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label="Visit GitHub profile"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </motion.a>
          <motion.a
            variants={fadeUp}
            href="https://linkedin.com/in/jenildabhi10"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label="Visit LinkedIn profile"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="hero-stats"
          style={{
            display: "flex",
            gap: "2.5rem",
            justifyContent: "center",
            marginTop: "4rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "5+", label: "Projects" },
            { value: "MS", label: "@ CSUSB" },
            { value: "2", label: "Cloud Certs" },
            { value: "1+", label: "Yr Experience" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "var(--accent-cyan)",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div className="mono-label" style={{ marginTop: "4px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--text-faint)",
            letterSpacing: "0.15em",
          }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, var(--text-faint), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
