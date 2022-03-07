#!/usr/bin/env /usr/bin/node

const autoActs = require("../old/autoActions");

module.exports = {
  on: "guildCreate",
  name: "add",
  createListener(client) {
    return async function execute(guild) {
      autoActs.newGuild(guild, client);
      process.stdout.write("new member ig\n");
    };
  },
};
