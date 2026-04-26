import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jenil Dabhi | Data Scientist",
  description: "MS Computer Science student at CSUSB. Data Scientist specializing in ML, Generative AI, NLP, and ETL pipelines. Available for freelance projects.",
  keywords: ["Data Scientist", "Machine Learning", "Python", "NLP", "Generative AI", "Freelance", "Jenil Dabhi", "CSUSB"],
  authors: [{ name: "Jenil Dabhi" }],
  openGraph: {
    title: "Jenil Dabhi | Data Scientist",
    description: "MS CS student at CSUSB. ML, GenAI, NLP & ETL specialist. Open to freelance.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
