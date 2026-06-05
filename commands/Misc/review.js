module.exports = { 
    name: "review", 
    $if: "v4",
    code: ` 
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$useChannel[859670969760743424]
$title[1;🌟| New Review]
$thumbnail[1;https://media.discordapp.net/attachments/859727383221633025/944118377721507840/review-logo.png]
$description[1;$addField[1;Review;\`$messageSlice[1]\`;no] 
$addField[1;User;\`$username[$authorID]#$discriminator[$authorID]\` | \`$authorID\`;no] 
$addField[1;Server;\`$serverName[$guildID]\` | \`$guildID\`;no] ] 
$footer[1;$message[1]/5 Stars!]
$color[1;$getVar[color]]
$channelSendMessage[$channelID;> Review sent successfully to **\`$userTag[$botOwnerID]\`**!] 
$onlyIf[5=>$message[1];Please provide a number between 0 and 5!]
$onlyIf[$isNumber[$message[1]]==true;Please provide a valid number!]
$addTimestamp[1;$dateStamp]

$globalCooldown[6h;> <a:dawn_cross:794116507931377685> Please wait **%time%** before using the reviewing again! {delete:15s}]  
$argsCheck[>1;Try this \`$getServerVar[prefix] review <stars 1/5> <review>\`!] 
$onlyIf[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activity detected}{color:RED}{description: **❌ To avoid alt accounts,your account has to be atleast **\`2 weeks\` **old in order to use $commandName.Not an alt? Join my support server [Here]($getVar[invite])**}{delete:15s}}] 
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

 ` 
}