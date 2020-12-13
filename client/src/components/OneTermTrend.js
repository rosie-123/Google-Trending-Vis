import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
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
  const [termA, setTermA] = useState("");
  const [termB, setTermB] = useState("");
  const [comparisonData, setComparisonData] = useState([]);
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
  }, [term]);
  const keyPress = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      setQueryTerm(e.target.value);
    }
  };
  const fetchComparison = () => {
    const comparison = [];
    fetch(`http://localhost:9000/compare/?termA=${termA}&termB=${termB}`)
      .then((res) => res.json())
      .then((res) =>
        res.map((entry) => {
          if (entry["hasData"][0] && entry["hasData"][1]) {
            const singleEntry = {
              time: entry["formattedAxisTime"],
            };
            singleEntry[termA] = entry["value"][0];
            singleEntry[termB] = entry["value"][1];
            comparison.push(singleEntry);
          }
        })
      )
      .then(() => setComparisonData(comparison));
  };
  const handleReset = () => {
    setTermA("");
    setTermB("");
  };
  return (
    <div className={classes.root}>
      <Card>
        {console.log("data", data)}
        <CardHeader
          title="Interest Over Time"
          titleTypographyProps={{ variant: "h6" }}
          subheader="Given a single term, what is the interest of the term over 2020? Select from the word cloud or query below!"
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
          <Typography variant="subtitle2" className={classes.subtitle}>
            Current Search Term{" "}
            <span className={classes.queryTerm}>
              {"[ "}
              {queryTerm}
              {" ]"}
            </span>
          </Typography>
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
            <Typography variant="subtitle2" className={classes.subtitle}>
              * Note that the y-axis indicates the relative search volumn which
              has normalized into the interval [1, 100] other than its
              real-world search volumn
            </Typography>
          </div>
        </CardContent>
        <CardHeader
          title="Compare a pair of terms"
          titleTypographyProps={{ variant: "h6" }}
          subheader="Looking for something to compare? Specify two terms and compare their trending over the year"
        />
        <CardContent>
          <form className={classes.formRoot} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Term A"
              onChange={(event) => setTermA(event.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Term B"
              onChange={(event) => setTermB(event.target.value)}
            />
            <Button
              variant="outlined"
              color="primary"
              onClick={() => fetchComparison()}
            >
              Confirm
            </Button>
            <Button variant="outlined" onClick={() => handleReset()}>
              Reset
            </Button>
          </form>
          {termA === "" && termB === "" ? (
            <p>You haven't add a pair to compare yet!</p>
          ) : (
            <div className={classes.chartArea}>
              <ResponsiveContainer width="100%" height={325}>
                <LineChart
                  width={800}
                  height={400}
                  data={comparisonData}
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
                    dataKey={termA}
                    stroke="#8884d8"
                  />
                  <Line
                    connectNulls={true}
                    type="monotone"
                    dataKey={termB}
                    stroke="#82ca9d"
                  />
                </LineChart>
              </ResponsiveContainer>
              <Typography variant="subtitle2" className={classes.subtitle}>
                * Note that the y-axis indicates the relative search volumn
                which has normalized into the interval [1, 100] based on the
                searching peak of the two terms other than its real-world search
                volumn
              </Typography>
            </div>
          )}
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
    color: "#c75200",
    fontWeight: 800,
  },
  subtitle: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  formRoot: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    display: "flex",
  },
}));
export default OneTermTrend;
