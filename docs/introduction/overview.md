---
id: overview
title: Book Duplex Overview
sidebar_label: Overview
sidebar_position: 1
---

# Book Duplex Overview

Book Duplex is a quantitative market microstructure tool designed for precision order flow analysis. It provides a set of computational primitives that describe the behavior of liquidity, trade flow, and structural imbalance in real time.

## What Book Duplex Is

Book Duplex instruments the limit order book and tape to produce a set of derived signals. These signals are not generic indicators — they are grounded in the mechanics of how markets actually move: through the interaction of passive resting liquidity and aggressive initiated flow.

## What This Documentation Covers

- **[Primitives](/primitives/ratio-price)** — The core computed signals. Each primitive has a precise definition, formula, and interpretation guide.
- **[Tutorials](/tutorials/absorption-vs-expansion)** — Scenario-based walkthroughs showing how primitives combine to diagnose market structure.
- **[Visual Reference](/visual-reference/chart-panels)** — Panel-by-panel explanations of the UI with annotated screenshots.
- **[Frameworks](/frameworks/pressure-friction-participation)** — Higher-level mental models for reading the tool holistically.

## Start Here

If you are new to Book Duplex, begin with:

1. [System Mental Model](/introduction/mental-model) — understand the core conceptual framework
2. [Ratio Price](/primitives/ratio-price) — the foundational primitive
3. [Absorption vs Expansion](/tutorials/absorption-vs-expansion) — first scenario tutorial
4. [Chart Panels](/visual-reference/chart-panels) — learn the UI layout

## Design Philosophy

Book Duplex is built on the premise that price movement is the downstream consequence of order flow dynamics. Every primitive in the system is designed to answer a specific question about what is happening at the intersection of supply, demand, and participant behavior.
