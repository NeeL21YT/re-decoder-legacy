module.exports = {
name: "resetprefix",
aliases: ['rprefix' , 'reset-prefix'],
$if: "v4",
code:` 
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$setServerVar[prefix;re!]
$title[1;Prefix reset!] 
$color[1;$getVar[color]]
$footer[1;Prefix reset by $username#$discriminator[$authorid]; $userAvatar[$authorID]]
$thumbnail[1;$userAvatar[$authorID]]
$description[1;I changed my prefix to back from **\`$getServerVar[prefix]\`** to **\`re!\`**

> Note: **You can change the preifx by re!prefix <new_prefix> again!**]
$cooldown[5s;Chill down]
$onlyPerms[manageserver;You need \`manage_server\` permission]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`
} 