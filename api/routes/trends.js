const express = require("express");
const router = express.Router();

const HttpsProxyAgent = require("https-proxy-agent");

let proxyAgent = new HttpsProxyAgent("http://proxy-host:8888/");

let query = {
  keyword: "Women's march",
  agent: proxyAgent,
};

const googleTrends = require("google-trends-api");

router.get("/", (req, res, next) => {
  googleTrends
    .dailyTrends({ trendDate: new Date("2020-11-20"), geo: "US" })
    .then((result) => res.send(result))
    .catch((err) => console.log("promise rejected"));
});

module.exports = router;
