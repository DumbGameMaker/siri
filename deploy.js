const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
require("dotenv").config();
const commands = [
  new SlashCommandBuilder()
    .setName("heysiri")
    .setDefaultPermission(false)
  .setDescription("Hey Siri!").addStringOption((option)=>{
      return option.setName("code").setDescription("ee").setRequired(true);
  }),
];

const rest = new REST({ version: "9" }).setToken(process.env.CLIENT_TOKEN);

return rest
  .put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
