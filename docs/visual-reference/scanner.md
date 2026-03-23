---
title: Scanner
sidebar_position: 4
description: Pair scanner reference for grouping, scores, recipes, and flags.
---

# Scanner

## Panel Purpose

The scanner turns the docs system into triage. Instead of reading one pair deeply from scratch, it ranks pairs by structural and flow conditions worth investigating.

## What You Are Looking At

The scanner typically exposes:

- symbol or pair
- recipe or setup family
- score columns
- filter flags
- structural and flow tags

## Metrics Present

- [Displacement](/docs/primitives/displacement)
- [Net Imbalance](/docs/primitives/net-imbalance)
- [Trade Imbalance](/docs/primitives/trade-imbalance)
- [SLS](/docs/primitives/sls)
- [Trade Profile](/docs/primitives/trade-profile)

## How To Read It

1. Sort by the recipe you care about.
2. Use scores to find candidates with unusual structure or flow.
3. Use flags to exclude noisy or low-liquidity setups.
4. Open the panel stack and confirm the signal visually before acting on it.

## Common Patterns

### Momentum Candidate

Positive displacement, positive structure, positive trade imbalance, rising gravity.

### Trap Candidate

High flow score but negative near-mid structure or weak gravity.

### Vacuum Candidate

Low net imbalance, low realized flow, collapsing depth, elevated curvature.

## Linked Primitives

- [Displacement](/docs/primitives/displacement)
- [Net Imbalance](/docs/primitives/net-imbalance)
- [Trade Imbalance](/docs/primitives/trade-imbalance)
- [SLS](/docs/primitives/sls)

## Linked Tutorials

- [Momentum Alignment](/docs/tutorials/momentum-alignment)
- [Structural Trap](/docs/tutorials/structural-trap)
- [Liquidity Vacuum](/docs/tutorials/liquidity-vacuum)
