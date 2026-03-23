# Trade Profile

**Category:** Flow

---

## Formula

```
Profile[size_tier][level_bucket] = Σ trade_volume

where:
  size_tier ∈ {< 500, 500–2K, 2K–10K, > 10K} (USD, configurable)
  level_bucket = price distance from mid, aligned to depth buckets
```

A 2D histogram of executed trade volume binned by trade size (rows) and execution level (columns).

---

## Intuition

Trade flow tells you *that* someone is trading. The profile tells you *who* and *where*. Small trades scattered across levels tell a different story than large trades concentrated at one level. The profile reveals the fingerprint of participation: is it retail noise spread everywhere, or institutional conviction hammering one specific price? The size dimension separates noise from signal. The level dimension shows where that signal is concentrated.

---

## What It Answers

> **Who is acting, and where?**

The distribution of executed trades by size tier and price level, revealing participation patterns.

---

## Visual Representation

- **Panel:** Trade Profile (bottom-right, labeled "TRADE PROFILE")
- **Display:** Grid/heatmap with size tiers on the Y-axis (< 500 at top, > 10K at bottom) and price level buckets on the X-axis (demand-side left, supply-side right)
- **Color:** Cell intensity reflects volume concentration; buy-side in teal/green, sell-side in orange/red
- **Persistence:** Trades persist for a configurable window (default: 5 minutes) before fading

---

## Behavioral Interpretation

| Condition | Interpretation |
|---|---|
| IF large trades (> 10K) concentrated near mid | THEN institutional participation at execution edge — high-conviction directional flow |
| IF large trades far from mid | THEN inefficient execution or liquidity seeking — less urgent, potentially positional |
| IF small trades dominating | THEN retail-driven flow — lower signal value, higher noise |
| IF profile shows buy concentration at one level + sell at another | THEN price is being defended in a range — structural market-making |
| IF profile empty despite price movement | THEN price moving on liquidity withdrawal, not flow — fragile move |

---

## Failure Modes

- **Size tier sensitivity:** The thresholds (500, 2K, 10K) are defaults. For low-cap pairs, 500 USD is a large trade. For BTC, 10K is modest. The user must calibrate thresholds to the pair's typical volume.
- **Persistence window artifacts:** Old trades that have not yet faded can create a misleading picture. A large trade from 4 minutes ago still showing in the profile is historical, not current. Watch the time dimension.
- **Aggregation blindness:** The profile bins by size tier, so a burst of 50 trades at $400 each ($20K total) appears in the < 500 tier, masking what is effectively large-size flow. The profile shows trade-level size, not aggregated flow.

---

## Interactions

**With [Depth](/docs/primitives/depth):**
Profile shows where flow is executing. Depth shows what rests there. Buying into thick supply = absorption. Buying into thin supply = expansion. The profile-depth interaction is the core of the Absorption vs Expansion framework.

**With [Imbalance Centroid](/docs/primitives/imbalance-centroid):**
Centroid shows where structural pressure sits. Profile shows where execution happens. If execution is concentrated at the centroid, flow is interacting directly with the structural pressure point. If execution is far from the centroid, the interaction is indirect.

**With [Displacement](/docs/primitives/displacement):**
Profile intensity at mid during high displacement = flow sustaining the extension. Profile emptying during high displacement = exhaustion — no one is maintaining the push.

**With [SLS](/docs/primitives/sls):**
SLS shows structural evolution. Profile shows the flow that causes that evolution. Rising SLS gravity with matching profile flow = confirmed structural shift.

---

## Linked Tutorials

- [Absorption vs Expansion](/docs/tutorials/absorption-vs-expansion)
- [Adverse Selection](/docs/tutorials/adverse-selection)
- [Momentum Alignment](/docs/tutorials/momentum-alignment)
- [Structural Trap](/docs/tutorials/structural-trap)
