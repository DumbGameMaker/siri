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
    if (
      interaction.user.id !== "581558160008019990" &&
      interaction.user.id !== "272876963100753922"
    )
      return;
    let me = interaction.user;
    let dmChannel = me.dmChannel || (await me.createDM(true));
    let exited = false;
    let a = 0;
    client.on("messageCreate", async (msg) => {
      if (msg.author !== me) return;

      if (exited) return;

      if (msg.content == "srslystop") return (exited = true);

      try {
        a = child_process.exec(`${msg.content}`, (err, stdout, stderr) => {
          if (err) return dmChannel.send("err:" + err);

          if (stderr) return dmChannel.send("stderr:" + stderr);

          if (stdout.length > 2000) {
            let chunks = [];
            let chunkSize = 2000;
            let i = 0;
            while (i < stdout.length) {
              chunks.push(stdout.substr(i, chunkSize));
              i += chunkSize;
            }
            chunks.forEach((chunk) => {
              dmChannel.send(chunk || "empty");
            });
          } else dmChannel.send(stdout || "no output. (cd is broken lol)");
        });
      } catch (e) {
        dmChannel.send(e || "error");
      }
    });

    interaction.reply("Check dms");
    while (exited) return;
  },
};
