import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import theme from '../src/components/tokens/theme'; // Adjust this path as necessary

export const decorators = [
  (Story) => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </StyledEngineProvider>
  ),
];