# Net Imbalance

**Category:** Structure

---

## Formula

```
Net Imbalance = Σ (D_k - S_k)  for all visible buckets k
```

The aggregate signed difference between total demand and total supply across the visible depth window.

---

## Intuition

Net imbalance is the single-number summary of the entire book: does more liquidity favor buying or selling? It collapses the full depth profile into one directional reading. A large positive net imbalance means the book is structurally stacked toward demand. It does not mean price *will* move — it means the structural *permission* favors that direction.

---

## What It Answers

> **What is the aggregate directional pressure?**

Whether the total resting liquidity across the visible book favors demand or supply, and by how much (in USD).

---

## Visual Representation

- **Panel:** Ratio Price chart — NET IMBALANCE subpanel (below the ratio price line)
- **Display:** Continuous area chart showing net imbalance over time
- **Color:** Positive fill (demand > supply) in teal/green, negative fill (supply > demand) in orange/red
- **Context:** Selected via `priceContextPrimitive` setting in the price context panel

---

## Behavioral Interpretation

| Condition | Interpretation |
|---|---|
| IF net imbalance positive | THEN aggregate book favors demand — structural tailwind for ratio to rise |
| IF net imbalance negative | THEN aggregate book favors supply — structural tailwind for ratio to fall |
| IF net imbalance trending positive | THEN demand building over time — structural momentum accumulating |
| IF net imbalance flipping sign repeatedly | THEN contested market — no dominant structural side |
| IF net imbalance large but displacement flat | THEN book is positioned but flow has not arrived — potential energy without kinetic trigger |

---

## Failure Modes

- **Far-field dominance:** A large positive net imbalance might be driven entirely by thick demand at 1–2% from mid, while near-mid is supply-heavy. The aggregate masks the near-mid reality. Always check Log(A/B) for the per-bucket breakdown.
- **Depth regime changes:** Net imbalance can shift rapidly when large orders are placed or pulled. A single large resting order far from mid can dominate the aggregate without affecting near-mid dynamics.
- **Normalization dependency:** In absolute USD terms, higher-cap pairs naturally have larger imbalance numbers. The magnitude is most meaningful when compared over time for the same pair, not across different pairs.

---

## Interactions

**With [Log(A/B) Depth](/docs/primitives/log-depth):**
Net imbalance is the aggregate; Log(A/B) is the spatial breakdown. They answer the same question at different resolutions. Use net imbalance for the quick read, Log(A/B) for the detailed map.

**With [Imbalance Centroid](/docs/primitives/imbalance-centroid):**
Net imbalance tells you *how much*. Centroid tells you *where*. A positive net imbalance with a near-mid centroid means the pressure is immediate. The same net imbalance with a far centroid means the pressure is latent.

**With [Trade Flow](/docs/primitives/trade-flow):**
Net imbalance (structure) vs trade flow (participation). If both agree (positive imbalance + aggressive buying), the move is structurally supported. If they conflict, one is likely to capitulate.

**With [Displacement](/docs/primitives/displacement):**
Rising displacement with rising net imbalance = structural confirmation. Rising displacement with falling net imbalance = the book is not supporting the price move — fragile extension.

---

## Linked Tutorials

- [Momentum Alignment](/docs/tutorials/momentum-alignment)
- [Structural Trap](/docs/tutorials/structural-trap)
- [Exhaustion vs Continuation](/docs/tutorials/exhaustion-vs-continuation)
