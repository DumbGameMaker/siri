const fs = require("fs");
const { promisify } = require("util");
let readFile = promisify(fs.readFile);

fs.writeFileSync("../log.txt", " ");
module.exports = async (log) => {
  let a = await readFile("./log.txt", "utf-8");

  console.log(log);
  await fs.writeFile("./log.txt", a.concat(`\n${log}`), () => {});
};
