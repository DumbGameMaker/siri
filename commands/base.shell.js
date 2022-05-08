const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
const child_process = require("child_process");
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

module.exports = {
  helpdata: {
    usage: "/shell",
    description: "Opens a shell, for setup. You cant use this",
    name: "shell",
  },
  data: new SlashCommandBuilder()
    .setName("shell")
    .setDescription("Opens a shell, for setup. You cant use this"),
  async execute(interaction, client) {
    if (interaction.user.id !== "581558160008019990") return;
    let me = interaction.user;
    let dmChannel = await me.createDM(yes);
    interaction.reply("Check dms");
    let i = child_process.spawn("/bin/bash", []);
    let exited = "yes";
    let last = "";
    i.on("stdout", (data) => {
      dmChannel.send(data.toString());
    });
    i.on("exit", (code) => {
      exited = code;
    });
    while (true) {
      if (exited !== "yes") break;
      let _this = await dmChannel.messages.fetch({ limit: 1 });
      if (_this.first().content === last) continue;
      last = _this.first().content;

      i.stdin.write(last + "\n");
      await sleep(200);
    }
  },
};
