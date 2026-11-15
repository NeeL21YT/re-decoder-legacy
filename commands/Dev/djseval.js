module.exports = {
  name: "djseval",
  description: "Evals an DJ.S code",
  usage: "$getservervar[prefix] djseval <code>",
  aliases: ['ev','evaluate'],
  code: `$djsEval[$message;yes]
$onlyForIDs[$botOwnerID;{newEmbed:{title:Access Denied!}{description:**$userTag** is not in owner's database!
So,you can't use this command!}{footer:DAWN DEVELOPMENT ™}{color:RED}{delete:15s}}]`
}