#!/usr/bin/env /usr/bin/node

const { SlashCommandBuilder } = require("@discordjs/builders");
const siri = require("../data/siriParser");
module.exports = {
  helpdata: {
    usage: "/heysiri <question>",
    description: "Make a request to Siri. Work in progress.",
    name: "heysiri",
  },
  data: new SlashCommandBuilder()
    .setName("heysiri")
    .setDefaultPermission(false)
    .setDescription("Make a request to Siri. WIP")
    .addStringOption((o) => {
      return o.setName("question").setDescription("question").setRequired(true);
    }),
  async execute(interaction, client) {
    if (!interaction.options.question) {
      interaction.reply("Please ask a question.");
      return;
    }
    interaction.reply("WIP");
    interaction.followUp(siri.parse(interaction.options.question));
  },
};
