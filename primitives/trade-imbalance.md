# Trade Imbalance

**Category:** Flow

---

## Formula

```
Trade Imbalance = CVD / ΔVolume

where:
  CVD (Cumulative Volume Delta) = Σ (buy_volume - sell_volume) over window
  ΔVolume = total volume over the same window
```

The ratio of net aggressive directional flow to total flow. Values range from -1 (all sells) to +1 (all buys).

---

## Intuition

Volume alone tells you activity level, not direction. Trade imbalance distills the directional bias of that activity. If 70% of aggressive flow is buying, the imbalance is positive — participants are directionally committed. If flow is balanced (50/50), participants are indecisive or the market is being two-way traded. The imbalance is the aggressive participation bias: are takers collectively pushing one direction?

---

## What It Answers

> **Which direction are aggressive participants pushing?**

The net directional bias of executed trades, normalized by total volume.

---

## Visual Representation

- **Panel:** Ratio Price chart — context subpanel (selectable via price context primitive setting)
- **Display:** Area chart or bar chart showing trade imbalance over time
- **Color:** Positive (buy-dominant) in teal/green, negative (sell-dominant) in orange/red

---

## Behavioral Interpretation

| Condition | Interpretation |
|---|---|
| IF trade imbalance strongly positive | THEN aggressive buying dominates — takers are lifting offers, bullish pressure |
| IF trade imbalance strongly negative | THEN aggressive selling dominates — takers are hitting bids, bearish pressure |
| IF trade imbalance near zero | THEN balanced participation — no clear aggressive directional commitment |
| IF trade imbalance positive but ratio price falling | THEN buyers are being absorbed — supply is absorbing demand without price moving up |
| IF trade imbalance diverging from price direction | THEN flow-price disagreement — potential reversal or structural trap forming |

---

## Failure Modes

- **Volume normalization:** In low-volume periods, a few trades can produce extreme imbalance readings. A +0.8 imbalance on 5 trades is noise, not signal. Always consider the absolute volume alongside the ratio.
- **Taker misattribution:** The aggTrade stream classifies trades by taker side. Market makers providing liquidity on both sides can create patterns that do not reflect genuine directional conviction.
- **Window dependency:** Short windows produce noisy imbalance. Long windows smooth over the signal. Match the window to your decision timeframe.

---

## Interactions

**With [Trade Flow](/docs/primitives/trade-flow):**
Trade flow is the raw stream. Trade imbalance is the directional summary. Use flow for the spatial detail (where trades happen), imbalance for the aggregate direction.

**With [Net Imbalance](/docs/primitives/net-imbalance):**
Net imbalance (structural) vs trade imbalance (flow). When both are positive, structure and participation agree. When they conflict, one side is likely to capitulate — this is the foundation of the Flow vs Structure framework.

**With [Displacement](/docs/primitives/displacement):**
Trade imbalance reveals whether flow supports the current displacement. High displacement + high trade imbalance in the same direction = sustained. High displacement + fading trade imbalance = exhaustion.

---

## Linked Tutorials

- [Exhaustion vs Continuation](/docs/tutorials/exhaustion-vs-continuation)
- [Momentum Alignment](/docs/tutorials/momentum-alignment)
- [Adverse Selection](/docs/tutorials/adverse-selection)
