const express = require("express");
const router = express.Router();

const googleTrends = require("google-trends-api");

router.get("/", (req, res, next) => {
  const queryWord = req.query.term.split('%').join(' ').trim();
  const queryDate = req.query.date;
  googleTrends.interestOverTime({ keyword: queryWord, startTime: new Date(queryDate)}).then(res => JSON.parse(res)).then(result => {
    res.send(result["default"]["timelineData"]);
  })
});
module.exports = router;
