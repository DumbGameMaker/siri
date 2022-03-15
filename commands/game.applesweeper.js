#!/usr/bin/env /usr/bin/node

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

const ms = require("discord.js-minesweeper");
/*class ms {
  constructor () {

  }
  start(){
    return "bugged"
  }
}*/
module.exports = {
  helpdata: {
    usage: "/applesweeper <width?> <length?> <mines?>",
    description: "Minesweeper, but for apples.",
    name: "applesweeper",
  },
  data: new SlashCommandBuilder()
    .setName("applesweeper")
    .setDescription("Minesweeper, but for apples.")
    .addIntegerOption((option) => {
      return option.setName("width")
      .setDescription("Width")
      .setRequired(false);
    })
    .addIntegerOption((option) => {
      return option.setName("height")
      .setDescription("Height")
      .setRequired(false);
    })
    .addIntegerOption((option) => {
      return option.setName("mines").setDescription("mines").setRequired(false);
    }),
  async execute(interaction, client) {
    let w = interaction.options.get("width") || 8;
    let h = interaction.options.get("height") || 8;
    let m = interaction.options.get("mines") || 8;

    interaction.reply(new ms({width:w,height:h,mines:m,emote:"apple"}).start())
  },
};
