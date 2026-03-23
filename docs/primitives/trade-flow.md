# Trade Flow

**Category:** Flow

---

## Formula

```
trade = {timestamp, side, size, level}
```

Each executed trade captured from the aggTrade stream: when it happened, whether the taker was buying or selling, the size in base units, and the price level relative to mid.

---

## Intuition

Depth is what participants *say* they will do. Trade flow is what they *actually do*. Resting orders are intentions; executed trades are commitments backed by capital. Trade flow reveals who is acting aggressively — crossing the spread, lifting offers, hitting bids. It is the kinetic energy of the market, as opposed to depth's potential energy.

---

## What It Answers

> **Who is executing?**

The real-time stream of aggressive participation: direction, size, and location of executed trades.

---

## Visual Representation

- **Panel:** Trade Profile overlay (bottom-right quadrant) and Trade Profile rows
- **Display:** Trades binned into a 2D grid by size (rows: < 500, 500–2K, 2K–10K, > 10K) and price level (columns: bucket distance from mid)
- **Color:** Buy trades in teal/green, sell trades in orange/red; intensity reflects volume concentration

---

## Behavioral Interpretation

| Condition | Interpretation |
|---|---|
| IF aggressive buy flow at mid | THEN takers are lifting offers — active demand, immediate impact |
| IF aggressive sell flow at mid | THEN takers are hitting bids — active supply, immediate downward pressure |
| IF large-size trades concentrated near mid | THEN institutional or high-conviction participation — strong directional signal |
| IF flow strong but price not moving | THEN absorption — resting orders are absorbing the flow without price displacement |
| IF flow weak but price moving | THEN thin book — small participation is sufficient to move price (low friction) |

---

## Failure Modes

- **Wash trading:** Fake volume designed to appear as real flow. Look for unnaturally symmetric buy/sell patterns or perfectly round sizes that appear repeatedly.
- **Liquidation cascades:** Forced selling that appears as aggressive flow but is not voluntary participation. The flow is real but not based on conviction — it is mechanical.
- **Delayed attribution:** In fast markets, trade timestamps may cluster. The sequence of events can be ambiguous within a single 100ms window.

---

## Interactions

**With [Depth](/docs/primitives/depth):**
The core flow-vs-structure interaction. Flow hitting thick depth = absorption. Flow hitting thin depth = expansion. This determines whether price moves through a level or stalls at it.

**With [Displacement](/docs/primitives/displacement):**
High displacement + strong flow = continuation. High displacement + weak flow = exhaustion. Flow is the fuel that sustains displacement.

**With [Net Imbalance](/docs/primitives/net-imbalance):**
Flow and imbalance can agree or conflict. Agreement = strong conviction. Conflict = one side is about to capitulate.

**With [Trade Profile](/docs/primitives/trade-profile):**
Trade flow is the raw stream. Trade profile is the binned summary. Profile reveals patterns that are invisible in the raw stream — like whether large trades are concentrated near mid or distributed across levels.

---

## Linked Tutorials

- [Absorption vs Expansion](/docs/tutorials/absorption-vs-expansion)
- [Exhaustion vs Continuation](/docs/tutorials/exhaustion-vs-continuation)
- [Momentum Alignment](/docs/tutorials/momentum-alignment)
- [Adverse Selection](/docs/tutorials/adverse-selection)
