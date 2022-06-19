const fetch = require("node-fetch");
let Parser = require("rss-parser");
const addNewArticleFromUser = async () => {
  //   let parser = new Parser();
  //   const feed = await parser.parseURL(
  //     "https://www.abc.net.au/news/feed/4575262/rss.xml"
  //   );
  //   console.log(
  //     "DEBUG: - file: handleRss.js - line 5 - addNewArticleFromUser - feed",
  //     feed
  //   );
  //   await fetch("https://vnexpress.net/rss/gia-dinh.rss")
  //     .then((response) => response.text())
  //     .then((responseData) => rssParser.parse(responseData))
  //     .then((rss) => {
  //       console.log("DEBUG: - file: handleRss.js - line 8 - .then - rss", rss);
  //     });
};

module.exports = { addNewArticleFromUser };
