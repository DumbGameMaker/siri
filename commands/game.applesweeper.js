#!/usr/bin/env /usr/bin/node

const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  helpdata: {
    usage: "/applesweeper <width?> <height?> <apples?>",
    description: "Minesweeper, but for apples.",
    name: "applesweeper",
  },
  data: new SlashCommandBuilder()
    .setName("applesweeper")
    .setDescription(
      "Minesweeper, but for apples."
    ).addIntegerOption(),
  async execute(interaction, client) {},
};

