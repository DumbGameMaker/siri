const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  helpdata: {
    usage: "/",
    description: "",
    name: "",
  },
  data: new SlashCommandBuilder()
    .setName("template")
    .setDefaultPermission(false)
    .setDescription(
      "Template, used for internal stuff. !!IF YOU RUN THIS IT WILL NOT RESPOND!!"
    ),
  async execute(interaction, client) {},
};
