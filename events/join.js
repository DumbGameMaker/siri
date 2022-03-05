#!/usr/bin/env /usr/bin/node

const autoActs = require("../old/autoActions");

module.exports = {
  on: "guildMemberCreate",
  name: "join",
  createListener(client) {
    return async function execute() {
      autoActs.newMember(member);
      process.stdout.write("new member ig\n");
    };
  },
};
