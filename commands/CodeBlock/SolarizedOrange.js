module.exports = [{
name: "orange",
code: `
$title[1;Solarized Orange | #cb4b16]
$description[1;
\`\`\`css
[$message]
\`\`\`

__Note__: **This  only works and is visible for PC users.** You can't copy it, because it uses a codeblock for coloured text!]
$footer[1;$getVar[botfooter]]
$color[1;$getVar[color]]
$onlyIf[$message!=; Please specify the message too!]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]`
}]
