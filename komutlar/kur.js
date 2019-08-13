const Discord = require('discord.js');


exports.run = (client, message, args) => {
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "Evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'Evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
        message.guild.createChannel(`「️」mod-log`);
        message.guild.createChannel(`「」ceza-tekip-listesi`);
        message.guild.createChannel(`「📝」yetkili-alımı`);
        message.guild.createChannel(`「⚡」kurallar`);
        message.guild.createChannel(`「📢」duyuru`);
        message.guild.createChannel(`「✒️」Sohbet`);
        message.guild.createChannel(`「🤖」bot-komutlar`);
        message.guild.createChannel(`「🤖」bot-komutlar`);

        message.channel.send(`Gerekli Kanalları Oluşturdum.`);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kur',
  description: 'Bot İçin gerekli kanlları kurar.',
  usage: '.kur'
};