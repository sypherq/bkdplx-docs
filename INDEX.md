# Book Duplex — Primitives & Tutorials

> The system is not predicting price. It is modeling **pressure + friction + participation**.
> Edge emerges from alignment or conflict.

---

## Learning Path

### Phase 1: Primitives (Isolated)

Understand each primitive independently before combining them.

**Position — Where price is:**
1. [Ratio Price](/docs/primitives/ratio-price) — relative valuation between two assets
2. [Price Displacement](/docs/primitives/displacement) — distance from recent equilibrium

**Structure — What liquidity allows:**
3. [Depth](/docs/primitives/depth) — liquidity at each level
4. [Cumulative Depth](/docs/primitives/cumulative-depth) — total liquidity up to a level
5. [Log(A/B) Depth](/docs/primitives/log-depth) — structural imbalance per level
6. [Net Imbalance](/docs/primitives/net-imbalance) — aggregate directional pressure
7. [Imbalance Centroid](/docs/primitives/imbalance-centroid) — location of pressure
8. [SLS](/docs/primitives/sls) — structural evolution (RAW, Gravity, Curvature)

**Flow — What participants are doing:**
9. [Trade Flow](/docs/primitives/trade-flow) — executed activity
10. [Trade Profile](/docs/primitives/trade-profile) — execution by size and level
11. [Trade Imbalance](/docs/primitives/trade-imbalance) — aggressive participation bias

---

### Phase 2: Pair Interactions

Learn how two primitives combine to produce insight.

| Combination | What It Reveals |
|---|---|
| Displacement + Depth | Stretched + thin = continuation. Stretched + thick = rejection. |
| Log(A/B) + Centroid | Imbalance near mid = immediate. Imbalance far = latent. |
| Trade Profile + Depth | Buying into thick supply = absorption. Buying into thin = expansion. |
| Flow vs Structure | Agreement = strong moves. Conflict = traps / reversals. |
| SLS + Depth | Rising gravity + thinning book = expansion. High curvature = instability. |
| Displacement + Flow | High displacement + weak flow = exhaustion. Strong flow = continuation. |
| Centroid + Trade Profile | Near-mid centroid + flow = immediate impact. Far = inefficient. |

**Phase 2 Tutorials:**
- [Absorption vs Expansion](/docs/tutorials/absorption-vs-expansion)
- [Liquidity Vacuum](/docs/tutorials/liquidity-vacuum)
- [Adverse Selection](/docs/tutorials/adverse-selection)
- [Exhaustion vs Continuation](/docs/tutorials/exhaustion-vs-continuation)

---

### Phase 3: Full System

Multi-signal alignment and conflict across all three categories.

**Phase 3 Tutorials:**
- [Structural Trap](/docs/tutorials/structural-trap)
- [Momentum Alignment](/docs/tutorials/momentum-alignment)

---

## Quick Reference — What Each Primitive Answers

| Primitive | Question |
|---|---|
| [Ratio Price](/docs/primitives/ratio-price) | Where are we? |
| [Displacement](/docs/primitives/displacement) | Are we stretched? |
| [Depth](/docs/primitives/depth) | What exists? |
| [Cumulative Depth](/docs/primitives/cumulative-depth) | How hard is it to move? |
| [Log(A/B) Depth](/docs/primitives/log-depth) | Who dominates structurally? |
| [Net Imbalance](/docs/primitives/net-imbalance) | What is the aggregate pressure? |
| [Imbalance Centroid](/docs/primitives/imbalance-centroid) | Where is pressure located? |
| [SLS](/docs/primitives/sls) | How is structure evolving? |
| [Trade Flow](/docs/primitives/trade-flow) | Who is executing? |
| [Trade Profile](/docs/primitives/trade-profile) | Who is acting, and where? |
| [Trade Imbalance](/docs/primitives/trade-imbalance) | Which direction are participants pushing? |

---

## Full System Examples

### Continuation Case
```
Displacement > 0
+ Log(A/B) > 0 near mid
+ Positive centroid
+ Strong trade flow
+ Rising SLS gravity
→ High probability continuation
```

### Reversal Case
```
Displacement > 0
+ Negative Log(A/B) near mid
+ Negative centroid
+ Selling into strength
+ High curvature
→ Likely reversal
```

---

## Cross-Reference: Tutorial → Primitives

| Tutorial | Primitives Used |
|---|---|
| [Absorption vs Expansion](/docs/tutorials/absorption-vs-expansion) | Depth, Trade Flow, Trade Profile, Log(A/B), Displacement, SLS, Net Imbalance, Cumulative Depth |
| [Liquidity Vacuum](/docs/tutorials/liquidity-vacuum) | Depth, Cumulative Depth, Displacement, SLS, Trade Flow, Log(A/B), Net Imbalance |
| [Adverse Selection](/docs/tutorials/adverse-selection) | Trade Flow, Trade Profile, Log(A/B), Depth, Centroid, Trade Imbalance, SLS, Displacement |
| [Exhaustion vs Continuation](/docs/tutorials/exhaustion-vs-continuation) | Displacement, Trade Flow, Trade Imbalance, Trade Profile, SLS, Depth, Log(A/B), Net Imbalance, Ratio Price |
| [Structural Trap](/docs/tutorials/structural-trap) | Trade Flow, Log(A/B), Net Imbalance, Centroid, SLS, Displacement, Depth, Ratio Price, Trade Profile |
| [Momentum Alignment](/docs/tutorials/momentum-alignment) | All 11 primitives |

---

## Cross-Reference: Primitive → Tutorials

| Primitive | Used In |
|---|---|
| [Ratio Price](/docs/primitives/ratio-price) | Exhaustion vs Continuation, Momentum Alignment, Structural Trap |
| [Displacement](/docs/primitives/displacement) | Exhaustion vs Continuation, Momentum Alignment, Liquidity Vacuum, Adverse Selection, Absorption vs Expansion, Structural Trap |
| [Depth](/docs/primitives/depth) | Absorption vs Expansion, Liquidity Vacuum, Exhaustion vs Continuation, Structural Trap, Momentum Alignment |
| [Cumulative Depth](/docs/primitives/cumulative-depth) | Absorption vs Expansion, Liquidity Vacuum, Momentum Alignment |
| [Log(A/B) Depth](/docs/primitives/log-depth) | Absorption vs Expansion, Momentum Alignment, Structural Trap, Adverse Selection |
| [Net Imbalance](/docs/primitives/net-imbalance) | Momentum Alignment, Structural Trap, Exhaustion vs Continuation, Absorption vs Expansion, Liquidity Vacuum |
| [Imbalance Centroid](/docs/primitives/imbalance-centroid) | Momentum Alignment, Adverse Selection, Structural Trap |
| [SLS](/docs/primitives/sls) | Momentum Alignment, Liquidity Vacuum, Structural Trap, Exhaustion vs Continuation, Absorption vs Expansion |
| [Trade Flow](/docs/primitives/trade-flow) | Absorption vs Expansion, Exhaustion vs Continuation, Momentum Alignment, Adverse Selection, Liquidity Vacuum, Structural Trap |
| [Trade Profile](/docs/primitives/trade-profile) | Absorption vs Expansion, Adverse Selection, Momentum Alignment, Structural Trap |
| [Trade Imbalance](/docs/primitives/trade-imbalance) | Exhaustion vs Continuation, Momentum Alignment, Adverse Selection |

---

## Core Framework

```
1. Position → displacement
2. Structure → depth / SLS
3. Flow → trades / imbalance

Edge emerges from alignment or conflict.
```

Not where price is going — but whether the system allows it to go there.
