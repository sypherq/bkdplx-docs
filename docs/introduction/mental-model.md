---
id: mental-model
title: Mental Model
sidebar_label: Mental Model
sidebar_position: 2
description: The Position, Structure, Flow framework behind Book Duplex.
---

# Mental Model

Every primitive in Book Duplex belongs to one of three buckets:

1. Position
2. Structure
3. Flow

Everything else is a transformation or interaction of those three.

## Position

Position answers where the pair is relative to equilibrium.

- [Ratio Price](/docs/primitives/ratio-price) tells you the relative valuation.
- [Displacement](/docs/primitives/displacement) tells you how stretched that valuation is.

Position is the state of price. It does not explain whether the move is allowed to continue.

## Structure

Structure answers what liquidity permits.

- [Depth](/docs/primitives/depth)
- [Cumulative Depth](/docs/primitives/cumulative-depth)
- [Log(A/B) Depth](/docs/primitives/log-ab-depth)
- [Net Imbalance](/docs/primitives/net-imbalance)
- [Centroid](/docs/primitives/centroid)
- [SLS](/docs/primitives/sls)

Structure is the terrain. It defines friction, support, resistance, and how that terrain is changing through time.

## Flow

Flow answers what participants are actually doing.

- [Trade Flow](/docs/primitives/trade-flow)
- [Trade Profile](/docs/primitives/trade-profile)
- [Trade Imbalance](/docs/primitives/trade-imbalance)

Flow is commitment. It is the capital that either confirms or fails to confirm the structural picture.

## The Core Compression

The whole system can be reduced to:

```text
pressure + friction + participation
```

- pressure: directional structural and flow bias
- friction: how hard the book makes movement
- participation: whether real traders are funding the move

## How Edge Appears

Edge does not come from a single metric. It comes from either:

- alignment
- conflict

Alignment means the system agrees. Conflict means one layer is lying, lagging, or being overrun.

## Canonical Interaction Examples

### Displacement + Depth

- stretched + thin liquidity ahead -> continuation
- stretched + thick opposing liquidity -> rejection

### Log(A/B) + Centroid

- positive near-mid imbalance -> immediate structural support
- positive imbalance far away -> latent support, not immediate support

### Trade Profile + Depth

- aggressive buying into thick supply -> absorption
- aggressive buying into thin supply -> expansion

### Flow vs Structure

- agreement -> stable moves
- conflict -> traps, adverse selection, or reversals

## Full-System Read

The highest-quality continuation read looks like:

```text
displacement positive
+ Log(A/B) positive near mid
+ centroid positive
+ trade flow positive
+ SLS gravity rising
-> continuation probability increases
```

The inverse uses the same logic in reverse.

## Next Steps

- Study the individual [Primitives](/docs/primitives/ratio-price)
- Then move into [Tutorials](/docs/tutorials/absorption-vs-expansion)
- Keep [Chart Panels](/docs/visual-reference/chart-panels) open while reading
