---
id: mental-model
title: System Mental Model
sidebar_label: Mental Model
sidebar_position: 2
---

# System Mental Model

Book Duplex is organized around a single core insight: **price moves because of imbalance, not despite it.** The tool measures the structure of that imbalance across multiple dimensions simultaneously.

## The Three Layers

### 1. Structural Layer — The Book
The limit order book defines the passive landscape. Depth, displacement, and ratio price all describe the shape, weight, and position of resting liquidity. These tell you *where* the market is willing to transact, and *how much* defense exists at key levels.

### 2. Flow Layer — The Tape
Trade flow primitives (trade flow, trade profile, trade imbalance) describe the behavior of *aggressive participants*. These are actors who are willing to pay the spread to transact immediately. The pattern and velocity of this aggression determines whether the market will hold or break through structural levels.

### 3. Synthesis Layer — The Signal
Net imbalance, SLS, and centroid synthesize book and flow data into composite signals. These tell you the *current state of competition* between buyers and sellers, and whether one side is gaining structural dominance.

## Reading the Tool

Book Duplex is not a prediction engine. It is a **state description engine**. At any moment, it tells you:

- What the book looks like (structure)
- What participants are doing (flow)
- Whether the two are aligned or diverging (synthesis)

## Determinism

A key design principle: interpretations should be **deterministic given defined inputs**. The same book structure + the same flow pattern should produce the same reading every time. Tutorials in this documentation follow that principle: they define rules, not heuristics.

## Related

- [Overview](/introduction/overview)
- [Frameworks: Pressure, Friction, Participation](/frameworks/pressure-friction-participation)
- [Frameworks: Alignment vs Conflict](/frameworks/alignment-vs-conflict)
