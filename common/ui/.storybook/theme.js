import { create } from "@storybook/theming/create";
import Logo from "./Logo.webp";

export default create({
  base: "dark",
  brandTitle: "Repo",
  brandUrl: "https://example.com",
  brandImage: Logo,
  brandTarget: "_self",
  // UI
  appBg: "#222222",
  appContentBg: "#222222",
  appPreviewBg: "#2E2E2E",
  appBorderColor: "#333333",
  appBorderRadius: 4,

  // Text colors
  textColor: "#FFFFFF",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#FFFFFF",
  barSelectedColor: "#FFFFFF",
  barHoverColor: "#FFFFFF",
  barBg: "#222222",
});
