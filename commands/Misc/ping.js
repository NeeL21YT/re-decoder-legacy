module.exports = { 
name: "ping",
code: `   
\`\`\`
⇌ Websocket Ping : $numberSeparator[$ping]ms 
⇌ API       Ping : $numberSeparator[$messagePing]ms
⇌ Database  Ping : $numberSeparator[$dbPing]ms
⇌ Message   Ping : $executionTimems
\`\`\`
$cooldown[2s; > ❌ | Stop spamming commands!] 
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`
} 
