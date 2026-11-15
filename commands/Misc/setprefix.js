module.exports = {
name: "setprefix",
aliases: ['changeprefix' , 'prefix' , 'change-prefix'],
$if: "v4",
code:`
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$title[1;Prefix change!]
$color[1;$getVar[color]]
$footer[1;Prefix changed by $username#$discriminator[$authorid]; $userAvatar[$authorID]]
$thumbnail[1;$userAvatar[$authorID]]
$description[1;I changed my prefix to **\`$message\`** if you think this is a mistake you can always change it again using \`$getServerVar[prefix] prefix <new prefix>\`!

> Note: **And in future if you forgot the prefix just ping the bot!**]
$setservervar[prefix;$message]
$onlyIf[$message[1]!=;You're prefix can't be empty!]
$onlyIf[$memberscount>15;**$servername** must atleast have 15 members to change the prefix!]
$cooldown[5s;Chill down]
$onlyPerms[manageserver;You need \`manage_server\` permission]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`} 