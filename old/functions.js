var fs = require("fs");

function sendClient(clientVar) {
  client = clientVar;
}
exports.sendClient = sendClient;

//non functioning code to save values to the exports.
/*function saveValue(name, value) {
	
	exports.name = value
	
	name = value
	
}*/

function newMsg(message) {
  //check if message starts with prefix and fetch prefix info
  if (
    (message.content.toLowerCase().startsWith("hey bixby") ||
      message.content.toLowerCase().startsWith("bixby") ||
      message.content.toLowerCase().startsWith("<:bixby:") ||
      message.content.toLowerCase().startsWith("b.") ||
      message.content.startsWith("<@" + client.user.id + ">") ||
      (message.guild &&
        message.guild.id == 829825972432928809 &&
        message.content.startsWith(
          ">"
        ))) /*|| (message.guild && guildIsPremium && message.content.startsWith(customPrefix))*/ &&
    !(message.author.id == client.user.id)
  ) {
    exports.startsWithPrefix = true;

    if (
      message.content.toLowerCase().startsWith("hey siri") &&
      !message.content.toLowerCase().startsWith("hey siri,")
    ) {
      var prefix_length = 8;
    } else if (message.content.toLowerCase().startsWith("hey siri,")) {
      var prefix_length = 9;
    } else if (message.content.toLowerCase().startsWith("siri")) {
      var prefix_length = 4;
    } else if (message.content.toLowerCase().startsWith("s.")) {
      var prefix_length = 1;
    } else if (message.content.startsWith("<@" + client.user.id + ">")) {
      var prefix_length = 21;
    } else if (message.content.startsWith(">")) {
      var prefix_length = 0;
    } /*else if(message.content.toLowerCase().startsWith(customPrefix)) {
				var prefix_length = (customPrefix.length - 1)
			}*/

    exports.prefix_length = prefix_length;
  } else {
    exports.startsWithPrefix = false;
  }
}
exports.newMsg = newMsg;

exports.detectSwears = (message) => {
  //  ignore jenna's server for swears
  if (message.channel.guild == "825457730160558110") {
    return false;
  }
  // ignore bonsai server for swears
  if (message.channel.guild == "554745444304027653") {
    return false;
  }
  if (message.author.id == "272876963100753922") {
    return false;
  }
  var badWords = [
    "fuck",
    "shit",
    "bitch",
    "cock",
    "nigger",
    "whore",
    "penis",
    "cunt",
    "pussy",
    "sex",
    "porn",
    "b!tch",
    "f0ck",
    "c0ck",
    "sh!t",
    "d!ck",
    "p0rn",
    "nigga",
    "clit",
  ];

  var containsBadWords;

  for (const badWord of badWords) {
    if (message.content.toLowerCase().includes(badWord)) {
      var containsBadWords = true;
    }
  }

  if (containsBadWords) {
    return true;
  } else {
    return false;
  }
};

exports.pingBot = () => {
  const http = require("http");
  const express = require("express");
  const app = express();
  app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
  });
  app.listen(3000);
  setInterval(() => {
    http.get("http://bixby-discord-bot.ozarkshappiness.repl.co/");
  }, 2800000);
};
