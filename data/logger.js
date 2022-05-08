const fs = require("node:fs");
const { promisify } = require("node:util");
let readFile = promisify(fs.readFile);
module.exports = async (log) => {
  let a = await readFile("./log.txt", "utf-8");

  console.log(log);
  await fs.writeFile("./log.txt", a.concat(`\n${log}`), () => {});
};
