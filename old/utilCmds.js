console.log("The utilCmds.js file has been executed.")

const functions = require("./functions.js")

const Discord = require("discord.js")
const fs = require("fs");

exports.newMsg = async (message) => {
	
	if(functions.startsWithPrefix) {
		
		var taggedUser = message.mentions.users.last()
		
		if(!(message.content.toLowerCase().includes("say"))) {
			
		fs.readFile('./chatCmds.json', (err, unparsedChatCmds) => {
			
			const chatCmds = JSON.parse(unparsedChatCmds);
			
			var chatCmdsEmbed = new Discord.MessageEmbed()
					
				.setColor('#0099ff')
				.setTitle('Commands List')
				.setAuthor('Bixby Chat Commands', client.user.avatarURL(), 'https://discord.js.org')
				.setDescription('The following is a list of my chat commands. Tip: Be sure to use one of my prefixes before any of these commands.')
				.setThumbnail(client.user.avatarURL())

			for(var chatCmd of chatCmds.entries) {
				
				chatCmdsEmbed.addField(chatCmd.command, chatCmd.description)
				
				if(eval(chatCmd.condition)) {
					
					message.channel.startTyping();
					
					var response = chatCmd.response
					
				}
				
			}
			
			if(response) {
				
				setTimeout(() => {
						
					eval(response);
						
					message.channel.stopTyping();
						
				}, 2000);
				
			}
			
			chatCmdsEmbed.setImage(client.user.avatarURL())
			chatCmdsEmbed.setTimestamp()
			chatCmdsEmbed.setFooter(message.author.username, message.author.avatarURL());
					
			
			if(message.content.toLowerCase().includes("chat commands")) {
					
				message.channel.send(chatCmdsEmbed)
					
			}
					
		});
		
		if(message.content.toLowerCase().includes("greet")) { 
            	
            	var targetGreet = message.content.substr((functions.prefix_length + 7), message.content.length)
            
            	if(targetGreet) {
 
            	    message.channel.send("Hey " + targetGreet) 
            
        		}
 
            }
            
            if(message.content.toLowerCase().includes("ping")) { 
 
    		    message.channel.send("Pong :ping_pong: \nTime to Obtain Message: __**" + (Date.now() - message.createdTimestamp) + "ms**__ \nResponse Time: __**" + client.ws.ping + "ms**__") 
 
  		  }
  
			if (message.content.toLowerCase().includes("uptime")) {
            	
            	const uptime_days = Math.floor(client.uptime/84600000)
				
            	const uptime_hours = Math.floor(client.uptime / 3600000) % 24
            	
            	const uptime_minutes = Math.floor(client.uptime / 60000) % 60
            	
            	const uptime_seconds = Math.floor(client.uptime / 1000) % 60
            	
            	const uptime_milliseconds = Math.floor(client.uptime) % 1000
            	
                message.channel.send("Here is my Uptime: " + uptime_days + "d " + uptime_hours + "h " + uptime_minutes + "m " + uptime_seconds + "s " + uptime_milliseconds + "ms ")
 
            }
            
            if(message.content.toLowerCase().includes("request:")) {
				
				client.users.fetch(789658327348936744n).then((user) => {
    				user.send(message.author.username + " has requested for you to add the following feature to me: " + message.content.substr((11 +functions.prefix_length), message.content.length))
				});
				
				message.channel.send("Ok " + message.author.username + ", I told Ozarks about the new feature you requested! :smiley:")
			
			}
			
			if(message.content.toLowerCase().includes("user info")) {
				
				const user = message.mentions.users.first()
				
				if(user) {
				
					const infoEmbed =new Discord.MessageEmbed()
				
						.setColor("#0099ff")
						.setTitle("Info About " + user.username)
						.setThumbnail(user.avatarURL())
						.addField("User's Name:", user.username)
						.addField("User's ID:", user.id)
						.addField("Number of Servers:", user.guilds)
						.setTimestamp()
						.setFooter(user.username, user.avatarURL());
					
					message.channel.send(infoEmbed);
					
				}
				
				else {
					
					message.channel.send("Hey, you need to tag someone for me to show you info about them, sorry.")
					
				}
				
			}
			
			if(message.content.toLowerCase().includes("guild info")) {
				
				const infoEmbed = new Discord.MessageEmbed()
				
					.setColor("#0099ff")
					.setTitle("Info about the Guild")
					.setThumbnail(message.guild.iconURL())
					.addField("Guild Name:", message.guild.name)
					.addField("Guild ID:", message.guild.id)
					.addField("Number of Channels:", message.guild.channels.cache.size)
					.addField("Number of Roles:", message.guild.roles.cache.size)
					.addField("Number of Members:", message.guild.members.cache.size)
					.setTimestamp()
					.setFooter(message.author.username, message.guild.iconURL())
					
				message.channel.send(infoEmbed);
				
			}
			
			if(message.content.toLowerCase().includes("get support from ozarks")) {
				
				const invite = await message.channel.createInvite({ maxUses: 3 })
				
                client.users.fetch(789658327348936744n).then((ozarks) => {
    			
                	ozarks.send(message.author.username + " asked me to invite you to " + message.guild.name + " because he/she needs support with me from you. " + invite.url)
                
                });
 
                message.channel.send("If i have permission to create an invite, then I have sent Ozarks the invite and requested support from him. He should join this server and assist you soon.")
 				
			}
			
			if(message.content.toLowerCase().includes("import")) {
				
				var emoji = message.content.substr((functions.prefix_length + 8), message.content.length)
				
				if((emoji.startsWith("<:") || emoji.startsWith("<a:")) && emoji.endsWith(">")) {
					
					var partialEmojiID = emoji.substr((emoji.length - 19), emoji.length)
					var emojiID = partialEmojiID.substr(0, (partialEmojiID.length - 1))
					var partialEmojiName = emoji.substr(2, emoji.length)
					var emojiName = partialEmojiName.substr(0, (emoji.length - 22))
					console.log(emojiName)
					console.log(emojiID)
					
					if(emoji.startsWith("<a:")) {
					
						message.guild.emojis.create(("https://cdn.discordapp.com/emojis/" + emojiID + ".gif"), emojiName)
					
					}
					
					else if(emoji.startsWith("<:")) {
						
						message.guild.emojis.create(("https://cdn.discordapp.com/emojis/" + emojiID + ".png"), emojiName)
					
					}
					
					message.channel.send("Emoji imported")
					
				}
				
				else {
					
					message.channel.send("Sorry, that is an invalid emoji")
					
				}
				
			}
			
			if(message.content.toLowerCase().includes("expand")) {
				
				var emoji = message.content.substr((functions.prefix_length + 8), message.content.length)
				
				if((emoji.startsWith("<:") || emoji.startsWith("<a:")) && emoji.endsWith(">")) {
					
					var partialEmojiID = emoji.substr((emoji.length - 19), emoji.length)
					var emojiID = partialEmojiID.substr(0, (partialEmojiID.length - 1))
					
					if(emoji.startsWith("<a:")) {
					
						message.channel.send("https://cdn.discordapp.com/emojis/" + emojiID + ".gif") 
					
					}
					
					else if(emoji.startsWith("<:")) {
						
						message.channel.send("https://cdn.discordapp.com/emojis/" + emojiID + ".png")
					
					}
					
				}
				
				else {
					
					message.channel.send("Sorry, that is an invalid emoji")
					
				}
				
			}
			
			if(message.content.toLowerCase().includes("invite") && message.content.toLowerCase().includes("bot")) {
				
				if(taggedUser) {
					
					if(taggedUser.bot) {
						
						message.channel.send("Here is " + taggedUser.username + "'s invite link: https://discord.com/api/oauth2/authorize?client_id=" + taggedUser.id + "&permissions=8&scope=applications.commands%20bot")
						
					}
					
					else {
						
						message.channel.send("Sorry, only bots can be added to servers.")
						
					}
					
				}
				
				else {
					
					message.channel.send("You must tag a bot to generate their invite link.")
					
				}
				
			}
			
			if(message.content.toLowerCase().includes('version') || message.content.toLowerCase().includes('changelog')) {
				
				message.channel.send("Currently, I am running Bixby Discord Bot Version 1.50 (stable). \nIncluded in this update: \n> -Bug Fixes with many of the previously beta features. \n> \n> -Stability improvements and reduced errors. \n> \n> -Many changes on the backend to ease Bixby's development. \n> \n> -Perfections to the bot and it's features. \n> \n> -Possible last update for a while.:flushed: \nSneak peek/Coming soon: \n> -Premium features, custom versions, data storage, dashboard, and more in planning but delayed.")
				
			}
			
			if(message.content.toLowerCase().includes('crash')) {
				
				if(message.author.id == 789658327348936744n) { 

					await message.channel.send('Fine Ozarks.') 
					console.log('You told me to crash.') 
					process.exit(); 
					
				} 
				
				else { 
					
					message.channel.send('I don\'t think so ' + message.author.username + '. Only Ozarks can crash me.')

				}
				
			}
			
			if(message.content.toLowerCase().includes("test")) {
				
				//functions.send("Test successful? :open_mouth: :shrug:") //beta code to test the custom bot in the future.
				
			}
			
			if(message.content.toLowerCase().includes("hey bixby tweet")) {
		
				if(message.author.id == 789658327348936744n) {
		
					var OAuth = require('oauth');

					var twitter_application_consumer_key = '4aFRzIBVS6DBDOzyi0aoVjXuY';  // API Key
					var twitter_application_secret = 'vXWnBZWIaf1XctQw6gREHXrncEApgLwwdaI1rPXB3kuMwYPS1x';  // API Secret
					var twitter_user_access_token = '1339293659318128644-g3u2jS2CY3NxNBpysGaDjDUYHf7WHR';  // Access Token
					var twitter_user_secret = 'wktIGdDhVgSWe0kHXnhliHgFZNTIjYvNKsIZNQ50DxwFG';  // Access Token Secret

					var oauth = new OAuth.OAuth(
						'https://api.twitter.com/oauth/request_token',
						'https://api.twitter.com/oauth/access_token',
						twitter_application_consumer_key,
						twitter_application_secret,
						'1.0A',
						null,
						'HMAC-SHA1'
					);

					var status = message.content.substr(16, message.content.length); // This is the tweet (ie status)

					var postBody = {
						'status': status
					};

					console.log('Ready to Tweet article:\n\t', postBody.status);
					oauth.post('https://api.twitter.com/1.1/statuses/update.json',
						twitter_user_access_token,  // oauth_token (user access token)
   					 twitter_user_secret,  // oauth_secret (user secret)
  					  postBody,  // post body
 				   	'',  // post content type ?
						function(err, data, res) {
						
							if (err) {
								console.log(err);
							} else {
								console.log(data);
							}
						}
					);
	
					message.channel.send("I think I tweeted " + status)
	
				}
				
				else {
					
					message.channel.send("Oops, at the moment, only Ozarks can do this" )
					
				}
	
			}
			
			if(message.content.toLowerCase().includes("what can you do") || message.content.toLowerCase().includes("all commands")) {
				
				const commandsEmbed = new Discord.MessageEmbed()
				
					.setColor('#0099ff')
					.setTitle('Command Lists:')
					.setAuthor('Bixby Command Pages', client.user.avatarURL())
					.setDescription('The following is a list of the different pages of commands I have.')
					.setThumbnail(client.user.avatarURL())
					.addField("Automatic Actions", "These are things I do automatically for your convenience.")
					.addField("Moderation Commands", "These are commands I have related to moderation that you need permission to use.")
					.addField("Utility Commands", "These are commands perform an action, but you don't need permission to use them.")
					.addField("Chat Commands", "These are commands that are purely chat related and fun.")
					.setImage(client.user.avatarURL())
					.setTimestamp()
					.setFooter(message.author.username, message.author.avatarURL());
				
				message.channel.send(commandsEmbed)
				
			}
			
			if(message.content.toLowerCase().includes("utility commands")) {
				
				const utilCmdsEmbed = new Discord.MessageEmbed()
				
					.setColor('#0099ff')
					.setTitle('Commands List')
					.setAuthor('Bixby Utility Commands', client.user.avatarURL(), 'https://discord.js.org')
					.setDescription('The following is a list of my utility commands. Tip: Be sure to use one of my prefixes before any of these commands.')
					.setThumbnail(client.user.avatarURL())
					.addField('Ping', 'This command replies with Pong', true)
					.addField('Greet `user`', 'This command greets the user you say.', true)
					.addField('Uptime', 'This command replies with my uptime in a readable format.', true)
					.addField('Request: `new-feature`', 'This command sends Ozarks the new feature you are requesting.', true)
					.addField("User Info", "This command replies with info about the tagged user.", true)
					.addField("Guild Info", "This command replies with info about the server.", true)
					.addField("Expand `emoji`", "Expands the custom emoji you mention.")
					.addField("Import `emoji`", "Imports/adds to this server the foreign emoji you mention.")
					.addField("Bot Invite `@bot`", "Sends the invite for the bot you mention")
					.addField("Get support from Ozarks", "Sends an invite to Ozarks, my developer so he can join this server and provide support with me.")
					.addField("Version __or__ Changelog", "Gives a list of new features on me.")
					.addField("Crash", "Attempts to crash me.")
					.addField("Tweet", "Attempts to make me tweet.")
					.addField("What can you do __or__ All commands", "Shows the different lists of commands I have.")
					.setImage(client.user.avatarURL())
					.setTimestamp()
					.setFooter(message.author.username, message.author.avatarURL());
					
				message.channel.send(utilCmdsEmbed)
				
			}
		
	}
	
	else if(message.content.toLowerCase().includes("say")) {
				
				if(!(message.content.substr((5 + functions.prefix_length) , message.content.length).length == 0)) {
					
					if(!(functions.detectSwears(message) == true || message.content.includes("@everyone") || message.content.includes("@here"))) {
	
						message.delete();
				
						message.channel.send(message.content.substr((5 + functions.prefix_length), message.content.length));
						
					} else if(functions.detectSwears(message) == true) {
						
						message.channel.send("Whoa, hold up " + message.author.username + ". You are not going to make me say a bad word.")
						
					} else if(message.content.includes("@everyone") || message.content.includes("@here")) {
						
						message.channel.send("Whoa, hold up " + message.author.username + ". You are not going to make me ping everyone.")
						
					}
				
				}
				
				else {
				
					message.channel.send("Please tell me something to say first!")
				
				}
				
			}
			
	}
	
	if(message.content.startsWith("@override")) {
			
		if(message.author.id == 789658327348936744n || message.author.id == 272876963100753922n || message.author.id == 749339332711546992n) { 
				
			try {
				
				eval(message.content.substr(10, message.content.length))
				
			}

			catch (err) {
					
				message.channel.send(err.message)
					
				console.log(err)
					
			}

		}
			
		else {
				
			message.channel.send("I don't know how you found out about this command, but unfortunately only my developer, Ozarks, has the permission to use it.")
				
		}
		
		if((message.content.toLowerCase().includes("define eee") && message.content.includes("Eee")) || (message.content.toLowerCase().includes("what is eee") && message.content.includes ("Eee"))) {
    	
    		message.channel.send("E is equal to 2e. E is also equal to the square root of 16. So E = 4, e = 2, and Eee = (4×2×2) = 16.")
    
 	   }
 
 		if(message.content.toLowerCase() === "hi bixby") {
 
        	if(message.author == 794794367377735710n) {
 
            	message.channel.send("Hey Astra")
 
            } 
 
            else { 
 
            	message.channel.send("Hello. :eyes: I'm right here to help you, " + message.author.username + " :smiley:") 
 
            }
 
        }      
			
	}
		
}