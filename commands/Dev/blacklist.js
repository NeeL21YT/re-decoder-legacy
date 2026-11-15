module.exports = {
 name: "blacklist",
 code:`$setGlobalUserVar[Blacklist;true;$findUser[$message[1]]] 
$setGlobalUserVar[BlacklistReason;$messageSlice[1];$findUser[$message[1];no]]
$setGlobalUserVar[BlacklistDate;$month/$day/$year $hour:$minute:$second;$findUser[$message[1];no]]
 
> 🛑 | **$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] is blacklisted now from using the bot for \`$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]\`**! 
 
$sendDM[{newEmbed:{title:You have been blacklisted!}{description:You have been blacklisted from using the bot by $userTag[$authorID] for \`$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]\`!}{footer:If you believe this was an error, please join my support server and open a ticket to appeal!}{color:BLACK}};$findUser[$message[1];no]]
  
$onlyIf[$findUser[$message[1];no]!=undefined;{newEmbed:{title:Error}{description:I could'nt find the provided user!}{color:BLACK}}]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ You can't blacklist yourself**]
$onlyForIDs[$botOwnerID;{newEmbed:{title:Access Denied!}{description:**$userTag** is not in owner's database!

So,you can't use this command!}{footer:DAWN DEVELOPMENT ™}{color:RED}{delete:15s}}]
`
}