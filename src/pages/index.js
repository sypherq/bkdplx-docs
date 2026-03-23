import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

const sections = [
  {
    title: "Introduction",
    body: "Start with the system overview and the Position / Structure / Flow mental model.",
    to: "/docs/introduction/overview",
  },
  {
    title: "Primitives",
    body: "Learn each metric in isolation before combining them into deterministic reads.",
    to: "/docs/primitives/ratio-price",
  },
  {
    title: "Tutorials",
    body: "Convert primitive states into rule-based walkthroughs for real market situations.",
    to: "/docs/tutorials/absorption-vs-expansion",
  },
  {
    title: "Visual Reference",
    body: "Map every concept back into the Book Duplex interface and panel layout.",
    to: "/docs/visual-reference/chart-panels",
  },
];

export default function Home() {
  return (
    <Layout
      title="Book Duplex Documentation"
      description="Learning-first documentation for Book Duplex primitives, tutorials, and UI reference."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.backdrop} />
          <div className={clsx("container", styles.heroShell)}>
            <div className={styles.heroFrame}>
              <div className={styles.badgeRow}>
                <span className={styles.brandMark}>BkDplx</span>
                <span className={styles.badge}>Private Beta Docs</span>
              </div>
              <Heading as="h1" className={styles.title}>
                Learn the Book, not just the buttons.
              </Heading>
              <p className={styles.subtitle}>
                Book Duplex teaches market structure through primitives, tutorials,
                panel references, and reusable reasoning frameworks.
              </p>
              <div className={styles.actions}>
                <Link className={clsx("button", styles.primaryAction)} to="/docs/introduction/overview">
                  Open Documentation
                </Link>
                <Link className={clsx("button", styles.secondaryAction)} to="/docs/tutorials/momentum-alignment">
                  View Full-System Tutorial
                </Link>
              </div>
              <div className={styles.signalStrip}>
                <div>
                  <span className={styles.signalLabel}>Position</span>
                  <strong>Ratio Price + Displacement</strong>
                </div>
                <div>
                  <span className={styles.signalLabel}>Structure</span>
                  <strong>Depth + Log(A/B) + SLS</strong>
                </div>
                <div>
                  <span className={styles.signalLabel}>Flow</span>
                  <strong>Trades + Profile + Imbalance</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx("container", styles.section)}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>System Architecture</p>
            <Heading as="h2">Documentation built around deterministic transfer</Heading>
          </div>
          <div className={styles.cardGrid}>
            {sections.map((section) => (
              <Link key={section.title} to={section.to} className={styles.card}>
                <span className={styles.cardKicker}>{section.title}</span>
                <span className={styles.cardBody}>{section.body}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={clsx("container", styles.section)}>
          <div className={styles.frameworkPanel}>
            <p className={styles.sectionEyebrow}>Core Principle</p>
            <Heading as="h2">Pressure + Friction + Participation</Heading>
            <p className={styles.frameworkBody}>
              The system does not try to predict price directly. It asks whether
              structure allows the move, whether participants are funding it, and
              whether current stretch is aligned with that support.
            </p>
            <div className={styles.frameworkRules}>
              <div>
                <span className={styles.ruleLabel}>Continuation</span>
                <code>high displacement + strong flow + thin opposing depth</code>
              </div>
              <div>
                <span className={styles.ruleLabel}>Trap</span>
                <code>positive flow + negative near-mid structure + flat gravity</code>
              </div>
              <div>
                <span className={styles.ruleLabel}>Vacuum</span>
                <code>balanced ratio + collapsing depth + elevated curvature</code>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
