import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import RecentTrends from "./components/RecentTrends";
import OneTermTrend from "./components/OneTermTrend";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Lucida Sans",
      "Lucida Sans Regular",
      "Lucida Grande",
      "Geneva",
      "sans-serif",
    ].join(","),
  },
});
function App() {
  const [singleQuery, setSingleQuery] = useState("Black Friday");
  const getSingleQuery = (term) => {
    setSingleQuery(term);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <div>
          <RecentTrends getSingleQuery={getSingleQuery} />
          <OneTermTrend term={singleQuery} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
