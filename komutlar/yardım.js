const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**Komutlarımı DM Olarak Attım** ! Özel Mesajlarını Kontrol Et :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setTitle("Botumuzun Komutları")
    .setAuthor("**Quantum Roleplay| Bütün hakları okunmuş ve gizlidir.**", "")
    .setColor("RANDOM")
    .addField("**Eğlence ve Kullanıcı Komutları:**", `.avatarım • Avatarınınızı Gösterir. \n.söv • Etikletlediğinize Söver. \n.sigara • Sigara İçer. \n.şanslısayım • Şans Sayınızı Gösterir. \n.hd • NSFW bir resim gösterir.(+18) \n.espri • BOT Espri Yapar. \n.say • Bota İstediğiniz Şeyi Yazdırırsınız. \n.sunucuresmi • BOT Sunucunun Resmini Atar. \n.sunucubilgi • BOT Sunucu Hakkında Bilgi Verir.`)
    .addField("**Yetkili Komutlar**", `.ban • İstediğiniz Kişiyi Sunucudan Banlar.\n.gç-ayarla • Resimli Hoşgeldin Kanlı Ayarlar.\n.temizle • Mesajları Temizler \n.kilit • chat kapatır!. \n.uyar • Isdedginiz Kisiyi Uyarir \n.kick • İstediğiniz Kişiyi Sunucudan Atar. \n.unban • İstediğiniz Kişinin Yasağını Açar. \n.sustur • İstediğiniz Kişiyi Susturur. \n.oylama • Oylama Açar. \n.duyuru • Güzel Bir Duyuru Görünümü Sağlar.\n.yazıkanalıaç • Bir Yazı Kanlı Açar. \n.sabitle • Mesajınızı Sabitler. \n.sunucukur • Bir Sunucu İçin Gerekli Odaları Kurar. \n.katagoriaç • Sunucuda Katagori Kanalı Açar. \n.anket • Anket Başlatır. \n.çekilişyap • Çekiliş Başlatır.`)
    .addField("**Ana ve Kullanıcı Komutları**", ".yardım • BOT Komutlarını Atar. \n.kullanıcıbilgim • Bilgilerinizi Gösterir \n.tavsiye • BOTa tavsiye verirsiniz. \n.bilgi • BOT Kendisi Hakkında Bilgi Verir. \n.ping • BOT Gecikme Süresini Söyler. \n.davet • BOT Davet Linkini Atar. \n.istatistik • BOT İstatistiklerini Atar.")
    .addField("**Müzik Komutları**", `Yakında Eklenicek Takipte Kalın :ballot_box_with_check: `)
    .addField("**Yapımcı**", " **HYDRA**")
    .setFooter('**--------------------------**')
    .setFooter("")
    .setThumbnail("")
    .setTimestamp()
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Botun komutlarını gösterir',
  usage: 'yardım'
};
