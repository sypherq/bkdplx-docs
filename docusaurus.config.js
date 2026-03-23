// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Book Duplex Docs',
  tagline: 'Quantitative market microstructure — primitives, tutorials, and visual reference',
  favicon: 'img/favicon.ico',

  url: 'https://wiki.bkdplx.com',
  baseUrl: '/',

  organizationName: 'sypherq',
  projectName: 'bkdplx-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/sypherq/bkdplx-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Book Duplex',
        logo: {
          alt: 'Book Duplex Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/sypherq/bkdplx-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Introduction', to: '/introduction/overview' },
              { label: 'Primitives', to: '/primitives/ratio-price' },
              { label: 'Tutorials', to: '/tutorials/absorption-vs-expansion' },
            ],
          },
          {
            title: 'Reference',
            items: [
              { label: 'Visual Reference', to: '/visual-reference/chart-panels' },
              { label: 'Frameworks', to: '/frameworks/pressure-friction-participation' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Book Duplex.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.dracula,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;
