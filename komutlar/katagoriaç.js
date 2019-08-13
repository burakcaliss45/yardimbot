const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli iznin yok');
    if (kanal.length < 1) return message.reply('Lütfen Oluşturacağım Katagorinin Adını Yaz.!!');
  message.delete();
  guild.createChannel(kanal, 'category');
  message.channel.send("`Katagori oluşturuldu`");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['katagoriaç'],
  permLevel: 3
};

exports.help = {
  name: 'katagoriaç',
  description: '`Katagori kanalı açar`',
  usage: 'katagoriaç [açmak istediğiniz katagorinin adı]'
};