#!/usr/bin/env /usr/bin/node

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  helpdata: {
    usage: "/applesweeper",
    description: "Minesweeper, but for apples.",
    name: "applesweeper",
  },
  data: new SlashCommandBuilder()
    .setName("applesweeper")
    .setDescription(
      "Minesweeper, but for apples."
    ),
  async execute(interaction, client) {

  },
};

