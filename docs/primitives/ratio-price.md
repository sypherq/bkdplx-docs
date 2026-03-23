---
title: Ratio Price
sidebar_position: 1
description: Relative valuation between two assets, independent of broad market drift.
---

# Ratio Price

**Category:** Position

## Formula

```text
ratio_price = price(A) / price(B)
```

Where `A` is the numerator asset and `B` is the denominator asset.

## Intuition

Ratio price strips away the broader market and isolates the relative relationship between two assets. If both legs move together because of macro conditions, the ratio stays stable. When the ratio moves, the relative balance between the pair is changing.

## What It Answers

> Where are we?

The current relative valuation between two assets, independent of USD market direction.

## Visual Representation

- Panel: Ratio Price chart
- Display: continuous line plot of `A / B`
- Context: read alongside [Displacement](/docs/primitives/displacement)

## Behavioral Interpretation

| Condition | Interpretation |
|---|---|
| IF ratio rising | THEN A is outperforming B |
| IF ratio falling | THEN B is outperforming A |
| IF ratio flat while both USD prices move | THEN the move is broad-market, not pair-specific |
| IF ratio slope steepens | THEN relative momentum is building |

## Failure Modes

- Illiquid pairs can distort the ratio on small prints.
- Feed lag on one leg can create a temporary false move.
- Funding or venue-specific distortions can shift the ratio without reflecting spot conviction.

## Interactions

**With [Displacement](/docs/primitives/displacement):**
Ratio price is the input; displacement tells you how far current ratio is from recent equilibrium.

**With [Net Imbalance](/docs/primitives/net-imbalance):**
If the ratio rises while net imbalance is positive, structure confirms. If the ratio rises while imbalance is negative, the move is fragile.

**With [Trade Flow](/docs/primitives/trade-flow):**
Rising ratio with strong buy flow is confirmed participation. Rising ratio with weak flow is passive drift.

## Linked Tutorials

- [Exhaustion vs Continuation](/docs/tutorials/exhaustion-vs-continuation)
- [Momentum Alignment](/docs/tutorials/momentum-alignment)
- [Structural Trap](/docs/tutorials/structural-trap)
