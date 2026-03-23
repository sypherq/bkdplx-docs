# Log(A/B) Depth

**Category:** Structure

---

## Formula

```
L(k) = log( Demand_k / Supply_k )
```

Per-bucket log-ratio of demand to supply liquidity. Positive = demand-heavy. Negative = supply-heavy. Zero = balanced.

Cumulative form: `CumL(k) = log( CumDemand(k) / CumSupply(k) )`

---

## Intuition

Raw depth numbers are hard to compare — $4.2M of demand vs $3.8M of supply at bucket 5 requires mental arithmetic. The log ratio compresses this into a single number: positive means demand dominates, negative means supply dominates, and the magnitude tells you by how much. It turns a two-sided chart into a one-dimensional structural bias reading at every level.

---

## What It Answers

> **Who dominates structurally?**

The relative balance of demand vs supply liquidity at each price level, expressed as a signed log-ratio.

---

## Visual Representation

- **Panel:** Log(A/B) chart — the histogram beneath the depth chart labeled `L(k) = log(A/B)`
- **Display:** Vertical bars per bucket — positive bars (demand-dominant) extend upward, negative bars (supply-dominant) extend downward
- **Color:** Bars colored by direction — teal/green for demand-dominant, orange/red for supply-dominant
- **Displacement overlay:** Vertical line showing current price displacement overlaid on the histogram

---

## Behavioral Interpretation

| Condition | Interpretation |
|---|---|
| IF L(k) > 0 near mid | THEN demand dominates near current price — structural support for ratio to rise |
| IF L(k) < 0 near mid | THEN supply dominates near current price — structural pressure for ratio to fall |
| IF L(k) positive across most buckets | THEN broad structural demand dominance — the entire visible book favors the A-side |
| IF L(k) flips sign between near and far buckets | THEN structural regime changes with distance — near-mid and far-field tell different stories |
| IF L(k) magnitude increasing over time | THEN structural conviction growing — one side is building depth faster |

---

## Failure Modes

- **Log amplification at extremes:** When one side is near-zero and the other is large, the log ratio spikes. A bucket with $50 demand and $5 supply gives L(k) = 2.3, but the absolute amounts are negligible. Always cross-reference with raw depth totals.
- **Symmetric withdrawal:** Both sides pulling liquidity simultaneously keeps L(k) stable while total depth collapses. The ratio looks balanced but the market is actually fragile. Check raw depth alongside log ratio.

---

## Interactions

**With [Imbalance Centroid](/docs/primitives/imbalance-centroid):**
Log(A/B) shows the imbalance *at each level*. The centroid compresses this into a single location: where is the center of mass of that imbalance? Together they answer both "which direction" and "how close."

**With [Net Imbalance](/docs/primitives/net-imbalance):**
Net imbalance is the sum across all buckets. Log(A/B) is the per-bucket breakdown. Net imbalance can be positive while individual near-mid buckets are negative — the aggregate hides the near-mid story.

**With [Displacement](/docs/primitives/displacement):**
Displacement shows where price is. Log(A/B) shows what structure supports. If displacement is positive and Log(A/B) is positive near mid, structure confirms the move. If they disagree, a structural trap may be forming.

**With [SLS](/docs/primitives/sls):**
SLS RAW tracks the evolution of L(k) over time as a heatmap. The current L(k) snapshot is one column in the SLS surface.

---

## Linked Tutorials

- [Absorption vs Expansion](/docs/tutorials/absorption-vs-expansion)
- [Momentum Alignment](/docs/tutorials/momentum-alignment)
- [Structural Trap](/docs/tutorials/structural-trap)
- [Adverse Selection](/docs/tutorials/adverse-selection)
