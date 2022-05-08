const fs = require("fs");
module.exports = async (log) => {
  let a = await fs.readFile("/home/node/siri/log.txt");
  a = a.toString();
  a = a + "\n" + log;
  console.log(log);
  await fs.writeFile("/home/node/siri/log.txt", a);
};
