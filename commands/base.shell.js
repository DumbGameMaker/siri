const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
module.exports = {
  helpdata: {
    usage: "/shell",
    description: "Opens a shell, for setup. You cant use this",
    name: "shell",
  },
  data: new SlashCommandBuilder()
    .setName("shell")
    .setDescription("Opens a shell, for setup. You cant use this"),
  async execute(interaction, client) {
    if (
      interaction.user.id !== "581558160008019990" &&
      interaction.user.id !== "272876963100753922"
    )
      return;

    interaction.reply("Check dms");
  },
};
