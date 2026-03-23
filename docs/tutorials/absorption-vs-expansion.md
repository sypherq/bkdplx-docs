# Tutorial: Absorption vs Expansion

**Difficulty:** Phase 2 (Pair Interactions)

---

## Scenario Setup

The ratio (ETH/BTC) has been trending upward for several minutes. Price is now approaching a level where the depth chart shows thick supply — a large concentration of resting sell liquidity. The question is: will this supply wall hold, or will it be consumed?

This is the fundamental structural question in any orderbook: does resting liquidity *stop* flow, or does flow *consume* resting liquidity?

---

## Observations (Primitive Values)

```
Displacement:      +0.08% (moderately extended upward)
Log(A/B):          positive near mid, negative at buckets 8–12 (thick supply zone)
Depth:             thin demand near mid, thick supply at 0.15–0.25% above
Trade Flow:        aggressive buy flow, concentrated near mid
Trade Profile:     large trades (> 10K) appearing in buy column near mid
Net Imbalance:     slightly negative (supply > demand in aggregate)
SLS Gravity:       positive, rising
```

---

## Interpretation Engine

**Step 1:** Displacement is moderately positive — the ratio is extended but not extreme. There is room for continuation.

**Step 2:** Log(A/B) is positive near mid (demand dominates the execution zone) but turns negative further out (supply dominates at distance). The structural setup is: near-mid supports the move, but a wall exists ahead.

**Step 3:** Trade profile shows large buy trades near mid. This is not retail noise — institutional or high-conviction flow is actively lifting offers.

**Step 4:** Net imbalance is slightly negative because of the thick supply wall. But the flow is concentrated near mid, where the L(k) is positive. The aggregate hides the near-mid dominance.

**Step 5:** SLS gravity is positive and rising — structure has been shifting in favor of demand over the recent window. The wall is being softened.

---

## Rule Blocks

```
RULE — ABSORPTION:
IF trade flow strong AND depth thick at target level AND depth NOT depleting
→ absorption is occurring — supply is absorbing demand without price moving through

RULE — EXPANSION:
IF trade flow strong AND depth thin at target level OR depth depleting rapidly
→ expansion is occurring — price is slicing through supply with minimal friction

RULE — ABSORPTION → BREAKOUT:
IF absorption sustained AND supply depth decreasing over time
→ wall is being consumed — breakout probability increasing

RULE — ABSORPTION → REJECTION:
IF absorption present BUT trade flow weakening AND supply depth stable
→ flow is exhausting against the wall — rejection likely
```

---

## Outcome Mapping

**IF absorption continues and supply depth decreases:**
The wall is being consumed. Each wave of buying removes more resting supply. When the cumulative depth above current price thins sufficiently, the next wave of buying will cause expansion — price breaks through with accelerating speed as remaining supply is sparse.

**IF flow weakens while supply remains intact:**
The wall wins. Buyers could not muster enough capital to consume the resting supply. Displacement begins to contract as the ratio reverts. Watch for sell flow to appear as momentum traders reverse.

---

## What Would Invalidate This?

- Supply is replenished as fast as it is consumed (market maker restocking) — absorption can continue indefinitely without breakout
- The buy flow is a single large order, not sustained participation — once that order fills, flow disappears
- SLS gravity flattens or reverses — structural support for the move is fading
- Displacement reaches extreme levels (+0.2% or beyond) without the wall breaking — exhaustion risk rises with each failed attempt

---

## Primitives Used

- [Depth](/docs/primitives/depth) — the supply wall and its depletion
- [Trade Flow](/docs/primitives/trade-flow) — aggressive buying into the wall
- [Trade Profile](/docs/primitives/trade-profile) — size tier of the flow (institutional vs retail)
- [Log(A/B) Depth](/docs/primitives/log-ab-depth) — structural imbalance at the wall vs near mid
- [Displacement](/docs/primitives/displacement) — how extended the ratio is
- [SLS](/docs/primitives/sls) — gravity confirming structural shift
- [Net Imbalance](/docs/primitives/net-imbalance) — aggregate vs near-mid structural reading
- [Cumulative Depth](/docs/primitives/cumulative-depth) — total cost to breach the wall
