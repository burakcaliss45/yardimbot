const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli iznin yok');
    if (kanal.length < 1) return message.reply('📝Lütfen Oluşturacağım Kanalın Adını Yaz.!!📝');
  message.delete();
  guild.createChannel(kanal, 'text');
  message.channel.send("**📝 İstediğin Yazı Kanalı Oluşturuldu!**");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazı-kanal-aç'],
  permLevel: 3
};

exports.help = {
  name: 'yazıkanalıaç',
  description: 'Bir ses kanalı açar',
  usage: 'yazıkanalıaç [açmak istediğiniz kanalın adı]'
};