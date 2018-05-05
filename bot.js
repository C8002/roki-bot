const Discord = require("discord.js");
const PREFIX = "?"
var bot = new Discord.Client();
const ALL = guild.members
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
bot.on("ready",function(){
    console.log("Ready!");
    bot.channels.get("441660639400820746").sendMessage("?newdrug");
    //bot.channels.get("441660639400820746").sendMessage("?newdrug");
    //console.log("Users online:" & GUILD.memberCount);
});

bot.on('guildMemberAdd', function(guildMember) {
   guildMember.addRole(guildMember.guild.roles.find("name","Young Kebab Remover"));
});

bot.on("message",function(message) {
	if(!message.content.startsWith(PREFIX)) return;
    var ALL = message.guild.members;
	var args = message.content.substring(PREFIX.length).split(" ");
	switch (args[0].toLowerCase()){
		case "ping":
				message.channel.sendMessage("Pong!");
		break;
		case "game":
			if(message.member.roles.find("name", "Karadžić's Friend")){
				bot.user.setPresence({ status: 'online', game: { name: args.join(" ").replace("game","") } });
				var embed = new Discord.RichEmbed()
					.setDescription("Property changed succesfully.");
					message.channel.sendEmbed(embed);
			}
		break;
		case "help":
		var embed = new Discord.RichEmbed()
		.setColor(0xffff00)
		.setDescription("Commands: ping,game,help");
		message.channel.sendEmbed(embed);
		break;
		case "clear":
		if (message.member.hasPermission("MANAGE_MESSAGES")) {
            	message.channel.fetchMessages()
               .then(function(list){
                message.channel.bulkDelete(list);
                }, function(err){message.channel.send("There was an error while attempting to clear the channel.")})                        
        }
		break;
        case "newdrug":
                ALL.forEach(function (element) {
                    element.removeRole(message.guild.roles.find("name", "Drug"));
                });
            ALL.random().addRole(message.member.guild.roles.find("name","Drug"));
            break;
        case "terminate":
            bot.destroy();
            break;
		default:
		message.channel.sendMessage("Invalid command.");
	}
		
});
bot.login(process.env.BOT_TOKEN);
