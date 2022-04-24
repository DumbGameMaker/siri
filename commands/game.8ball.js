#!/usr/bin/env /usr/bin/node

const { Embed } = require("@discordjs/builders");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  helpdata: {
    usage: "/8ball <question>",
    description: "8-ball know all.",
    name: "8ball",
  },
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("8-ball know all.")
    .addStringOption((o) => {
      return o.setName("question").setDescription("question").setRequired(true);
    }),
  async execute(interaction, client) {
    interaction.reply({
      embeds: [
        new Embed()
          .setTitle(interaction.options.getString("question"))
          .setDescription(require("./data/get.js").ball()),
      ],
    });
  },
};
