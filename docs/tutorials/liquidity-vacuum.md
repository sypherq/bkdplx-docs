# Tutorial: Liquidity Vacuum

**Difficulty:** Phase 2 (Pair Interactions)

---

## Scenario Setup

Both sides of the book are thinning simultaneously. Resting orders are being pulled — market makers are stepping back. The depth chart shows progressively less liquidity at each refresh. The ratio has been quiet, displacement near zero, but the structural terrain is changing rapidly underneath. The surface is calm but the foundation is hollow.

A liquidity vacuum is not a directional setup — it is a *volatility* setup. The next burst of flow in either direction will encounter minimal friction.

---

## Observations (Primitive Values)

```
Displacement:      near 0 (equilibrium)
Log(A/B):          near 0 across most buckets (balanced but thin)
Depth:             demand AND supply both declining — 40% below 5-minute average
Cumulative Depth:  curve flattening — total liquidity at 0.2% depth is half of recent norms
Trade Flow:        quiet — low volume, no directional bias
Trade Profile:     mostly empty — sparse small trades
Net Imbalance:     near 0 (both sides withdrawing proportionally)
SLS Curvature:     elevated — structural instability rising
SLS Gravity:       near 0 (no directional pull yet)
```

---

## Interpretation Engine

**Step 1:** Displacement is flat — no directional stretch. The ratio price looks normal.

**Step 2:** Log(A/B) is near zero — no structural imbalance. But this masks the critical fact: both numerator and denominator are shrinking. A ratio of small/small looks the same as large/large.

**Step 3:** Raw depth is collapsing on both sides. Cumulative depth curve is flat near mid. The structural terrain has become hollow.

**Step 4:** Trade flow is quiet — this is the calm before the storm. The vacuum is forming because of liquidity withdrawal, not aggressive activity.

**Step 5:** SLS curvature is rising despite flat gravity. Structure is becoming non-linear — the current equilibrium is fragile. Any directional impulse will meet minimal resistance.

---

## Rule Blocks

```
RULE — VACUUM DETECTION:
IF depth declining on BOTH sides AND net imbalance near 0 AND flow quiet
→ liquidity vacuum forming — volatility expansion imminent

RULE — VACUUM + DIRECTIONAL TRIGGER:
IF vacuum conditions present AND flow arrives in one direction
→ rapid displacement — price moves with minimal friction
→ magnitude of move proportional to depth thinness

RULE — VACUUM + CURVATURE:
IF vacuum present AND SLS curvature spiking
→ structural instability confirms vacuum — regime change likely within current SLS window

RULE — FALSE VACUUM:
IF depth declining BUT only on one side (other side stable)
→ NOT a vacuum — this is asymmetric withdrawal, a directional structural signal
→ treat as [Structural Trap](/docs/tutorials/structural-trap) instead
```

---

## Outcome Mapping

**IF aggressive buy flow arrives during vacuum:**
Ratio displaces upward rapidly. Thin supply is consumed immediately. Cumulative depth to the next significant supply level is small, so the move is fast. Displacement jumps from 0 to elevated in seconds rather than minutes.

**IF aggressive sell flow arrives during vacuum:**
Mirror case — ratio drops rapidly. Thin demand is consumed. The key insight is that the vacuum is symmetric: *the direction of the move depends entirely on who acts first.*

**IF no flow arrives and depth replenishes:**
The vacuum resolves without a move. Market makers re-enter, depth normalizes, curvature declines. This is the non-event case — the vacuum was present but never triggered.

---

## What Would Invalidate This?

- Depth is declining because of a single large order being pulled, not broad withdrawal — one-off, not systematic
- The pair is entering a low-activity session (e.g., UTC 0300–0700) where thin books are normal and not indicative of structural fragility
- SLS curvature is elevated due to a recent structural adjustment that has already completed, not ongoing instability
- Cumulative depth far from mid is still thick — the vacuum is only near-mid and will be contained by deeper resting orders

---

## Primitives Used

- [Depth](/docs/primitives/depth) — bilateral thinning as the vacuum signature
- [Cumulative Depth](/docs/primitives/cumulative-depth) — total friction measurement showing hollowed-out book
- [Displacement](/docs/primitives/displacement) — flat before the event, rapid movement after
- [SLS](/docs/primitives/sls) — curvature detecting structural instability
- [Trade Flow](/docs/primitives/trade-flow) — the directional trigger that breaks the vacuum
- [Log(A/B) Depth](/docs/primitives/log-ab-depth) — balanced ratio masking absolute thinness
- [Net Imbalance](/docs/primitives/net-imbalance) — near-zero confirming symmetric withdrawal
