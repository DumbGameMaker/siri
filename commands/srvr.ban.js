#!/usr/bin/env /usr/bin/node

const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  helpdata: {
    usage: "/ban <user> <user?> <user?>... <reason?> <time?>",
    description: "Bans a user or multiple.",
    name: "ban",
  },
  data: new SlashCommandBuilder().setName("ban").setDescription("test ..."),
  async execute(interaction, client) {},
};
