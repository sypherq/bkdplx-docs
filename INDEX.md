# Book Duplex Documentation System

This repo is the standalone docs site for Book Duplex. It is structured as a learning system, not just a note dump: primitives define the vocabulary, tutorials teach deterministic reasoning, visual reference maps concepts into the UI, and framework pages compress the system into reusable mental models.

## Site Structure

- `docs/introduction`
- `docs/primitives`
- `docs/tutorials`
- `docs/visual-reference`
- `docs/frameworks`

## Required Pages

### Introduction

- `overview.md`
- `mental-model.md`

### Primitives

- `ratio-price.md`
- `displacement.md`
- `depth.md`
- `cumulative-depth.md`
- `log-ab-depth.md`
- `net-imbalance.md`
- `centroid.md`
- `trade-flow.md`
- `trade-profile.md`
- `trade-imbalance.md`
- `sls.md`

### Tutorials

- `absorption-vs-expansion.md`
- `liquidity-vacuum.md`
- `adverse-selection.md`
- `exhaustion-vs-continuation.md`
- `structural-trap.md`
- `momentum-alignment.md`

### Visual Reference

- `chart-panels.md`
- `signals-panel.md`
- `settings-panel.md`
- `scanner.md`
- `trade-profile.md`

### Frameworks

- `pressure-friction-participation.md`
- `alignment-vs-conflict.md`

## Core Principle

Book Duplex does not predict price. It models:

```text
pressure
+ friction
+ participation
```

Edge emerges from alignment or conflict across those three forces.

## Build

Once dependencies are installed:

```bash
npm install
npm run start
npm run build
```
