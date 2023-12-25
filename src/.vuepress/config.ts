import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/txl-kds/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "txl-kds知识文档库",
      description: "vuepress-theme-hope 的文档演示",
    },
  },

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
      locales: {
        SearchProLocaleConfig: { placeholder: "搜索关键字" },
      },
    }),
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
