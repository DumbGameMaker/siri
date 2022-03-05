const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
module.exports = {
  helpdata: {
    usage: "/about <user?>",
    description: "About Siri",
    name: "about",
  },
  data: new SlashCommandBuilder()
    .setName("about")
    .setDescription("Displays info about the bot. or a user.")
    .addUserOption((option) => {
      return option
        .setName("user")
        .setDescription("User to display info about.")
        .setRequired(false);
    }),
  async execute(interaction, client) {
    let embed = new MessageEmbed();
    if (interaction.options.hasOwnProperty("user")) {
    } else {
      console.log(1);
      let std1 = await exec("git rev-parse --short HEAD");
      let std2 = await exec("cat ./package.json | grep version");
      console.log(std1);
      embed
        .setTitle(`About the ${client.user.username} bot`)
        .setDescription("Made by <@581558160008019990>")
        .addFields([
          {
            name: `Version`,
            value: `${/\d.\d.\d/g
              .exec(std2.stdout)
              .toString()
              .replace(",", ".")}@${std1.stdout.trim()}`,
          },
        ]);
    }

    interaction.reply({ embeds: [embed] });
  },
};
