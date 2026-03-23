---
title: Pressure, Friction, Participation
sidebar_position: 1
description: The core framework that compresses the Book Duplex system.
---

# Pressure, Friction, Participation

## Framework

The entire Book Duplex system can be compressed into three variables:

1. pressure
2. friction
3. participation

That compression is useful because every primitive belongs to one of those buckets or refines one of them.

## Pressure

Pressure is the directional tilt in the system.

It is mostly expressed through:

- [Log(A/B) Depth](/docs/primitives/log-ab-depth)
- [Net Imbalance](/docs/primitives/net-imbalance)
- [Centroid](/docs/primitives/centroid)
- [Trade Imbalance](/docs/primitives/trade-imbalance)

Pressure answers whether one side is structurally or aggressively dominant.

## Friction

Friction is what makes movement hard.

It is mostly expressed through:

- [Depth](/docs/primitives/depth)
- [Cumulative Depth](/docs/primitives/cumulative-depth)
- [SLS](/docs/primitives/sls)

Friction answers whether the market can actually absorb a directional push.

## Participation

Participation is whether real capital is present.

It is mostly expressed through:

- [Trade Flow](/docs/primitives/trade-flow)
- [Trade Profile](/docs/primitives/trade-profile)
- [Trade Imbalance](/docs/primitives/trade-imbalance)

Participation answers whether the move is being funded right now.

## Deterministic Rules

```text
RULE:
IF pressure up
AND friction low in the direction of the move
AND participation confirms
-> continuation probability increases
```

```text
RULE:
IF pressure up
AND friction high near the execution zone
AND participation remains strong
-> absorption question, not immediate breakout
```

```text
RULE:
IF pressure ambiguous
AND friction collapsing on both sides
AND participation quiet
-> liquidity vacuum, wait for the next flow impulse
```

## What This Framework Prevents

It prevents single-metric thinking. For example:

- high displacement alone is not bullish or bearish
- strong buy flow alone is not continuation
- positive net imbalance alone is not immediate support

The read only becomes stable once pressure, friction, and participation are evaluated together.

## Linked Primitives

- [Displacement](/docs/primitives/displacement)
- [Depth](/docs/primitives/depth)
- [Net Imbalance](/docs/primitives/net-imbalance)
- [Trade Flow](/docs/primitives/trade-flow)
- [Trade Profile](/docs/primitives/trade-profile)
- [SLS](/docs/primitives/sls)

## Linked Tutorials

- [Absorption vs Expansion](/docs/tutorials/absorption-vs-expansion)
- [Liquidity Vacuum](/docs/tutorials/liquidity-vacuum)
- [Momentum Alignment](/docs/tutorials/momentum-alignment)
