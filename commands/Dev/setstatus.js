module.exports = { 
   name: "setstatus",
   aliases: ["set-status"], 
code: `   
$setVar[status;$message]
$title[1;Re-Decoder's Bot Status]
$description[1;> Set the new bot status as **\`$message\`**
 
> __Old__ one was **$getVar[status]**] 
$footer[1;DAWN DEVELOPMENT ™] 
$color[1;$getVar[color]] 
$onlyForIDs[$botOwnerID;{newEmbed:{title:Access Denied!}{description:**$userTag** is not in owner's database!

So,you can't use this command!}{footer:DAWN DEVELOPMENT ™}{color:RED}{delete:15s}}]  
$onlyif[$message!=; > Enter the message to be set as status!]
` 
}