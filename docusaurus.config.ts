import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'CCC Studio website',
  tagline: 'Make Minecraft great again',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://cccstudiocoder.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CCCStudioCoder', // Usually your GitHub org/user name.
  projectName: 'cccstudiocoder.github.io', // Usually your repo name.

  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'docs',
          routeBasePath: 'docs',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    ['@docusaurus/plugin-content-docs', {
        id: 'ore_pack',
        path: 'docs/ore_pack', 
        routeBasePath: 'docs/ore_pack',
        sidebarPath: require.resolve('./sidebars.js'),
    }],
    ['@docusaurus/plugin-content-docs', {
        id: 'enchantment_fantasy',
        path: 'docs/enchantment_fantasy', 
        routeBasePath: 'docs/enchantment_fantasy',
        sidebarPath: require.resolve('./sidebars.js'),
    }]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/favicon.ico',
    navbar: {
      title: 'CCC Studio WebSite',
      logo: {
        alt: 'Site Logo',
        src: 'img/favicon.ico',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Ore Pack wiki',
          items: [
            {
              label: 'Ore Pack',
              to: '/docs/ore_pack',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/cccstudiocoder/cccstudiocoder.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CCC Studio. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
