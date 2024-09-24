import { join, dirname } from "path";
import { mergeConfig } from "vite";
import { resolve } from "path";

import svgr from "vite-plugin-svgr";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../docs/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("storybook-addon-remix-react-router"),
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require("postcss")
        }
      }
    }
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")]
            }
          }
        }
      ],
      include: path.resolve(__dirname, "../")
    });
    return config;
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [svgr()],
      define: {
        "process.env": process.env
      },
      resolve: {
        alias: {
          "@": resolve(__dirname, "../src/components"),
          "@root": resolve(__dirname, "../src")
        }
      }
    });
  }
};
export default config;
