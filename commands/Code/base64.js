module.exports = {
    name: "base64",
    code: ` 
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$title[1;Text to base64 Converter]
$description[1;
Text: **$message**
      
Base64: \`$jsonRequest[https://some-random-api.ml/base64?encode=$replaceText[$message; ;%20];base64;<a:nx_cross:794116507931377685>  Couldn't connect to the api!.Try again later!]\`]
$footer[1;Requested by $username]
$addTimestamp[1]
$color[1;$getVar[color]]
$onlyIf[$message!=;Hey,Add some text!]
$globalCooldown[3s;> <​a:nx_error:785829739700551711> Please wait %time% before using **\`$commandName\`** the command again{delete:4s}]

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`

}