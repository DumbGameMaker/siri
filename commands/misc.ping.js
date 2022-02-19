const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  helpdata: {},
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction, client) {
    let t1 = performance.now();
    await interaction.reply("Pong!");
    let t2 = performance.now() - t1;
    await interaction.editReply(
      `Round-trip ping: ${Math.round(t2)}ms. \nWS (api) ping: ${
        client.ws.ping
      }ms.`
    );
  },
};
