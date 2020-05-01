const db = require('quick.db')
const Discord = require('discord.js');
const client = new Discord.Client();
const radyo = {
    fenomen : "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio",
    fenomenoriental : "http://fenomenoriental.listenfenomen.com/fenomenoriental/128/icecast.audio",
    kral    : "http://46.20.3.204/",
    kralpop : "http://46.20.3.201/;",
    metro   : "http://17773.live.streamtheworld.com/METRO_FM_SC",
    radyod  : "http://radyo.dogannet.tv/radyod",
    superfm : "http://17733.live.streamtheworld.com/SUPER_FM_SC",
    slow    : "https://radyo.dogannet.tv/slowturk",
    JoyFm    : "https://playerservices.streamtheworld.com/api/livestream-redirect/JOY_FM.mp3",
    fenomenfm : "https://fenomenturk.listenfenomen.com/fenomenturk/128/icecast.audio ",
    show:   "http://46.20.3.229/;",
    taksimclup: "http://cast1.taksim.fm:8016",
     vergın : "https://playerservices.streamtheworld.com/api/livestream-redirect/VIRGIN_RADIOAAC.aac?dist=onlineradiobox "

}
exports.run = function(bot, message, args) {

  message.delete(10000).catch(console.error);
    if (!message.member.voiceChannel) return message.reply("**:bangbang: Sana bağlanmam için ilk önce sesli bir kanala katılmalısın. :bangbang:**").then(m => m.delete(15000)).catch(console.error);
    else {
        if (!args[0] || args[0] === "help" || args[0] === "yardım") {
            message.channel.send("**\n  🎵  Radyo İstasyonları 🎵 \n  \n``0 = vergın`` \n``1 = FenomenFM``\n``2 = FenomenOriental``\n``3 = KralFM``\n``4 = KralPopFM``\n``5 = MetroFM``\n``6 = RadyoDFM``\n``7 = SuperFM`` \n``8 = SlowTurk``\n``9 = Show``\n``10 = JoyFM``\n``11 = FenomenTURK``\n``12 = SlowFm``\n``13 = TaksimClup``\n \nÖrnek kullanım: l!radyo <Radyo Numarası> \nKapatmak için: l!radyo kapat**").then(m => m.delete(40000)).catch(console.error);
        } else if (args[0].toLowerCase() === "alem" || args[0] === "alem") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.alem);
                message.reply("🎧 | **Başarılı! `AlemFM` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "fenomen" || args[0] === "1") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomen);
                message.reply("🎧 | **Başarılı! 🎻`FenomenFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
                  } else if (args[0].toLowerCase() === "fenomenoriental" || args[0] === "2") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomenoriental);
                message.reply("🎧 | **Başarılı! 🎻`fenomenOriental`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "kral" || args[0] === "3") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.kral);
                message.reply("🎧 | **Başarılı! `KralFM` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "kralpop" || args[0] === "4") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.kralpop);
                message.reply("🎧 | **Başarılı! `KralPOP` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "metro" || args[0] === "5") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.metro);
                message.reply("🎧 | **Başarılı! `MetroFM` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
        }  else if (args[0].toLowerCase() === "radyod" || args[0] === "6") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.radyod);
                message.reply("🎧 | **Başarılı! `Radyo D FM` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "super" || args[0] === "7") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.superfm);
                message.reply("🎧 | **Başarılı! `SüperFM` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "slow" || args[0] === "8") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.slow);
                message.reply("🎧 | **Başarılı! `SlowTÜRK` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
            } else if (args[0].toLowerCase() === "Joy" || args[0] === "9") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.JoyFm);
                message.reply("🎧 | **Başarılı! `JoyFM` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
    
            } else if (args[0].toLowerCase() === "FENOMEN TURK" || args[0] === "10") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomenfm);
                message.reply("🎧 | **Başarılı! `FenomenTÜRK` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
            
                 } else if (args[0].toLowerCase() === "show" || args[0] === "11") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.show);
                message.reply("🎧 | **Başarılı! `ShowFM` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
            
                 } else if (args[0].toLowerCase() === "taksimclup" || args[0] === "12") {
            message.member.voiceChannel.join().then(connection => {
              var dispatcher = connection.playStream(radyo.taksimclup);
                message.reply("🎧 | **Başarılı! `TaksimClup` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
          })                                                                                        
        } else if (args[0].toLowerCase() === "kapat" || args[0].toLowerCase() === "bitir") {
                message.member.voiceChannel.leave();
    return message.channel.send(`Bu kanaldan ayrıldım ${message.member.voiceChannel}.`);
        }
      else if (args[0].toLowerCase() === "Virgin Radio" || args[0] === "0") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.vergın);
                message.reply("🎧 | **Başarılı! `Virgin Radio` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`").then(m => m.delete(10000)).catch(console.error);
            })   
        }
    }
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'radyo',
  description: '',
  usage: 'radyo'
};