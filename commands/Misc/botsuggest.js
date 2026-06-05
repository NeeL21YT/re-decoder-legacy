module.exports = ({
    name: 'botsuggest',
    aliases: 'bot-suggest',
    usage: 'Botsuggest <suggestion>',
    description: '',
    cooldown: '30m',
    $if: "v4",
    code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$channelID;{newEmbed:{description:✅| Your suggestion has been successfully sent to **\`$userTag[$botOwnerID]\`**.And please do not send the same suggestions!}{color:GREEN}}]
$useChannel[935069858243182622]
$author[1;$username;$authorAvatar]
$description[1;**New Suggestion**
UserID: \`$authorID\`
Username: \`$username#$discriminator[$authorID]\`

Suggestion: \`$replaceText[$message;$getServerVar[prefix];]\`]
$thumbnail[1;https://media.discordapp.net/attachments/859727383221633025/944120616968126484/suggestion-logo.png]
$color[1;$getVar[color]]
$cooldown[$commandInfo[botsuggest;cooldown];{newEmbed:{description:<a:dawn_error:785829739700551711> Wait for **%time%** to suggest again and don't send the same suggestions again and again, it's annoying!}{color:RED}}]
$footer[1;Suggested from $serverName]
$addTimestamp[1]
$onlyIf[$message!=;{newEmbed:{description:❌: Invalid Args
Usage:
\`botsuggest <suggestion>\`}{color:RED}}]
$onlyIf[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activity detected}{color:RED}{description: **❌ To avoid alt accounts,your account has to be atleast **\`2 weeks\` **old in order to use $commandName.Not an alt? Join my support server [Here]($getVar[invite])**}{delete:15s}}]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`
})