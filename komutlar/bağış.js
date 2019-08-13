const Discord = require('discord.js')

exports.run = async (client,message,args) => {
        const embed = new Discord.RichEmbed()
                .setTitle("**Quantum Roleplay'e Bağış Yapmak Mı İstiyorsun Buyur Bİlgiler**")
                .setThumbnail("https://media.giphy.com/media/AP5AdvkQM2OEyxfqox/giphy.gif")
                .setColor("#FF8C00")
                .setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
                .addField("**Ödeme Yönetemi**\n", "_**İNİNAL**_")
                .addField("**Barkod numarası:**\n", "_**4091650007989**_")
                .addField("**İsim Soyisim**\n", "_**Batuhan Karakaya**_")
                .setTimestamp()
        message.channel.send({embed})
}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['bağışyap','bağış'],
    permLevel: 0,
    kategori: 'kullanıcı'
}

exports.help = {
    komut: 'bağış',
    aciklama: 'bağış komutudur.',
    kullanim: 'bağış'
}