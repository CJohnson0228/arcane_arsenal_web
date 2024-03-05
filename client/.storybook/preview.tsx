import React from 'react'
import type { Preview } from "@storybook/react";
import { ThemeProvider } from '../src/styles/ThemeProvider'
import { darkTheme } from "../src/styles/theme/darkTheme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#2d3643',
        },
        {
          name: 'light',
          value: '#dae3f2',
        }
      ]
    },
    decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme} >
        <Story />
      </ThemeProvider>
    )
  ]
  },
};

export default preview;
