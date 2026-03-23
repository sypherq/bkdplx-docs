# Tutorial: Structural Trap (Flow vs Structure Conflict)

**Difficulty:** Phase 3 (Full System)

---

## Scenario Setup

The ratio (ETH/BTC) is moving higher. Trade flow is bullish — buyers are active, trade imbalance is positive. But the structural primitives disagree: Log(A/B) is negative near mid, net imbalance is negative, SLS gravity is flat or negative. The book does not believe in the move that flow is pushing.

When flow and structure conflict, one side is wrong. The structural trap occurs when flow drives price into a region that structure does not support — and then flow exhausts.

---

## Observations (Primitive Values)

```
Displacement:      +0.10% (extended upward by flow)
Ratio Price:       rising
Log(A/B):          NEGATIVE near mid — supply exceeds demand at execution levels
Trade Flow:        aggressive buying — positive trade imbalance
Trade Profile:     medium trades (500–2K) buying near mid
Net Imbalance:     NEGATIVE — aggregate book favors supply
Imbalance Centroid: NEGATIVE — center of structural pressure is on supply side, near mid
SLS Gravity:       flat or slightly NEGATIVE — structure does NOT confirm the move
SLS Curvature:     elevated — structural instability, regime is unsettled
Depth:             supply thick near and ahead, demand thin behind
```

---

## Interpretation Engine

**Step 1:** Price action looks bullish. Ratio is rising. Flow is buying. On the surface, this is a continuation setup.

**Step 2:** But Log(A/B) is negative near mid. The *structural* book does not support the price. Supply is heavier than demand at the execution zone. Flow is pushing against structural resistance.

**Step 3:** Net imbalance is negative. The aggregate book favors supply. The centroid is negative and near mid — supply pressure is not distant and theoretical, it is immediate and proximate.

**Step 4:** SLS gravity is not confirming. In a genuine structural move, gravity would be positive and rising. Its absence means the structural regime has not shifted — flow is operating in hostile territory.

**Step 5:** This is the trap: flow has pushed price into a region where structure opposes it. If flow sustains, it can force a structural regime change (transition to absorption → breakout). If flow weakens, structure wins — price drops back and the buyers are trapped.

---

## Rule Blocks

```
RULE — STRUCTURAL TRAP DETECTION:
IF trade flow positive AND Log(A/B) negative near mid AND SLS gravity flat/negative
→ flow-structure conflict — structural trap forming
→ flow is operating in hostile structural territory

RULE — TRAP RESOLUTION — STRUCTURE WINS:
IF structural trap detected AND trade flow weakening AND supply depth stable
→ flow exhausting against structure — reversal imminent
→ buyers who entered during the push are trapped at unfavorable prices

RULE — TRAP RESOLUTION — FLOW WINS:
IF structural trap detected AND trade flow intensifying AND supply depth depleting
→ flow overwhelming structure — forced regime change
→ transition to absorption → breakout as structure capitulates

RULE — TRAP SEVERITY:
IF centroid near mid AND curvature high AND flow weakening
→ high-severity trap — structural opposition is proximate and unstable
→ reversal will be sharp when flow fails
```

---

## Outcome Mapping

**IF structure wins (most common):**
Buy flow fades. Price stalls and then drops. The displacement contracts rapidly as structural supply pushes the ratio back. Traders who bought during the push are now holding at prices above the structural equilibrium. The reversal is often faster than the original push because:
1. The structural book was always opposed (supply was resting, waiting)
2. Trapped buyers may stop-out, adding sell flow to the reversal

**IF flow wins (less common, more powerful):**
The buyer is larger and more determined than the resting supply. Supply is consumed despite being thick. SLS gravity eventually flips positive as the structural regime changes. Once the flip happens, the move accelerates because the former supply zone becomes a gap — the book is now thin behind the new price.

---

## Key Distinction from Other Tutorials

| Setup | Key Difference |
|---|---|
| **Structural Trap** | Flow and structure DISAGREE — flow pushes price, structure opposes |
| **Exhaustion** | Flow and structure initially AGREED but flow is fading |
| **Adverse Selection** | Flow is being specifically targeted by a passive counter-party |
| **Absorption** | Flow is consuming structure at a specific level (not system-wide conflict) |

---

## What Would Invalidate This?

- The negative Log(A/B) is driven by a single large resting order (not broad supply) — if that order is pulled, the structural picture changes instantly
- The buy flow is from a forced liquidation cascade that is self-sustaining (more liquidations trigger more buying) — flow will not exhaust on its own
- SLS gravity turns sharply positive — the structural regime actually is flipping, and the initial negative reading was transient
- A new information event (news, on-chain activity) fundamentally changes the relative valuation, making the structural book stale

---

## Primitives Used

- [Trade Flow](/docs/primitives/trade-flow) — the bullish flow that creates the trap
- [Log(A/B) Depth](/docs/primitives/log-depth) — the structural opposition (negative near mid)
- [Net Imbalance](/docs/primitives/net-imbalance) — aggregate structural bias against the flow
- [Imbalance Centroid](/docs/primitives/imbalance-centroid) — proximity of structural opposition
- [SLS](/docs/primitives/sls) — gravity (not confirming) and curvature (instability)
- [Displacement](/docs/primitives/displacement) — the extension created by flow in hostile territory
- [Depth](/docs/primitives/depth) — supply thickness creating the trap
- [Ratio Price](/docs/primitives/ratio-price) — the price action that appears bullish
- [Trade Profile](/docs/primitives/trade-profile) — participation quality of the flow
