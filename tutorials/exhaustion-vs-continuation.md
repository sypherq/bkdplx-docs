# Tutorial: Exhaustion vs Continuation

**Difficulty:** Phase 2 (Pair Interactions)

---

## Scenario Setup

The ratio (ETH/BTC) has been running higher for several minutes. Displacement is elevated — the ratio is meaningfully extended above its moving average. The question every participant faces: is this move exhausting, or does it have more to give?

The answer is never in the displacement alone. Extension is stored energy. What determines whether it releases (reversal) or sustains (continuation) is whether flow and structure are still feeding it.

---

## Observations — Exhaustion Case

```
Displacement:      +0.15% (significantly extended)
Log(A/B):          positive but declining — demand thinning near mid
Trade Flow:        weakening — buy volume decreasing, trade imbalance fading toward 0
Trade Profile:     large trades absent — only small (< 500) trades remaining
Net Imbalance:     was positive, now flattening
SLS Gravity:       positive but decelerating — structural momentum fading
SLS Curvature:     rising — structural instability increasing
Depth:             supply building below (resting sell orders accumulating)
```

## Observations — Continuation Case

```
Displacement:      +0.15% (significantly extended)
Log(A/B):          positive and stable or growing — demand replenishing near mid
Trade Flow:        sustained — buy volume steady, trade imbalance holding positive
Trade Profile:     large trades (> 10K) still appearing — institutional flow ongoing
Net Imbalance:     positive and stable
SLS Gravity:       positive and accelerating — structural momentum building
SLS Curvature:     low — structure is stable in current regime
Depth:             supply thin ahead — minimal friction for further extension
```

---

## Interpretation Engine

**Step 1:** Displacement is the same in both cases (+0.15%). Extension alone does not distinguish exhaustion from continuation.

**Step 2:** The key differentiator is flow quality. In exhaustion, buy flow is fading — the fuel is running out. In continuation, buy flow is sustained by high-conviction (large) trades.

**Step 3:** Structure confirms or denies. In exhaustion, SLS gravity is decelerating and curvature is rising — structure is becoming unstable. In continuation, gravity is accelerating and curvature is low — structure supports the move.

**Step 4:** Depth ahead matters. If supply is thin, continuation requires less fuel. If supply is building (sellers positioning), continuation requires more fuel than the fading flow can provide.

**Step 5:** The trade profile tells you *who* is still participating. If large trades disappear and only small trades remain, the high-conviction participants have finished. Retail noise cannot sustain extension.

---

## Rule Blocks

```
RULE — EXHAUSTION:
IF displacement high AND trade flow weakening AND SLS gravity decelerating
→ exhaustion — the move has consumed its fuel
→ expect displacement contraction (reversion toward equilibrium)

RULE — CONTINUATION:
IF displacement high AND trade flow sustained AND SLS gravity accelerating AND depth thin ahead
→ continuation — fuel remains and friction is low
→ expect further displacement extension

RULE — EXHAUSTION TRIGGER:
IF exhaustion conditions present AND supply depth building below current price
→ reversal imminent — sellers are positioning for the pullback

RULE — CONTINUATION ACCELERATION:
IF continuation conditions present AND SLS curvature low AND no significant supply wall ahead
→ acceleration likely — nothing structural or participatory resists the move
```

---

## Outcome Mapping

**IF exhaustion confirmed:**
Displacement begins contracting. The ratio reverts toward the moving average. Trade imbalance may flip negative as momentum traders reverse. The speed of reversion depends on how thin the demand-side depth is — if demand is also thin, reversion can be as fast as the original extension.

**IF continuation confirmed:**
Displacement extends further. Supply ahead is consumed (expansion). New supply walls that appear are quickly absorbed. The move continues until one of the exhaustion conditions triggers — flow quality degrades, structure decelerates, or thick supply appears.

**IF ambiguous (mixed signals):**
The most common real-world case. Flow is present but not strong. Gravity is positive but not accelerating. In this case, the near-mid Log(A/B) reading becomes the tiebreaker: positive near mid = lean continuation, negative near mid = lean exhaustion.

---

## What Would Invalidate This?

- **Exhaustion invalidated:** Fresh large buy flow appears (new participant entering) — the flow quality was fading from one source but a new one arrives
- **Continuation invalidated:** A massive supply wall appears at the next level (institutional sell order placed) — the structural terrain changed after the read
- **Both invalidated:** External event (news, liquidation cascade) overwhelms the microstructure signals entirely — the system models structure and flow, not exogenous shocks

---

## Primitives Used

- [Displacement](/docs/primitives/displacement) — the extension that defines the setup
- [Trade Flow](/docs/primitives/trade-flow) — fuel gauge for the move
- [Trade Imbalance](/docs/primitives/trade-imbalance) — directional bias strength
- [Trade Profile](/docs/primitives/trade-profile) — participation quality (who is still active)
- [SLS](/docs/primitives/sls) — gravity (structural momentum) and curvature (instability)
- [Depth](/docs/primitives/depth) — friction ahead and behind
- [Log(A/B) Depth](/docs/primitives/log-depth) — near-mid structural bias as tiebreaker
- [Net Imbalance](/docs/primitives/net-imbalance) — aggregate structural direction
- [Ratio Price](/docs/primitives/ratio-price) — the price move being evaluated
