const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("YARDIM BOT ! \n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .addField('**1.** Botumuz Sunucunuzda Ekli Olmalıdır.')
  .addField('**2.** Sunucunuzun Aktif Üye Sayısı +100 Olmalıdır')
  .addField('**3.** Reklam Yaparsanız Aksi Taktirde Partnerlik İptal Olur')
  .addField('**4.** Partnerlik İçin @!Burak "✪Hydra`" Çalış#6375 Ulaşınız')
  .addField('**YUKARDAKI KURALLARA UYULMADIGI TAKDIRDE PARTNERLIK IPTAL OLUR!!!**')
  .setFooter("♥ 2019 Yardım BOT ♥", " ")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'partnerlikşartları',
  description: 'Botun pingini gösterir.',
  usage: 'partnerlik-şartları'
};