import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment";
import { select } from "d3-selection";
import "d3-transition";

import {
  Slider,
  Typography,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { makeStyles } from "@material-ui/core/styles";

const RecentTrends = ({ getSingleQuery }) => {
  const initStr = moment(new Date()).subtract(1, "days").format("YYYY-MM-DD");
  const [sliderVal, setSliderVal] = useState(15);
  const [termsDict, setTermsDict] = useState({});
  const [dateDict, setDateDict] = useState(undefined);

  useEffect(() => {
    fetch("http://localhost:9000/trends")
      .then((res) => res.json())
      .then((res) => {
        setTermsDict(res);
        for (const date of Object.keys(res)) {
          if (moment(date).format("YYYY-MM-DD") === initStr) {
            const cloudData = [];
            Object.keys(res[date]).forEach((key) => {
              const formattedDict = {};
              let searchVolumn = res[date][key].slice(0, -1);
              searchVolumn =
                searchVolumn.slice(-1) === "M"
                  ? searchVolumn.slice(0, -1) + "0"
                  : searchVolumn.slice(0, -1);
              formattedDict["text"] = key;
              formattedDict["value"] = Number(searchVolumn);
              cloudData.push(formattedDict);
            });
            setDateDict(cloudData);
          }
        }
      });
  }, []);
  const handleSlide = (event, newValue) => {
    setSliderVal(newValue);
    for (const date of Object.keys(termsDict)) {
      if (
        moment(initStr)
          .subtract(15 - newValue, "days")
          .format("YYYY-MM-DD") === moment(date).format("YYYY-MM-DD")
      ) {
        const cloudData = [];
        Object.keys(termsDict[date]).forEach((key) => {
          const formattedDict = {};
          let searchVolumn = termsDict[date][key].slice(0, -1);
          searchVolumn =
            searchVolumn.slice(-1) === "M"
              ? searchVolumn.slice(0, -1) + "0"
              : searchVolumn.slice(0, -1);
          formattedDict["text"] = key;
          formattedDict["value"] = Number(searchVolumn);
          cloudData.push(formattedDict);
        });
        setDateDict(cloudData);
        break;
      }
    }
  };
  const classes = useStyles();
  const wordCloudOptions = {
    rotations: 0,
    rotationAngles: [0, 0],
    fontSizes: [15, 40],
    colors: [
      "#cfcfcf",
      "#ffbc79",
      "#a2c8ec",
      "#898989",
      "#c85200",
      "#5f9ed1",
      "#595959",
      "#ababab",
      "#ff800e",
      "#006ba4",
    ],
    fontFamily: "Lucida Grande",
    padding: 1,
    scale: "sqrt",
    deterministic: true,
  };
  const getCallback = (callback) => {
    return (word, event) => {
      const isActive = callback !== "onWordMouseOut";
      const element = event.target;
      const text = select(element);
      // text
      //   .transition()
      //   // .attr("background", "white")
      //   .attr("text-decoration", isActive ? "underline" : "none");
    };
  };
  const wordCloudCallbacks = {
    getWordTooltip: (word) =>
      `The word "${word.text}" was searched ${word.value}K times, click to view the trends over time.`,
    onWordClick: (word) => getSingleQuery(word.text),
    onWordMouseOut: getCallback("onWordMouseOut"),
    onWordMouseOver: getCallback("onWordMouseOver"),
  };
  return (
    <div className={classes.root}>
      <Card>
        <CardHeader
          title="Recent Trending"
          titleTypographyProps={{ variant: "h6" }}
          subheader="What is the recent trending terms over the past 2 weeks?"
        />
        <CardContent>
          <Typography variant="subtitle2">{"Current Date "}
          <span className={classes.dateString}>{"[ "}
          <Moment format="YYYY-MM-DD" subtract={{ day: 15 - sliderVal }}>
            {initStr}
          </Moment>
  {" ]"}</span>
          </Typography>
          <Slider
            value={sliderVal}
            aria-labelledby="slider-title"
            valueLabelDisplay="off"
            step={1}
            marks
            min={1}
            max={14}
            onChange={handleSlide}
          />
          {dateDict ? (
            <ReactWordcloud
              words={dateDict}
              options={wordCloudOptions}
              callbacks={wordCloudCallbacks}
            />
          ) : (
            <React.Fragment>
              <Typography>
                The content is loading ... If it cannot render properly, please
                refresh this page.
              </Typography>
            </React.Fragment>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    maxWidth: "55%",
    minWidth: "55%",
    minHeight: "70%",
    maxHeight: "70%",
    margin: "2.5em",
    display: "flex",
    flexDirection: "column",
  },
  dateString: {
    color: '#c75200',
    fontWeight: 800,
  }
});

export default RecentTrends;
