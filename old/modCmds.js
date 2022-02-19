console.log("The modCmds.js file has been executed.")
  
const Discord = require("discord.js")
const functions = require("./functions.js")
  
exports.newMsg = async (message) => {
	
	if(functions.startsWithPrefix) {
		
		var prefix_length = functions.prefix_length
	
		if(!(message.content.toLowerCase().includes("say"))) {
			
		const taggedUser = message.mentions.users.last();
            
        const taggedChannel = message.mentions.channels.first();
        
    	if(message.content.toLowerCase().includes("mute") || message.content.toLowerCase().includes("kick") || message.content.toLowerCase().includes("ban") || message.content.toLowerCase().includes("set slowmode") || message.content.toLowerCase().includes("purge") || message.content.toLowerCase().includes("assign the role") || message.content.toLowerCase().includes("lock channel") || message.content.toLowerCase().includes("hide channel") || message.content.toLowerCase().includes("lock server")) {
        
        if(message.guild) {
        	
        	const targetUser = message.guild.member(taggedUser);
 		   
    		if(message.guild.me.hasPermission("ADMINISTRATOR")) {
 	
 	   		const modRole = message.guild.roles.cache.find(role => role.name.toLowerCase().includes("mod"));
 
 	   		if(modRole) {
 	
 		  		 if(message.member.roles.cache.has(modRole.id)) {
 	
 						userModPerm = true
 
 					}
 
 					else {
 	
 						userModPerm = false
 
 					}
 
 				}
 
 				else {
 	
 					userModPerm = false
 
 				}
 			
 		  	 if((userModPerm == true) || message.member.hasPermission("ADMINISTRATOR") || message.author == 789658327348936744n) {
 			
         	  	 if(message.content.toLowerCase().includes("kick") && !(message.content.toLowerCase().includes("unkick"))) {
            	
            			if(taggedUser) {
            
            				if(!(taggedUser.id == message.author.id)) {
            	
            					if(!(taggedUser.id == 789658327348936744n) && !(taggedUser.id == 272876963100753922n)) {
 
             	   				targetUser.kick({reason: message.author.username + " told Bixby to."})
 
            	 	   			message.channel.send("If role hierarchy allows me to kick " + taggedUser.username + ", consider the job done.")
            
            					}
            
            					else {
            	
            						message.channel.send("Like I would actually kick my creator or his best friend. Rude. :frowning:")
            
            					}
                
          	    		  }
                
            			    else {
                	
                				message.channel.send("Umm, I don't think kicking yourself is a good idea, sorry.")
                
            			    }
                
             		   } 
 
           			 else if (!taggedUser) { 
 
               			 message.channel.send("Sorry, you must tag a user first to kick them.") 
 
            			} 
 
           		 }
            
        		    if(message.content.toLowerCase().includes("mute") && !(message.content.toLowerCase().includes("unmute"))) {
            	
            	if(taggedUser) {
            
            		if(!(taggedUser.id == message.author.id)) {
            	
            			if(!(taggedUser.id == 789658327348936744n) && !(taggedUser.id == 272876963100753922n)) {
            	
            				var muteRole = message.guild.roles.cache.find(role => role.name.toLowerCase().includes("muted"));
            
            				if(!(muteRole)) {
            	
            					message.guild.roles.create( { data: { name: "Muted😦", permissions: [] } } ).then((muteRole) => { 

									message.guild.channels.cache.forEach((channel) => {
				
										if(channel.type == 'text') {
					
											channel.updateOverwrite(muteRole, { SEND_MESSAGES: false });
					
										}
				
									})

								})
								
            					message.channel.send("It looks like this server doesn't have a Muted role yet, but I created one. :slight_smile:")
            
            				}
            
            				var muteRole = message.guild.roles.cache.find(role => role.name.toLowerCase().includes("muted"));
            
            				targetUser.roles.add(muteRole);
            		
           	 			message.channel.send("If role hierarchy allows me to mute " + taggedUser.username + ", consider the job done.")	
            
            			}
            
            			else {
            	
            				message.channel.send("Like I would actually mute my creator or his best friend. Rude. :frowning:")
            
            			}
            
            		}
            
            		else {
            	
            			message.channel.send("Umm, I don't think muting yourself is such a good idea, sorry.")
            
            		}
            
            	}
            
            	else if(!taggedUser) {
            	
            		message.channel.send("Sorry, you must tag a user first to mute them.") 
            
            	}
            
        	}
        
        	if(message.content.toLowerCase().includes("unmute")) {
            	
            	if(taggedUser) {
            	
            		var muteRole = message.guild.roles.cache.find(role => role.name.toLowerCase().includes("muted"));
            
            		targetUser.roles.remove(muteRole);
            		
            		message.channel.send("If role hierarchy allows me to unmute " + taggedUser.username + ", consider the job done.")
            
            	}
            
            	else if(!taggedUser) {
            	
            		message.channel.send("Sorry, you must tag a user first to unmute them.") 
            
            	}
            
            }
 
            if(message.content.toLowerCase().includes("ban") && !(message.content.toLowerCase().includes("unban"))) {
            	
            	if(taggedUser) {
            	
            		if(!(taggedUser.id == message.author.id)) {
            	
            			if(!(taggedUser.id == 789658327348936744n) && !(taggedUser.id == 272876963100753922n)) {
 
             	       	targetUser.ban( {reason: message.author.username + ' told Bixby to.'} )
 
            	      	  message.channel.send("If role hierarchy allows me to ban " + taggedUser.username + ", consider the job done.")
 					
            			}
            
            			else {
            	
            				message.channel.send("Like I would actually ban my creator or his best friend. Rude. :frowning:")
            
        	    		}
            
       	     	}
                
          	      else {
                	
            		    message.channel.send("Umm, I don't think banning yourself is a good idea, sorry.")
                
              	  }
              
                }
                
                else if (!taggedUser) { 
 
            		 message.channel.send("Sorry, you must tag a user first to ban them.") 
 
            	 }
            
            } 
 
            if(message.content.toLowerCase().includes("unban")) {
 
                if(taggedUser) {
 
                    message.guild.members.unban(targetUser.user)
 
                    message.channel.send("If role hierarchy allows me to unban " + taggedUser.username + ", consider the job done.")
 
                } 
 
                else if (!taggedUser) { 
 
                    message.channel.send("Sorry, you must tag a user first to unban them.") 
 
                }
 
            }

			 if(message.content.toLowerCase().includes("unkick")) {
 
                if(taggedUser) {
 
                    const unkick = await message.channel.createInvite({ maxUses: 1 })
                    
                    taggedUser.send(message.author.username + " asked me to unkick you from " + message.guild.name + "! Welcome back! " + unkick.url)
 
                    message.channel.send("If " + taggedUser.username + " has their DMs open, and they want to be unkicked, then consider the job done.")
 
                } 
 
                else if (!taggedUser) { 
 
                    message.channel.send("Sorry, you must tag a user first to unkick them.") 
 
                }
 
            } 
            
            if(message.content.toLowerCase().includes("assign the role") && !(message.content.toLowerCase().includes("unassign"))) {
            	
            	if(taggedUser) {
            
            		var message_frag = message.content.substr((prefix_length + 17), message.content.length);
            
            		var role_frag = message_frag.substr(0, message_frag.length - 22).toLowerCase();
            	
            		var addRole = message.guild.roles.cache.find(role => role.name.toLowerCase().includes(role_frag));
            
            		if(addRole) {
            
            			targetUser.roles.add(addRole);
            		
            			message.channel.send("If role hierarchy allows me to give " + taggedUser.username + " a role containing " + role_frag + " on this server, consider the job done.")
            
            		}
            
            		else {
            	
            			message.channel.send("Sorry, but you need to say a piece of a role you would like assigned to " + taggedUser.username)
            
            		}
            
            	}
            
            	else {
            	
            		message.channel.send("Sorry, you must tag a user first to assign a role to them.")
            
            	}
            
        	}
        
        	if(message.content.toLowerCase().includes("unassign the role")) {
        	
            	if(taggedUser) {
            
            		var message_frag = message.content.substr((prefix_length + 19), message.content.length);
            
            		var role_frag = message_frag.substr(0, message_frag.length - 22).toLowerCase();
            	
            		var removeRole = message.guild.roles.cache.find(role => role.name.toLowerCase().includes(role_frag));
            
            		if(removeRole) {
            
            			targetUser.roles.remove(removeRole);
            		
            			message.channel.send("If role hierarchy allows me to remove a role containing " + role_frag + " from " + taggedUser.username + " on this server, consider the job done.")
            
            		}
            
            		else {
            	
            			message.channel.send("Sorry, but you need to say a piece of a role you would like removed from " + taggedUser.username)
            
            		}
            
            	}
            
            	else {
            	
            		message.channel.send("Sorry, you must tag a user first to assign a role to them.")
            
            	}
            
        	}
        
        			if(message.content.toLowerCase().includes("set slowmode")) {
        	
        				if(Number(message.content.substr((message.content.length - 2), message.content.length))) {
        	
        					message.channel.setRateLimitPerUser(message.content.substr((message.content.length - 2), message.content.length), message.author.username + " told Bixby to");
        
        					message.channel.send("The slowmode for this channel has been set to " + message.content.substr((message.content.length - 2), message.content.length) + " seconds.")
        
        				}
        
        				else {
        					
        					message.channel.send("Sorry, you must specify the duration of the slowmode in numbers.")
        
        				}
        
 		       	}
        
        			if(message.content.toLowerCase().includes("lock channel") && !(message.content.toLowerCase().includes("unlock"))) {
        	
        				if(taggedChannel) {
        	
        					taggedChannel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false });
        
        					message.channel.send("Denied permissions for everyone to send messages in <#" + taggedChannel.id + ">.")
        					taggedChannel.send("This channel has been locked by the request of a Moderator/Admin.")
        
        				}
        
        				else {
        	
        					message.channel.send("Sorry, you must tag the channel you want to lock.")
        
        				}
        
        			}
        
        			if(message.content.toLowerCase().includes("unlock channel")) {
        	
        				if(taggedChannel) {
        	
        					taggedChannel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: true });
        
        					message.channel.send("Granted permissions for everyone to send messages in <#" + taggedChannel.id + ">")
        					taggedChannel.send("This channel has been unlocked by the request of a Moderator/Admin")
        
        				}
        
        				else {
        	
        					message.channel.send("Sorry, you must tag the channel you want to unlock.")
        
        				}
						       
        			}
        
        			if(message.content.toLowerCase().includes("hide channel") && !(message.content.toLowerCase().includes("unhide"))) {
        	
        				if(taggedChannel) {
						
							taggedChannel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: false });
        
        					message.channel.send("Denied permissions for everyone to see <#" + taggedChannel.id + ">.")
        					taggedChannel.send("This channel has been hidden by the request of a Moderator/Admin.")
        
        				}
        
        				else {
        	
        					message.channel.send("Sorry, you must tag the channel you want to hide.")
        
        				}
						
					}
					
					if(message.content.toLowerCase().includes("unhide channel")) {
						
						if(taggedChannel) {
						
							taggedChannel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: true });
        
        					message.channel.send("Granted permissions for everyone to see <#" + taggedChannel.id + ">")
        					taggedChannel.send("This channel has been unhid by the request of a Moderator/Admin.")
        
        				}
        
        				else {
        	
        					message.channel.send("Sorry, you must tag the channel you want to unhide.")
        
        				}
						
					}
        
        			if(message.content.toLowerCase().includes("purge")) {
        	
        				if(Number(message.content.substr((prefix_length + 7), message.content.length))) {
        	
        					message.channel.messages.fetch({ limit: (Number(message.content.substr((prefix_length + 7), message.content.length))) + 1 }).then(messages => message.channel.bulkDelete(messages));
        
        					message.channel.send("Successfully deleted " + message.content.substr((prefix_length + 7), message.content.length) + " messages.")
        
        				}
        
        				else {
        	
        					message.channel.send("You must specify a number value for messages to purge.")
        
        				}
        	
        			}
        
        			if(message.content.toLowerCase().includes("lock server")) {
        	
        				message.guild.channels.cache.forEach((channel) => {
				
							if(channel.type == 'text') {
					
								channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: false });
								channel.send("This channel has been locked due to the server lockdown requested by a Moderator/Admin.")
					
							}
				
						})
						
						message.channel.send("Server lockdown complete; all channels in the server have been locked.")
        
        			}
        
        			if(message.content.toLowerCase().includes("unlock server")) {
        	
        				message.guild.channels.cache.forEach((channel) => {
				
							if(channel.type == 'text') {
					
								channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: true });
								channel.send("This channel has been unlocked due to the server lockdown ending requested by a Moderator/Admin.")
					
							}
				
						})
						
						message.channel.send("Server lockdown complete; all channels in the server have been locked.")
        
        			}
        
        		}
        
        		else {
        	
        			message.reply("Sorry, but to use any moderation commands, you need either the Mod role, or Administrator permission.")
        
        		}
        
        	}
        
        	else {
        	
        		message.reply("I would love to complete this request, but unfortunately, as per my program, to perform any moderation commands, I need Administrator permission, and it appears I do not have this permission. Someone must have tampered with me. :frowning:")
        
        	}
        
        }
        
   	 else {
        	
        	message.reply("Sorry, moderation commands are only available in servers (not DMs)")
        
		}	
			
		}
		
		if(message.content.toLowerCase().includes("moderation commands")) {
				
    		const modCommandsEmbed = new Discord.MessageEmbed()
     
				.setColor('#0099ff')
				.setTitle('Commands List:')
				.setAuthor('Bixby Moderation Commands', client.user.avatarURL(), 'https://discord.js.org')
				.setDescription('I am glad you asked! :smiley: The following is a list of my Moderation Commands. Tip: Be sure to use one of my prefixes before any of these commands.')
				.setThumbnail(client.user.avatarURL())
				.addField('kick `@user`', 'This command kicks the mentioned user from the server.', true)
				.addField('unkick `@user`', 'This command unkicks the mentioned user from the server by the method of re-inviting.', true)
				.addField('ban `@user`', 'This command bans the mentioned user from the server.', true)
				.addField('unban `@user`', 'This command unbans the mentioned user from the server.', true)
				.addField('mute `@user`', 'This command mutes the mentioned user from the server.', true)
				.addField('unmute `@user`', 'This command unmutes the mentioned user from the server.', true)
				.addField('assign the role: `role-name` `@user`', 'This command assigns the role that you say to the user you mention.', true)
				.addField('unassign the role: `role-name` `@user`', 'This command unassigns the role that you say to the user you mention.', true)
				.addField('set slowmode: `duration-in-seconds`', 'This command sets the slowmode of the current channel to the number of seconds you say', true)
				.addField("lock channel `#channel`", "This command locks the channel you mention so that `@everyone` cannot send messages in it.", true)
				.addField("unlock channel `#channel`", "This command unlocks the channel you mention so that `@everyone` can send messages in it.", true)
				.addField("hide channel `#channel`", "This command hides the channel you mention so that `@everyone` cannot see it.", true)
				.addField("unhide channel `#channel`", "This command unhides the channel you mention so that `@everyone` can see it.", true)
				.addField("purge `number`", "This command deletes the number of messages you specify from the current channel.", true)
				.setTimestamp()
				.setFooter(message.author.username, message.author.avatarURL());
					
			message.channel.send(modCommandsEmbed)
				
		}
	
	}
	
	}
	
}




exports.newInteraction = async (interaction) => {
	
	function respond(response, type) {
	
		client.api.interactions(interaction.id, interaction.token).callback.post({data: {
   		 type: type,
   		 data: {
   	    	 content: (response)
  	      }
  	  }
	    })  
	}
	
	if(interaction.guild_id) {
		
		 var cmdGuild = await client.guilds.fetch(interaction.guild_id);
    
    }
    
    if(interaction.channel_id) {
		
		 var cmdChannel = await client.channels.fetch(interaction.channel_id);
    
    }
    
    var author = await client.users.fetch(interaction.member.user.id)
    var authorMember = cmdGuild.member(author)
	
	for(var option of interaction.data.options) {
		
		if(option.name == "user") {
			
			if(option.value.startsWith("<@!") && option.value.endsWith(">")) {
				
				var partialUserID = option.value.substr(3, option.value.length)
				var userID = partialUserID.substr(0, (partialUserID.length - 1))
				
			} else if(option.value.startsWith("<@") && option.value.endsWith(">")) {
				
				var partialUserID = option.value.substr(2, option.value.length)
				var userID = partialUserID.substr(0, (partialUserID.length - 1))
				
			} else if(Number(option.value)) {
				
				var userID = option.value
				
			}
			
			if(userID) {
			
				var taggedUser = await client.users.fetch(userID);
   
   		}
			
		} else if(option.name == "reason") {
			
			var reason = option.value
			
		} else if(option.name == "channel") {
			
			if(option.value.startsWith("<#") && option.value.endsWith(">")) {
				
				var partialChannelID = option.value.substr(2, option.value.length)
				var channelID = partialChannelID.substr(0, (partialChannelID.length - 1))
				
			} else if(Number(option.value)) {
				
				channelID = option.value
				
			}
			
			if(channelID) {
			
				var taggedChannel = await client.channels.fetch(channelID);
   
   		}
   
		} else if(option.name == "role") {
			
			if(option.value.startsWith("<@&") && option.value.endsWith(">")) {
				
				var partialRoleID = option.value.substr(3, option.value.length)
				var roleID = partialRoleID.substr(0, (partialRoleID.length - 1))
				
			} else if(Number(option.value)) {
				
				var roleID = option.value
				
			}
			
			if(roleID) {
			
				var taggedRole = await client.roles.fetch(roleID);
   
   		}
   
		} else if(option.name == "seconds") {
			
			if(Number(option.name)) {
				
				var seconds = option.value
				
			}
			
		} else if(option.name == "number") {
			
			if(Number(option.name)) {
				
				var number = option.value
				
			}
			
		}
		
	}
	
    const targetUser = cmdGuild.member(taggedUser);
        
    if(interaction.data.name == "mute" || interaction.data.name == "kick" || interaction.data.name == "ban" || interaction.data.name == "set slowmode" || interaction.data.name == "purge" || interaction.data.name == "assign the role" || interaction.data.name == "lock channel") {
        
        if(interaction.member) {
 		   
    		if(cmdGuild.me.hasPermission("ADMINISTRATOR")) {
 	
 	   		const modRole = cmdGuild.roles.cache.find(role => role.name.toLowerCase().includes("mod"));
 
 	   		if(modRole) {
 	
 		  		 if(authorMember.roles.cache.has(modRole.id)) {
 	
 						userModPerm = true
 
 					}
 
 					else {
 	
 						userModPerm = false
 
 					}
 
 				}
 
 				else {
 	
 					userModPerm = false
 
 				}
 			
 		  	 if((userModPerm == true) || authorMember.hasPermission("ADMINISTRATOR") || interaction.member.user.id == 789658327348936744n) {
 			
         	  	 if(interaction.data.name == "kick") {
            	
            			if(taggedUser) {
            
            				if(!(taggedUser.id == interaction.member.user.id)) {
            	
            					if(!(taggedUser.id == 789658327348936744n) && !(taggedUser.id == 272876963100753922n)) {
 
             	   				if(reason) {
            	
            							targetUser.kick( {reason: author.username + ' told Bixby to for reason: ' + reason} )
            
            						}
            
            						else {
 
             	   					targetUser.kick( {reason: author.username + ' told Bixby to.'} )
             
             						}
 
            	 	   			respond("If role hierarchy allows me to kick " + taggedUser.username + ", consider the job done.", 4)
            
            					}
            
            					else {
            	
            						respond("Like I would actually kick my creator or his best friend. Rude. :frowning:", 4)
            
            					}
                
          	    		  }
                
            			    else {
                	
                				respond("Umm, I don't think kicking yourself is a good idea, sorry.", 4)
                
            			    }
                
             		   } 
 
           			 else if (!taggedUser) { 
 
               			 respond("Sorry, you must mention a valid user, or enter a valid user ID to kick a user.", 4) 
 
            			} 
 
           		 }
           
           		if(interaction.data.name == "ban") {
           	
           			if(taggedUser) {
            
            				if(!(taggedUser.id == interaction.member.user.id)) {
            	
            					if(!(taggedUser.id == 789658327348936744n) && !(taggedUser.id == 272876963100753922n)) {
            	
            						if(reason) {
            	
            							targetUser.ban( {reason: author.username + ' told Bixby to for reason: ' + reason} )
            
            						}
            
            						else {
 
             	   					targetUser.ban( {reason: author.username + ' told Bixby to.'} )
             
             						}
 
            	 	   			respond("If role hierarchy allows me to ban " + taggedUser.username + ", consider the job done.", 4)
            
            					}
            
            					else {
            	
            						respond("Like I would actually ban my creator or his best friend. Rude. :frowning:", 4)
            
            					}
                
          	    		  }
                
            			    else {
                	
                				respond("Umm, I don't think banning yourself is a good idea, sorry.", 4)
                
            			    }
                
             		   } 
 
           			 else if (!taggedUser) { 
 
               			 respond("Sorry, you must mention a valid user, or enter a valid user ID to ban a user.", 4) 
 
            			} 
           
           		}
           
           		if(interaction.data.name == "mute") {
           	
           			if(taggedUser) {
            
            				if(!(taggedUser.id == interaction.member.user.id)) {
            	
            					if(!(taggedUser.id == 789658327348936744n) && !(taggedUser.id == 272876963100753922n)) {
 
             	   				var muteRole = cmdGuild.roles.cache.find(role => role.name.toLowerCase().includes("muted"));
            
            						if(!(muteRole)) {
            	
            							cmdGuild.roles.create({ data: { name: 'Muted ', permissions: ['VIEW_CHANNEL'] } });
            							respond("It looks like this server doesn't have a Muted role yet, but I created one. :slight_smile:", 3)
            
            						}
            
            						var muteRole = cmdGuild.roles.cache.find(role => role.name.toLowerCase().includes("muted"));
            
            						targetUser.roles.add(muteRole);
 
            	 	   			respond("If role hierarchy allows me to mute " + taggedUser.username + ", consider the job done.", 4)
            
            					}
            
            					else {
            	
            						respond("Like I would actually mute my creator or his best friend. Rude. :frowning:", 4)
            
            					}
                
          	    		  }
                
            			    else {
                	
                				respond("Umm, I don't think muting yourself is a good idea, sorry.", 4)
                
            			    }
                
             		   } 
 
           			 else if (!taggedUser) { 
 
               			 respond("Sorry, you must mention a valid user, or enter a valid user ID to mute a user.", 4) 
 
            			} 
           
           		}
           
           		if(interaction.data.name == "unmute") {
           	
           			if(taggedUser) {
           	
           				var muteRole = cmdGuild.roles.cache.find(role => role.name.toLowerCase().includes("muted"))
            				
            				targetUser.roles.remove(muteRole);
 
            	 	   	respond("If role hierarchy allows me to unmute " + taggedUser.username + ", consider the job done.", 4)
            				
             		   } 
 
           			 else if (!taggedUser) { 
 
               			 respond("Sorry, you must mention a valid user, or enter a valid user ID to unmute a user.", 4) 
 
            			} 
           
           		}
           
           		if(interaction.data.name == "unban") {

						if(taggedUser) {
            				
            				cmdGuild.members.unban(targetUser.user)
 
            	 	   	respond("If role hierarchy allows me to unban " + taggedUser.username + ", consider the job done.", 4)
            				
             		   } 
 
           			 else if (!taggedUser) { 
 
               			 respond("Sorry, you must mention a valid user, or enter a valid user ID to unban a user.", 4) 
 
            			} 

					}
					
					if(interaction.data.name == "unkick") {
						
						if(taggedUser) {
							
							if(reason) {
            	
            					const unkick = await message.channel.createInvite({ maxUses: 1 }, {reason: message.author.username + ' told Bixby to for reason: ' + reason })
            
            				}
            
            				else {
 
             	   			const unkick = await message.channel.createInvite({ maxUses: 1 }, {reason: message.author.username + ' told Bixby to.' })
             
             				}
            				
                    		taggedUser.send(message.author.username + " asked me to unkick you from " + message.guild.name + "! Welcome back! " + unkick.url)
 
                    		respond("If " + taggedUser.username + " has their DMs open, and they want to be unkicked, then consider the job done.", 4)
            				
             		   } 
 
           			 else if (!taggedUser) { 
 
               			 respond("Sorry, you must mention a valid user, or enter a valid user ID to unkick a user.", 4) 
 
            			} 
						
					}
					
					if(interaction.data.name == "assign role") {
						
						if(taggedUser) {
            			
            				if(taggedRole) {
            
            					targetUser.roles.add(targetRole);
            		
            					respond("If role hierarchy allows me to give " + taggedUser.username + " a role containing " + taggedRole + " on this server, consider the job done.", 4)
            
            				}
            
            				else {
            	
            					respond("Sorry, but you need to mention the role or enter a role ID of the role you would like assigned to " + taggedUser.username, 4)
            
            				}
            
            			}
            
            			else {
            	
            				respond("Sorry, you must tag a user first to assign a role to them.", 4)
            
            			}
						
					}
					
					if(interaction.data.name == "unassign role") {
						
						if(taggedUser) {
            			
            				if(taggedRole) {
            
            					targetUser.roles.remove(taggedRole);
            		
            					respond("If role hierarchy allows me to remove " + taggedRole.name + " from "+ taggedUser.username + " on this server, consider the job done.", 4)
            
            				}
            
            				else {
            	
            					respond("Sorry, but you need to mention the role or enter a role ID of the role you would like unassigned from " + taggedUser.username, 4)
            
            				}
            
            			}
            
            			else {
            	
            				respond("Sorry, you must tag a user first to unassign a role from them.", 4)
            
            			}
						
					}
					
					if(interaction.data.name == "set slowmode") {
						
						if(seconds) {
							
							if(reason) {
								
								cmdChannel.setRateLimitPerUser(seconds, author.username + " told Bixby to for reason: " + reason)
								
							}
							
							else {
						
								cmdChannel.setRateLimitPerUser(seconds, author.username + " told Bixby to")
							
							}
        
        					respond("The slowmode for this channel has been set to " + seconds + " seconds.", 4)
        
        				}
        
        				else {
        					
        					respond("Sorry, you must specify the duration of the slowmode in numbers.", 4)
        
        				}
						
					}
					
					if(interaction.data.name == "lock channel") {
						
						if(taggedChannel) {
						
							taggedChannel.updateOverwrite(cmdChannel.guild.roles.everyone, { SEND_MESSAGES: false });
        
        					respond("Denied permissions for everyone to send messages in <#" + taggedChannel.id + ">.")
        					taggedChannel.send("This channel has been locked by the request of a Moderator/Admin.")
        
        				}
        
        				else {
        	
        					respond("Sorry, you must tag the channel you want to lock, or enter its ID.", 4)
        
        				}
						
					}
					
					if(interaction.data.name == "unlock channel") {
						
						if(taggedChannel) {
						
							taggedChannel.updateOverwrite(cmdChannel.guild.roles.everyone, { SEND_MESSAGES: true });
        
        					respond("Granted permissions for everyone to send messages in <#" + taggedChannel.id + ">")
        					taggedChannel.send("This channel has been unlocked by the request of a Moderator/Admin.")
        
        				}
        
        				else {
        	
        					respond("Sorry, you must tag the channel you want to unlock, or enter its ID.", 4)
        
        				}
						
					}
					
					if(interaction.data.name == "hide channel") {
						
						if(taggedChannel) {
						
							taggedChannel.updateOverwrite(cmdChannel.guild.roles.everyone, { VIEW_CHANNEL: false });
        
        					respond("Denied permissions for everyone to see <#" + taggedChannel.id + ">.")
        					taggedChannel.send("This channel has been hidden by the request of a Moderator/Admin.")
        
        				}
        
        				else {
        	
        					respond("Sorry, you must tag the channel you want to hide, or enter its ID.", 4)
        
        				}
						
					}
					
					if(interaction.data.name == "unhide channel") {
						
						if(taggedChannel) {
						
							taggedChannel.updateOverwrite(cmdChannel.guild.roles.everyone, { VIEW_CHANNEL: true });
        
        					respond("Granted permissions for everyone to see <#" + taggedChannel.id + ">")
        					taggedChannel.send("This channel has been unhid by the request of a Moderator/Admin.")
        
        				}
        
        				else {
        	
        					respond("Sorry, you must tag the channel you want to unhide, or enter its ID.", 4)
        
        				}
        				
					}
					
					if(interaction.data.name == "purge") {
						
						if(number) {
						
							cmdChannel.messages.fetch({ limit: number}).then(messages => message.channel.bulkDelete(messages));
        
        					respond("Successfully deleted " + number + " messages.", 4)
        
        				}
        
        				else {
        	
        					respond("You must specify a number value for messages to purge.", 4)
        
        				}
						
					}
					      
           	}
           
           	else {
           	
           		respond("Sorry, but to use any moderation commands, you need either the Mod role, or Administrator permission.", 4)
        
           	}
           
       	}
       
       	else {
       	
       		respond("I would love to complete this request, but unfortunately, as per my program, to perform any moderation commands, I need Administrator permission, and it appears I do not have this permission. Someone must have tampered with me. :frowning:", 4)
        
       	}
       
   	}
   
   	else if(interaction.user) {
   	
   		respond("Sorry, moderation commands are only available in servers (not DMs)", 4)
        
   	}
   
   }
	
}