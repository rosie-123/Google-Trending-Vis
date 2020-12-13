import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import RecentTrends from "./components/RecentTrends";
import OneTermTrend from "./components/OneTermTrend";
import DecadeTop from "./components/DecadeTop";
// import DecadeOneTrend from "./components/DecadeOneTrend";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

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
  // const [decadeTerm, setDecadeTerm] = useState("ipad");
  // const [year, setYear] = useState("2010");
  // const getDecadeTerm = (term) => {
  //   setDecadeTerm(term);
  // };
  // const getYear = (year) => {
  //   setYear(year);
  // };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Typography variant="subtitle2" className={classes.introText}>
          TRENDING VIS aims to visualize the data from Google Trends. By
          browsing the interface, users are able to see the recent trendings
          terms hat people are searching in US, select one term to see its trending
          line chart and even compare a pair of terms to gain an insight about
          them. We also provides the yearly top searching term over the past
          decade. We are a group of 2 named SSR.
        </Typography>
        <div className={classes.mainPanel}>
          <RecentTrends getSingleQuery={getSingleQuery} />
          <OneTermTrend term={singleQuery} />
        </div>
        <div className={classes.mainPanel}>
          <DecadeTop />
        </div>
      </div>
    </ThemeProvider>
  );
}

const useStyles = makeStyles({
  App: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
  introText: {
    textAlign: "left",
    margin: '2em',
    fontWeight: 800,
  },
  mainPanel: {
    display: "flex",
    justifyContent: "center",
    // alignItems: 'center',
    textAlign: "left",
  },
});

export default App;
