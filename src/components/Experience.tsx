"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="grid-bg"
      style={{ padding: "4rem 1.5rem", background: "var(--bg-surface)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div style={{ marginBottom: "4rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>
              04 / experience
            </p>
            <h2 className="section-title">Experience & Education</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
            className="exp-grid"
          >
            {/* Left column: Work & Extracurricular */}
            <div className="timeline-col">
              {/* LAMINDS internship */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card card-lift"
              >
                <div
                  className="card-accent-line"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent-cyan), transparent)",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1.25rem",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "6px",
                      }}
                    >
                      <span style={{ fontSize: "1.2rem" }} aria-hidden="true">
                        🏢
                      </span>
                      <span
                        className="mono-label"
                        style={{ color: "var(--accent-cyan)" }}
                      >
                        Internship
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      Database Developer Intern
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.85rem",
                        color: "var(--accent-cyan)",
                        marginTop: "3px",
                        fontWeight: 500,
                      }}
                    >
                      LAMINDS
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: "var(--text-faint)",
                        marginTop: "2px",
                      }}
                    >
                      Jan 2024 – Jul 2024 · Surat, India
                    </p>
                  </div>
                  <span className="status-badge completed">Completed</span>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.7rem",
                  }}
                >
                  {[
                    "Optimized databases and implemented efficient data retrieval processes using MySQL",
                    "Conducted data analysis using Python (Pandas) to generate actionable business insights",
                    "Built Power BI dashboards to visualize KPIs and improve decision-making efficiency",
                    "Enhanced data pipeline performance, improving reporting speed by 20%",
                  ].map((point, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          color: "var(--accent-cyan)",
                          fontSize: "0.65rem",
                          marginTop: "5px",
                          flexShrink: 0,
                        }}
                      >
                        ▸
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.83rem",
                          color: "var(--text-dim)",
                          lineHeight: 1.6,
                        }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CSUSB Club */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card card-lift"
              >
                <div
                  className="card-accent-line"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent-purple), transparent)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "6px",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }} aria-hidden="true">
                    🎓
                  </span>
                  <span
                    className="mono-label"
                    style={{ color: "var(--accent-purple)" }}
                  >
                    Extracurricular
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  Workshop Facilitator / Member
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "var(--accent-purple)",
                    marginTop: "3px",
                  }}
                >
                  CSUSB Computer Engineering Club
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    color: "var(--text-faint)",
                    marginTop: "2px",
                    marginBottom: "1rem",
                  }}
                >
                  May 2024 – Present · San Bernardino, CA
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                  }}
                >
                  {[
                    "Conducted workshops on emerging engineering technologies for peers and faculty",
                    "Collaborated with interdisciplinary teams to propose innovative engineering solutions",
                  ].map((p, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          color: "var(--accent-purple)",
                          fontSize: "0.65rem",
                          marginTop: "5px",
                          flexShrink: 0,
                        }}
                      >
                        ▸
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.83rem",
                          color: "var(--text-dim)",
                          lineHeight: 1.6,
                        }}
                      >
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right column: Education */}
            <div className="timeline-col">
              {/* MS CSUSB */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="card card-lift"
              >
                <div
                  className="card-accent-line"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent-blue), transparent)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "6px",
                      }}
                    >
                      <span style={{ fontSize: "1.2rem" }} aria-hidden="true">
                        🎓
                      </span>
                      <span
                        className="mono-label"
                        style={{ color: "var(--accent-blue)" }}
                      >
                        Education
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      MS in Computer Science
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.85rem",
                        color: "var(--accent-blue)",
                        marginTop: "3px",
                        fontWeight: 500,
                      }}
                    >
                      California State University, San Bernardino
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: "var(--text-faint)",
                        marginTop: "2px",
                      }}
                    >
                      Aug 2024 – Present · San Bernardino, CA
                    </p>
                  </div>
                  <span className="status-badge in-progress">In Progress</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {[
                    "Machine Learning",
                    "Deep Learning",
                    "Generative AI",
                    "NLP",
                    "Predictive Modeling",
                    "Data Analytics",
                  ].map((item) => (
                    <span
                      key={item}
                      style={{
                        padding: "4px 12px",
                        background: "rgba(0,119,255,0.07)",
                        border: "1px solid rgba(0,119,255,0.18)",
                        borderRadius: "var(--radius-full)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: "#7aabff",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Bachelor's */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="card card-lift"
              >
                <div
                  className="card-accent-line"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--text-faint), transparent)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "6px",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }} aria-hidden="true">
                    📚
                  </span>
                  <span className="mono-label">Education</span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  Bachelor&apos;s in Computer Engineering
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    marginTop: "3px",
                  }}
                >
                  Gandhinagar Institute of Technology
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    color: "var(--text-faint)",
                    marginTop: "2px",
                  }}
                >
                  Aug 2020 – Jun 2024 · Gandhinagar, India
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
