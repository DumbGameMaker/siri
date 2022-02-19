const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
module.exports = {
  helpdata: {
    usage: "/",
    description: "",
    name: "",
  },
  data: new SlashCommandBuilder()
    .setName("eval")
    .setDescription("Evaluate stuff. You cant use this")
    .addStringOption((option) =>
      option
        .setName("code")
        .setDescription("Module to reload")
        .setRequired(true)
    )
    .addBooleanOption((option) =>
      option
        .setName("returnout")
        .setDescription("Do you want to return the output?")
        .setRequired(false)
    ),
  //.addStringOption("code", "Code to evaluate", true),
  async execute(interaction, client) {
    if (interaction.user.id !== "581558160008019990") return;
    const i = await eval(interaction.options.getString("code"));
    if (interaction.options.options.getBoolean("returnout"))
      interaction.reply(`${i}`);
  },
};
