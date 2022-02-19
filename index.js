// Require the necessary discord.js classes
const { Client, Intents, Collection } = require("discord.js");
const dotenv = require("dotenv");
const config = dotenv.config();
const fs = require("fs");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}
console.log(client.commands);

client.once("ready", async () => {
  console.log("Ready!");
  /*const commandLists = await client.application.commands.fetch();
  console.log(`\x1b[32m LOOK HERE`, [...commandLists.values()]);
  console.log(client.commands["reload"]);
  await require("./deploy");

  const permissions = [
    {
      id: "581558160008019990",
      type: "USER",
      permission: true,
    },
  ];

  if (!client.application?.owner) await client.application?.fetch();
  for (i in [...commandLists.values()]) {
    if (i.name == "reload") {
      i.permissions.add({ permissions });
    }
  }*/
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction, client);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});
process.on("exit", () => {
  console.log("uncaught exception! die");
});
// Login to Discord with your client's token
client.login(process.env.CLIENT_TOKEN);
