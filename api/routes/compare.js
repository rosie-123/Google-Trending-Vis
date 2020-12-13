const express = require("express");
const router = express.Router();

const googleTrends = require("google-trends-api");

router.get("/", (req, res, next) => {
  const termA = req.query.termA.split("%").join(" ").trim();
  const termB = req.query.termB.split("%").join(" ").trim();
  const searchList = [termA, termB]
  googleTrends.interestOverTime({ keyword: searchList, startTime: new Date('2020-01-01') }).then(res => JSON.parse(res)).then(result => {
      res.send(result["default"]["timelineData"]);
    })
});
module.exports = router;

