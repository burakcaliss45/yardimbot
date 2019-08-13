const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: ":tada: Patron BOT Davet Linki İçin Hydraya Ulaşın Patron Bot Yapımcısı HYDRA",
    url: "",
    description: "Patron Botun Davet Linki İle İçin İletişime Geçiniz.",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'sponsor',
  description: 'sponsorları gösterir.',
  usage: 'sponsor'
};