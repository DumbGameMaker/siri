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
        .setDescription("code to evaluate")
        .setRequired(true)
    ),
  //.addStringOption("code", "Code to evaluate", true),
  async execute(interaction, client) {
    if (
      interaction.user.id !== "581558160008019990" &&
      interaction.user.id !== "272876963100753922"
    )
      return;
    const i = await eval(interaction.options.getString("code"));

    return interaction.reply({
      content: `${i || "no output"}`,
      ephemeral: true,
    });
  },
};
