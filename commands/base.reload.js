const { SlashCommandBuilder } = require("@discordjs/builders");
const { ChildProcess } = require("child_process");
const fs = require("fs");

module.exports = {
  helpdata: {
    usage: "/reload <?command>",
    description: "Reloads. You cant use this.",
    name: "reload",
  },
  data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Reloads")
    .addBooleanOption((option) => {
      return option
        .setName("reboot")
        .setDescription("Reboots the bot?")
        .setRequired(true);
    }),
  async execute(interaction, client) {
    if (
      interaction.user.id !== "581558160008019990" &&
      interaction.user.id !== "272876963100753922"
    )
      return;
    let i = performance.now();
    if (interaction.options.get("Reboot")) {
      await client.destroy();
      await ChildProcess.execute("git pull origin main && node .");

      process.exit();
    } else {
      try {
        fs.readdirSync("./commands/").forEach((file) => {
          delete require.cache[require.resolve(`./${file}`)];
          const commandFiles = fs
            .readdirSync("./commands")
            .filter((file) => file.endsWith(".js"));

          for (const file of commandFiles) {
            const command = require(`./${file}`);
            client.commands.set(command.data.name, command);
          }
        });
      } catch (e) {
        interaction.reply(`error: ${e}`);
      }
      interaction.reply(`Done! took ${performance.now() - i}ms`);
    }
  },
};
