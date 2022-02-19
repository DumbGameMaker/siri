console.log("The postSlashCmds.js file has been executed.")
	
exports.ready = (client) => {
	
	client.api.applications(client.user.id).commands.post({
		
    	"data": {
  	  	"name": "kick",
  		  "description": "Kicks a member from the guild.",
  		  "options": [
      	  	{
          		"name": "user",
          		"description": "The mentioned user or user ID to kick.",
          		"type": 3,
          		"required": true,
         
      		},
      		{
         		 "name": "reason",
       		   "description": "The reason for the kick.",
  		        "type": 3,
    		      "required": false
     		 }
 		 ]
		}
        
  })
  
  client.api.applications(client.user.id).commands.post({
		
    	"data": {
  	  	"name": "ban",
  		  "description": "Bans a member from the guild.",
  		  "options": [
      	  	{
          		"name": "user",
          		"description": "The mentioned user or user ID to ban.",
          		"type": 3,
          		"required": true,
         
      		},
      		{
         		 "name": "reason",
       		   "description": "The reason for the ban.",
  		        "type": 3,
    		      "required": false
     		 }
 		 ]
		}
        
  })
  
  client.api.applications(client.user.id).commands.post({
		
    	"data": {
  	  	"name": "mute",
  		  "description": "Mutes a member in the guild.",
  		  "options": [
      	  	{
          		"name": "user",
          		"description": "The mentioned user or user ID to mute.",
          		"type": 3,
          		"required": true,
         
      		},
      		{
         		 "name": "reason",
       		   "description": "The reason for the mute.",
  		        "type": 3,
    		      "required": false
     		 }
 		 ]
		}
        
  })
  
  client.api.applications(client.user.id).commands.post({
		
    	"data": {
  	  	"name": "unban",
  		  "description": "Unbans a member from the guild.",
  		  "options": [
      	  	{
          		"name": "user",
          		"description": "The mentioned user or user ID to unban.",
          		"type": 3,
          		"required": true,
         
      		},
      		{
         		 "name": "reason",
       		   "description": "The reason for the unban.",
  		        "type": 3,
    		      "required": false
     		 }
 		 ]
		}
        
  })
  
  client.api.applications(client.user.id).commands.post({
		
    	"data": {
  	  	"name": "unkick",
  		  "description": "Unkicks a member from the guild.",
  		  "options": [
      	  	{
          		"name": "user",
          		"description": "The mentioned user or user ID to unkick.",
          		"type": 3,
          		"required": true,
         
      		},
      		{
         		 "name": "reason",
       		   "description": "The reason for the unban.",
  		        "type": 3,
    		      "required": false
     		 }
 		 ]
		}
        
  })
  
  client.api.applications(client.user.id).commands.post({
		
    	"data": {
  	  	"name": "unmute",
  		  "description": "Unmutes a member in the guild.",
  		  "options": [
      	  	{
          		"name": "user",
          		"description": "The mentioned user or user ID to unmute.",
          		"type": 3,
          		"required": true,
         
      		},
      		{
         		 "name": "reason",
       		   "description": "The reason for the unmute.",
  		        "type": 3,
    		      "required": false
     		 }
 		 ]
		}
        
  })
  
  client.api.applications(client.user.id).commands.post({
		
    	"data": {
  	  	"name": "assign role",
  		  "description": "Assigns a role to a member in the guild.",
  		  "options": [
      	  	{
          		"name": "user",
          		"description": "The mentioned user or user ID to assign the role to.",
          		"type": 3,
          		"required": true,
         
      		},
      		{
          		"name": "role",
          		"description": "The mentioned role or role ID to assign.",
          		"type": 3,
          		"required": true,
         
      		},
      		{
         		 "name": "reason",
       		   "description": "The reason for the assigned role.",
  		        "type": 3,
    		      "required": false
     		 }
 		 ]
		}
        
  })
  
  client.api.applications(client.user.id).commands.post({
		
    	"data": {
  	  	"name": "unassign role",
  		  "description": "Unassigns a role from a member in the guild.",
  		  "options": [
      	  	{
          		"name": "user",
          		"description": "The mentioned user or user ID to unassign the role from.",
          		"type": 3,
          		"required": true,
         
      		},
      		{
          		"name": "role",
          		"description": "The mentioned role or role ID to unassign.",
          		"type": 3,
          		"required": true,
         
      		},
      		{
         		 "name": "reason",
       		   "description": "The reason for the unassigned role.",
  		        "type": 3,
    		      "required": false
     		 }
 		 ]
		}
        
  })
  
  client.api.applications(client.user.id).commands.post({
		
    	"data": {
  	  	"name": "set slowmode",
  		  "description": "Sets slowmode for the current channel in the guild.",
  		  "options": [
      	  	{
          		"name": "seconds",
          		"description": "The number of seconds to set the slowmode to.",
          		"type": 3,
          		"required": true,
         
      		},
      		{
         		 "name": "reason",
       		   "description": "The reason for the new slowmode.",
  		        "type": 3,
    		      "required": false
     		 }
 		 ]
		}
        
  })
  
  client.api.applications(client.user.id).commands.post({
		
    	"data": {
  	  	"name": "lock channel",
  		  "description": "Locks a channel in the guild.",
  		  "options": [
      	  	{
          		"name": "channel",
          		"description": "The mentioned channel or channel ID to lock.",
          		"type": 3,
          		"required": true,
         
      		},
      		{
         		 "name": "reason",
       		   "description": "The reason for the channel lock.",
  		        "type": 3,
    		      "required": false
     		 }
 		 ]
		}
        
  })
  
  client.api.applications(client.user.id).commands.post({
		
    	"data": {
  	  	"name": "unlock channel",
  		  "description": "Unlocks a channel in the guild.",
  		  "options": [
      	  	{
          		"name": "channel",
          		"description": "The mentioned channel or channel ID to unlock.",
          		"type": 3,
          		"required": true,
         
      		},
      		{
         		 "name": "reason",
       		   "description": "The reason for the channel unlock.",
  		        "type": 3,
    		      "required": false
     		 }
 		 ]
		}
        
  })
  
  client.api.applications(client.user.id).commands.post({
		
    	"data": {
  	  	"name": "hide channel",
  		  "description": "Hides a channel in the guild.",
  		  "options": [
      	  	{
          		"name": "channel",
          		"description": "The mentioned channel or channel ID to hide.",
          		"type": 3,
          		"required": true,
         
      		},
      		{
         		 "name": "reason",
       		   "description": "The reason for the channel hide.",
  		        "type": 3,
    		      "required": false
     		 }
 		 ]
		}
        
  })
  
  client.api.applications(client.user.id).commands.post({
		
    	"data": {
  	  	"name": "unhide channel",
  		  "description": "Unhides a channel in the guild.",
  		  "options": [
      	  	{
          		"name": "channel",
          		"description": "The mentioned channel or channel ID to unhide.",
          		"type": 3,
          		"required": true,
         
      		},
      		{
         		 "name": "reason",
       		   "description": "The reason for the channel unhide.",
  		        "type": 3,
    		      "required": false
     		 }
 		 ]
		}
        
  })
  
  client.api.applications(client.user.id).commands.post({
		
    	"data": {
  	  	"name": "purge",
  		  "description": "Purges messages in the current channel..",
  		  "options": [
      	  	{
          		"name": "number",
          		"description": "The number of messages to purge.",
          		"type": 3,
          		"required": true,
         
      		},
      		{
         		 "name": "reason",
       		   "description": "The reason for the purge.",
  		        "type": 3,
    		      "required": false
     		 }
 		 ]
		}
        
  })
    
  
}