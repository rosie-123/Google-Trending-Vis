import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment";
import {
  Slider,
  Typography,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import WordCloud from "react-d3-cloud";
import { makeStyles } from "@material-ui/core/styles";

const RecentTrends = () => {
  const today = new Date();
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
    // TODO set sliding animation
  };
  const fontSizeMapper = (word) => Math.log2(word.value) * 5;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardHeader
          title="Recent Trending"
          titleTypographyProps={{ variant: "h6" }}
          subheader="What is the recent trending terms over the past 2 weeks?"
        ></CardHeader>
        <CardContent>
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
          <Moment format="YYYY-MM-DD" subtract={{ day: 15 - sliderVal }}>
            {initStr}
          </Moment>
          {dateDict ? (
            <WordCloud width={450} height={350} data={dateDict} fontSizeMapper={fontSizeMapper} />
          ) : (
            <React.Fragment>
              <Typography>The content is loading ...</Typography>
            </React.Fragment>
          )}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

const useStyles = makeStyles({
  root: {
    maxWidth: "60%",
    margin: "2.5em",
  },
});

export default RecentTrends;
