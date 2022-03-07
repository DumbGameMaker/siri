var nodemon = require("nodemon");

nodemon({
  script: "index.js",
  ext: "js json",
});
nodemon
  .on("start", function () {
    console.log("App has started");
  })
  .on("crash", function () {
    console.log("STOPP");
    nodemon.restart();
  })
  .on("restart", function (files) {
    console.log("App restarted due to: ", files);
  });
