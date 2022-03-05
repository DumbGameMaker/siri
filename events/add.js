#!/usr/bin/env /usr/bin/node

const autoActs = require("../old/autoActions");

module.exports = {
  on: "guildCreate",
  name: "add",
  createListener(client) {
    return async function execute() {
      autoActs.newGuild(member);
      process.stdout.write("new member ig\n");
    };
  },
};
