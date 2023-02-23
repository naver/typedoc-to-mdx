// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const remarkBreaks = require("remark-breaks");

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "typedoc-to-mdx",
  tagline: "TypeDoc to mdx document generator",
  url: "https://naver.github.io",
  baseUrl: "/typedoc-to-mdx/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren"t using GitHub pages, you don"t need these.
  organizationName: "naver", // Usually your GitHub org/user name.
  projectName: "typedoc-to-mdx", // Usually your repo name.

  // Even if you don"t use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"]
  },

  plugins: [
    "docusaurus-plugin-sass"
  ],

  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/naver/typedoc-to-mdx/edit/master/demo/docs/",
          remarkPlugins: [remarkBreaks],
          breadcrumbs: false
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("../sass/theme.sass")
          ]
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      navbar: {
        title: "typedoc-to-mdx",
        items: [
          {
            type: "doc",
            docId: "tutorial/installation",
            label: "Tutorial",
            position: "left"
          },
          {
            type: "doc",
            docId: "api/project1/Class/DummyClass",
            label: "Demo",
            position: "left"
          },
          {
            type: "localeDropdown",
            position: "right"
          },
          {
            href: "https://www.npmjs.com/package/typedoc-to-mdx",
            className: "header-npm-link",
            "aria-label": "NPM Package",
            position: "right"
          },
          {
            href: "https://github.com/naver/typedoc-to-mdx",
            className: "header-github-link",
            "aria-label": "GitHub Repository",
            position: "right"
          }
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/naver/typedoc-to-mdx"
              },
              {
                label: "Issues",
                href: "https://github.com/naver/typedoc-to-mdx/issues"
              },
              {
                label: "Naver Open Source",
                href: "https://naver.github.io/"
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
