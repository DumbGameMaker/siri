#!/usr/bin/env /usr/bin/node

const autoActs = require("../old/autoActions");

module.exports = {
  on: "guildMemberDelete",
  name: "leave",
  createListener(client) {
    return async function execute() {
      autoActs.oldMember(member);
      process.stdout.write("new member ig\n");
    };
  },
};
