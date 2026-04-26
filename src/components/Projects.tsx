"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    title: "NYC Taxi ETL & Analytics Pipeline",
    subtitle: "Data Engineering + ML",
    description:
      "Engineered an ETL pipeline for 3M+ NYC taxi records using Medallion Architecture (Bronze→Silver→Gold). DuckDB SQL analysis for revenue & demand patterns. Random Forest fare prediction (R²=0.93). Interactive Dash dashboard with KPIs, heatmaps & revenue trends.",
    tags: [
      "Python",
      "Pandas",
      "DuckDB",
      "Parquet",
      "Scikit-Learn",
      "Plotly Dash",
      "ETL",
    ],
    metrics: [
      { label: "Records", value: "3M+" },
      { label: "R² Score", value: "0.93" },
      { label: "Architecture", value: "Medallion" },
    ],
    github: "https://github.com/jenildabhi10/nyc-taxi-etl-pipeline",
    featured: true,
    color: "var(--accent-cyan)",
    icon: "🚕",
  },
  {
    id: "02",
    title: "Energy Grid Stress & Renewable Analyzer",
    subtitle: "XGBoost + LSTM + Anomaly Detection",
    description:
      "End-to-end ML pipeline integrating EIA, NOAA & Census APIs into SQLite (2.5M+ records). XGBoost grid stress forecasting (R²=0.91, SHAP interpretability). PyTorch LSTM for 48-hour demand forecasting (MAPE=3.68%). K-Means regional clustering & Isolation Forest anomaly detection.",
    tags: [
      "XGBoost",
      "PyTorch LSTM",
      "SQLite",
      "SHAP",
      "K-Means",
      "Isolation Forest",
      "Dash",
    ],
    metrics: [
      { label: "Records", value: "2.5M+" },
      { label: "R² Score", value: "0.91" },
      { label: "MAPE", value: "3.68%" },
    ],
    github: "https://github.com/jenildabhi10",
    featured: true,
    color: "var(--accent-blue)",
    icon: "⚡",
  },
  {
    id: "03",
    title: "Sentiment Analysis with Transformers",
    subtitle: "NLP / HuggingFace",
    description:
      "Sentiment classification using HuggingFace DistilBERT. Compares Transformer vs VADER baseline. Built interactive Streamlit app for real-time inference on user-entered text.",
    tags: ["HuggingFace", "DistilBERT", "Streamlit", "NLP", "Python"],
    metrics: [
      { label: "Model", value: "BERT" },
      { label: "Accuracy", value: "~92%" },
      { label: "App", value: "Streamlit" },
    ],
    github: "https://github.com/jenildabhi10/Sentiment-Analysis-Project",
    featured: false,
    color: "var(--accent-green)",
    icon: "💬",
  },
  {
    id: "04",
    title: "Credit Card Fraud Detection",
    subtitle: "Imbalanced Classification",
    description:
      "Fraud detection on a highly imbalanced dataset (0.17% fraud rate). SMOTE oversampling + XGBoost classifier. Evaluated with AUC-ROC (~0.98) and Precision-Recall curves — not misleading accuracy.",
    tags: ["Scikit-Learn", "SMOTE", "XGBoost", "Pandas", "Matplotlib"],
    metrics: [
      { label: "Recall", value: "~96%" },
      { label: "AUC-ROC", value: "~0.98" },
      { label: "Fraud", value: "0.17%" },
    ],
    github: "https://github.com/jenildabhi10/credit-card-fraud-detection",
    featured: false,
    color: "var(--accent-pink)",
    icon: "💳",
  },
  {
    id: "05",
    title: "Customer Behavior Prediction",
    subtitle: "Clustering + Churn Prediction",
    description:
      "K-Means customer segmentation (k=3) from messy real transaction data. Random Forest churn predictor with SMOTE. Full EDA pipeline from raw data to actionable retention insights.",
    tags: ["K-Means", "Random Forest", "SMOTE", "Pandas", "Seaborn"],
    metrics: [
      { label: "Segments", value: "3" },
      { label: "F1 Score", value: "~0.84" },
      { label: "Accuracy", value: "~88%" },
    ],
    github: "https://github.com/jenildabhi10/customer-behavior-prediction",
    featured: false,
    color: "var(--accent-purple)",
    icon: "🛍️",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "4rem 1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div style={{ marginBottom: "4rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            03 / projects
          </p>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            Real-world data problems — ETL pipelines, ML models, NLP, and
            energy analytics.
          </p>
        </div>

        {/* Featured 2-col */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            marginBottom: "1.5rem",
          }}
          className="proj-grid"
        >
          {projects
            .filter((p) => p.featured)
            .map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                delay={i * 0.1}
                inView={inView}
              />
            ))}
        </div>

        {/* Remaining 3-col */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1.5rem",
          }}
          className="proj-grid-3"
        >
          {projects
            .filter((p) => !p.featured)
            .map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                delay={0.2 + i * 0.08}
                inView={inView}
              />
            ))}
        </div>
      </motion.div>
    </section>
  );
}

type Project = (typeof projects)[0];

function ProjectCard({
  project: p,
  delay,
  inView,
}: {
  project: Project;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="card card-lift"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* Accent line */}
      <div
        className="card-accent-line"
        style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
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
            <span style={{ fontSize: "1.3rem" }} aria-hidden="true">
              {p.icon}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: p.color,
                opacity: 0.8,
                letterSpacing: "0.1em",
              }}
            >
              {p.id}
            </span>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            {p.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              color: "var(--text-faint)",
              marginTop: "3px",
            }}
          >
            {p.subtitle}
          </p>
        </div>
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${p.title} on GitHub`}
          style={{
            color: "var(--text-faint)",
            transition: "color 0.2s",
            padding: "4px",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color =
              "var(--accent-cyan)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color =
              "var(--text-faint)")
          }
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.83rem",
          color: "var(--text-dim)",
          lineHeight: 1.7,
        }}
      >
        {p.description}
      </p>

      {/* Metrics */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0.6rem",
        }}
      >
        {p.metrics.map((m) => (
          <div
            key={m.label}
            style={{
              textAlign: "center",
              padding: "7px",
              background: "rgba(255,255,255,0.02)",
              borderRadius: "var(--radius-md)",
              border: "1px solid rgba(26, 58, 85, 0.6)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.9rem",
                fontWeight: 700,
                color: p.color,
              }}
            >
              {m.value}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.58rem",
                color: "var(--text-faint)",
                marginTop: "2px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
          marginTop: "auto",
        }}
      >
        {p.tags.map((tag) => (
          <span key={tag} className="tag-sm">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
