---
title: Settings Panel
sidebar_position: 3
description: Reference for windows, bucket settings, and panel configuration.
---

# Settings Panel

## Panel Purpose

Settings do not just change presentation. They change interpretation sensitivity. The settings panel controls how much structure, time, and trade activity the user is asking the system to summarize.

## What You Are Looking At

The panel usually groups controls into:

- price context
- depth and bucket settings
- SLS windowing
- trade profile settings
- scanner and recipe settings

## Metrics Present

- [Displacement](/docs/primitives/displacement)
- [Depth](/docs/primitives/depth)
- [Cumulative Depth](/docs/primitives/cumulative-depth)
- [SLS](/docs/primitives/sls)
- [Trade Profile](/docs/primitives/trade-profile)

## How To Read It

### Price Window

Controls the moving context behind [Displacement](/docs/primitives/displacement). Short windows react quickly but are noisier. Longer windows are more stable but lag.

### Depth Window and Buckets

Controls how far from mid the structure is sampled and how fine the granularity is. Narrow buckets show precision. Wider buckets show the macro shape.

### SLS Window

Controls how much structural history is visible. Short windows emphasize regime shifts. Longer windows emphasize persistence.

### Trade Profile Controls

Controls size thresholds and fade duration. This changes what qualifies as meaningful participation.

## Common Patterns

### Over-sensitive Setup

Short price window, tiny buckets, short SLS history, low trade thresholds. Good for experimentation, poor for stable reads.

### Stable Setup

Moderate displacement window, enough depth width to see opposing liquidity, and trade tiers calibrated to the pair.

## Linked Primitives

- [Displacement](/docs/primitives/displacement)
- [Depth](/docs/primitives/depth)
- [SLS](/docs/primitives/sls)
- [Trade Profile](/docs/primitives/trade-profile)

## Linked Tutorials

- [Liquidity Vacuum](/docs/tutorials/liquidity-vacuum)
- [Exhaustion vs Continuation](/docs/tutorials/exhaustion-vs-continuation)
