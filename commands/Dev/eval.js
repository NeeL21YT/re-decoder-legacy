module.exports = {
  name: "eval",
  description: "Evals an Aoi.JS code",
  usage: "$getservervar[prefix]eval <code>",
  aliases: ['ev','evaluate'],
  code: `$eval[$message]
$deleteCommand
$onlyForIDs[$botOwnerID;{newEmbed:{title:Access Denied!}{description:**$userTag** is not in owner's database!
So,you can't use this command!}{footer:DAWN DEVELOPMENT ™}{color:RED}{delete:15s}}]
$suppressErrors`
}