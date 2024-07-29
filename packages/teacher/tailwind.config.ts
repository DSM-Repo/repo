import type { Config } from "tailwindcss";
import baseConfig from "@configs/tailwindcss/tailwind.config";

const extendedConfig: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        libraryBackground: '#222222',
        buttonText: '#FFFFFF',
        plusIcon: '#FFFFFF',
        headerText: '#FFFFFF',
        subHeaderText: '#BBBBBB',
      },
      width: {
        '1000': '1000px',
      },
      height: {
        '101': '101px',
        '33': '33px',
      },
    },
  },
};

export default {
  ...baseConfig,
  ...extendedConfig,
} satisfies Config;
