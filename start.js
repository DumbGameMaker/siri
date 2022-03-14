(async() => {
  var nodemon = require("nodemon");
const ChildProcess = require("util").promisify(require("child_process").exec);
nodemon({
  script: "index.js",
  ext: "js json",
});


await exec("git pull origin master");


nodemon
  .on("start", function () {
    console.log("App has started");
  })
  .on("crash", function () {
    console.log("STOPP");
    ChildProcess.exec("git pull origin master");
    nodemon.start();
  })
  .on("restart", function (files) {
    console.log("App restarted due to: ", files);
  });

})()