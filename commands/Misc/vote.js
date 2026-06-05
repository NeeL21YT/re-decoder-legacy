module.exports = {
    name: "vote", 
    code: ` 
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$title[1;Voting Time]
$description[1;
**I am currently approved on**
*[Top.gg](https://top.gg/bot/801377420112035840/vote/), [VoiD Bots](https://voidbots.net/bot/801377420112035840/vote), [Discord Bot List](https://discordbotlist.com/bots/re-decoder/upvote)* 
and much more soon...

$footer[1;Thanks for voting]  
$addTimestamp[1]
$thumbnail[1;https://media.discordapp.net/attachments/859727383221633025/960463933150482432/vote.jpg]
$color[1;$getVar[color]] 
 
$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`
}