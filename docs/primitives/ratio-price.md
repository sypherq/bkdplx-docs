---
id: ratio-price
title: Ratio Price
sidebar_label: Ratio Price
sidebar_position: 1
---

# Ratio Price

## Definition

_Placeholder — to be expanded._

Ratio Price describes the weighted midpoint of the order book based on the ratio of bid-to-ask liquidity at each level.

## Formula

```
Ratio Price = Σ(bid_depth[i] × ask_price[i] + ask_depth[i] × bid_price[i]) / Σ(bid_depth[i] + ask_depth[i])
```

## Intuition

_Placeholder._

## What It Answers

- Where is the book's center of gravity?
- Is the book skewed toward the bid or ask side?

## Where It Appears in UI

See [Chart Panels](/visual-reference/chart-panels) for placement.

## Interpretation

_Placeholder._

## Failure Modes

_Placeholder._

## Interactions

_Placeholder._

## Used In Tutorials

- [Absorption vs Expansion](/tutorials/absorption-vs-expansion)
- [Liquidity Vacuum](/tutorials/liquidity-vacuum)

## Related Visual Reference

- [Chart Panels](/visual-reference/chart-panels)
