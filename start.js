(async () => {
  var nodemon = require("nodemon");
  const exec = require("util").promisify(require("child_process").exec);
  const fs = require("fs");

  await exec("git pull origin master ");
  nodemon({
    script: "index.js",
    ext: "js json",
  });
  nodemon
    .on("start", function () {
      require("./data/logger.js")("App has started");
    })
    .on("crash", async function () {
      require("./data/logger.js")("STOPP");
      await exec("git pull origin master");
      await exec(`tar cJf logs.${Date.now()}.tar.xz ./log.txt`);
      await exec("npm i");
      nodemon.restart();
    })
    .on("restart", function (files) {
      require("./data/logger.js")("App restarted due to: ", files);
    });
})();
