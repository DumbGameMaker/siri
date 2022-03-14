(async() => {
  var nodemon = require("nodemon");
const exec = require("util").promisify(require("child_process").exec);



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
    nodemon.start();
  })
  .on("restart", function (files) {
    console.log("App restarted due to: ", files);
  });

})()