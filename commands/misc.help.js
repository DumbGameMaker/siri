const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  MessageEmbed,
  MessageActionRow,
  MessageSelectMenu,
} = require("discord.js");
const fs = require("fs");

let files = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));
console.log(files);
module.exports = {
  helpdata: {
    usage: "/help",
    description: "Hey Siri, How do i use this bot?",
    name: "help",
  },
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("List of commands."),
  async execute(interaction) {
    let me = new MessageEmbed()
        .setTitle("Misc")
        .setDescription("Miscellaneous commands."),
      ue = new MessageEmbed().setTitle("Utils").setDescription("Utilities"),
      se = new MessageEmbed()
        .setTitle("Server")
        .setDescription("Server commands. Restricted."),
      start = new MessageEmbed();
    for (const file of files) {
      let i = require(`./${file}`).helpdata;
      switch (/^.*(?=(\.))/.exec(/^.*(?=(\.))/.exec(file)[0])[0]) {
        case "misc": {
          me.addField(
            i.name,
            `Usage: ${i.usage}\nDescription: ${i.description}`,
            true
          );
          console.log(i);
          break;
        }
        case "util": {
          ue.addField(
            i.name,
            `Usage: ${i.usage}\nDescription: ${i.description}`,
            true
          );
        }
        case "srvr": {
          se.addField(
            i.name,
            `Usage: ${i.usage}\nDescription: ${i.description}`,
            true
          );
        }
        case "base":
          break;
      }
    }
    start.setTitle("Help");
    /*
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("help-menu")
        .setPlaceholder("Home")
        .addOptions([
          { label: "Misc", value: "misc" },
          { label: "Utilities", value: "util" },
          { label: "Server", value: "srvr" },
        ])
    );*/
    await interaction.reply({ embeds: [start, me, ue, se] });
  },
};
