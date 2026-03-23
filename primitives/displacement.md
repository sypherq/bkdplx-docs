# Price Displacement

**Category:** Position

---

## Formula

```
displacement = log( ratio_price / MA(ratio_price, window) )
```

Expressed as a percentage. The moving average window is configurable (default: session-based).

---

## Intuition

Displacement measures how far the rubber band is stretched. A market at equilibrium has displacement near zero. When displacement grows, the ratio has moved away from its recent average — it is *extended*. Extension alone does not predict reversal; it tells you there is stored energy. What happens next depends on whether flow sustains the move or structure resists it.

---

## What It Answers

> **Are we stretched?**

How far the current ratio price has deviated from its recent moving average, in log-percentage terms.

---

## Visual Representation

- **Panel:** Log(A/B) depth chart — displacement overlay
- **Display:** Vertical line drawn at the displacement percentage, with shaded region from center to current value
- **Label:** Signed percentage (e.g., `+0.03%` or `-0.12%`)
- **Trail:** Optional historical trail of past displacement values (faded lines)

---

## Behavioral Interpretation

| Condition | Interpretation |
|---|---|
| IF displacement near 0 | THEN market at equilibrium — no directional stretch |
| IF displacement positive and growing | THEN A strengthening vs B beyond recent norms — extended upward |
| IF displacement negative and growing | THEN B strengthening vs A beyond recent norms — extended downward |
| IF displacement high AND flow strong | THEN continuation — momentum sustains extension |
| IF displacement high AND flow weak | THEN exhaustion — extension unsupported, reversion likely |

---

## Failure Modes

- **Window sensitivity:** Short windows produce noisy displacement. Long windows make displacement slow to react. There is no universally correct window — the user must match it to their time horizon.
- **Trending markets:** In a sustained trend, displacement stays elevated for long periods. This is not "stretched" in the mean-reversion sense — it reflects genuine regime shift. Treating persistent displacement as overextension leads to premature fade trades.
- **Low-volatility regimes:** Displacement near zero does not mean "safe." It can mean the market is coiling before a large move.

---

## Interactions

**With [Depth](/docs/primitives/depth):**
Displacement high + thin depth ahead = continuation likely. Displacement high + thick opposing depth = rejection likely. This is one of the highest-value combinations in the system.

**With [Trade Flow](/docs/primitives/trade-flow):**
Displacement tells you *where* the rubber band is. Flow tells you whether someone is still pulling. High displacement + strong flow = continuation. High displacement + dying flow = exhaustion.

**With [SLS Gravity](/docs/primitives/sls):**
Rising gravity aligned with displacement direction = structural confirmation. Gravity opposing displacement = structural friction, likely reversion.

**With [Imbalance Centroid](/docs/primitives/imbalance-centroid):**
Displacement shows the price-level stretch. Centroid shows where the liquidity-level pressure sits. If both point the same direction, alignment is strong.

---

## Linked Tutorials

- [Exhaustion vs Continuation](/docs/tutorials/exhaustion-vs-continuation)
- [Momentum Alignment](/docs/tutorials/momentum-alignment)
- [Liquidity Vacuum](/docs/tutorials/liquidity-vacuum)
- [Adverse Selection](/docs/tutorials/adverse-selection)
