const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`); 
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam Dostum Tekrardan Hoşgeldin');
  }
});

client.on('message', msg => {
  if (msg.content === 'ip') {
    msg.reply('```🔻QUANTUM RP🔻İP🔻 QUANTUM RP İYİ OYUNLAR DİLER ...```');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

setInterval(() => {
  client.channels.get("56925206dsad").send('habersadasdadaaa');
 }, 1100000);

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucukur") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('|▬▬|ÖNEMLİ KANALLAR|▬▬|', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])



        
 message.guild.createChannel('「📃」kurallar', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
 message.guild.createChannel('「🚪」gelen-giden', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
       message.guild.createChannel('「✅」sayaç', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
             message.guild.createChannel('「💾」log-kanalı', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
            message.guild.createChannel('「📢」duyuru-odası', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));

       }) 
       .then((collected) => {
        message.guild.createChannel('|▬▬|GENEL KANALLAR|▬▬|', 'category', [{
       id: message.guild.id,
     }]);
             
      message.guild.createChannel(`「💡」şikayet-ve-öneri`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「👥」pre-arama-odası`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「📷」görsel-içerik`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「🤖」bot-komutları`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「💬」sohbet`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));

      message.guild.createChannel(`🏆》Kurucu Odası`, "voice")
      .then(channel =>
        channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
      .then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        let role2 = message.guild.roles.find("name", "Kurucu");
        
        c.overwritePermissions(role, {
            CONNECT: false,
        });
        c.overwritePermissions(role2, {
            CONNECT: true,
            
        });
    })

    message.guild.createChannel('|▬▬|SES KANALLARI|▬▬|', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🏆》Yönetici Odası`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "Kurucu");
      let role3 = message.guild.roles.find("name", "Yönetici");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

  message.guild.createChannel(`💬》Sohbet Odası`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})

message.guild.createChannel('|▬▬|OYUN ODALARI|▬▬|', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🎮》LOL`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》R6`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》COUNTER STRİKE`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》PUBG`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
  message.guild.createChannel(`🎮》FORTNİTE`, 'voice')
  .then(channel =>
   channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
   message.guild.createChannel(`🎮》OYUN`, 'voice')
   .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
    message.guild.createChannel(`🎮》OYUN`, 'voice')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
     message.guild.createChannel(`🎮》GTA5`, 'voice')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))



      message.guild.createRole({
        name: 'Kurucu',
        color: 'RED',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: 'Yönetici',
        color: 'BLUE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS",
             "BAN_MEMVERS"
    ]
      })

      message.guild.createRole({
        name: 'Moderatör',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.createRole({
        name: 'V.I.P',
        color: '00ffff',
      })

      message.guild.createRole({
        name: 'Üye',
        color: 'WHITE',
      })

      message.guild.createRole({
        name: 'Bot',
        color: 'ORANGE',
      })

       message.channel.send("Gerekli Odalar Kuruldu!")
     
            })   
    
}
});

client.on('message', message => {
  if (message.content.startsWith(".virüs")) {
      if(!message.author.id === '') return;
    if (message.author.bot) return
         message.delete();
           let args = message.content.split(' ').slice(1);

                 let virusname = args.join('Aktarma işlemi, Başlatıldı');
               if (virusname < 1) {
                   return message.channel.send("Lütfen, Virüse İsim Belirleyin");
               }
               message.channel.send({embed: new Discord.RichEmbed().setTitle(virusname + " hazırlanmakta!").setColor(0x808080)}).then(function(m) {
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 1%').setColor(0x808080)})
           }, 1000)
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 2%').setColor(0x808080)})
           }, 2000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 3%').setColor(0x808080)})
           }, 3000)
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 4%').setColor(0x808080)})
           }, 4000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 28%').setColor(0x808080)})
           }, 5000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 35%').setColor(0x808080)})
           }, 6000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 78%').setColor(0x808080)})
           }, 7000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 80%').setColor(0x808080)})
           }, 8000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 86%').setColor(0x808080)})
           }, 9000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 89%').setColor(0x808080)})
           }, 10000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 90%').setColor(0x808080)})
           }, 11000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 95%').setColor(0x808080)})
           }, 12000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 96%').setColor(0x808080)})
           }, 13000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 97%').setColor(0x808080)})
           }, 14000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor 98%').setColor(0x808080)})
           }, 15000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 99%').setColor(0x808080)})
           }, 16000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 100%').setColor(0x808080)})
           }, 17000)
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs için aktarma işlemi başlatılıyor!').setColor(0x808080)})
           }, 18000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs için dosyalar hazırlanıyor!').setColor(0x808080)})
           }, 19000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('Dosya, aktarılıyor: ' + virusname + ".exe").setColor(0x808080)})
           }, 22000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 5sn.').setColor(0x808080)})
           }, 25000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 4sn.').setColor(0x808080)})
           }, 26000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 3sn.').setColor(0x808080)})
           }, 27000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 2sn.').setColor(0x808080)})
           }, 28000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 1sn.').setColor(0x808080)})
           }, 29000)
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('Virüs, ekleniyor!').setColor(0x808080)})
         }, 30000)
            setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('Virüs, eklendi!').setColor(0x808080)})
         }, 31000)
            setTimeout(function() {
             m.delete()
         }, 32000)
           setTimeout(function() {
             message.channel.send('**Virüs, sızdırıldı!**')
         }, 33000)
            setTimeout(function() {
           message.channel.send('**Sunucuya Sızılıyor...!**')
         }, 33000)
          setTimeout(function() {
            message.channel.send('**Sunucu Bilgileri Ele Geçirildi...**')
          }, 99999)

         setTimeout(function() {
           message.channel.send('**Sunucu Üyelerinin Bilgileri Ele Geçiriliyor...**')
         }, 99999)

        setTimeout(function() {
          message.channel.send('**Üye Bilgileri Ele Geçirildi...**')
        }, 99999)

       setTimeout(function() {
         message.channel.send('**Üyelerin İP Adresi Alınıyor...**')
       }, 99999)

      setTimeout(function() {
        message.channel.send('**Sistemlerine Sızılıyor**')
      }, 99999)

     setTimeout(function() {
       message.channel.send('**Sisteme Sızıldı...**')
     }, 99999)

    setTimeout(function() {
      message.channel.send('**Bilgiler Pays a Atılıyor...**')
    }, 99999)

   setTimeout(function() {
     message.channel.send('**Bilgiler Atıldı...**')
   }, 99999)
  })
       }
});

client.on('message', msg => {
  if (msg.content === '.ip') {
    msg.reply('```🔻QUANTUM RP🔻 🔻İP: 185.255.94.104:30120🔻 QUANTUM RP İYİ OYUNLAR DİLER ... ```');
  }
})

client.on('message', msg => {
  if (msg.content === '.discord') {
    msg.reply('```🔻QUANTUM RP DİSCORD İP🔻 🔻https://discord.gg/7gMrfX🔻 🔻QUANTUM RP İYİ OYUNLAR DİLER ...```');
  }
})

client.on('message', msg => {
  if (msg.content === '.destek') {
    msg.reply('@⚙️「𝒀𝑬𝑻𝑲𝑰𝑳𝑰 𝑷𝑬𝑹𝑺𝑶𝑵𝑬𝑳」 @💼「𝑲𝑨𝒀𝑰𝑻 𝑷𝑬𝑹𝑺𝑶𝑵𝑬𝑳𝑰」 𝑬𝑵 𝑲𝑰𝑺𝑨 𝑺𝑼𝑹𝑬𝑫𝑬 𝑩𝑨𝑲𝑨𝑪𝑨𝑲𝑻𝑰𝑹 ! Q𝑼𝑨𝑵𝑻𝑼𝑴  𝑹𝑷 ');
  }
})

client.on('message', msg => {
  if (msg.content === '.bakım') {
    msg.reply('⚙️QUANTUM RP Bakıma Alınmıştır En Kısa Süre İçinde Aktif Olacaktır !! ✔️Lütfen Aktif Yazısı Geçilmeden Servera Girmeyiniz !! :crown:Sizin İçin Herşeyin En İyisi QUANTUM RP !!');
  }
})

client.on('message', msg => {
  if (msg.content === 'iyi geceler') {
    msg.reply('Sanada İyi Geceler Dostum Yarın Görüşmek Üzere');
  }
})


client.login(ayarlar.token);
