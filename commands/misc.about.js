const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const util = require("util");
const { readFile } = require("fs");
const { MessageActionRow } = require("discord.js");
const { MessageButton } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;

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
    if (interaction.options.get("user")) {
      console.log("hi");
      let user = await client.users.fetch(
        interaction.options.get("user").value
      );
      console.log(user);
      embed
        .setTitle(`About`)
        .setDescription(`<@${interaction.options.get("user").value}>`)
        .addFields([
          {
            name: "ID",
            value: interaction.options.get("user").value,
            inline: true,
          },
          {
            name: "Username",
            value: user.username,
            inline: true,
          },
          {
            name: "Discriminator",
            value: user.discriminator,
            inline: true,
          },
          {
            name: "Is bot?",
            value: user.bot.toString() === "true" ? "Yes" : "No",
            inline: true,
          },

          {
            name: "Hypesquad house",
            value: (() => {
              console.log(user.flags);
              if ((user.flags & 0b00000001000000) == 0b00000001000000)
                return "Bravery";
              if ((user.flags & 0b00000010000000) == 0b00000010000000)
                return "Brilliance";
              if ((user.flags & 0b00000100000000) == 0b00000100000000)
                return "Balance";
              return "None";
            })(),
            inline: true,
          },
          {
            name: "Bitflags",
            value:
              (
                "0000000000000000000" +
                Number(JSON.stringify(user.flags)).toString(2)
              ).slice(-19) +
              "\n[What does this mean?](https://discordapp.com/developers/docs/resources/user#user-object-bitflags)",
            inline: true,
          },
          {
            name: "Created at",
            value: new Date(user.createdAt.toString()).toUTCString(),
            inline: true,
          },
          {
            name: "Joined at",
            value: new Date(
              client.guilds.cache
                .get(interaction.guild.id)
                .members.cache.get(user.id)
                .joinedAt.toString()
            ).toUTCString(),
            inline: true,
          },
        ])
        .setAuthor(
          `${user.username}`,
          `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`
        );
      var button = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel("Expand Bitflags")
          .setCustomId("bitflags")
          .setStyle("SECONDARY")
      );
      let back = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel("Back")
          .setCustomId("back")
          .setStyle("SECONDARY")
      );
      interaction.reply({
        embeds: [embed],
        components: [button],
      });
      const filter = (i) => i.user.id == interaction.user.id;
      const collector = interaction.channel.createMessageComponentCollector({
        filter,
        time: 120000,
      });
      let a = 0;
      var reply;
      collector.on("collect", async (i) => {
        reply = i;
        if (i.customId === "bitflags") {
          let e2 = new MessageEmbed()
            .setTitle(`About`)
            .setDescription(`<@${interaction.options.get("user").value}>`)
            .setFields([
              {
                name: "Bitflags",
                value: (
                  "0000000000000000000" +
                  Number(JSON.stringify(user.flags)).toString(2)
                ).slice(-19),
                inline: false,
              },
              {
                name: "STAFF",
                value: (1 << 0) & user.flags ? "Yes" : "No",
                inline: true,
              },
              {
                name: "PARTNER",
                value: (1 << 1) & user.flags ? "Yes" : "No",
                inline: true,
              },
              {
                name: "HYPESQUAD",
                value: (1 << 2) & user.flags ? "Yes" : "No",
                inline: true,
              },
              {
                name: "BUGHUNTER_LEVEL_1",
                value: (1 << 3) & user.flags ? "Yes" : "No",
                inline: true,
              },
              {
                name: "HYPESQUAD_BALANCE",
                value: (1 << 6) & user.flags ? "Yes" : "No",
                inline: true,
              },
              {
                name: "HYPESQUAD_BRILLIANCE",
                value: (1 << 7) & user.flags ? "Yes" : "No",
                inline: true,
              },
              {
                name: "HYPESQUAD_BRAVERY",
                value: (1 << 8) & user.flags ? "Yes" : "No",
                inline: true,
              },
              {
                name: "PREMIUM_EARLY_SUPPORTER",
                value: (1 << 9) & user.flags ? "Yes" : "No",
                inline: true,
              },
              {
                name: "TEAM_PSEUDO_USER",
                value: (1 << 10) & user.flags ? "Yes" : "No",
                inline: true,
              },
              {
                name: "BUGHUNTER_LEVEL_2",
                value: (1 << 14) & user.flags ? "Yes" : "No",
                inline: true,
              },
              {
                name: "VERIFIED_BOT",
                value: (1 << 16) & user.flags ? "Yes" : "No",
                inline: true,
              },
              {
                name: "VERIFIED_DEVELOPER",
                value: (1 << 17) & user.flags ? "Yes" : "No",
                inline: true,
              },
              {
                name: "CERTIFIED_MODERATOR",
                value: (1 << 18) & user.flags ? "Yes" : "No",
                inline: true,
              },
              {
                name: "BOT_HTTP_INTERACTIONS",
                value: (1 << 19) & user.flags ? "Yes" : "No",
                inline: true,
              },
            ]);
          await i.update({ embeds: [e2], components: [back] });
          a = 1;
        }
        if (i.customId == "back") {
          await i.update({ embeds: [embed], components: [button] });
          a = 0;
        }
      });

      collector.on("end", async (collected) => {
        console.log(`Collected ${collected.size} items`);
        if (a == 0)
          await reply.update({
            embeds: [embed],
            components: [
              new MessageActionRow().addComponents(
                new MessageButton()
                  .setLabel("Expand Bitflags")
                  .setDisabled(true)
                  .setStyle("SECONDARY")
              ),
            ],
          });
        if (a == 1)
          await reply.update({
            embeds: [embed],
            components: [
              new MessageActionRow().addComponents(
                new MessageButton()
                  .setLabel("Back")
                  .setStyle("SECONDARY")
                  .setDisabled(true)
              ),
            ],
          });
      });
    } else {
      console.log(1);
      let MoTD = await readFile("./MoTD.txt", (e, o) => {
        return o;
      });
      let std1 = await exec("git rev-parse --short HEAD");
      let std2 = await exec("cat ./package.json | grep version");
      console.log(std1);
      embed
        .setTitle(`About`)
        .setDescription("Made by <@581558160008019990>")
        .addFields([
          {
            name: `Version`,
            value: `${/\d.\d.\d/g
              .exec(std2.stdout)
              .toString()
              .replace(",", ".")}@${std1.stdout.trim()}`,
            inline: true,
          },
          {
            name: "Library",
            value: "Discord.js",
            inline: true,
          },
          {
            name: "Latency",
            value: `${client.ws.ping}ms`,
            inline: true,
          },
          {
            name: "Uptime",
            value: client.uptime.toString(),
            inline: true,
          },
          {
            name: "Servers",
            value: client.guilds.cache.size.toString(),
            inline: true,
          },
          {
            name: "MoTD",
            value: String(MoTD),
            inline: true,
          },
        ])
        .setAuthor(
          client.user.username,
          "https://cdn.discordapp.com/avatars/832857888505856060/bf78da92a3af318337cf28aa1d6136d8.webp"
        );
      interaction.reply({
        embeds: [embed],
      });
    }
  },
};
