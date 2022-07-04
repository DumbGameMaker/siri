// Require the necessary discord.js classes
const { Client, Intents, Collection } = require("discord.js");
const dotenv = require("dotenv");
const config = dotenv.config();
const fs = require("fs");
const { SlashCommandBuilder } = require("@discordjs/builders");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES],
});
process.stdout.write("starting...\n");

let start = performance.now();
process.stdout.write("creating collections: define\n");
client.commands = new Collection();
command = {
  data: new SlashCommandBuilder()
    .setName("heysiri")
    .setDefaultPermission(false)
    .setDescription("Hey Siri!"),
  async execute(interaction, client) {
    interaction.reply("This does nothing right now.");
  },
};
client.commands.set(command.data.name, command);

process.stdout.write("client.once Ready\n");
client.once("ready", async () => {
  process.stdout.write("Ready!\n");
  process.stdout.write("requiring deploy\n");
  await require("./deploy");
  process.stdout.write(`Done! took ${performance.now() - start}ms\n`);
});

process.stdout.write("client.on interactionCreate\n");
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  console.log(command.data.name);
  if (!command) return;

  try {
    console.log("command: " + interaction.commandName + " was run");
    await command.execute(interaction, client);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});
process.stdout.write("process.on exit\n");
process.on("exit", () => {
  process.stdout.write("byebye\n");
});
// Login to Discord with your client's token
process.stdout.write("Logging in...\n");
client.login(process.env.CLIENT_TOKEN);
