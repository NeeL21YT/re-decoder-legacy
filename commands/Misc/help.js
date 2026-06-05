module.exports = [{
name: "help", 
code:`
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$title[1;Hello!]
$description[1;$customEmoji[dawn_disload] | Connecting to database!]
$editIn[0.9s;{newEmbed:{title:Success!}{description:$customEmoji[dawn_discord] | Connection made successfully!}{color:WHITE}};{newEmbed:{author:$userTag:$authorAvatar}{description:
Click on the "**Select A Command Category**" menu down below to find information on a list of commands under specific categories!

Hey,
I am **\`Re-Decoder\`**.
The Best **Fun** & **Utility** Bot on Discord.Free features,no premium.It has many useful commands!

**Developers#COLON# [$username[751034188467011704]#$discriminator[751034188467011704]](https#COLON#//discord.com/users/751034188467011704 'Profile link') & [$username[816235165801513002]#$discriminator[816235165801513002]](https#COLON#//discord.com/users/816235165801513002 'Profile link')**
❲  **[Donate](https://ko-fi.com/dawndevs 'Donate to keep the bot alive!')** |  **[Vote](https://top.gg/bot/801377420112035840/vote 'Vote for me on Top.gg!') | [Support Server](https://discord.gg/GkXGcQ8Tkh 'Join our Support Server to report bugs and give suggestions directly!')** ❳
  
> The menu will only work for **$userTag[$authorID]**!

✅ | **Usage**: \`$getServerVar[prefix]<command> <text>\`
❎ | \`<>\` not necessary! 
🔗 |**[ Invite Me!](https://dsc.gg/re-decoder 'Invite me to your servers!')**}{timestamp}{footer:Thank You for using me! | $username}{color:FF5349}{image:https://cdn.discordapp.com/attachments/859727383221633025/953091239010521128/re-decoder.gif}}]
$globalCooldown[3s;> <​a:nx_error:785829739700551711> Please wait %time% before using the command again {delete:4s}] 
$color[1;ORANGE]
$addSelectMenu[1;help_$authorID;Select A Command Category;1;1;false;💿| Codes:View a list of my codes commands!:0;💾| CodeBlock:View a list of codeblocks!:1;📝| Fonts:This includes all the font command!:2;🔶| Text-Styles:View a list of my text-styles commands!:3;🧡| Special-Styles:View a list of special styles commands!:4;🤖| Bot-Commands:View a list of bot commands!:5]
$cooldown[6s;> Can't you use the previous menu?]
$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}] 

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

`
}, {
type: 'interaction', 
prototype: "selectMenu", 
code: `
$interactionUpdate[;{newEmbed: {title: Page-1!} {field:

💿 | Codes-List:
\`\`\`
binary, binarytext, base64, base64text, morse, morsetext
\`\`\` 

:no}
  
{footer:🧡• Please invite me!:$authorAvatar}{timestamp} {color: FF6666};{actionRow:{selectMenu:help_$authorid:Select A Command Category:1:1:false:{selectMenuOptions:💿| Codes:0:View a list of my codes commands!:false}{selectMenuOptions:💾| CodeBlock:1:View a list of codeblocks!:false}{selectMenuOptions:📝| Fonts:2:This includes all the font command!:false}{selectMenuOptions:🔶| Text-Styles:3:View a list of my text-styles commands!:false}{selectMenuOptions:🧡| Special-Styles:4:View a list of special styles commands!:false}{selectMenuOptions:🤖| Bot-Commands:5:View a list of bot commands!:false}{selectMenuOptions:🏠| Home:6:Redirects you back to the homepage:false:}}}}]

$onlyIf[$interactionData[customId]==help_$interactionData[author.id];{"content": "This is not for you!", "ephemeral": true, "options": {"interaction": true}}]
$onlyIf[$interactionData[values[0]]==0;]
`
}, {
type: 'interaction', 
prototype: "selectMenu", 
code: `
$interactionUpdate[;{newEmbed: {title: Page-2!} {field:

💾 | CodeBlocks-List :
\`\`\`
default, quote, green, cyan, blue, yellow, orange, red
\`\`\`

:yes}
 {color:FF6666} {footer:🧡• Please invite me!:$authorAvatar}{timestamp};{actionRow:{selectMenu:help_$authorid:Select A Command Category:1:1:false:{selectMenuOptions:💿| Codes:0:View a list of my codes commands!:false}{selectMenuOptions:💾| CodeBlock:1:View a list of codeblocks!:false}{selectMenuOptions:📝| Fonts:2:This includes all the font command!:false}{selectMenuOptions:🔶| Text-Styles:3:View a list of my text-styles commands!:false}{selectMenuOptions:🧡| Special-Styles:4:View a list of special styles commands!:false}{selectMenuOptions:🤖| Bot-Commands:5:View a list of bot commands!:false}{selectMenuOptions:🏠| Home:6:Redirects you back to the homepage:false:}}}}]

$onlyIf[$interactionData[customId]==help_$interactionData[author.id];{"content": "This is not for you!", "ephemeral": true, "options": {"interaction": true}}]
$onlyIf[$interactionData[values[0]]==1;]
`
}, {
type: "interaction",
prototype: "selectMenu",
code: `
$interactionUpdate[;{newEmbed: {title: Page-3!} {description: 

:pencil: | Fonts-List ( \`i\` - *italics* / \`b\` - **bold** )
\`\`\`
antrophobia, bscript, bfractur, block, cloud, comic, doublestruck, emojify, emptycircle, emptysquare, filledcircle, filledsquare, flaky, fractur, happy, invisible-ink, iserif, manga, rombus, sans, script, saturn, slashy,  serif, sad, smooth, sunshine, small, tiny, typewriter, upsidedown
\`\`\` 

}{footer:🧡• Please invite me!:$authorAvatar}{timestamp} {color: FF6666};{actionRow:{selectMenu:help_$authorid:Select A Command Category:1:1:false:{selectMenuOptions:💿| Codes:0:View a list of my codes commands!:false}{selectMenuOptions:💾| CodeBlock:1:View a list of codeblocks!:false}{selectMenuOptions:📝| Fonts:2:This includes all the font command!:false}{selectMenuOptions:🔶| Text-Styles:3:View a list of my text-styles commands!:false}{selectMenuOptions:🧡| Special-Styles:4:View a list of special styles commands!:false}{selectMenuOptions:🤖| Bot-Commands:5:View a list of bot commands!:false}{selectMenuOptions:🏠| Home:6:Redirects you back to the homepage:false:}}}}]

$onlyIf[$interactionData[customId]==help_$interactionData[author.id];{"content": "This is not for you!", "ephemeral": true, "options": {"interaction": true}}]
$onlyIf[$interactionData[values[0]]==2;]
`
}, {
type: "interaction",
prototype: "selectMenu",
code: `
$interactionUpdate[;{newEmbed: {title: Page-4!} {field:

🔶 | Text Styles:
\`\`\`
style1, style2, style3, style4, style5, style6, style7, style8, style9, style10, style11, style12, style13, style14, style15, style16, style17, style18, style19, style20, style21, style22, style23, style24, style25, style26, style27, style28, style29, style30, style31, style32, style33, style34, style35, style36, style37, style38, style39, style40, style41, style42, style43, style44, style45, style46, style47, style48, style49, style50, style51, style52, style53
\`\`\` 

:no} {footer:🧡• Please invite me!:$authorAvatar}{timestamp} {color: FF6666};{actionRow:{selectMenu:help_$authorid:Select A Command Category:1:1:false:{selectMenuOptions:💿| Codes:0:View a list of my codes commands!:false}{selectMenuOptions:💾| CodeBlock:1:View a list of codeblocks!:false}{selectMenuOptions:📝| Fonts:2:This includes all the font command!:false}{selectMenuOptions:🔶| Text-Styles:3:View a list of my text-styles commands!:false}{selectMenuOptions:🧡| Special-Styles:4:View a list of special styles commands!:false}{selectMenuOptions:🤖| Bot-Commands:5:View a list of bot commands!:false}{selectMenuOptions:🏠| Home:6:Redirects you back to the homepage:false:}}}}]

$onlyIf[$interactionData[customId]==help_$interactionData[author.id];{"content": "This is not for you!", "ephemeral": true, "options": {"interaction": true}}]
$onlyIf[$interactionData[values[0]]==3;]
`
}, {
type: "interaction",
prototype: "selectMenu",
code: `
$interactionUpdate[;{newEmbed: {title: Page-5!} {field: 🧡 | Special Styles:
\`\`\`
special1, special2, special3, special4, special5, special6, special7, special8, special9, special10, special11, special12
\`\`\` 
:no} {footer:🧡• Please invite me!:$authorAvatar}{timestamp} {color: FF6666};{actionRow:{selectMenu:help_$authorid:Select A Command Category:1:1:false:{selectMenuOptions:💿| Codes:0:View a list of my codes commands!:false}{selectMenuOptions:💾| CodeBlock:1:View a list of codeblocks!:false}{selectMenuOptions:📝| Fonts:2:This includes all the font command!:false}{selectMenuOptions:🔶| Text-Styles:3:View a list of my text-styles commands!:false}{selectMenuOptions:🧡| Special-Styles:4:View a list of special styles commands!:false}{selectMenuOptions:🤖| Bot-Commands:5:View a list of bot commands!:false}{selectMenuOptions:🏠| Home:6:Redirects you back to the homepage:false:}}}}]

$onlyIf[$interactionData[customId]==help_$interactionData[author.id];{"content": "This is not for you!", "ephemeral": true, "options": {"interaction": true}}]
$onlyIf[$interactionData[values[0]]==4;]
`
}, {
type: "interaction",
prototype: "selectMenu",
code: `
$interactionUpdate[;{newEmbed: {title: Page-6!} {color: FF6666} {field:

🤖 | Bot-Commands:
\`\`\`
help, botinfo, botsuggest, credits, invite, ping, privacy-policy, report, resetprefix, review, setprefix, vote
\`\`\`

:no}{footer:🧡• Please invite me!:$authorAvatar}{timestamp};{actionRow:{selectMenu:help_$authorid:Select A Command Category:1:1:false:{selectMenuOptions:💿| Codes:0:View a list of my codes commands!:false}{selectMenuOptions:💾| CodeBlock:1:View a list of codeblocks!:false}{selectMenuOptions:📝| Fonts:2:This includes all the font command!:false}{selectMenuOptions:🔶| Text-Styles:3:View a list of my text-styles commands!:false}{selectMenuOptions:🧡| Special-Styles:4:View a list of special styles commands!:false}{selectMenuOptions:🤖| Bot-Commands:5:View a list of bot commands!:false}{selectMenuOptions:🏠| Home:6:Redirects you back to the homepage:false:}}}}]

$onlyIf[$interactionData[customId]==help_$interactionData[author.id];{"content": "This is not for you!", "ephemeral": true, "options": {"interaction": true}}]
$onlyIf[$interactionData[values[0]]==5;]`
},{
type: "interaction",
prototype: "selectMenu",
code: `
$interactionUpdate[;{newEmbed:{author:$userTag:$authorAvatar}{description:
Click on the "**Select A Command Category**" menu down below to find information on a list of commands under specific categories!

Hey,
I am **\`Re-Decoder\`**.
The Best **Fun** & **Utility** Bot on Discord.Free features,no premium.It has many useful commands!

**Developers#COLON# [$username[751034188467011704]#$discriminator[751034188467011704]](https#COLON#//discord.com/users/751034188467011704 'Profile link') & [$username[816235165801513002]#$discriminator[816235165801513002]](https#COLON#//discord.com/users/816235165801513002 'Profile link')**
❲ **[Vote](https://top.gg/bot/801377420112035840/vote 'Vote for me on Top.gg!') | [Support Server](https://discord.gg/GkXGcQ8Tkh 'Join our Support Server to report bugs and give suggestions directly!')** ❳
  
> The menu will only work for **$userTag[$authorID]**!

✅ | **Usage**: \`$getServerVar[prefix]<command> <text>\`
❎ | \`<>\` not necessary! 
🔗 |**[ Invite Me!](https://dsc.gg/re-decoder 'Invite me to your servers!')**}{footer:Thank You for using me! | $username}{color:FF5349}{image:https://cdn.discordapp.com/attachments/859727383221633025/953091239010521128/re-decoder.gif}};{actionRow:{selectMenu:help_$authorid:Select A Command Category:1:1:false:{selectMenuOptions:💿| Codes:0:View a list of my codes commands!:false}{selectMenuOptions:💾| CodeBlock:1:View a list of codeblocks!:false}{selectMenuOptions:📝| Fonts:2:This includes all the font command!:false}{selectMenuOptions:🔶| Text-Styles:3:View a list of my text-styles commands!:false}{selectMenuOptions:🧡| Special-Styles:4:View a list of special styles commands!:false}{selectMenuOptions:🤖| Bot-Commands:5:View a list of bot commands!:false}}}}]

$onlyIf[$interactionData[customId]==help_$interactionData[author.id];{"content": "This is not for you!", "ephemeral": true, "options": {"interaction": true}}]
$onlyIf[$interactionData[values[0]]==6;]`
}]