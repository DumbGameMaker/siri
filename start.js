var nodemon = require("nodemon");
const ChildProcess = require("child_process");
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
    ChildProcess.exec("git pull origin main");
    nodemon.restart();
  })
  .on("restart", function (files) {
    console.log("App restarted due to: ", files);
  });
