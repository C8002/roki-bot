const Discord = require("discord.js");
const PREFIX = "?"
var bot = new Discord.Client();
const ALL = guild.members
bot.on("ready",function(){
	console.log("Ready!");
	guild.roles.find("name","Друг").members[0].removeRole;
	var A = getRandomInt(0,bot.Count());
	ALL[A].addRole(guild.roles.find("name","Друг"));
});

bot.on('guildMemberAdd', function(guildMember) {
   guildMember.addRole(guild.roles.find("name","Young Kebab Remover"));
});

bot.on("message",function(message) {
	if(message.author.equals(bot.user)) return;
	if(!message.content.startsWith(PREFIX)) return;
	
	var args = message.content.substring(PREFIX.length).split(" ");
	switch (args[0].toLowerCase()){
		case "ping":
				message.channel.sendMessage("Pong!");
		break;
		case "game":
			if(message.member.roles.find("name", "Admin"){
				bot.user.setPresence({ status: 'online', game: { name: args.join(" ").replace("game","") } })
				var embed = new Discord.RichEmbed()
					.setDescription("Property changed succesfully.");
					message.channel.sendEmbed(embed);
}
		break;
		case "help":
		var embed = new Discord.RichEmbed()
		.setTitle("?HELP?")
		.addField("Commands","All available commands.")
		.setColor(0xffff00)
		.setDescription("Commands: ping,game,help");
		message.channel.sendEmbed(embed);
		case "clear":
		if (message.member.hasPermission("MANAGE_MESSAGES")) {
            	message.channel.fetchMessages()
               .then(function(list){
                message.channel.bulkDelete(list);
                }, function(err){message.channel.send("There was an error while attempting to clear the channel.")})                        
        }
		break;
		default:
		message.channel.sendMessage("Invalid command.")
	}
		
});
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
bot.login(process.env.BOT_TOKEN);
