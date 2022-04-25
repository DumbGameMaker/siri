#!/usr/bin/env /usr/bin/node

const { Embed } = require("@discordjs/builders");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  helpdata: {
    usage: "/8ball <question>",
    description: "8-ball know all.",
    name: "8ball",
  },
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("8-ball know all.")
    .addStringOption((o) => {
      return o.setName("question").setDescription("question").setRequired(true);
    }),
  async execute(interaction, client) {
    let yes = [
      "Can cars go?",
      "About as sure as I am a girl",
      "yes ",
      "i mean... yes",
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
    ];
    let no = [
      "can pigs fly?",
      "no ",
      "no way",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful",
      "once glacial admits to having been ratiod",
      "if(1 == 0) yes",
      "if(true) no",
      "no.",
    ];
    let idk = [
      "Reply hazy, try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful",
      "i really do not know",
    ];
    let answer = [yes, no, maybe][crypto.randomInt(0, 2)];

    interaction.reply({
      embeds: [
        new Embed()
          .setTitle(interaction.options.getString("question"))
          .setDescription(answer[crypto.randomInt(0, answer.length - 1)]),
      ],
    });
  },
};
