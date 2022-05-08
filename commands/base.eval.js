const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
module.exports = {
  helpdata: {
    usage: "/eval <code>",
    description: "runs code. you cant use this",
    name: "eval",
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
    interaction.deferReply();
    // if(interaction.options.getString("code").contains("interaction.reply")) return interaction.editReply("error fix ya shit");
    const i = await eval(
      `(async()=>{${interaction.options.getString("code")}})()`
    );
    return interaction.editReply(`${i || "no output"}`);
  },
};
