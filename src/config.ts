import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://MarquisDeSac.github.io/',
  base: '/CEOfolio',
  title: 'Nino Sacchi',
  description:
    'Développeur Unity 3D, WebGL & Full Stack. Passionné par le jeu vidéo, la réalité virtuelle et l\'innovation interactive.',
  author: 'Nino Sacchi',
  lang: 'fr',
  ogLocale: 'fr_FR',
  imageDomains: ['cdn.bsky.app', 'images.unsplash.com'],
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/projects',
      title: 'Projets',
      displayMode: 'alwaysText',
      text: 'Projets',
    },
    {
      path: '/experiences',
      title: 'Expériences',
      displayMode: 'alwaysText',
      text: 'Expériences',
    },
    {
      path: '/parcours',
      title: 'Parcours',
      displayMode: 'alwaysText',
      text: 'Parcours',
    },
    {
      path: '/skills',
      title: 'Compétences',
      displayMode: 'alwaysText',
      text: 'Compétences',
    },
    {
      path: '/contact',
      title: 'Contact',
      displayMode: 'alwaysText',
      text: 'Contact',
    },
  ],
  socialLinks: [
    {
      link: 'https://github.com/MarquisDeSac',
      title: 'Nino Sacchi on Github',
      displayMode: 'alwaysIcon',
      icon: 'i-uil-github-alt',
    },
    {
      link: 'https://www.linkedin.com/in/nino-sacchi-806aa9340/',
      title: 'Nino Sacchi on LinkedIn',
      displayMode: 'alwaysIcon',
      icon: 'i-uil-linkedin',
    },
  ],
  navBarLayout: {
    left: [],
    right: [
      'internalNavs',
      'hr',
      'socialLinks',
      'hr',
      'searchButton',
      'themeButton',
    ],
    mergeOnMobile: true,
  },
  tabbedLayoutTabs: false,
  groupView: {
    maxGroupColumns: 3,
    showGroupItemColorOnHover: true,
  },
  githubView: {
    monorepos: [
      'withastro/astro',
      'withastro/starlight',
      'lin-stephanie/astro-loaders',
    ],
    mainLogoOverrides: [
      [/starlight/, 'https://starlight.astro.build/favicon.svg'],
    ],
    subLogoMatches: [
      [/theme/, 'i-unjs-theme-colors'],
      [/github/, 'https://github.githubassets.com/favicons/favicon.svg'],
      [/tweet/, 'i-logos-twitter'],
      [/bluesky/, 'i-logos-bluesky'],
    ],
  },
  externalLink: {
    newTab: false,
    cursorType: '',
    showNewTabIcon: false,
  },
  postMetaStyle: 'minimal',
}

/**
 * Configures whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  slideEnterAnim: [true, { enterStep: 60 }],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'plum',
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'left',
      displayMode: 'content',
    },
  ],
  share: [
    true,
    {
      twitter: [true, '@ste7lin'],
      bluesky: [true, '@ste7lin.bsky.social'],
      mastodon: false,
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: false,
      email: false,
    },
  ],
  giscus: [
    true,
    {
      'data-repo': 'lin-stephanie/astro-antfustyle-theme',
      'data-repo-id': 'R_kgDOLylKbA',
      'data-category': 'Giscus',
      'data-category-id': 'DIC_kwDOLylKbM4Cpugn',
      'data-mapping': 'title',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-lang': 'en',
    },
  ],
  search: [
    false,
    {
      includes: ['changelog'],
      filter: true,
      navHighlight: true,
      batchLoadSize: [true, 5],
      maxItemsPerPage: [true, 3],
    },
  ],
}
