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
    if (chosen == "god")
      interaction.reply("i choose yo mama, who's so fat she crushes god");
    let bot = ["rock", "paper", "scissors"][crypto.randomInt(0, 2)];
    if (chosen == bot) return interaction.reply(`I choose ${bot}; i win`);
    if (chosen == "rock" && bot == "scissors")
      return interaction.reply("i chose scissors; you win");
    if (chosen == "rock" && bot == "paper")
      return interaction.reply("i chose paper; you lose");
    if (chosen == "paper" && bot == "rock")
      return interaction.reply("i chose rock; you win");
    if (chosen == "paper" && bot == "scissors")
      return interaction.reply("i chose scissors; you lose");
    if (chosen == "scissors" && bot == "paper")
      return interaction.reply("i chose paper; you win");
    if (chosen == "scissors" && bot == "rock")
      return interaction.reply("i chose rock; you lose");

    return interaction.reply("you lose hahahahahahahhahahahhahahahahhahahah");
  },
};
