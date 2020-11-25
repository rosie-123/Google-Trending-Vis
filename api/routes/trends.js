const express = require("express");
const router = express.Router();
const moment = require("moment");
const HttpsProxyAgent = require("https-proxy-agent");

let proxyAgent = new HttpsProxyAgent("http://proxy-host:8888/");

let query = {
  keyword: "Women's march",
  agent: proxyAgent,
};

const googleTrends = require("google-trends-api");

router.get("/", (req, res, next) => {
  let aggregatedTerms = {};
  let offsetList = []
  for (i = 0; i < 15; i++) {
    offsetList[i] = i;
  }
  for (const offset of offsetList) {
    dateStr = moment().subtract(offset, "days").format("YYYY-MM-DD");
    console.log(dateStr);
    googleTrends
      .dailyTrends({
        trendDate: new Date(dateStr),
        geo: "US",
      })
      .then((res) => JSON.parse(res))
      .then((res) => {
        dailySearchDict = {};
        if (res["default"]["trendingSearchesDays"][0]["trendingSearches"]) {
          res["default"]["trendingSearchesDays"][0]["trendingSearches"].forEach(search => {
            dailySearchDict[search["title"]["query"]] = search["formattedTraffic"];
          })
        }
        // console.log(dailySearchDict)
        aggregatedTerms[res["default"]["trendingSearchesDays"][0]["formattedDate"]] = dailySearchDict
      }).catch((error) => console.log(error));
  }
  console.log(aggregatedTerms)
  res.send('hi')
  //   googleTrends
  //     .dailyTrends({ trendDate: new Date("2020-11-20"), geo: "US" })
  //     .then((result) => res.send(result))
  //     .catch((err) => console.log("promise rejected"));
});
module.exports = router;
