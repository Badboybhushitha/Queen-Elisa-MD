/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█      
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█      
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█      


 █░░▒█   ▄█░
 ▒█▒█░   ░█░
 ░▀▄▀░   ▄█▄
 
 𝙌𝙪𝙚𝙚𝙣 𝙀𝙡𝙞𝙨𝙖 𝙈𝘿 𝘽𝙮 𝘿𝙖𝙧𝙠 𝙈𝙖𝙠𝙚𝙧 
 𝙋𝙪𝙗𝙡𝙞𝙘 𝘿𝙖𝙩𝙚 - 2022 / 07 / 03 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 𝙁𝙧𝙤 𝙂𝙤𝙟𝙤 𝙎𝙖𝙩𝙤𝙧𝙪
 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
           𝘼𝙡𝙡 𝙃𝙚𝙡𝙥𝙚𝙧𝙨 💞
*/



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['94742427578'] // Owner number , (අයිතිකරුගේ නම්බර් එක )
global.pemilik = ['94742427578'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94742427578'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'Sumi bot' // Your name ඔබේ නම 
global.botnma = '💃 SUMI BOT 💃' // Your bot name , ඔබගෙ බොට්ගේ නම 
global.ownernma = '𝓓𝓪𝓻𝓴 𝓜𝓪𝓴𝓮𝓻' //ownernama,ownername
global.packname = 'Queen Elisa Sticker' // Sticker package name 
global.author = 'SUMI BOT BY BHUSHITHA' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
// Alive massage ,  `▰▰▰▰▰▰▰▰▰
⚚ 𝐇𝐈 𝐇𝐈    𝐁𝐎𝐓 𝐎𝐍𝐋𝐈𝐍𝐄    𝐍𝐎𝐖 ⚚ 
        𝐬𝐮𝐦𝐢 𝐛𝐨𝐭
              ➹
𝐩▰▰▰▰▰▰▰▰▰

⛁  𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 𝙸𝚂 𝙰 ▱▱ 𝚜𝚞𝚖𝚒 ▱▱ 𝚊𝚕𝚏𝚊 

⛥ 𝚋𝚘𝚝 𝚘𝚠𝚗𝚎𝚛 𝚒𝚜 𝚊 http://wa.me/+94767761567?text=.HI☺OWNER 

♝ 𝙱𝙾𝚃 𝙶𝚁𝙾𝚄𝙿 𝙻𝙸𝙽𝙺 𝙸𝚂 𝙰➳ https://chat.whatsapp.com/LLbFBtwJj4rFlKm7bAbPME ⚋⚋⚋⚋🧚‍♂️

♝ 𝙹𝙾𝙸𝙽 𝚃𝙷𝙰 𝙶𝚁𝙾𝚄𝙿 ♫

● 𝚂𝙷𝙰𝚁𝙴 𝚃𝙷𝙰𝙴 𝙶𝚁𝙾𝚄𝙿 𝙻𝙸𝙽𝙺 ▰▰▰▰➤

● ➤    𝙱𝙾𝚃   𝚃𝙸𝙺𝚃𝙾𝙺  𝙿𝙰𝙶𝙴  tiktok.com/@sumi_alfa_ff 

⛁➤ 𝙵𝙾𝙻𝙻𝙾𝚆 𝚖𝚎𝚎 ▰▰ 𝙿𝙻𝚉 ▱▱▱🧚‍♂️

●𝐌𝐄𝐍𝐔  𝐂𝐎𝐌𝐌𝐄𝐍𝐄𝐒 ➳ .𝚙𝚊𝚗𝚎𝚕

♝ ⛁ 𝚂𝚄𝙼𝙸 𝙱𝙾𝚃 ♝═════ .𝚊𝚕𝚒𝚟𝚎 𝙽𝙾𝚆 ⛁ ═══♝

●𝚂𝚄𝙼𝙸 𝙱𝙾𝚃 𝚘𝚗𝚕𝚒𝚗𝚎 𝙽𝙾𝚆 ♝➳ ▰▰▰♫

𝚂𝚄𝙼𝙸▱▱▱▱▱▱➤𝙱𝙾𝚃 ▰▰▰▰▰▰➤
➹➹➹➹

▂▂▂▂▂▂▂▂▂▂▂▂
▂▂▂▂▂▂▂▂▂▂▂▂

●▰▰▼▰▰♫
            ➹
             ➹ 

◆ ☞𝙶𝚁𝙾𝚄𝙿 𝙽𝙰𝙼𝙴 ❴𝚂𝚄𝙼𝙸 𝙱𝙾𝚃 𝙶𝚁𝙾𝚄𝙿❵

◆ ☞𝙱𝙾𝚃 𝙶𝚁𝙾𝚄𝙿 𝙾𝚆𝙽𝙴𝚁 ♕ https://wa.me/+94767761567 ☚

◆ ☞ 𝙶𝚁𝙾𝚄𝙿 𝙱𝙾𝚃 ♕ https://wa.me/+94786346830☚

◆ ☞𝙱𝙾𝚃 𝙷𝙴𝚁𝙾𝙺𝚄 ⛃ 𝙳𝙴𝙿𝙻𝙾𝚈 𝚆𝙴𝙱𝚂𝙸𝚃𝙴 ❴𝙽𝙰𝙼𝙴 𝚀𝚄𝙴𝙽𝙽 𝙰𝙼𝙳𝙸❵

◆ ☞  𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 ☤ ❴𝚂𝚄𝙼𝙸 𝙱𝙾𝚃❵

◆ ☞ ☤ 𝙶𝚁𝙾𝚄𝙿 𝙻𝙸𝙽𝙺 ❴https://chat.whatsapp.com/LLbFBtwJj4rFlKm7bAbPME  ❵ 

◆ ☞ 𝚃𝙸𝙺𝚃𝙾𝙺 𝙿𝙰𝙶𝙴 𝚕𝚒𝚗𝚔 𝚕𝚒𝚔𝚎 𝚊𝚗𝚍 𝚏𝚘𝚕𝚕𝚘𝚠 𝚖𝚎𝚎 http://tiktok.com/@sumi_alfa_ff ☚ ☤

▲▭▭▭▭▭▲
●__JOIN THE GROUP PLZ ___●
●Owner name is ●BHUSHITHA ■ ` .💃
global.alivelogo = `https://telegra.ph/file/1a2dee71baa975091620d.jpg`
global.alive =`Hello i am alive now

Download song type .yt 
Thanks fro using...`
// Welcome massage  ඔබට කැමති නම් මෙයට ඔබෙ welcome massage  එක යොදන්න 
global.welcome = `Hi hi  ආවට ස්තුතියි  , ඉස්සේල්ලාම ලින්ක් එක ශේයා කරන්න නැත්තම් රිමු වේයි මේන්න ලින්ක් එක 👉👉https://chat.whatsapp.com/LLbFBtwJj4rFlKm7bAbPME👈👈'
🌀 Thanks Fro using sl zim bot
✾ Some bugs fixing
😼♥️
`
// වෙල්කම් එක යවන්න ඔනි නම් add කියලා දාන්න 
global.sendwelcome = `add`
// Good bye එක ඔනි නම් remove කියලා දාන්න
global.sendgoodbye = `remove`
// Caption 
global.cap = `© SUMI BOT`
global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin neh!',
    owner: 'This cmd is for Elisa bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Wait Elisa bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
