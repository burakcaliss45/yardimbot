const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanmak için `Yönetici` yetkiniz olması lazım')
  let tag = args.slice(1).join('Compac');
  if (!tag) return message.channel.send('Bir tag girmelisin! \n**Girdiysen Ama Kabul Etmemişse .tag Sonra Bir Şeyler Yazıp Sonrasında İse Tagınızı Yazıp Tekrar Deneyin!**')
  db.set(`tags_${message.guild.id}`, tag)
  message.channel.send('Tag başarıyla `'+ tag +'` olarak ayarlandı!')
   }   


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tag',
  description: 'tagayarla',
  usage: 'tag'
};