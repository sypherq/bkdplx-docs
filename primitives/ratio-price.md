# Ratio Price

**Category:** Position

---

## Formula

```
ratio_price = price(A) / price(B)
```

Where A is the numerator asset and B is the denominator asset (e.g., ETH/BTC).

---

## Intuition

Ratio price strips away the noise of the broader market. If both ETH and BTC drop 5% because of a macro selloff, the ratio stays flat — the move was not about ETH vs BTC. When the ratio *does* move, it means one asset is genuinely strengthening or weakening relative to the other. It is the purest signal of relative conviction.

---

## What It Answers

> **Where are we?**

The current relative valuation between two assets, independent of USD market direction.

---

## Visual Representation

- **Panel:** Ratio Price chart (top-left)
- **Display:** Continuous line plot of A/B over the selected time window
- **Overlay:** Dashed lines for the ETH and BTC individual USD prices (dimmed)

---

## Behavioral Interpretation

| Condition | Interpretation |
|---|---|
| IF ratio rising | THEN A is outperforming B — relative demand favors A |
| IF ratio falling | THEN B is outperforming A — relative demand favors B |
| IF ratio flat while both USD prices move | THEN move is market-wide, not pair-specific — no relative edge |
| IF ratio trending with increasing slope | THEN momentum is building in the relative move |

---

## Failure Modes

- **Illiquid pairs:** If one leg has thin liquidity, the ratio can spike on small volume without reflecting genuine demand shifts.
- **Funding rate divergence:** Perpetual funding rates can create artificial ratio drift that does not reflect spot demand.
- **Stale leg:** If one exchange feed lags, the ratio temporarily distorts. The system flags this via `lag_ms`.

---

## Interactions

**With [Displacement](/docs/primitives/displacement):**
The ratio is the input to displacement. A rising ratio only matters in context — displacement tells you *how far* it has risen relative to recent equilibrium.

**With [Net Imbalance](/docs/primitives/net-imbalance):**
If ratio is rising AND net imbalance is positive, the structural book supports the move. If ratio is rising but imbalance is negative, the book disagrees — the move may stall.

**With [Trade Flow](/docs/primitives/trade-flow):**
Rising ratio with strong buy flow = confirmed move. Rising ratio with no flow = passive drift, fragile.

---

## Linked Tutorials

- [Exhaustion vs Continuation](/docs/tutorials/exhaustion-vs-continuation)
- [Momentum Alignment](/docs/tutorials/momentum-alignment)
- [Structural Trap](/docs/tutorials/structural-trap)
