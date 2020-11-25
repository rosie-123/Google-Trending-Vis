import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import RecentTrends from "./components/RecentTrends"
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Lucida Sans',
      'Lucida Sans Regular',
      'Lucida Grande',
      'Geneva',
      'sans-serif'
    ].join(','),
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
      <RecentTrends />
    </div>
    </ThemeProvider>
  );
}

export default App;
