---
title: Chart Panels
sidebar_position: 1
description: Panel-by-panel reference for the Book Duplex interface.
---

# Chart Panels

## Panel Purpose

The chart layout is designed to make the Position, Structure, Flow model visually simultaneous. The user should not have to mentally jump between disconnected views.

## What You Are Looking At

The main panel system usually resolves into four reading zones:

1. ratio price and context
2. structural book panels
3. SLS evolution panels
4. trade profile and execution panels

## Metrics Present

- [Ratio Price](/docs/primitives/ratio-price)
- [Displacement](/docs/primitives/displacement)
- [Net Imbalance](/docs/primitives/net-imbalance)
- [Depth](/docs/primitives/depth)
- [Cumulative Depth](/docs/primitives/cumulative-depth)
- [Log(A/B) Depth](/docs/primitives/log-ab-depth)
- [SLS](/docs/primitives/sls)
- [Trade Profile](/docs/primitives/trade-profile)

## How To Read It

### Top-left: Ratio and Context

Start with price location and context. Ask whether the move is near equilibrium or stretched.

### Top-right: Structure

Read visible friction:

- where is depth thick
- where is depth thin
- is near-mid structure supportive or hostile

### Bottom-left: SLS

Read structural evolution:

- is gravity rising
- is curvature stable or unstable
- is RAW showing persistent regime or a flip

### Bottom-right: Trade Profile

Read execution quality:

- who is acting
- where are they acting
- are large trades concentrated near the execution edge

## Common Patterns

### Continuation

Price extended, supply thin, positive near-mid structure, large buy flow near mid.

### Absorption

Price pressing into thick opposing depth while aggressive flow continues and trade profile lights up at the wall.

### Fragile Move

Price moves while the trade profile is sparse and both sides of depth are thinning.

## Linked Primitives

- [Displacement](/docs/primitives/displacement)
- [Depth](/docs/primitives/depth)
- [Log(A/B) Depth](/docs/primitives/log-ab-depth)
- [SLS](/docs/primitives/sls)
- [Trade Profile](/docs/primitives/trade-profile)

## Linked Tutorials

- [Absorption vs Expansion](/docs/tutorials/absorption-vs-expansion)
- [Liquidity Vacuum](/docs/tutorials/liquidity-vacuum)
- [Momentum Alignment](/docs/tutorials/momentum-alignment)
