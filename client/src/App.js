import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import './App.css';
import FormTabs from './components/Main';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#8110FE',
      },
    },
  });

  return (
    <div className="App bg-slate-50">
      <ThemeProvider theme={theme}>
        <FormTabs></FormTabs>
      </ThemeProvider>
    </div>
  );
}

export default App;
