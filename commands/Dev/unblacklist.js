module.exports = {
 name: "unblacklist",
 code: `$setGlobalUserVar[Blacklist;false;$findUser[$message[1]]]
 
> ✅ | **$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] is no longer on the blacklist**! 
  
$sendDM[{newEmbed:{title:You have been unblacklisted!}{description:You have been unblacklisted from using the bot by $userTag[$authorID]. Don't break the rules again or get permanently banned!}{footer:DAWN DΞVΞLOPMΞNT™}{color:BLACK}};$findUser[$message[1];no]]
$onlyIf[$findUser[$message[1];no]!=undefined;{newEmbed:{title:Error}{description:I could'nt find the provided user!}{color:BLACK}}]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ You can't blacklist yourself, so you can't unblacklist yourself**!]
$onlyForIDs[$botOwnerID;{newEmbed:{title:Access Denied!}{description:**$userTag** is not in owner's database!

So,you can't use this command!}{footer:DAWN DEVELOPMENT ™}{color:RED}{delete:15s}}]
`
}