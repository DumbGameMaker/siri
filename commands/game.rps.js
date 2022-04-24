#!/usr/bin/env /usr/bin/node

const { SlashCommandBuilder } = require("@discordjs/builders");
const crypto = require("crypto");
module.exports = {
  helpdata: {
    usage: "/rps <item>",
    description: "rock paper scissors.",
    name: "rps",
  },
  data: new SlashCommandBuilder()
    .setName("rps")
    .setDefaultPermission(true)
    .setDescription("rock paper scissors")
    .addStringOption((option) =>
      option.setName("item").setDescription("item").setRequired(true)
    ),
  async execute(interaction, client) {
    let chosen = interaction.options.getString("item");
    let bot = ["rock", "paper", "scissors"][crypto.randomInt(0, 2)];
    if (chosen == bot) return interaction.reply("draw");
    if (chosen == "rock" && bot == "scissors") return interaction.reply("win");
    if (chosen == "rock" && bot == "paper") return interaction.reply("lose");
    if (chosen == "paper" && bot == "rock") return interaction.reply("win");
    if (chosen == "paper" && bot == "scissors")
      return interaction.reply("lose");
    if (chosen == "scissors" && bot == "paper") return interaction.reply("win");
    if (chosen == "scissors" && bot == "rock") return interaction.reply("lose");
    return interaction.reply("you lose hahahahahahahhahahahhahahahahhahahah");
  },
};
