/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: "category",
      label: "Introduction",
      collapsed: false,
      items: [
        "introduction/overview",
        "introduction/mental-model",
      ],
    },
    {
      type: "category",
      label: "Primitives",
      collapsed: false,
      items: [
        "primitives/ratio-price",
        "primitives/displacement",
        "primitives/depth",
        "primitives/cumulative-depth",
        "primitives/log-ab-depth",
        "primitives/net-imbalance",
        "primitives/centroid",
        "primitives/trade-flow",
        "primitives/trade-profile",
        "primitives/trade-imbalance",
        "primitives/sls",
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      collapsed: false,
      items: [
        "tutorials/absorption-vs-expansion",
        "tutorials/liquidity-vacuum",
        "tutorials/adverse-selection",
        "tutorials/exhaustion-vs-continuation",
        "tutorials/structural-trap",
        "tutorials/momentum-alignment",
      ],
    },
    {
      type: "category",
      label: "Visual Reference",
      collapsed: false,
      items: [
        "visual-reference/chart-panels",
        "visual-reference/signals-panel",
        "visual-reference/settings-panel",
        "visual-reference/scanner",
        "visual-reference/trade-profile",
      ],
    },
    {
      type: "category",
      label: "Frameworks",
      collapsed: false,
      items: [
        "frameworks/pressure-friction-participation",
        "frameworks/alignment-vs-conflict",
      ],
    },
  ],
};

module.exports = sidebars;
