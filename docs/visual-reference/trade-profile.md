---
title: Trade Profile Panel
sidebar_position: 5
description: How to read trade size, level concentration, and execution signatures.
---

# Trade Profile Panel

## Panel Purpose

The trade profile panel turns raw execution into structure-aware participation. It shows not just that trades happened, but what kind of trades happened and where.

## What You Are Looking At

A grid with:

- size tiers on one axis
- level buckets on the other axis
- color showing buy or sell pressure
- intensity showing concentration

## Metrics Present

- [Trade Profile](/docs/primitives/trade-profile)
- [Trade Flow](/docs/primitives/trade-flow)
- [Trade Imbalance](/docs/primitives/trade-imbalance)
- [Depth](/docs/primitives/depth)
- [Centroid](/docs/primitives/centroid)

## How To Read It

### Near-Mid Large Prints

Large trades near mid imply urgent participation. This is where conviction shows up first.

### Far-From-Mid Prints

Large trades away from mid imply liquidity seeking or inefficient execution. They matter, but less immediately.

### Sparse Profile

If price is moving but the profile is sparse, the move is probably being enabled by liquidity withdrawal rather than by committed flow.

## Common Patterns

### Absorption

Large prints repeatedly hit the same thick level while price stalls.

### Expansion

Large prints appear and price moves through thin opposing depth quickly.

### Adverse Selection

Buy-side prints show up near mid while structure worsens and supply replenishes.

## Linked Primitives

- [Trade Profile](/docs/primitives/trade-profile)
- [Trade Flow](/docs/primitives/trade-flow)
- [Trade Imbalance](/docs/primitives/trade-imbalance)
- [Depth](/docs/primitives/depth)
- [Centroid](/docs/primitives/centroid)

## Linked Tutorials

- [Absorption vs Expansion](/docs/tutorials/absorption-vs-expansion)
- [Adverse Selection](/docs/tutorials/adverse-selection)
- [Exhaustion vs Continuation](/docs/tutorials/exhaustion-vs-continuation)
