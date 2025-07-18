import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Manual de uso del inspeador de Elementos',
  tagline: 'Aprende a usar el inspeador de elementos de Chrome',
  favicon: 'img/favicon-1.ico',

  // Set the production url of your site here
  url: 'https://docu.zrenrique.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HaroldRumiche', // Usually your GitHub org/user name.
  projectName: 'semana-9', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/HaroldRumiche/semana-9/tree/main/',
        },
        /*blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },*/
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dom',
        path: 'dom',
        routeBasePath: 'dom',
        sidebarPath: './dom.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'network',
        path: 'network',
        routeBasePath: 'network',
        sidebarPath: './network.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'performance',
        path: 'performance',
        routeBasePath: 'performance',
        sidebarPath: './performance.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'storage',
        path: 'storage',
        routeBasePath: 'storage',
        sidebarPath: './storage.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'style',
        path: 'style',
        routeBasePath: 'style',
        sidebarPath: './style.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'console',
        path: 'console',
        routeBasePath: 'console',
        sidebarPath: './console.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sources',
        path: 'sources',
        routeBasePath: 'sources',
        sidebarPath: './sources.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'application',
        path: 'application',
        routeBasePath: 'application',
        sidebarPath: './application.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'security',
        path: 'security',
        routeBasePath: 'security',
        sidebarPath: './security.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'lighthouse',
        path: 'lighthouse',
        routeBasePath: 'lighthouse',
        sidebarPath: './lighthouse.ts',
      }
    ],
    



  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // Configuraciones para búsqueda global
        hashed: true,
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: '/', // Importante: cambia esto para buscar en todas las rutas de docs
        useAllContextsWithNoSearchContext: true, // Compartir índices entre contextos
        
        // Límites y configuraciones de búsqueda
        searchResultLimits: 15, // Aumenta el número de resultados
        searchResultContextMaxLength: 100, // Más contexto en los resultados
        highlightSearchTermsOnTargetPage: true, // Resaltar términos de búsqueda
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/zrempire-social-card.jpg',
    navbar: {
      title: 'Manual',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-1.svg',
      },
      items: [
        /*{
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'INICIO',
        },*/
        //{to: '/blog', label: 'Blog', position: 'left'},
        {to: '/dom', label: 'DOM', position: 'left'},
        {to: '/style', label: 'Style', position: 'left'},
        {to: '/console', label: 'Console', position: 'left'},
        {to: '/network', label: 'Network', position: 'left'},
        {to: '/sources', label: 'Sources', position: 'left'},
        {to: '/application', label: 'Application', position: 'left'},
        {to: '/storage', label: 'Storage', position: 'left'},
        {to: '/performance', label: 'Performance', position: 'left'},
        {to: '/security', label: 'Security', position: 'left'},
        {to: '/lighthouse', label: 'Lighthouse', position: 'left'},
        /*{
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },*/
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        // hideable: true, 
      },
    },
    footer: {
      style: 'dark',
      links: [
        /*{
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },*/
        {
          //title: 'Community',
          items: [
            /*{
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },*/
          ],
        },
        /*{
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },*/
      ],
      //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
