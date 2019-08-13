const Discord = require('discord.js');


exports.run = (client, message, params) => {
    if(message.author.id === "564557638491308032") {
        
        message.channel.send(':1234: **Yardım Botu için gerekli şeyler kuruluyor...**');
        
       message.guild.createRole({ name: '⭐️Kurucu', position: 60, permissions: ['ADMINISTRATOR', 'MANAGE_ROLES'], color: 'DARKRED'})
      
      message.guild.createRole({ name: '☄️Yetkili', position: 50, permissions: ['ADMINISTRATOR', 'MANAGE_ROLES'], color: 'GREEN'})
      
      message.guild.createRole({ name: '💻Admin', position: 40, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'GREEN'})
      
      message.guild.createRole({ name: '⚙️Moderatör', position: 30, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'GREEN'})
      
      message.guild.createRole({ name: '🎲Bot', position: 30, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'YELLOW'})
        
      message.guild.createRole({ name: '✅Kayıtlı Üye', position: 20, permissions: ['MANAGE_MESSAGES'], color: 'BLUE'})
      
      message.guild.createRole({ name: '❎Kayıtsız Üye', position: 20, permissions: ['MANAGE_MESSAGES'], color: 'RED'})
        
     message.guild.createRole({ name: 'BOT', position: 20, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'BLACK'})         
        //İstediğiniz Kadar Kopyala Yapıştır Şeklinde Çoğaltabilirsiniz
        message.channel.send(':white_check_mark: **Roller Kuruldu**');
        
    } else {
        message.channel.send(':x: **Üzgünüm ama bu komutu şimdilik kullanamazsınız!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'rol-oluştur',
  description: 'Bot için gerekli ayarları kurar.',
  usage: 'roller'
};