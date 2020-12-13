import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import RecentTrends from "./components/RecentTrends";
import OneTermTrend from "./components/OneTermTrend";
import DecadeTop from "./components/DecadeTop";
import DecadeOneTrend from "./components/DecadeOneTrend";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";

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
  const classes = useStyles();
  const [singleQuery, setSingleQuery] = useState("Black Friday");
  const getSingleQuery = (term) => {
    setSingleQuery(term);
  };
  const [decadeTerm, setDecadeTerm] = useState("ipad");
  const getDecadeTerm = (term) => {
    setDecadeTerm(term);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <div className={classes.mainPanel}>
          <RecentTrends getSingleQuery={getSingleQuery} />
          <OneTermTrend term={singleQuery} />
        </div>
        <div className={classes.mainPanel}>
          <DecadeTop getDecadeTerm={getDecadeTerm}/>
          {/* <DecadeOneTrend term={decadeTerm} /> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

const useStyles = makeStyles({
  mainPanel: {
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    textAlign: 'left',
  }
});

export default App;
