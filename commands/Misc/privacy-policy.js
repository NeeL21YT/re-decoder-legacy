module.exports = {
 name: "privacy-policy", 
 aliases: ['pp','privacy'],
 description: "Check the bot's privacy policy",
 usage: "",
 category: "information",

 code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$title[1;Re-Decoder's Privacy-Policy]  
$addField[1;What data we collect?;
**Invite Link**: When the bot joins a server,it has invite perms unless you unselected it so if anyone reports bugs using \`report\` command it will be able to send us a temporary invite and help the devs to see if the bot is working properly.However,you can unselect the \`Create Invite\` button while inviting which is not recommended!
**Guild ID**: Without the guild id the bot won't be able to remember the prefix you saved!
**Member ID**: We collect this to ban the users who abuse our bot! 
**Message ID**: For deleting bot associated messages like with the trash button!;no]

$addfield[1;**__Privacy Policy Of The Bot(subject to change on the decisions of the owner.)__**;**Q: What Data Is Tracked?**\nAll data that is related to the bot is tracked. This means that if you invite our bot in your server or kick it, we get the info that you have kicked or added the bot in $servername. This data is only viewable to the developer.\n\n**Q: Do you store any other data except the image link above?**\nYes, upto some extent.Check below!;no]
$footer[1;Please visit the privacy-policy website for more information!]
 $addTimestamp[1;$dateStamp]
 $cooldown[5s;{newEmbed:{description:A bit too fast there. Wait for **%time%**!}{color:GREEN}}]
$color[1;$getVar[color]]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`
 }