---
title: Displacement
sidebar_position: 2
description: Distance from recent equilibrium in log-percentage terms.
---

# Price Displacement

**Category:** Position

## Formula

```text
displacement = log(ratio_price / MA(ratio_price, window))
```

Expressed as a percentage.

## Intuition

Displacement measures how far the rubber band is stretched. A market near equilibrium has displacement near zero. A large positive or negative value means the ratio has moved far from its recent average and now needs either structural confirmation or flow support to continue.

## What It Answers

> Are we stretched?

How far the current ratio price has deviated from its recent moving average.

## Visual Representation

- Panel: Ratio or structure context chart, usually as an overlay or signed indicator
- Display: signed percentage from recent equilibrium
- Companion read: [Depth](/docs/primitives/depth), [Trade Flow](/docs/primitives/trade-flow), and [SLS](/docs/primitives/sls)

## Behavioral Interpretation

| Condition | Interpretation |
|---|---|
| IF displacement near 0 | THEN market is near equilibrium |
| IF displacement positive and increasing | THEN the ratio is extending upward |
| IF displacement negative and increasing in magnitude | THEN the ratio is extending downward |
| IF displacement high and flow strong | THEN continuation risk increases |
| IF displacement high and flow weak | THEN exhaustion risk increases |

## Failure Modes

- Window sensitivity can make the signal too noisy or too slow.
- Persistent trends can keep displacement elevated without implying reversal.
- Low-volatility regimes can hide latent instability behind small displacement.

## Interactions

**With [Depth](/docs/primitives/depth):**
High displacement with thin opposing depth favors continuation. High displacement with thick opposing depth favors rejection or absorption.

**With [Trade Flow](/docs/primitives/trade-flow):**
High displacement plus strong flow means the move is still being funded. High displacement plus fading flow points toward exhaustion.

**With [SLS](/docs/primitives/sls):**
Rising gravity aligned with displacement confirms structure. Opposing gravity signals friction.

**With [Centroid](/docs/primitives/centroid):**
Displacement shows price stretch. Centroid shows where structural pressure sits. Alignment between them improves read quality.

## Linked Tutorials

- [Exhaustion vs Continuation](/docs/tutorials/exhaustion-vs-continuation)
- [Momentum Alignment](/docs/tutorials/momentum-alignment)
- [Liquidity Vacuum](/docs/tutorials/liquidity-vacuum)
- [Adverse Selection](/docs/tutorials/adverse-selection)
