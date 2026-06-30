import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import fs from "fs";
import path from "path";
import partytown from "@astrojs/partytown";

import react from "@astrojs/react";

import { remarkReadingTime } from "./src/utils/all";
import rehypeComponents from "rehype-components";
import remarkDirective from "remark-directive";
import { remarkCustomAdmonitions } from "./src/plugins/remark-custom-admonitions.mjs";
import { AdmonitionComponent } from "./src/plugins/rehype-component-admonition.mjs";
import { parseDirectiveNode } from "./src/plugins/remark-directive-rehype.mjs";

const customRemarkPlugins = [
  remarkReadingTime,
  remarkCustomAdmonitions,
  remarkDirective,
  parseDirectiveNode,
];

const customRehypePlugins = [
  [
    rehypeComponents,
    {
      components: {
        note: (x, y) => AdmonitionComponent(x, y, "note"),
        tip: (x, y) => AdmonitionComponent(x, y, "tip"),
        important: (x, y) => AdmonitionComponent(x, y, "important"),
        caution: (x, y) => AdmonitionComponent(x, y, "caution"),
        warning: (x, y) => AdmonitionComponent(x, y, "warning"),
      },
    },
  ],
];

export default defineConfig({
  output: 'static',
  site: "https://vocktech.pages.dev/",
  build: {
    inlineStylesheets: 'always',
  },
  markdown: {
    processor: unified({
      remarkPlugins: customRemarkPlugins,
      rehypePlugins: customRehypePlugins,
    }),
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      serialize(item) {
        const urlObj = new URL(item.url);
        const parts = urlObj.pathname.split('/').filter(Boolean);
        if (parts.length >= 3 && parts[0] === 'danh-muc') {
          const slug = parts[parts.length - 1];
          const mdxPath = path.resolve('./src/content/blog', slug, 'index.mdx');
          const mdPath = path.resolve('./src/content/blog', slug, 'index.md');
          try {
            if (fs.existsSync(mdxPath)) {
              item.lastmod = fs.statSync(mdxPath).mtime.toISOString();
            } else if (fs.existsSync(mdPath)) {
              item.lastmod = fs.statSync(mdPath).mtime.toISOString();
            }
          } catch (e) {}
        }
        return item;
      }
    }),
    icon(),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
        lib: "/partytown/",
      },
    }),
  ],
});
