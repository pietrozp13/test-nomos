// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },

// }

import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import ThemeConfig from '../src/Theme';
import GlobalStyles from '../src/Theme/globalStyles';

import '@fontsource/inter';
import '@fontsource/material-icons';

export const decorators = [
  (Story) => (
    <React.StrictMode>
      <ThemeConfig>
        <GlobalStyles />
        <MemoryRouter initialEntries={['/']}>
          <Story />
        </MemoryRouter>
      </ThemeConfig>
    </React.StrictMode>
  ),
];
