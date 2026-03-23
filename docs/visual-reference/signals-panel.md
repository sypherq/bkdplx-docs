---
title: Signals Panel
sidebar_position: 2
description: How to interpret the compact signal and metric summary panel.
---

# Signals Panel

## Panel Purpose

The signals panel compresses the state of the system into a small set of readings. It is not the full analysis. It is the fast summary.

## What You Are Looking At

A stacked view of signed readings that answer:

- what direction the book favors
- whether the move is structurally stable
- whether the market is fragile

## Metrics Present

- [Net Imbalance](/docs/primitives/net-imbalance)
- [Trade Imbalance](/docs/primitives/trade-imbalance)
- [SLS](/docs/primitives/sls)
- [Displacement](/docs/primitives/displacement)
- [Centroid](/docs/primitives/centroid)

## How To Read It

1. Check displacement first. Is the pair stretched or neutral?
2. Check structural readings next. Does net imbalance and centroid support the current direction?
3. Check flow summary. Does trade imbalance confirm the structural bias?
4. Check SLS state. Is gravity reinforcing the move, or is curvature warning that the regime is unstable?

## Common Patterns

### Green but Weak

Positive readings with flat gravity and small trade imbalance. This is early support, not confirmed momentum.

### Green and Stable

Positive displacement, positive near-mid structure, strong trade imbalance, rising gravity, low curvature. This is the [Momentum Alignment](/docs/tutorials/momentum-alignment) state.

### Split Panel

Positive flow but negative structure, or the inverse. This is a conflict state that often resolves into [Structural Trap](/docs/tutorials/structural-trap) or [Adverse Selection](/docs/tutorials/adverse-selection).

## Linked Primitives

- [Net Imbalance](/docs/primitives/net-imbalance)
- [Trade Imbalance](/docs/primitives/trade-imbalance)
- [SLS](/docs/primitives/sls)
- [Centroid](/docs/primitives/centroid)

## Linked Tutorials

- [Adverse Selection](/docs/tutorials/adverse-selection)
- [Structural Trap](/docs/tutorials/structural-trap)
- [Momentum Alignment](/docs/tutorials/momentum-alignment)
