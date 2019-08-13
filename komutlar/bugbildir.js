const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.get("607728091111882772")//bug repot kanal id
let embed = new Discord.RichEmbed()
.setTitle("Bug Report")
.setThumbnail("https://images-ext-1.discordapp.net/external/nQoe_5zRdR6A5gsh2fevRbNvhoc5A2YIWP7zVdN5_NE/%3Fv%3D1/https/cdn.discordapp.com/emojis/435908220100280320.png?width=80&height=80")
.addField("📡Bug", bug)
.addField("📋Report Eden", user, true)
.addField("📝Sunucu", guild, true)
.addField("📌Sunucu ID", guildid, true)
.addField("📁Kanal", kanal, true)
.setColor("#f49542")

message.channel.send(":white_check_mark:  **| Bug Report Başarı İle İletildi.**")
channel.send(embed).then(i => i.react("⏳"))

 


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'bugbildir',
  description: 'Çalışıp para kazanırsınız.',
  usage: 'bugbildir'
}