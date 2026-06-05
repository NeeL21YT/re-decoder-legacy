const aoijs = require("aoi.js")
const Discord = require("discord.js");
const bot = new aoijs.Bot({
token: "xxxx1234xxxx", //Discord Bot Token
prefix: ['$getServerVar[prefix]'],//Discord Bot Prefix
intents: "all"
})
 
let encode = "utf8"
const fss = require('fs')
function backup() {
 fss.writeFileSync('./db backup/db.sql', fss.readFileSync('./database/main/main_scheme_1.sql', {
 encode,
 undefined
 }), 
 {encoding: encode})
}
setInterval(backup, 900000) 


//Events
bot.onMessage()
bot.onInteractionCreate();
bot.onMessageUpdate();
bot.onMessageDelete();
bot.onGuildJoin();
bot.onGuildLeave(); 
bot.onJoin();
//Command Handler / Loads files 
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

loader.setColors({
 walking: ["blink", "dim", "fgWhite"],
 failedWalking: {
 name: ["bright", "fgYellow", "underline"],
 
 text: ["bright", "fgRed"]
 },
 typeError: {
 command: ["bright", "fgYellow"],
 type: ["fgYellow"],
 text: ["bright", "fgRed"]
 },
 failLoad: {
 command: ["bright", "fgMagenta"],
 type: ["fgRed"],
 text: ["bright", "fgRed"],
 },
 loaded: {
 command: ["bright", "fgCyan"],
 type: ["bright", "fgBlue"],
 text: ["bright", "fgGreen"]
 },
 
})

//
bot.status({
      text: "First Version was made in just 1 DAY lmao!",
      type:  "STREAMING",
      status: "idle",
      time: 30
}) 

bot.status({
      text: "In $serverCount/123 servers!",
      type:  "COMPETING",
      status: "dnd",
      time: 30
}) 
 
bot.status({
      text: "re!help | Best Commands",
      type: "PLAYING",
      status: "idle",
      time: 30
})  
 
bot.status({
      text: "re!invite | Invite me plz!",
      type: "WATCHING",
      time: 30
}) 

bot.status({
      text:  "$getVar[status]",
      type: "WATCHING",
      status: "online",
      time: 30
})


bot.variables({
    prefix: "re!",
    usercmdsused: "0",
    cmdslogs: "859691904495779892",
    botfooter: "Powered by DAWN DΞVΞLOPMΞNT™", 
    cmdsused: "0",
    Blacklist: "false", 
    BlacklistReason: "N/A", 
    BlacklistDate: "", 
    alt: "1209599999",
    status: "",
    color: "FF5349",
    last: "",
    
   WelcomeChannel: "",
 WelcomeMessage: "Welcome {user.ping} To {server}!",
 WelcomeTitle:"Welcome {user.ping}",
})

//Ready Event
////////////////////////////////////////////////////////////////////////////
bot.readyCommand({
    channel: "859603893407580180",
    code: ` 
$log[$userTag[$clientID] active at | $hour:$minute:$second | $day | $month | $year |]
$timezone[Asia/Kolkata]
$log[$djseval[require("table").table([["Owner", client.application.owner.tag],["Client Name",client.user.tag], ["Commands Loaded", client.cmd.default.size],["Servers", client.guilds.cache.size]]);yes]]
$editIn[2ms;Online!;Running on **$serverCount** Servers! | **$commandsCount** Commands! | Time: <t:$truncate[$divide[$dateStamp;1000]]:F>] 
$log[________________________________________
 
IPv4       : $advancedTextSplit[$httpRequest[https://ip-fast.com/api/ip/];";2]
Load       : $numberSeparator[$divide[$sub[$dateStamp;$get[time]];10]]s
________________________________________] 

$let[time;$dateStamp]
Starting!
$setVar[last;$dateStamp]
$sendMessage[\`Ready on client $userTag[$clientID]\` (\`$packageVersion\`);no]`
})
//////////////////////////////////////////////////////////////////////////
bot.loopCommand({
channel: "860388872483504128",
    $if: "v4",
code: `
$editMessage[860390201590022184;{newEmbed: 
{author:Bot Stats:$userAvatar[$clientID]}
{field:General:
👑 Owner: **\`$userTag[$botOwnerID]\`**
🏓 Ping: **\`$ping\`** ms
⏱️ Uptime: **\`$uptime\`**
⚙️ Commands Count: **\`$commandsCount\`**
👥 All Members Count: **\`$numberSeparator[$allMembersCount]\`**
👥 User server average **\`$numberseparator[$truncate[$divide[$allmemberscount;$servercount]];,]\`**
🎚️ Servers Count: **\`$serverCount\`**
🏅 All Channels Count: **\`$allChannelsCount\`**
#️⃣ All Channels Count (text): **\`$allChannelsCount[Text]\`**
🔉 All Channels Count (voice): **\`$allChannelsCount[Voice]\`**}
{field:Resources Usage:
💻 CPU Usage: **\`$cpu\`**%
💻 CPU Model: **\`$djsEval[require("os").cpus()[0].model;yes]\`**
🚦 Ram Usage: **\`$ram\`** MB
🐧 Platform: ** \`$djsEval[require ('os').platform();yes] $djsEval[require ('os').arch;yes]\`**
}
{color:$randomText[ORANGE;WHITE]}
{field:Versions:
💿 Node.JS Version: **\`$nodeVersion\`**
📖 Library: **\`Aoi.JS\`**
💾 Aoi.JS Version: **\`$packageVersion\`**}
{field:Links:
🔗 [Support Server](https://discord.gg/GkXGcQ8Tkh)
🔗 [Invite Me]($getBotInvite[admin])}
{thumbnail:$userAvatar[$clientid]}{footer:$userTag[$clientID] | Updates every 10s:$userAvatar[$clientID]}{addTimestamp:$dateStamp}}]
`,

executeOnStartup: true,
every: 10000

}) 
