import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Slider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const RecentTrends = () => {
  const today = new Date();
  const initStr =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const [sliderVal, setSliderVal] = useState(15);
  const [termsDict, setTermsDict] = useState({});
  useEffect(() => {
      fetch("http://localhost:9000/trends").then(res => res.json()).then(res => console.log(res))

  })
  const handleSlide = (event, newValue) => {
    setSliderVal(newValue);
  };
  return (
    <React.Fragment>
      <Typography id="slider-title" variant="h6" gutterBottom>
        Recent Trending
      </Typography>
      <Slider
        value={sliderVal}
        aria-labelledby="slider-title"
        valueLabelDisplay="off"
        step={1}
        marks
        min={1}
        max={15}
        onChange={handleSlide}
      />
      <Moment
        format="YYYY-MM-DD"
        subtract={{ day: 15 - sliderVal }}
      >
        {initStr}
      </Moment>
    </React.Fragment>
  );
};

export default RecentTrends;
