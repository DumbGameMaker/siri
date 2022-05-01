const commands = {
  default: this.help,
  applesweeper: {
    keywords: ["applesweeper", "minesweeper", "mines", "apples"],
    action: "launch applesweeper",
  },
  ball: {
    keywords: ["ball", "8ball", "decide", "8-ball"],
    action: "launch 8ball",
  },
  rps: {
    keywords: ["rps", "rock", "paper", "scissors", "row sham bow"],
    action: "launch rps",
  },
  help: {
    keywords: ["help", "commands", "command", "hlp", "hlep"],
    action: "launch help",
  },
  invite: {
    keywords: ["invite", "inv", "invite-bot", "inv-bot"],
  },
};

const parse = (message) => {
  let messageArgs = message.split(" ");
  let command = "";

  let keys = [];

  for (item in commands) {
    for (keyword of commands[item]["keywords"])
      if (messageArgs.includes(keyword)) {
        keys.push(keyword);
      }
  }
  if (commands.help.keywords.includes(keys[0])) {
    command = commands.help;
    command.action = command.action + " " + keys[1];
  }
  return command.action;
};

const launch = (interaction, action, client) => {
  if (action.startsWith("launch")) {
    interaction.followUp(`Run the command /${action.substring(7)}`);
  }
};

module.exports = {
  parse,
  launch,
};
