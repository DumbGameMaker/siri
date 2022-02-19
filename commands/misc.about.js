const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  helpdata: {
    usage: "/about",
    description: "About Siri",
    name: "about",
  },
  data: new SlashCommandBuilder()
    .setName("about")
    .setDescription("Displays info about the bot."),
  async execute(interaction) {
    let t1 = performance.now();
    await interaction.reply("Pong!");
    let t2 = performance.now() - t1;
    await interaction.editReply(`Took ${t2}ms. `);
  },
};
