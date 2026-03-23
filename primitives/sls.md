# SLS (Structural Latent Signals)

**Category:** Structure

---

## Sub-Primitives

SLS is a composite primitive containing three distinct signals:

| Signal | Formula | Meaning |
|---|---|---|
| **RAW** | `L(k, t) = log(Demand_k / Supply_k)` at each time step | Structural imbalance evolution over time |
| **GRAVITY** | Directional pull derived from depth asymmetry dynamics | Where structure is pulling price toward |
| **CURVATURE** | Second derivative of the structural surface | Structural instability / regime change potential |

---

## Intuition

A single depth snapshot tells you what the book looks like *now*. SLS tells you how the book has been *changing*. RAW is the movie of the depth ratio — a heatmap where each column is a new L(k) snapshot. Gravity extracts the directional pull: if demand has been systematically building on one side, gravity captures that drift. Curvature captures instability: when the structure is changing rapidly or non-linearly, curvature spikes — the book is in a transitional state where breakouts or breakdowns become more probable.

---

## What It Answers

> **How is structure evolving?**

- RAW: What has the structural imbalance looked like over time?
- GRAVITY: Which direction is structure pulling price?
- CURVATURE: How unstable is the current structure?

---

## Visual Representation

- **Panel:** SLS heatmap (bottom-left panel)
- **RAW display:** 2D heatmap with time on X-axis, bucket level on Y-axis, color intensity = L(k) value. Teal/green = demand-dominant, orange/red = supply-dominant.
- **GRAVITY display:** 1D time series showing directional pull magnitude
- **CURVATURE display:** 1D time series showing instability magnitude
- **Controls:** Mode selectors (RAW, GRAV, CURV) in the SLS control panel. Auto-scale toggle. Shock detection overlay.
- **Anomaly bar:** Binary anomaly indicator row above the heatmap flagging shock events

---

## Behavioral Interpretation

### RAW
| Condition | Interpretation |
|---|---|
| IF RAW heatmap shows sustained teal near mid | THEN demand has been persistently dominant at execution levels |
| IF RAW shows color regime shift (red → teal or vice versa) | THEN structural flip — the book has changed sides |
| IF RAW shows alternating bands | THEN contested structure — neither side holds dominance |

### GRAVITY
| Condition | Interpretation |
|---|---|
| IF gravity positive and rising | THEN structure is pulling toward demand — directional structural momentum |
| IF gravity negative and falling | THEN structure is pulling toward supply — selling structural momentum |
| IF gravity near zero | THEN structural equilibrium — no directional pull |
| IF gravity diverges from displacement | THEN structure and price disagree — potential mean reversion signal |

### CURVATURE
| Condition | Interpretation |
|---|---|
| IF curvature high (positive or negative) | THEN structural instability — the book is in a transitional state |
| IF curvature spiking | THEN regime change imminent — structure is non-linear, breakout/breakdown likely |
| IF curvature low | THEN structural stability — current regime is self-sustaining |

---

## Failure Modes

- **RAW noise:** In thin markets, individual bucket L(k) values fluctuate rapidly, creating a noisy heatmap. Use smoothing or increase the SLS window to filter.
- **Gravity lag:** Gravity is derived from structural dynamics, which inherently lag price. It confirms moves more than it predicts them. Do not use gravity as a leading indicator in isolation.
- **Curvature false positives:** High curvature can occur during normal structural replenishment (market makers restocking the book) without implying instability. Cross-reference with displacement and flow.

---

## Interactions

**With [Depth](/docs/primitives/depth):**
SLS is the time dimension of depth. Depth is the current snapshot; SLS RAW is the history. Rising gravity + thinning current depth = expansion signal.

**With [Displacement](/docs/primitives/displacement):**
Gravity aligned with displacement direction = structural confirmation of the price move. Gravity opposing displacement = structural friction, likely reversion.

**With [Trade Flow](/docs/primitives/trade-flow):**
SLS shows structural evolution; flow shows what is causing it. Rising gravity with matching flow = confirmed structural shift. Rising gravity without flow = passive structural drift (less reliable).

**With [Log(A/B) Depth](/docs/primitives/log-depth):**
The current L(k) is one time-slice of the SLS RAW heatmap. SLS adds the temporal context that a single snapshot cannot provide.

---

## Linked Tutorials

- [Momentum Alignment](/docs/tutorials/momentum-alignment)
- [Liquidity Vacuum](/docs/tutorials/liquidity-vacuum)
- [Structural Trap](/docs/tutorials/structural-trap)
- [Exhaustion vs Continuation](/docs/tutorials/exhaustion-vs-continuation)
