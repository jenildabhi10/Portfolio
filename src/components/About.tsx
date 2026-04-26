"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "4rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div style={{ marginBottom: "4rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            01 / about_me
          </p>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "var(--text-muted)",
                lineHeight: 1.9,
                marginBottom: "1.5rem",
              }}
            >
              I&apos;m Jenil Dabhi — a Master&apos;s student in Computer
              Science at{" "}
              <span
                style={{
                  color: "var(--text-secondary)",
                  fontWeight: 500,
                }}
              >
                California State University, San Bernardino
              </span>
              , specializing in Machine Learning, Generative AI, and Data
              Analytics.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "var(--text-muted)",
                lineHeight: 1.9,
                marginBottom: "2rem",
              }}
            >
              With real internship experience, cloud certifications from Oracle
              and Google, and a portfolio of end-to-end ML projects spanning
              NLP, ETL pipelines, and generative AI — I build data solutions
              that actually work in the real world.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {[
                { label: "Location", value: "Loma Linda, CA US" },
                { label: "Degree", value: "MS Computer Science" },
                { label: "University", value: "CSUSB" },
                { label: "GitHub", value: "@jenildabhi10" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    padding: "12px 16px",
                    background: "rgba(0, 200, 255, 0.03)",
                    border: "1px solid var(--border-default)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <div className="mono-label" style={{ marginBottom: "4px" }}>
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      fontWeight: 500,
                    }}
                  >
                    {label === "GitHub" ? (
                      <a
                        href="https://github.com/jenildabhi10"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--accent-cyan)",
                          textDecoration: "none",
                        }}
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="card"
            style={{
              boxShadow: "var(--shadow-card)",
              padding: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "12px 16px",
                borderBottom: "1px solid var(--border-default)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
                <div
                  key={c}
                  aria-hidden="true"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: c,
                  }}
                />
              ))}
              <span
                style={{
                  marginLeft: "8px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--text-faint)",
                }}
              >
                jenil_dabhi.py
              </span>
            </div>
            <div
              style={{
                padding: "1.5rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
                lineHeight: 1.85,
              }}
            >
              <div style={{ color: "var(--text-faint)" }}>
                {"# Data Scientist @ CSUSB"}
              </div>
              <div style={{ color: "var(--accent-cyan)" }}>
                class{" "}
                <span style={{ color: "var(--text-primary)" }}>JenilDabhi</span>
                :
              </div>
              <div style={{ paddingLeft: "1.5rem" }}>
                <div>
                  <span style={{ color: "var(--accent-green)" }}>name</span>
                  <span style={{ color: "var(--text-muted)" }}> = </span>
                  <span style={{ color: "var(--accent-gold)" }}>
                    &quot;Jenil Dabhi&quot;
                  </span>
                </div>
                <div>
                  <span style={{ color: "var(--accent-green)" }}>degree</span>
                  <span style={{ color: "var(--text-muted)" }}> = </span>
                  <span style={{ color: "var(--accent-gold)" }}>
                    &quot;MS Computer Science&quot;
                  </span>
                </div>
                <div>
                  <span style={{ color: "var(--accent-green)" }}>
                    university
                  </span>
                  <span style={{ color: "var(--text-muted)" }}> = </span>
                  <span style={{ color: "var(--accent-gold)" }}>
                    &quot;CSUSB&quot;
                  </span>
                </div>
                <div>
                  <span style={{ color: "var(--accent-green)" }}>focus</span>
                  <span style={{ color: "var(--text-muted)" }}> = </span>
                  <span style={{ color: "var(--text-muted)" }}>[</span>
                </div>
                <div style={{ paddingLeft: "1.5rem" }}>
                  {[
                    '"ML & Deep Learning"',
                    '"Generative AI"',
                    '"NLP"',
                    '"Data Analytics"',
                  ].map((s) => (
                    <div key={s} style={{ color: "var(--accent-gold)" }}>
                      {s},
                    </div>
                  ))}
                </div>
                <div style={{ color: "var(--text-muted)" }}>]</div>
                <br />
                <div>
                  <span style={{ color: "var(--accent-green)" }}>certs</span>
                  <span style={{ color: "var(--text-muted)" }}> = </span>
                  <span style={{ color: "var(--text-muted)" }}>[</span>
                  <span style={{ color: "var(--accent-gold)" }}>
                    &quot;Oracle OCI&quot;
                  </span>
                  <span style={{ color: "var(--text-muted)" }}>, </span>
                  <span style={{ color: "var(--accent-gold)" }}>
                    &quot;GCP&quot;
                  </span>
                  <span style={{ color: "var(--text-muted)" }}>]</span>
                </div>
                <div>
                  <span style={{ color: "var(--accent-green)" }}>available</span>
                  <span style={{ color: "var(--text-muted)" }}> = </span>
                  <span style={{ color: "var(--accent-blue)" }}>True</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
