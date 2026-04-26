"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages & Tools",
    icon: "⌨",
    skills: [
      { name: "Python", level: 92 },
      { name: "SQL (MySQL / PostgreSQL)", level: 86 },
      { name: "Git / GitHub / VS Code", level: 83 },
    ],
  },
  {
    title: "Data & ML",
    icon: "🤖",
    skills: [
      { name: "Scikit-Learn / XGBoost", level: 88 },
      { name: "Pandas / NumPy", level: 93 },
      { name: "PyTorch / TensorFlow", level: 74 },
    ],
  },
  {
    title: "Generative AI & NLP",
    icon: "✨",
    skills: [
      { name: "HuggingFace Transformers", level: 82 },
      { name: "LangChain / OpenAI API", level: 79 },
      { name: "LLM Fine-Tuning & Prompting", level: 72 },
    ],
  },
  {
    title: "Data Engineering",
    icon: "🔧",
    skills: [
      { name: "ETL Pipelines", level: 86 },
      { name: "DuckDB / SQLite", level: 81 },
      { name: "Apache Parquet", level: 79 },
    ],
  },
  {
    title: "Visualization & BI",
    icon: "📊",
    skills: [
      { name: "Power BI / Tableau", level: 83 },
      { name: "Plotly / Dash", level: 86 },
      { name: "Matplotlib / Seaborn", level: 91 },
    ],
  },
  {
    title: "Cloud & Databases",
    icon: "☁️",
    skills: [
      { name: "Oracle Cloud (OCI)", level: 80 },
      { name: "Google Cloud (GCP)", level: 76 },
      { name: "MongoDB / PostgreSQL", level: 79 },
    ],
  },
];

const techBadges = [
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
  "PyTorch",
  "TensorFlow",
  "HuggingFace",
  "LangChain",
  "OpenAI API",
  "SQL",
  "DuckDB",
  "SQLite",
  "Power BI",
  "Tableau",
  "Plotly Dash",
  "Streamlit",
  "XGBoost",
  "SHAP",
  "Oracle OCI",
  "Google Cloud",
  "MySQL",
  "MongoDB",
  "Git",
  "Jupyter",
];

const certs = [
  {
    name: "Oracle OCI 2025 Generative AI Professional",
    icon: "🏆",
    status: "Certified" as const,
  },
  {
    name: "Google Cloud Computing Foundations",
    icon: "🏆",
    status: "Certified" as const,
  },
  {
    name: "Google Cloud Data Analytics",
    icon: "⏳",
    status: "In Progress" as const,
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
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
              02 / skills
            </p>
            <h2 className="section-title">Technical Stack</h2>
          </div>

          {/* Skill cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
            className="skills-grid"
          >
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
                className="card"
                style={{ padding: "1.5rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>{cat.icon}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {cat.title}
                  </span>
                </div>
                {cat.skills.map((skill, si) => (
                  <div
                    key={skill.name}
                    style={{
                      marginBottom:
                        si < cat.skills.length - 1 ? "1rem" : 0,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "5px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.8rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: "var(--text-faint)",
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={
                          inView
                            ? { width: `${skill.level}%` }
                            : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: ci * 0.08 + si * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            style={{ marginBottom: "1.5rem" }}
          >
            <div
              className="card"
              style={{ padding: "1.5rem 2rem" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--text-faint)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                certifications
              </p>
              <div
                style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
              >
                {certs.map((cert) => (
                  <div
                    key={cert.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 16px",
                      background: "rgba(255,255,255,0.02)",
                      border: `1px solid ${
                        cert.status === "Certified"
                          ? "rgba(0,255,200,0.15)"
                          : "rgba(255,200,0,0.15)"
                      }`,
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    <span aria-hidden="true">{cert.icon}</span>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.8rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {cert.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6rem",
                          color:
                            cert.status === "Certified"
                              ? "var(--accent-green)"
                              : "var(--accent-gold)",
                          marginTop: "2px",
                        }}
                      >
                        {cert.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech badge cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="card"
            style={{ padding: "2rem", textAlign: "center" }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--text-faint)",
                letterSpacing: "0.15em",
                marginBottom: "1.25rem",
                textTransform: "uppercase",
              }}
            >
              tech_stack.all()
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
                justifyContent: "center",
              }}
            >
              {techBadges.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
