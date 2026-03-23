# Depth (Orderbook)

**Category:** Structure

---

## Formula

```
D_k = demand liquidity at bucket k (USD)
S_k = supply liquidity at bucket k (USD)
```

Each bucket spans a price range defined by the bucket scheme (e.g., 0.02% per level with 25 buckets per side = 0.50% total depth).

Demand at bucket k = `bids(A)[k] + asks(B)[k]` — liquidity that would push the ratio up.
Supply at bucket k = `asks(A)[k] + bids(B)[k]` — liquidity that would push the ratio down.

---

## Intuition

Depth is the raw material of the orderbook. It tells you what exists at each price level — how much liquidity is resting, waiting to be consumed. Thick depth means friction: price has to work harder to move through it. Thin depth means ease: price can slip through with minimal effort. Depth is not directional on its own — it defines the *terrain* that flow must navigate.

---

## What It Answers

> **What exists?**

The distribution of resting liquidity across price levels, showing where resistance and support live.

---

## Visual Representation

- **Panel:** Depth chart (top-right, "DEPTH" section)
- **Display:** Mirrored horizontal bar chart — demand bars extend left from center, supply bars extend right
- **Color:** Demand bars use the positive color (teal/green), supply bars use the negative color (orange/red)
- **Axis:** USD value per bucket on the Y-axis; percentage distance from mid on the X-axis

---

## Behavioral Interpretation

| Condition | Interpretation |
|---|---|
| IF thick depth at a level | THEN high friction — price movement through this level requires significant volume |
| IF thin depth at a level | THEN low friction — price can move easily, potential for rapid displacement |
| IF depth asymmetric (thick demand, thin supply) | THEN structural support for upward movement — supply is the path of least resistance |
| IF depth asymmetric (thin demand, thick supply) | THEN structural resistance against upward movement — demand side is vulnerable |
| IF depth thinning over time at current levels | THEN liquidity withdrawing — participants are stepping away, volatility expansion likely |

---

## Failure Modes

- **Spoofing:** Large resting orders that are withdrawn before execution. Depth appears thick but evaporates on approach. Watch for depth that repeatedly appears and disappears at the same level.
- **Iceberg orders:** Hidden liquidity not visible in the book. Depth appears thin but actual resistance is much higher. Trade flow reveals this — absorption without book depletion indicates hidden orders.
- **Stale snapshots:** If the depth snapshot is delayed (high `lag_ms`), the displayed depth may not reflect the current state. The system tracks staleness and flags it.

---

## Interactions

**With [Displacement](/docs/primitives/displacement):**
The highest-value structural combination. Displacement tells you how far price is stretched; depth tells you what stands in its way. Stretched + thin ahead = continuation. Stretched + thick opposing = rejection.

**With [Trade Flow](/docs/primitives/trade-flow) / [Trade Profile](/docs/primitives/trade-profile):**
Flow hitting thick depth = absorption (orders being consumed). Flow hitting thin depth = expansion (price slicing through). This distinction is the foundation of the Absorption vs Expansion tutorial.

**With [Log(A/B) Depth](/docs/primitives/log-depth):**
Raw depth shows absolute USD values. Log(A/B) transforms depth into a relative imbalance ratio, making structural bias visible at a glance.

**With [SLS](/docs/primitives/sls):**
SLS tracks how depth structure evolves over time. Rising SLS gravity + thinning depth = structural expansion signal.

---

## Linked Tutorials

- [Absorption vs Expansion](/docs/tutorials/absorption-vs-expansion)
- [Liquidity Vacuum](/docs/tutorials/liquidity-vacuum)
- [Exhaustion vs Continuation](/docs/tutorials/exhaustion-vs-continuation)
- [Structural Trap](/docs/tutorials/structural-trap)
