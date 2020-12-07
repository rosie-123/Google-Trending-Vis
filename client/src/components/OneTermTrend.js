import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const OneTermTrend = ({ term }) => {
  const [queryTerm, setQueryTerm] = useState(term);
  const [data, setData] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    // if (term !== queryTerm) {
    //   setQueryTerm(term);
    // }
    const aggregatedData = [];
    fetch(`http://localhost:9000/term/?term=${queryTerm}`)
      .then((res) => res.json())
      .then((res) => {
        res.map((entry) => {
          if (entry["hasData"][0]) {
            const singleEntry = {
              time: entry["formattedAxisTime"],
              "search volume":
                entry["formattedValue"][0] === NaN
                  ? "NaN"
                  : Number(entry["formattedValue"][0]),
            };
            aggregatedData.push(singleEntry);
          }
        });
      })
      .then(() => setData(aggregatedData));
  }, [term, queryTerm]);
  useEffect(() => {
    if (term !== queryTerm) {
      setQueryTerm(term);
    }
  }, [term])
  const keyPress = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value)
      setQueryTerm(e.target.value);
    }
  };
  return (
    <div className={classes.root}>
      <Card>
        <CardHeader
          title="Interest Over Time"
          titleTypographyProps={{ variant: "h6" }}
          subheader="Given a single term, what is the interest of the term over 2020?"
        />
        <CardContent>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            type="text"
            placeholder="Example: Black Friday"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onKeyPress={keyPress}
          />
        </div>
        {console.log("query", queryTerm)}
          <Typography variant="subtitle2" className={classes.subtitle}>Current Search Term <span className={classes.queryTerm}>{"[ "}{queryTerm}{" ]"}</span></Typography>
        <div className={classes.chartArea}>
          <ResponsiveContainer width="100%" height={325}>
            <LineChart
              width={800}
              height={400}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="time" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line
                connectNulls={true}
                type="monotone"
                dataKey="search volume"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        </CardContent>
      </Card>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2.5em",
    maxHeight: "55%",
    minHeight: "55%",
    maxWidth: "40%",
    display: "flex",
    flexDirection: "column",
  },
  search: {
    display: "flex",
    border: "1px solid grey",
    borderRadius: "0.8rem",
    // marginLeft: "1rem",
    // marginRight: "1rem",
    marginBottom: "1rem",
  },
  searchIcon: {
    margin: "0.4em",
  },
  inputInput: {
    marginLeft: "0.2em",
  },
  queryTerm: {
    color: '#c75200',
    fontWeight: 800,
  },
  subtitle: {
    marginBottom: "1rem",
  }
}));
export default OneTermTrend;
