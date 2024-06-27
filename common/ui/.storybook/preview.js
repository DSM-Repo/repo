/** @type { import('@storybook/react').Preview } */
import "./storybook.css";
import "../../../index.css";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
