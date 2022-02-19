console.log("The sPay.js file has been executed.")
 
const functions = require("./functions.js")
const Discord = require("discord.js")
const fs = require("fs");
 
exports.newMsg = (message)  => {
	
	if(functions.startsWithPrefix) {
			
		if(!(message.content.toLowerCase().includes("say"))) {
	
		if(message.content.toLowerCase().includes("send me money")) {
		
			fs.readFile('./sPay.json', (err, sPayUnparsedData) => {
			
				const sPayData = JSON.parse(sPayUnparsedData);

				for (var sPayAcct of sPayData.accts) {
					
					var sPayAcctExists
				
					if(sPayAcct.user == message.author.id) {
					
						sPayAcctExists = true;
					
						if((Date.now() - Number(sPayAcct.lastReceived)) > 600000) {
						
							const newBal = Math.floor(Math.random() * 101);
						
							const sPayAcctUp = 
							{
    							user: message.author.id,
    							balance: (newBal + sPayAcct.balance),
    							lastReceived: Date.now()
    						}
    					
    						const acctIndex = sPayData.accts.indexOf(sPayAcct)

							sPayData.accts.splice(acctIndex, acctIndex)
    					
    						sPayData.accts.push(sPayAcctUp)
    					
    						fs.writeFile("./sPay.json", JSON.stringify(sPayData, null, 2), err => {
    	
    							message.channel.send("Sure. I sent __**" + newBal + "**__ to your Samsung Pay account. The current balance of your Samsung Pay Account is __**" + (Number(sPayAcct.balance) + Number(newBal))+ "**__. Enjoy! :grin:")
    
    						});
						
						}
					
						else {
						
							message.channel.send("Sorry, but for security reasons, Samsung Pay won't let me send any more money to your account since I have sent money to your Samsung Pay account in the last 10 minutes. :pensive:")
						
						}
					
					}
				
				}
			
				if(!(sPayAcctExists)) {
					
					newBal = Math.floor(Math.random() * 501);
					
					const sPayAcctNew = 
						{
    						user: message.author.id,
    						balance: newBal,
    						lastReceived: Date.now()
						}
					
					sPayData.accts.push(sPayAcctNew)
					
					fs.writeFile('./sPay.json', JSON.stringify(sPayData, null, 2), err => {
			
						message.channel.send("Sure. I created a Samsung Pay Account for you and sent __**" + newBal + "**__ to your Samsung Pay account. The current balance of your Samsung Pay Account is __**" + sPayAcct.balance + "**__. Enjoy! :grin:")
    	
					});
					
				}

			});
		
		}
	
	}
	
	if(message.content.toLowerCase().includes("my samsung pay account")) {
		
		fs.readFile('./sPay.json', (err, sPayUnparsedData) => {
			
			const sPayData = JSON.parse(sPayUnparsedData);

			for (var sPayAcct of sPayData.accts) {
				
				var sPayAcctExists
				
				if(sPayAcct.user == message.author.id) {
					
					sPayAcctExists = true;
					
					if((Date.now() - Number(sPayAcct.lastReceived)) > 600000) {
						
						var lastReceived = "More than 10 minutes ago.";
						
					}
					
					else {
						
						var lastReceived = "Less than 10 minutes ago.";
						
					}
					
					const sPayAcctEmbed = new Discord.MessageEmbed()
					
						.setColor('#0099ff')
						.setAuthor(message.author.username + "'s Samsung Pay Account:", message.author.avatarURL(), 'https://discord.js.org')
						.setThumbnail("https://cdn.discordapp.com/attachments/821049608519417857/825214854481575946/16168169422016489940937664778163.png")
						.addField("Account Status:", "Active")
						.addField("Balance:", sPayAcct.balance)
						.addField("Last Received Money:", lastReceived)
						.addField("Tip:", "Tell me `send me money` to create obtain a larger balance on your Samsung Pay account.")
						.setTimestamp()
						.setFooter("Samsung Pay", message.author.avatarURL());
					
					message.channel.send(sPayAcctEmbed)
						
				}
					
			}
			
			if(!(sPayAcctExists)) {
				
				const sPayNoAcctEmbed = new Discord.MessageEmbed()
				
					.setColor('#0099ff')
					.setAuthor(message.author.username + "'s Samsung Pay Account:", message.author.avatarURL(), 'https://discord.js.org')
					.setThumbnail("https://cdn.discordapp.com/attachments/821049608519417857/825214854481575946/16168169422016489940937664778163.png")
					.addField("Account Status:", "No Account")
					.addField("Tip:", "Tell me `send me money` to create a Samsung Pay Account and obtain a balance.")
					.setTimestamp()
					.setFooter("Samsung Pay", message.author.avatarURL());
					
				
				message.channel.send(sPayNoAcctEmbed)
				
			}
				
		});
		
	}
	
	}
		
}