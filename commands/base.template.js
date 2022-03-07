#!/usr/bin/env /usr/bin/node

const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  helpdata: {
    usage: "/template",
    description: "Template.",
    name: "Template",
  },
  data: new SlashCommandBuilder()
    .setName("template")
    .setDefaultPermission(false)
    .setDescription(
      "Template, used for internal stuff. !!IF YOU RUN THIS IT WILL NOT RESPOND!!"
    ),
  async execute(interaction, client) {},
};
