"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section
      id="contact"
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
            05 / contact
          </p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a data science project in mind? I&apos;d love to help. Drop a
            message below.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Info panel */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              {
                icon: "📧",
                label: "Email",
                value: "jenildabhi10@gmail.com",
                href: "mailto:jenildabhi10@gmail.com",
              },
              {
                icon: "🎓",
                label: "University Email",
                value: "008744860@coyote.csusb.edu",
                href: "mailto:008744860@coyote.csusb.edu",
              },
              {
                icon: "💼",
                label: "GitHub",
                value: "github.com/jenildabhi10",
                href: "https://github.com/jenildabhi10",
              },
              {
                icon: "📍",
                label: "Location",
                value: "Loma Linda, CA US",
                href: null,
              },
              {
                icon: "⏱️",
                label: "Response Time",
                value: "Within 24 hours",
                href: null,
              },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="card-sm" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "1.1rem" }} aria-hidden="true">
                  {icon}
                </span>
                <div>
                  <div className="mono-label-sm" style={{ marginBottom: "3px" }}>
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.83rem",
                        color: "var(--accent-cyan)",
                        textDecoration: "none",
                      }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.83rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            <div
              className="card-sm"
              style={{ padding: "1.25rem" }}
            >
              <p
                className="mono-label-sm"
                style={{ marginBottom: "0.75rem" }}
              >
                I can help with:
              </p>
              {[
                "ML Model Development",
                "Data Analysis & EDA",
                "NLP & Generative AI",
                "ETL & Data Engineering",
                "Power BI / Plotly Dashboards",
                "Cloud (OCI / GCP) Projects",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "6px",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      color: "var(--accent-cyan)",
                      fontSize: "0.6rem",
                    }}
                  >
                    ▸
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
            style={{
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {[
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  ph: "Your name",
                },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  ph: "your@email.com",
                },
              ].map((f) => (
                <div key={f.name}>
                  <label htmlFor={`contact-${f.name}`} className="form-label">
                    {f.label}
                  </label>
                  <input
                    id={`contact-${f.name}`}
                    type={f.type}
                    name={f.name}
                    value={form[f.name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={f.ph}
                    required
                    className="form-input"
                  />
                </div>
              ))}
            </div>
            <div>
              <label htmlFor="contact-subject" className="form-label">
                Project Type
              </label>
              <select
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="" style={{ background: "var(--bg-card)" }}>
                  Select a project type...
                </option>
                {[
                  "ML Model Development",
                  "Data Analysis & EDA",
                  "NLP / Generative AI",
                  "ETL / Data Engineering",
                  "Dashboard / Visualization",
                  "Cloud (OCI / GCP)",
                  "Other",
                ].map((o) => (
                  <option
                    key={o}
                    value={o}
                    style={{ background: "var(--bg-card)" }}
                  >
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className="form-label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="form-input"
                style={{ resize: "vertical", minHeight: "120px" }}
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-submit"
            >
              {status === "loading" && <span className="spinner" />}
              {status === "loading"
                ? "Sending..."
                : status === "success"
                  ? "✓ Message Sent!"
                  : status === "error"
                    ? "Failed — Try Again"
                    : "Send Message →"}
            </button>
            {status === "success" && (
              <p
                aria-live="polite"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--accent-green)",
                  textAlign: "center",
                }}
              >
                Thanks! I&apos;ll get back to you within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p
                aria-live="polite"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--accent-pink)",
                  textAlign: "center",
                }}
              >
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
