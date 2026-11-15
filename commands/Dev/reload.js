module.exports = {
name: "reload",
description: "Reload all the commands! (Developer Only)",
usage: "reload",
code: ` 
$addButton[1;Removed: $replaceText[$replaceText[$checkContains[$math[$get[oldcount]-$get[newcount]];-];true;0];false;$math[$get[oldcount]-$get[newcount]]];danger;removed;yes;<a:dawn_down:000000000000000000>]
$addButton[1;Added: $replaceText[$replaceText[$checkContains[$math[$get[newcount]-$get[oldcount]];-];true;0];false;$math[$get[newcount]-$get[oldcount]]];success;added;yes;<a:dawn_up:000000000000000000>]
$addButton[1;Updated: $get[newcount];primary;updated;yes;<:dawn_coding:000000000000000000>]
$color[1;35CE8D]
$description[1;<:dawn_discord:000000000000000000> | **__Successfully reloaded all the commands!__**]
$deleteMessage[$get[reloadid];$channelID]
$wait[700ms]
$let[reloadid;$sendMessage[{newEmbed: {description:<:dawn_discord:000000000000000000> | **__Reloading all the commands!__**}{color:3ABEFF}};yes]]
$let[newcount;$commandsCount]
$updateCommands
$let[oldcount;$commandsCount]
$onlyForIDs[$botOwnerID;{newEmbed: {color:DA2C38}{description::fail: **__This command can only be used by <@$botOwnerID>!__**}{footer:Executed by $userTag[$authorID]:$authorAvatar}{timestamp}{author:$serverName[$guildID]:$serverIcon[$guildID]}}]`
}