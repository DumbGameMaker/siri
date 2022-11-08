(async () => {
  var nodemon = require("nodemon");
  const exec = require("util").promisify(require("child_process").exec);
  const fs = require("fs");

  nodemon({
    script: "index.js",
    ext: "js json",
  });
  var restarted = false;
  nodemon
    .on("start", function () {
      console.log("App has started");
    })
    .on("crash", async function () {
      console.log("STOPP");
      if (!restarted) nodemon.restart();
    })
    .on("exit", function () {
      nodemon.restart();
    })
    .on("restart", function (files) {
      restarted = true;
      console.log("\n\n------RESTARTED------\n\n");
      console.log("App restarted due to: ", files);
    });
})();
