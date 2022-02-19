console.log("The autoActions.js file has been executed.")

const functions = require("./functions.js")
const Discord = require("discord.js")

exports.newMsg = (message) => {
	
	if(functions.detectSwears(message)) {
		
		message.channel.send("Please refrain from using that kind of language, " + message.author.username)
		
	}
	
	
	if(message.guild) {
		
		if(message.channel.name.toLowerCase().includes("count")) {
			
			const countUser = message.guild.members.cache.find(member => member.user.username.toLowerCase().includes("count"))
			
			if(countUser) {
				
				if(countUser.user.bot) {
					
					countBot = true
					
				}
				
				else {
					
					countBot = false
					
				}
					
			}
			
			else {
				
				countBot = false
				
			}
			
			if((countBot == false) || (message.channel.name.toLowerCase().includes("bixby"))) {
			
			if(Number(message.content) + 1) {
				
				message.channel.messages.fetch({ limit: 2 }).then(messages => {
         	   var lastMessage = messages.last();

					if(lastMessage) {
						
						if((Number(message.content) - Number(lastMessage.content)) == "1" && !(message.author.username == lastMessage.author.username)) {
							
							if(message.content.substring(message.content.length - 2, message.content.length) === "50") {
							
								message.react("🌟")
								
							}
							
							else if(message.content.substring(message.content.length - 2, message.content.length) === "00") {
								
								message.react("💫")
								
							}
								
							else {
									
								message.react("⭐")
									
							}
				
							if(message.content.substring(message.content.length - 1, message.content.length) === "4") {
				
								message.channel.send(Number(message.content) + 1)
					
							}
					
						}
				
						else {
					
							message.delete();
					
						}
						
					}
				
				})
			
			}

			else {
				
				message.delete();
				
			}
			
		}
			
		}
		
	}
	
	
	if(!(message.content.toLowerCase().startsWith("bixby")) && !(message.content.toLowerCase().startsWith("<:bixby:")) && !(message.content.toLowerCase().startsWith("hey bixby")) && !(message.content.startsWith("<@" + client.user.id + ">")) && (message.content.toLowerCase().includes("bixby") || message.content.includes("<@" + client.user.id + ">"))) {
			
		try { message.react("<:sus:826251069780525056>") } catch(error) {}
			
	}
	
	if(message.content.toLowerCase().includes("ozark")) {
		
		if(Math.floor(Math.random() * 1) == 0) {
			
			try { message.react("<:ozarks:815662772577894490>") } catch(error) {}
			
		}
		
		else {
			
			try { message.react("<a:PetOzarks:796211034876411914>") } catch(error) {}
			
		}
		
	}
	
	if(message.content.toLowerCase().includes("daniel")) {
		
		if(Math.floor(Math.random() * 1) == 0) {
			
			try { message.react("<:daniel:822105537709604956>") } catch(error) {}
			
		}
		
		else {
			
			try { message.react("<a:PetDaniel:796210478359379978>") } catch(error) {}
			
		}
		
	}
	
	if(functions.startsWithPrefix) {
		
		if(message.content.toLowerCase().includes("automatic actions")) {
				
			const autoActionsEmbed = new Discord.MessageEmbed()
				
					.setColor('#0099ff')
					.setTitle('Command List:')
					.setAuthor('Bixby Automatic Actions', client.user.avatarURL())
					.setDescription('The following is a list of the different actions I perform on my own.')
					.setThumbnail(client.user.avatarURL())
					.addField("Welcome and leave messages", "If a channel name contains the word __portal__ in it, I automatically send welcome and leave messages when users join and leave the server. I also give people the Member role and bots the Bot role automatically when joining.")
					.addField("Censors swear words", "When members use swear words in their messages, I automatically send a warning message to discourage it.")
					.addField("Controls counting channel", "If a channel name contains the word count ot bixby count, I automatically control that channel to make sure bad numbers and words are kept out of it. I make sure only numbers in order are in that channel.")
					.setImage(client.user.avatarURL())
					.setTimestamp()
					.setFooter(message.author.username, message.author.avatarURL());
					
			message.channel.send(autoActionsEmbed)
				
		}
		
	}
	
	
}


exports.newMember = (member) => {
	
	member.send("Hi " + member.user.username + ". I just wanted to personally welcome you to " + member.guild.name + ". I think you will enjoy it here. Don't forget to check out the rules channel and the announcements channel as well. Have fun! :smiley:");
		
	const welcomeChannel = member.guild.channels.cache.find(channel => channel.name.toLowerCase().includes("portal"));
		
	if(welcomeChannel) {
		
		welcomeChannel.send("Yay! We have a new member! :smiley:");
		
		welcomeChannel.send("<@" + member.user.id + ">, welcome to " +member.guild.name + ". I am so glad you are here. I really hope you enjoy being here. :grin:");
			
	}
	
	if(member.user.bot) {
		
		var botRole = member.guild.roles.cache.find(role => role.name.toLowerCase().includes("bot"));
		
		if(botRole) {
			member.roles.add(botRole);
		}
		
	}
	
	else {
		
		var memberRole = member.guild.roles.cache.find(role => role.name.toLowerCase().includes("member"));
		
		if(memberRole) {
			member.roles.add(memberRole);
		}
		
	}
	
}


exports.oldMember = (member) => {
	
	const welcomeChannel = member.guild.channels.cache.find(channel => channel.name.toLowerCase().includes("portal"));
	
	if(welcomeChannel) {
	
		welcomeChannel.send("Oh no! " + member.user.username + " has left the server for some reason. :frowning: I am so sad :sob:");
		
	}
	
}

exports.newGuild = (guild) => {
	
	guild.emojis.create(client.user.avatarURL(), "bixby")
	
}