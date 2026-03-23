---
id: overview
title: Overview
sidebar_label: Overview
sidebar_position: 1
description: Learning-first documentation for Book Duplex primitives, tutorials, and UI reference.
---

# Overview

Book Duplex is a market microstructure learning system built around relative price, orderbook structure, and executed flow. The documentation is organized so a user can move in both directions:

- primitive to tutorial
- tutorial to primitive
- concept to panel
- panel back to concept

## Why This Docs System Exists

The objective is not to dump definitions. It is to reduce cognitive load while teaching deterministic reasoning:

1. Learn what each primitive means in isolation.
2. Learn what pairs of primitives imply together.
3. Learn how full-system agreement or conflict changes the read.
4. Learn where each signal lives in the interface.

## Documentation Layers

### Primitives

Primitive pages define the canonical vocabulary of the system:

- [Ratio Price](/docs/primitives/ratio-price)
- [Displacement](/docs/primitives/displacement)
- [Depth](/docs/primitives/depth)
- [Cumulative Depth](/docs/primitives/cumulative-depth)
- [Log(A/B) Depth](/docs/primitives/log-ab-depth)
- [Net Imbalance](/docs/primitives/net-imbalance)
- [Centroid](/docs/primitives/centroid)
- [Trade Flow](/docs/primitives/trade-flow)
- [Trade Profile](/docs/primitives/trade-profile)
- [Trade Imbalance](/docs/primitives/trade-imbalance)
- [SLS](/docs/primitives/sls)

### Tutorials

Tutorial pages turn those primitives into scenario-based reasoning:

- [Absorption vs Expansion](/docs/tutorials/absorption-vs-expansion)
- [Liquidity Vacuum](/docs/tutorials/liquidity-vacuum)
- [Adverse Selection](/docs/tutorials/adverse-selection)
- [Exhaustion vs Continuation](/docs/tutorials/exhaustion-vs-continuation)
- [Structural Trap](/docs/tutorials/structural-trap)
- [Momentum Alignment](/docs/tutorials/momentum-alignment)

### Visual Reference

Visual reference pages connect metrics to the Book Duplex interface:

- [Chart Panels](/docs/visual-reference/chart-panels)
- [Signals Panel](/docs/visual-reference/signals-panel)
- [Settings Panel](/docs/visual-reference/settings-panel)
- [Scanner](/docs/visual-reference/scanner)
- [Trade Profile Panel](/docs/visual-reference/trade-profile)

### Frameworks

Framework pages compress the system into reusable mental shortcuts:

- [Pressure, Friction, Participation](/docs/frameworks/pressure-friction-participation)
- [Alignment vs Conflict](/docs/frameworks/alignment-vs-conflict)

## Learning Path

### Phase 1: Isolated Primitives

Start with Position, then Structure, then Flow. The goal is to stop translating the metrics and start reading them directly.

### Phase 2: Pair Interactions

Read combinations like:

- displacement + depth
- log(A/B) + centroid
- trade profile + depth
- flow + structure

### Phase 3: Full-System Reads

Use tutorials like [Structural Trap](/docs/tutorials/structural-trap) and [Momentum Alignment](/docs/tutorials/momentum-alignment) to learn how agreement and conflict propagate across the system.

## Deterministic Reading Standard

Every good read should answer:

1. Where is price relative to equilibrium?
2. What liquidity exists near the execution zone?
3. Who is actually participating?
4. Do structure and flow agree?
5. What would invalidate the read?

## Next Step

Continue to [Mental Model](/docs/introduction/mental-model) before moving into the primitive pages.
