(async () => {
  var nodemon = require("nodemon");
  const exec = require("util").promisify(require("child_process").exec);
  const fs = require("fs");

  await exec("git pull origin master");

  nodemon({
    script: "index.js",
    ext: "js json",
  });
  nodemon
    .on("start", function () {
      console.log("App has started");
    })
    .on("crash", async function () {
      console.log("STOPP");
      await exec("git pull origin master");
      await exec(`tar cJf logs.${Date.now()}.tar.xz ./log.txt`);

      nodemon.restart();
    })
    .on("restart", function (files) {
      console.log("App restarted due to: ", files);
    });
})();
