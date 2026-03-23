# Tutorial: Adverse Selection

**Difficulty:** Phase 2 (Pair Interactions)

---

## Scenario Setup

You observe aggressive buying on ETH/BTC — trade flow is positive, trade profile shows decent-sized buy orders near mid. Normally this reads as bullish. But the book is telling a different story: supply-side depth is *increasing* as the buying occurs. Someone is using the buy flow as exit liquidity — selling into the buyers. The buyers are being adversely selected.

Adverse selection is the market's version of a trap: one side's aggression is being used against them.

---

## Observations (Primitive Values)

```
Displacement:      +0.05% (mild positive)
Log(A/B):          negative near mid — supply building despite buy flow
Depth:             supply-side resting orders INCREASING as buy flow executes
Trade Flow:        aggressive buying — positive trade imbalance
Trade Profile:     medium trades (500–2K) on buy side near mid
Imbalance Centroid: negative — supply-side pressure sits closer to mid than demand
Net Imbalance:     turning more negative over time (supply growing faster than demand)
SLS Gravity:       flat or turning negative — structure NOT confirming the buy flow
```

---

## Interpretation Engine

**Step 1:** Trade flow is positive. On the surface, this is bullish. Buyers are actively lifting offers.

**Step 2:** But Log(A/B) is negative near mid. Supply is *larger* than demand at the execution zone. This should not happen during genuine buying pressure — if buyers are consuming supply, supply should be decreasing.

**Step 3:** Supply-side depth is increasing. Someone is adding supply as buyers consume it. The buyers are providing exit liquidity for a larger seller who is patiently restocking the offers.

**Step 4:** Centroid is negative — the center of structural pressure favors supply and sits close to mid. The structural pressure is proximate, not distant.

**Step 5:** SLS gravity is flat or negative. If the buying were genuine structural momentum, gravity would be rising. Its absence means the structure does not believe in the move.

**Step 6:** The buyers are being adversely selected. They are buying at prices that structure suggests are too high, against a seller who has more capital and patience.

---

## Rule Blocks

```
RULE — ADVERSE SELECTION DETECTION:
IF trade flow positive AND Log(A/B) negative near mid AND supply depth increasing
→ buy flow is being absorbed by a larger passive seller
→ buyers are being adversely selected

RULE — ADVERSE SELECTION CONFIRMATION:
IF adverse selection detected AND SLS gravity flat/negative AND centroid negative
→ high-confidence adverse selection — structure confirms the seller, not the buyer

RULE — ADVERSE SELECTION RESOLUTION:
IF buyer flow exhausts (trade imbalance declines toward zero)
→ passive seller has no more exit liquidity
→ price drops as remaining supply overwhelms — the adverse selection was correct

RULE — ADVERSE SELECTION INVALIDATION:
IF buy flow overwhelms supply AND supply depth starts decreasing
→ the initial adverse selection reading was wrong — this is genuine absorption
→ transition to [Absorption → Breakout](/docs/tutorials/absorption-vs-expansion)
```

---

## Outcome Mapping

**IF buyer flow exhausts and supply remains:**
The passive seller has successfully distributed into the buy flow. Once buying stops, there is no remaining demand to support the price. The ratio drops — displacement contracts, potentially going negative as the supply overhang pushes price down.

**IF buyer flow intensifies and overwhelms the passive seller:**
The adverse selection thesis is wrong. The buyer has more capital than the seller. Supply depth starts depleting despite restocking attempts. The setup transitions from adverse selection to absorption → breakout.

---

## What Would Invalidate This?

- The supply being added is at levels far from mid (not at execution edge) — it is not providing exit liquidity, just structural positioning
- The buy flow is from liquidation cascades (forced, not voluntary) — both sides are mechanical, not strategic
- SLS gravity turns positive and accelerates — structure flips to confirm the buyer
- The supply restocking stops — the passive seller runs out of inventory to distribute

---

## Primitives Used

- [Trade Flow](/docs/primitives/trade-flow) — aggressive buying (the "victim" side)
- [Trade Profile](/docs/primitives/trade-profile) — size and location of buy trades
- [Log(A/B) Depth](/docs/primitives/log-depth) — negative near mid despite buy flow
- [Depth](/docs/primitives/depth) — supply increasing during buy flow
- [Imbalance Centroid](/docs/primitives/imbalance-centroid) — negative, confirming supply proximity
- [Trade Imbalance](/docs/primitives/trade-imbalance) — positive but diverging from structure
- [SLS](/docs/primitives/sls) — gravity not confirming buy side
- [Displacement](/docs/primitives/displacement) — mild positive that structure does not support
