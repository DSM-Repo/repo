import { create } from "@storybook/theming/create";

export default create({
  base: "dark",
  brandTitle: "Repo",
  brandUrl: "https://example.com",
  brandImage:
    "https://media.discordapp.net/attachments/1253490914349809695/1253492845088739480/Frame_157.png?ex=66760daf&is=6674bc2f&hm=dcb8287723169c51ea0fd7c5d1a4af74f0fc6db7e7e4227133d83a593dcc0d18&=&format=webp&quality=lossless&width=142&height=48",
  brandTarget: "_self",
  // UI
  appBg: "#222222",
  appContentBg: "#222222",
  appPreviewBg: "#222222",
  appBorderColor: "#333333",
  appBorderRadius: 4,

  // Text colors
  textColor: "#10162F",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#FFFFFF",
  barSelectedColor: "#FFFFFF",
  barHoverColor: "#FFFFFF",
  barBg: "#222222",
});
