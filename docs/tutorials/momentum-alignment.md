# Tutorial: Momentum Alignment (Full System Agreement)

**Difficulty:** Phase 3 (Full System)

---

## Scenario Setup

This is the highest-conviction setup in the system. Every primitive category — Position, Structure, and Flow — agrees. Displacement is positive. The book favors demand. Flow is actively buying. SLS confirms structural momentum. There are no conflicts, no traps, no ambiguity.

Full alignment is rare. Most of the time, at least one primitive disagrees. When everything lines up, the probability of continuation is at its highest. The system is not predicting price — but it is showing that pressure, friction, and participation all point the same direction.

---

## Observations (Primitive Values)

```
Displacement:      +0.12% (extended upward, moderate-to-high)
Ratio Price:       trending up, slope increasing

Log(A/B):          POSITIVE near mid and across most visible buckets
Depth:             thin supply ahead, thick demand behind
Cumulative Depth:  demand cumulative >> supply cumulative
Net Imbalance:     strongly POSITIVE
Centroid:          POSITIVE, near mid — demand pressure is proximate

Trade Flow:        aggressive buying — strong positive trade imbalance
Trade Profile:     large trades (> 10K) concentrated on buy side near mid
Trade Imbalance:   +0.6 to +0.8 range — strong directional bias

SLS Gravity:       POSITIVE and accelerating
SLS Curvature:     LOW — structure is stable in current regime
SLS RAW:           sustained teal/green near mid over recent window
```

---

## Interpretation Engine

**Step 1 — Position:** Displacement is positive and moderate. The ratio is extended but within a range where continuation is structurally feasible. It is not at exhaustion levels.

**Step 2 — Structure (Book):** Log(A/B) is positive everywhere visible. Demand exceeds supply across the board. The centroid is positive and near mid — this is not distant positioning, this is proximate structural dominance. Net imbalance confirms in aggregate.

**Step 3 — Structure (Evolution):** SLS gravity is positive and accelerating — the structural bias has been *building*, not just present as a snapshot. Curvature is low — the regime is stable. This is not an unstable transitional state; it is a settled structural trend.

**Step 4 — Flow:** Trade flow is actively buying. Trade imbalance is strongly positive. The trade profile shows large-size participation — not retail noise. The flow has conviction.

**Step 5 — Alignment:** All three categories agree:
- Position: extended in the bullish direction
- Structure: supports the bullish direction (book, gravity, centroid)
- Flow: actively pushing the bullish direction (large trades, high imbalance)

No primitive is in conflict. No warning flags are present.

---

## Rule Blocks

```
RULE — FULL ALIGNMENT:
IF displacement positive
AND Log(A/B) positive near mid
AND centroid positive
AND trade flow positive (strong imbalance)
AND SLS gravity positive and rising
→ full system alignment — highest-conviction continuation signal

RULE — ALIGNMENT QUALITY:
IF full alignment present AND large trades in profile AND curvature low
→ institutional-grade alignment — conviction is high and structure is stable
→ continuation probability at maximum

RULE — ALIGNMENT DURATION:
IF full alignment sustained for > 2 SLS windows
→ regime confirmed — this is not a transient snapshot
→ trust the signal until a primitive breaks alignment

RULE — ALIGNMENT BREAK:
IF any ONE primitive flips (flow weakens, gravity decelerates, L(k) turns negative near mid)
→ alignment broken — transition to [Exhaustion vs Continuation](/docs/tutorials/exhaustion-vs-continuation)
→ re-evaluate each primitive independently
```

---

## Outcome Mapping

**IF alignment holds:**
Ratio continues to extend. Supply is thin ahead and is consumed on approach (expansion dynamics). Each wave of buying reinforces the structural bias — gravity continues rising, L(k) stays positive, centroid stays near mid. The move sustains until one or more primitives break.

**IF one primitive breaks:**
The setup transitions. The most common breaks:
1. **Flow weakens first** → exhaustion scenario. Structure was right, flow ran out.
2. **Supply appears (depth changes)** → new structural friction. Transition to absorption question.
3. **Gravity decelerates** → structural momentum fading. Early warning before flow or price react.

**IF alignment breaks across multiple primitives simultaneously:**
Rare but sharp. Usually caused by an external event. The reversal will be violent because the prior alignment attracted positioned participants who now need to exit.

---

## The Inverse — Full Bearish Alignment

The same framework applies in reverse:

```
Displacement:      negative
Log(A/B):          negative near mid
Centroid:          negative
Trade flow:        aggressive selling
SLS Gravity:       negative and accelerating
```

→ Full bearish alignment. Same rules, mirrored direction.

---

## What Would Invalidate This?

- **Displacement extreme:** If displacement reaches +0.25% or beyond without a pause, even full alignment cannot prevent exhaustion indefinitely. The rubber band has limits.
- **Hidden supply:** A large resting iceberg order ahead that is not visible in the book. Flow hits what looks like thin supply but encounters hidden resistance. Trade profile will reveal this — absorption without visible depth depletion.
- **External shock:** News, exchange outage, or macro event that overrides microstructure signals. The system models internal dynamics; exogenous events are outside its scope.
- **Low absolute liquidity:** Full alignment on a pair with very thin books overall (< $200K total depth) is less reliable — the signals are more noisy and a single large participant can distort every primitive.

---

## Primitives Used

- [Ratio Price](/docs/primitives/ratio-price) — the trending price confirming directional move
- [Displacement](/docs/primitives/displacement) — position measurement (how extended)
- [Log(A/B) Depth](/docs/primitives/log-ab-depth) — structural imbalance across all levels
- [Depth](/docs/primitives/depth) — friction analysis (thin supply, thick demand)
- [Cumulative Depth](/docs/primitives/cumulative-depth) — total friction measurement
- [Net Imbalance](/docs/primitives/net-imbalance) — aggregate structural bias
- [Centroid](/docs/primitives/centroid) — proximity of structural pressure
- [Trade Flow](/docs/primitives/trade-flow) — active participation direction
- [Trade Profile](/docs/primitives/trade-profile) — participation quality (size tiers)
- [Trade Imbalance](/docs/primitives/trade-imbalance) — aggregate flow bias
- [SLS](/docs/primitives/sls) — gravity (structural momentum) and curvature (stability)
