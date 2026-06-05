module.exports = {
     name : "report",
     code : `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$useChannel[859662741383544843] $channelSendMessage[$channelID; > Your Report has been sent successfully to **\`$userTag[$botOwnerID]\`**!.Thanks for reporting!

**__Note__**: Use attachment links to send screenshots and We do not tolerate fake reports, and we can ban you from using the bot if you don't use the command wisely!]


$title[1;Re-Decoder's Report Received]
$description[1;
**Username:** *$username#$discriminator[$authorID]*
**UserID:** \`$authorID\`
**Server:** **\`$serverName[$guildID]\`**
**ServerID:** \`$guildID\`
**Channel-ID:** \`$channelID\` 
**Invite**: $createServerInvite[$guildID]


***Issue***: **$replaceText[$message;$getServerVar[prefix];]**]
$footer[1;Report Received] 
$thumbnail[1;https://media.discordapp.net/attachments/859727383221633025/944178070561116160/report_logo.jpeg]
$addTimestamp[1;$dateStamp]

$useChannel[859662741383544843]
$addCmdReactions[‼️]
$color[1;$getVar[color]] 
$wait[3s]
$cooldown[30m;> Please wait **%time%** before using the report command again and use it wisely or get bot banned!]
$onlyIf[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activity detected}{color:RED}{description: **❌ To avoid alt accounts,your account has to be atleast **\`2 weeks\` **old in order to use $commandName.Not an alt? Join my support server [Here]($getVar[invite])**}{delete:15s}}] 

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`
 }
