import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import theme from '../src/components/tokens/theme'; 

export const decorators = [
  (Story) => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </StyledEngineProvider>
  ),
];