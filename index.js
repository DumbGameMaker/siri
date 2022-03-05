// Require the necessary discord.js classes
const { Client, Intents, Collection } = require("discord.js");
const dotenv = require("dotenv");
const config = dotenv.config();
const fs = require("fs");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
  ],
});
process.stdout.write("starting...\n");

let start = performance.now();
process.stdout.write("creating collections: define\n");
client.commands = new Collection();
process.stdout.write("creating collection: reading commands\n");
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
process.stdout.write("creating collection: adding commands to collection\n");
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
  process.stdout.write(`creating collection: added ${command.data.name}\n`);
}

process.stdout.write("initializing events: reading events\n");
const eventFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));

process.stdout.write("initializing events: start events\n");
for (const file of eventFiles) {
  const command = require(`./events/${file}`);
  client.on(command.on, command.createListener(client));
  process.stdout.write(`initializing events: added ${command.name}\n`);
}
process.stdout.write("reading autoActs from old\n");
const autoActs = require("./old/autoActions");
process.stdout.write("client.on guildMemberAdd\n");
client.on("guildMemberAdd", (member) => {
  autoActs.newMember(member);
  process.stdout.write("new member ig\n");
});
process.stdout.write("client.on guildMemberRemove\n");
client.on("guildMemberRemove", (member) => {
  autoActs.oldMember(member);
});
process.stdout.write("client.on guildCreate\n");
client.on("guildCreate", (guild) => {
  autoActs.newGuild(guild);
});
process.stdout.write("client.once Ready\n");
client.once("ready", async () => {
  process.stdout.write("Ready!\n");
  process.stdout.write("requiring deploy\n");
  await require("./deploy");
  /*const commandLists = await client.application.commands.fetch();
  process.stdout.write(`\x1b[32m LOOK HERE`, [...commandLists.values()]);
  process.stdout.write(client.commands["reload"]);
  

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
  process.stdout.write(`Done! took ${performance.now() - start}ms\n`);
});
process.stdout.write("client.on interactionCreate\n");
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
process.stdout.write("process.on exit\n");
process.on("exit", () => {
  process.stdout.write("byebye\n");
});
// Login to Discord with your client's token
process.stdout.write("Logging in...\n");
client.login(process.env.CLIENT_TOKEN);
