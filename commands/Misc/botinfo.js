module.exports = {

 name: "botinfo",
 aliases: ['botstats','bi'],
 code: ` 
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$title[1;Bot Stats]

$description[1;
**$username[$clientID] | ($clientID)** __Information__
➟ **Prefix**: \`$getServerVar[prefix]\`
➟ **Bot Owner**: $username[$botOwnerID]
➟ **Servers**: $serverCount
➟ **Users**: $numberSeparator[$allMembersCount]
➟ **Commands**: $commandsCount
➟ **Uptime**: $uptime 
➟ **Ping**: $pingms
➟ **Each server member average**: $numberseparator[$truncate[$divide[$allmemberscount;$servercount]];,]

__Bot Stats__
➟ **CPU**: $djsEval[require("os").cpus()[0].model;yes]
➟ **Platform**: $djsEval[\`${process.platform} ${process.arch}\`;yes]
➟ **Node version**: $nodeVersion

__Resources Usage__
➟ **Ram Usage**: \`$ram\`mb
➟ **CPU Usage**: \`$cpu\`%
]

$footer[1;Command Executed by $username]

$color[1;$getVar[color]]
$addbutton[1;Bot Status;5;https://status.watchbot.app/bot/801377420112035840;enabled;]
$thumbnail[1;$userAvatar[$clientID]]
$globalCooldown[3s;> <​a:nx_error:785829739700551711> Please wait %time% before using the command again{delete:4s}]  
 
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`

}