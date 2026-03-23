# Cumulative Depth

**Category:** Structure

---

## Formula

```
CumD(x) = Σ D_k  for k = 0 to x
CumS(x) = Σ S_k  for k = 0 to x
```

Running sum of demand (or supply) USD liquidity from mid-price outward to level x.

---

## Intuition

Cumulative depth is the running total of what stands between the current price and a target level. A single bucket might look thin, but the sum of all buckets between here and there tells you the real cost of moving price. It answers: how much capital is required to push the ratio from here to *there*? When the cumulative curve is steep near mid, the market is defended. When it is flat, there is little resistance.

---

## What It Answers

> **How hard is it to move?**

The total liquidity that must be consumed to move the ratio price by a given percentage from mid.

---

## Visual Representation

- **Panel:** Depth chart (top-right) — cumulative curve overlay
- **Display:** Smooth curve overlaid on the bar depth chart, toggled via `showCumCurve` in settings
- **Axis:** Same horizontal axis as depth (percentage from mid); curve value = cumulative USD

---

## Behavioral Interpretation

| Condition | Interpretation |
|---|---|
| IF cumulative curve steep near mid | THEN heavy near-mid liquidity — price movement requires large flow |
| IF cumulative curve flat near mid | THEN thin near-mid liquidity — small flow can move price significantly |
| IF demand cumulative >> supply cumulative at same distance | THEN asymmetric support — easier to move supply-side (up in ratio) |
| IF supply cumulative >> demand cumulative at same distance | THEN asymmetric resistance — harder to push ratio up |

---

## Failure Modes

- **Misleading totals:** A large cumulative total far from mid does not protect the near-mid. Price moves happen at the near-mid first. Heavy depth at 2% away is irrelevant if the first 0.5% is empty.
- **Dynamic replenishment:** The cumulative curve is a snapshot. In fast markets, liquidity is pulled and re-placed constantly. The curve can change faster than the refresh rate in volatile conditions.

---

## Interactions

**With [Depth](/docs/primitives/depth):**
Depth shows per-bucket values. Cumulative depth integrates them. A thin single bucket inside a thick cumulative region is not a gap — it is noise. Cumulative smooths the bucket-level view.

**With [Displacement](/docs/primitives/displacement):**
Cumulative depth defines the *cost* of sustaining displacement. If displacement is +0.1% and cumulative supply ahead is thin, the displacement can grow cheaply. If cumulative supply is thick, maintaining the displacement requires sustained aggressive flow.

**With [Trade Flow](/docs/primitives/trade-flow):**
Cumulative depth divided by trade flow rate gives an approximate "time to breach" for a level — how long current flow intensity would take to consume the resting liquidity.

---

## Linked Tutorials

- [Absorption vs Expansion](/docs/tutorials/absorption-vs-expansion)
- [Liquidity Vacuum](/docs/tutorials/liquidity-vacuum)
