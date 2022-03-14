#!/usr/bin/env /usr/bin/node

const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  helpdata: {
    usage: "/rps <item>",
    description: "rock paper scissors.",
    name: "rps",
  },
  data: new SlashCommandBuilder()
    .setName("rps")
    .setDefaultPermission(true)
    .setDescription(
      "rock paper scissors"
    ),
  async execute(interaction, client) {},
};
