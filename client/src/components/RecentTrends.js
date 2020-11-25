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
import { makeStyles } from "@material-ui/core/styles";

const RecentTrends = () => {
  const today = new Date();
  const initStr = moment(new Date()).subtract(1, "days").format("YYYY-MM-DD")
  const [sliderVal, setSliderVal] = useState(15);
  const [termsDict, setTermsDict] = useState({});
  const [dateDict, setDateDict] = useState({});
  useEffect(() => {
    fetch("http://localhost:9000/trends")
      .then((res) => res.json())
      .then((res) => {
        setTermsDict(res);
        for (const date of Object.keys(res)) {
          if (moment(date).format('YYYY-MM-DD') === initStr) {
            setDateDict(res[date])
          }
        }
      });
  }, []);
  const handleSlide = (event, newValue) => {
    setSliderVal(newValue);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      {console.log(dateDict)}
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
