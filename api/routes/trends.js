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
  for (i = 1; i < 15; i++) {
    offsetList[i - 1] = i;
  }
  for (const offset of offsetList) {
    dateStr = moment().subtract(offset, "days").format("YYYY-MM-DD");
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
        aggregatedTerms[res["default"]["trendingSearchesDays"][0]["formattedDate"]] = dailySearchDict
      }).then(() => {
        if (Object.keys(aggregatedTerms).length == 14) {
          res.send(aggregatedTerms);
        }
      })
      .catch((error) => console.log(error));
  }
});
module.exports = router;
