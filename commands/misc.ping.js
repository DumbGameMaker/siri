const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  helpdata: {
    usage: "/ping",
    description: "Replies with latency.",
    name: "ping",
  },
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with latency."),
  async execute(interaction, client) {
    await interaction.reply("Pong!");
    await interaction.editReply(
      `Round-trip ping: ${Math.round(
        Date.now() - interaction.createdTimestamp
      )}ms. \nWS (api) ping: ${client.ws.ping}ms.`
    );
  },
};
