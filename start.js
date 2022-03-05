var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
const exec = require("child_process").exec;

console.log("Welcome to Siri!");
console.log("type help for a list of commands");
let child;
const commands = {
  help: () => {
    for (i in commands) {
      console.log(`$ -> ${i}`);
    }
  },
  restart: async () => {
    child.kill();
    commands.start();
  },
  start: async () => {
    child = exec("node index.js", (error, stdout, stderr) => {
      if (error) console.log(error);
      if (stderr) console.log(stderr);
    });
    child.stdout.on("data", (data) => {
      console.log(`${data}`);
    });
  },
  kill: async () => {
    child.kill();
  },
};
rl.on("line", function (line) {
  switch (line) {
    case "restart":
      commands.restart();
      break;
    case "help":
      commands.help();
      break;
    case "start":
      commands.start();
  }
});
