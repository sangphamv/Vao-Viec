import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import fs from "fs";
import path from "path";
import partytown from "@astrojs/partytown";

import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import node from "@astrojs/node";

import { remarkReadingTime } from "./src/utils/all";

export default defineConfig({
  site: "https://vansanggogh.pages.dev/",
  adapter: node({ mode: "standalone" }),
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      serialize(item) {
        const urlObj = new URL(item.url);
        const parts = urlObj.pathname.split('/').filter(Boolean);
        if (parts.length >= 3 && parts[0] === 'category') {
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
      },
    }),
    keystatic()
  ],
});
