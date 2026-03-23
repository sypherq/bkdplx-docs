# Imbalance Centroid

**Category:** Structure

---

## Formula

```
x_centroid = Σ(x_k * I_k) / Σ(|I_k|)

where:
  x_k = mid-point of bucket k (percentage from mid)
  I_k = demand_k - supply_k (signed imbalance at bucket k)
```

The liquidity-weighted center of mass of structural imbalance across the visible depth window.

---

## Intuition

The centroid answers: where does the imbalance *live*? A positive net imbalance near mid-price is immediate — it sits right at the point of execution. The same imbalance far from mid is latent — it exists structurally but has no immediate effect. The centroid compresses the spatial distribution of imbalance into a single distance-from-mid reading, telling you whether structural pressure is proximate or remote.

---

## What It Answers

> **Where is pressure located?**

The distance from mid-price where the balance of structural demand vs supply is centered, expressed as a signed percentage.

---

## Visual Representation

- **Panel:** Depth chart — reference markers (circles) on the depth profile indicating the centroid location
- **Display:** Small circle marker at the centroid's x-position on the depth chart horizontal axis
- **Color:** Teal/green when centroid is on demand side, orange/red when on supply side

---

## Behavioral Interpretation

| Condition | Interpretation |
|---|---|
| IF centroid near mid (small magnitude) | THEN imbalance pressure is immediate — near the execution zone |
| IF centroid far from mid (large magnitude) | THEN imbalance pressure is latent — exists but not directly impacting current price |
| IF centroid positive | THEN center of structural pressure favors demand side |
| IF centroid negative | THEN center of structural pressure favors supply side |
| IF centroid moving toward mid over time | THEN structural pressure is migrating closer — becoming more actionable |
| IF centroid moving away from mid | THEN structural pressure is retreating — becoming more latent |

---

## Failure Modes

- **Averaging artifact:** The centroid is a weighted average. If there is strong demand near mid AND strong supply far from mid, the centroid may land in the middle where neither force actually exists. It is a summary, not a map.
- **Single-bucket dominance:** One massive order at a single level can pull the centroid to that level, making it look like broad structural pressure when it is actually one resting order.

---

## Interactions

**With [Log(A/B) Depth](/docs/primitives/log-depth):**
Log(A/B) shows the full spatial profile of imbalance. The centroid is the single-number summary of that profile's center of mass. Use Log(A/B) when you need the map; use centroid when you need the summary.

**With [Net Imbalance](/docs/primitives/net-imbalance):**
Net imbalance = magnitude. Centroid = location. Together: "how much pressure, and how close to price?"

**With [Trade Profile](/docs/primitives/trade-profile):**
Near-mid centroid + active trade flow at that level = immediate impact — flow is hitting the structural pressure zone. Far centroid + flow at mid = flow is executing in a low-pressure zone — inefficient structural interaction.

**With [Displacement](/docs/primitives/displacement):**
Displacement shows where price is relative to equilibrium. Centroid shows where structural pressure is relative to mid. When both point the same direction and centroid is near mid, alignment is strong.

---

## Linked Tutorials

- [Momentum Alignment](/docs/tutorials/momentum-alignment)
- [Adverse Selection](/docs/tutorials/adverse-selection)
- [Structural Trap](/docs/tutorials/structural-trap)
