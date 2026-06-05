module.exports = [{
type: "guildJoin",
channel: "860113075625263135",
$if: "v4",
code:` 
$botLeave
$onlyif[$membersCount[$guildID;;no]<6;]

$title[1;Bot Added ‖ #$serverCount]
$thumbnail[1;$replaceText[$serverIcon[$guildID;2048;yes];null;https://media.discordapp.net/attachments/859727383221633025/860127431183958036/IMG_20210701_172835.jpg]]
$addField[1;**Server Owner**; **$username[$ownerID]#$discriminator[$ownerID]** | ($ownerID)]
$addField[1;**Server Name**;$serverName] 
$addField[1;**Guild Id:**;$guildID]
$addField[1;**Members:**; $membersCount[$guildID]]
$color[1;WHITE]
$addTimestamp[1;$dateStamp]
`
},{
type: "guildLeave",
channel: "860113075625263135",
$if: "v4",
code:`
$title[1;Bot Removed ‖ #$serverCount]
$thumbnail[1;$replaceText[$serverIcon[$guildID;2048;yes];null;https://media.discordapp.net/attachments/859727383221633025/860127431183958036/IMG_20210701_172835.jpg]]
$addField[1;**Members:**; $membersCount[$guildID]]
$addField[1;**Server Owner**;**$userName[$ownerID]#$discriminator[$ownerID]** | ($ownerID)]
$addField[1;**Server Name**;$serverName]
$color[1;ORANGE]
$addTimestamp[1;$dateStamp]
`
}]
