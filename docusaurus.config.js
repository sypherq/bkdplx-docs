// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BkDplx Docs",
  tagline: "Primitives, tutorials, visual reference, and deterministic market reasoning.",
  url: "https://wiki.bkdplx.com",
  baseUrl: "/",
  organizationName: "sypherq",
  projectName: "bkdplx-docs",
  onBrokenLinks: "warn",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          breadcrumbs: true,
          editUrl: "https://github.com/sypherq/bkdplx-docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "BkDplx Docs",
      hideOnScroll: true,
      items: [
        { to: "/docs/introduction/overview", label: "Overview", position: "left" },
        { to: "/docs/primitives/ratio-price", label: "Primitives", position: "left" },
        { to: "/docs/tutorials/absorption-vs-expansion", label: "Tutorials", position: "left" },
        { to: "/docs/visual-reference/chart-panels", label: "Visual Reference", position: "left" },
        { to: "/docs/frameworks/pressure-friction-participation", label: "Frameworks", position: "left" },
        { href: "https://github.com/sypherq/bkdplx-docs", label: "GitHub", position: "right" },
        { href: "https://bkdplx.com", label: "BkDplx", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Overview", to: "/docs/introduction/overview" },
            { label: "Mental Model", to: "/docs/introduction/mental-model" },
          ],
        },
        {
          title: "Reference",
          items: [
            { label: "Primitives", to: "/docs/primitives/ratio-price" },
            { label: "Visual Reference", to: "/docs/visual-reference/chart-panels" },
          ],
        },
        {
          title: "Frameworks",
          items: [
            { label: "Pressure, Friction, Participation", to: "/docs/frameworks/pressure-friction-participation" },
            { label: "Alignment vs Conflict", to: "/docs/frameworks/alignment-vs-conflict" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Book Duplex.`,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    prism: {
      additionalLanguages: ["bash"],
    },
  },
};

module.exports = config;
