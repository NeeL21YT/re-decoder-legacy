module.exports = { 
    name: "invite", 
    aliases: ['support'],
    code: ` 
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$title[1;Support/Invite] 
$description[1; 
\`\`\`
---------------------------- » «» « ----------------------------

**Name**: Re-Decoder

**Tags**: Fun, Encoding, Decoding

**Prefix**: \`re!\` (Changeable Prefix)
 
**Help cmd**: \`re!help\` 
 
__Notes__: A **Utility** bot, we are adding more features from time to time.It has a feature to **\`convert text\`** into codes and **\`convert codes\`** like morse into text etc!.It can also make boring text font into **\`cool fonts\`** which you can flex upon.It can be used to surprise your friends by showing the bot features

💫 | Extra: Verified on **top.gg**
🆒 | Cool: If you invite and use it!

> Support Server: \`re!support\`
> Invite: https://dsc.gg/re-decoder

---------------------------- » «» « ----------------------------
\`\`\`
 
> **Support us by promoting this bot ad in self-promoting servers!**]
$footer[1;Happy to be Re-Decoder :3] 
$color[1;$getVar[color]] 
$addbutton[1;Bot Invite;5;https://dsc.gg/re-decoder;enabled;] 
$addbutton[1;Support Server;5;https://discord.gg/GkXGcQ8Tkh;enabled;]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

` 
}