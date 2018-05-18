const Discord = require("discord.js");
const PREFIX = "/"
//4Commands
const Roki = Array("https://www.youtube.com/watch?v=mlM2DBPOWNY", "https://www.youtube.com/watch?v=PkySXrtIcxI", "https://www.youtube.com/watch?v=AcpdvFCBURw", "https://www.youtube.com/watch?v=XuUFIFM5hqA", "https://www.youtube.com/watch?v=wj3zL3rF-EI", "https://www.youtube.com/watch?v=katLOXqXA8U", "https://www.youtube.com/watch?v=oAVq6AzdTo4", "https://www.youtube.com/watch?v=idBCwK0LYA8", "https://www.youtube.com/watch?v=jkDkAvPvfNo", "https://www.youtube.com/watch?v=7C_9shrxnoo", "https://www.youtube.com/watch?v=u48nIOvzi6E", "https://www.youtube.com/watch?v=3pngcjizEYc", "https://www.youtube.com/watch?v=2kZqXCPd0c4", "https://www.youtube.com/watch?v=1wzsqCYyRGI", "https://www.youtube.com/watch?v=FFsM4T7OP2A", "https://www.youtube.com/watch?v=PRPtA6uo4zs", "https://www.youtube.com/watch?v=U97eCjWdrvo", "https://www.youtube.com/watch?v=O1w6EE6S2Yk", "https://www.youtube.com/watch?v=ytPfzneophk", "https://www.youtube.com/watch?v=B6WbqXHfHdg", "https://www.youtube.com/watch?v=4Wrx0Y7PDPE", "https://www.youtube.com/watch?v=UJ4ebQLu4Cs", "https://www.youtube.com/watch?v=kohsgr4kLdM", "https://www.youtube.com/watch?v=i_ysT6YdK80", "https://www.youtube.com/watch?v=x4sqMNHZxjI","https://www.youtube.com/watch?v=cuDXaw1n8LU");
const Answers = Array("Sure!", "Yep!", "Maybe!", "Possibly.", "Probably not.", "Nope.", "No.");
//
var bot = new Discord.Client();
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
get_random = function (list) {
    return list[Math.floor((Math.random() * list.length))];
} 
function getByValue(arr, value) {
    var o;

    for (var i = 0, iLen = arr.length; i < iLen; i++) {
        o = arr[i];

        for (var p in o) {
            if (o.hasOwnProperty(p) && o[p] == value) {
                return o;
            }
        }
    }
}
bot.on("ready",function(){
    console.log("Ready!");
    bot.channels.get("441660639400820746").sendMessage("/newdrug");
    bot.channels.get("441660639400820746").fetchMessages()
        .then(function (list) {
            bot.channels.get("441660639400820746").bulkDelete(list);
        })
});

bot.on('guildMemberAdd', function(guildMember) {
   guildMember.addRole(guild.roles.find("name","Young Kebab Remover"));
});
function SendError(channel, reason, help) {
    var embed = new Discord.RichEmbed()
        .setTitle(reason)
        .setDescription(help);
    channel.sendEmbed(embed);
}

bot.on("message",function(message) {
	if(!message.content.startsWith(PREFIX)) return;
    var ALL = message.guild.members;
    var args = message.content.substring(PREFIX.length).split(" ");
    console.log(message.content);
	switch (args[0].toLowerCase()){
		case "ping":
            message.channel.sendMessage("Pong!");
            console.log("[Replied]");
		break;
		case "game":
            if (message.member.roles.find("name", "Karadžić's Friend")) {
                bot.user.setPresence({ status: 'online', game: { name: args.join(" ").replace("game", "") } });
                var embed = new Discord.RichEmbed()
                    .setDescription("Property changed succesfully.");
                message.channel.sendEmbed(embed);
                console.log("[Replied]");
            } else {
                SendError(message.channel, "Missing permissions", "You do not have the permissions needed to execute this command.");
            }
		break;
		case "help":
            var embed = new Discord.RichEmbed()
                .setColor(0xffff00)
                .setTitle("Help")
                .setDescription("Prefix:  / \n Commands: \n ping \n game \n help \n clear \n newdrug \n terminate \n randomroki \n ask \n rate \n tell \n flip \n decide \n kill \n sadlife");
            message.channel.sendEmbed(embed);
            console.log("[Replied]");
		break;
		case "clear":
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                message.channel.fetchMessages()
                    .then(function (list) {
                        message.channel.bulkDelete(list);
                    }, function (err) { message.channel.send("There was an error while attempting to clear the channel.") })
                console.log("[Replied]");

            } else {
                SendError(message.channel, "Missing permissions", "You do not have the permissions needed to execute this command.");
            }
		break;
        case "newdrug":
            if (message.member.roles.find("name", "Karadžić's Friend") || message.member.nickname == "Roki") {

                ALL.forEach(function (element) {
                    element.removeRole(message.guild.roles.find("name", "Drug"));
                });
                ALL.random().addRole(message.member.guild.roles.find("name", "Drug"));
            } else {
                SendError(message.channel, "Missing permissions", "You do not have the permissions needed to execute this command.");
            }
            console.log("[New Drug set.]");
            break;
        case "terminate":
            if (message.member.roles.find("name", "Karadžić's Friend")) {
                message.delete();
                bot.destroy();
            } else {
                SendError(message.channel, "Missing permissions", "You do not have the permissions needed to execute this command.");
            }
            console.log("[Replied]");
            break;
        case "randomroki":
            var embed = new Discord.RichEmbed()
                .setTitle("Enjoy!")
                .setDescription(get_random(Roki));
            message.channel.sendEmbed(embed);
            console.log("[Replied]");
            break;
        case "ask":
            if (args[1]) {
                var embed = new Discord.RichEmbed()
                    .setTitle("Roki says:")
                    .setDescription(get_random(Answers));
                message.channel.sendEmbed(embed);
                            console.log("[Replied]");
            } else {
                var embed = new Discord.RichEmbed()
                    .setTitle("No question was asked.")
                message.channel.sendEmbed(embed);
            }
            console.log("[Replied]");
            break;
        case "rate":
            if (args[1]) {
                var embed = new Discord.RichEmbed()
                    .setTitle(args[1] + " is a " + getRandomInt(0, 10) + "/10 Kebab Remover!");
                message.channel.sendEmbed(embed);
            } else {
                var embed = new Discord.RichEmbed()
                    .setTitle("Please specify a name!");
                message.channel.sendEmbed(embed);
            }
            console.log("[Replied]");
            break;
        case "tell":
            if (args[1] && args[2] && message.mentions.members.first()) {
                var embed = new Discord.RichEmbed()
                    .setTitle(message.member.displayName + " says " + message.mentions.members.first().displayName + "'s a " + args.join(" ").replace(args[0], "").replace(args[1], ""));
                message.channel.sendEmbed(embed);
            } else {
                SendError(message.channel, "Too few arguments / No mention found", "Syntax: ?tell [mention] [object]");
            }
            console.log("[Replied]");
            break;
        case "flip":
            let ran = getRandomInt(1, 2);
            if (ran == 1) {
                var embed = new Discord.RichEmbed()
                    .setTitle("You roll:")
                    .setDescription("Heads!");
                message.channel.sendEmbed(embed);
            } else {
                var embed = new Discord.RichEmbed()
                    .setTitle("You roll:")
                    .setDescription("Tails!");
                message.channel.sendEmbed(embed);
            }
            console.log("[Dice rolled.]")
            break;
        case "decide":
            if (args[1] && args[2]) {
                let ran = getRandomInt(0, 1);
                if (ran == 0) {
                    var embed = new Discord.RichEmbed()
                        .setTitle("Roki has chosen...")
                    .setDescription(args[1]);
                    message.channel.sendEmbed(embed);
                } else {
                    var embed = new Discord.RichEmbed()
                        .setTitle("Roki has chosen...")
                    .setDescription(args[2]);
                    message.channel.sendEmbed(embed);
                }
                console.log("[Decision made.]");
            } else {
                SendError(message.channel, "Too few arguments", "Syntax: ?decide [option1] [option2]");
            }
            break;
        case "getvid":
            if (args[1]) {
                var embed = new Discord().RichEmbed()
                    .setTitle("URL to video download:")
                    .setDescription("http://convert2mp3.net/share.php?url=" + args[1]);
                message.channel.sendEmbed(embed);
            } else {
                SendError(message.channel, "Too few arguments", "Syntax: ?getvid [YouTube-URL]");
            }
            break;
        case "kill":
            var embed = new Discord.RichEmbed()
                .setTitle(message.member.displayName + " bid farewell, cruel world!");
            message.channel.sendEmbed(embed);
            break;
        case "sadlife":
            var embed = new Discord.RichEmbed()
                .setTitle(":(");
            message.channel.sendEmbed(embed);
            break;
		default:
            SendError(message.channel, "Command not found", "You did not enter a recognizable command.");
	}
});
bot.login(process.env.BOT_TOKEN);
