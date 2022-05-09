console.log("index.js has been executed; bot startup initiated.");

const functions = require("./functions.js");
// functions.pingBot() //Only use if Bixby is hosted on repl.co. It should be commented out if the bot is not hosted on repl.co.

const modCmds = require("./modCmds.js");
const utilCmds = require("./utilCmds.js");
const autoActs = require("./autoActions.js");
const postSlashCmds = require("./postSlashCmds.js");
const sPayCmds = require("./sPay.js");
const Discord = require("discord.js");
const config = require("dotenv").config();
const fs = require("fs");

const myIntents = new Discord.Intents();
myIntents.add(
  Discord.Intents.FLAGS.GUILD_PRESENCES,
  Discord.Intents.FLAGS.GUILD_MEMBERS
);

const client = new Discord.Client({
  ws: {
    properties: { $browser: "Discord iOS" },
  },
  intents: myIntents,
});

client.login(process.env.CLIENT_TOKEN);

client.on("ready", () => {
  console.log(client.user.tag + " logged into its account and is online!👌");

  client.user.setActivity(
    "the Apple Ecosystem",
    { type: "WATCHING" },
    { url: "https://apple.com" }
  );

  functions.sendClient(client);

  //postSlashCmds.ready(client); //Only use on Bixby, but comment this out on Bixby beta.
});

client.on("message", async (message) => {
  await functions.newMsg(message);

  autoActs.newMsg(message);

  modCmds.newMsg(message);

  utilCmds.newMsg(message);

  sPayCmds.newMsg(message);
});

client.on("guildMemberAdd", (member) => {
  autoActs.newMember(member);
});

client.on("guildMemberRemove", (member) => {
  autoActs.oldMember(member);
});

client.on("guildCreate", (guild) => {
  autoActs.newGuild(guild);
});

client.ws.on("INTERACTION_CREATE", async (interaction) => {
  modCmds.newInteraction(interaction);
});
