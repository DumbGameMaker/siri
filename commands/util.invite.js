#!/usr/bin/env /usr/bin/node

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  helpdata: {
    usage: "/invite <botid?>",
    description:
      "Shares the bot invite of a specified bot, or shows the support server link.",
    name: "invite",
  },
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription(
      "Shares the bot invite of a specified bot, or shows the support server link."
    )
    .addUserOption((option) => {
      return option
        .setName("botid")
        .setDescription("Bot ID to invite.")
        .setRequired(false);
    }),
  async execute(interaction, client) {
    if (!interaction.options.get("botid")) botid = client.user.id;
    else botid = interaction.options.get("botid").value;
    let bot = await client.users.fetch(botid);
    if (bot.bot) {
      interaction.reply({
        embeds: [
          new MessageEmbed()
            .setTitle("invite")
            .setDescription("<@" + botid + ">")

            .addFields([
              {
                name: "Invite link",
                value: `[Click here!](https://discord.com/api/oauth2/authorize?client_id=${botid}&permissions=1099645855878&scope=bot%20applications.commands)`,
              },
              {
                name: "Also join the Siri Support server:",
                value: "[Click here!](https://discord.gg/r4SwtcEeHB)",
              },
            ]),
        ],
      });
    } else {
      interaction.reply("That's not a bot!");
    }
  },
};
