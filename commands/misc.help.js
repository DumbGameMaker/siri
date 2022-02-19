const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("List of commands."),
  async execute(interaction) {
    let t1 = performance.now();
    await interaction.reply("Pong!");
    let t2 = performance.now() - t1;
    await interaction.editReply(`Took ${t2}ms. `);
  },
};
