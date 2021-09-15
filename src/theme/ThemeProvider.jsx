import React from 'react';
import { createTheme, ThemeProvider as TProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function ThemeProvider({ children }) {

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: 'light',
          primary: {
            main: '#262626'
          },
          custom: {
            red: '#EA4335',
            ambar: '#F29900',
            background: '#FAFAFA'
          },
          text: {
            unactive: 'rgba(255, 255, 255, 0.3)',
            primary: '#717171'
          }
        },
      }),
    [],
  );

  return (
    <TProvider theme={theme}>
      <CssBaseline/>
      {children}
    </TProvider>
  );
}