module.exports = ({
 name: "emojify",
 code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]

> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toUppercase[$message];; ];A;🇦];B;🇧];C;🇨];D;🇩];E;🇪];F;🇫];G;🇬];H;🇭];I;🇮];J;🇯];K;🇰];L;🇱];M;🇲];N;🇳];O;🇴];P;🇵];Q;🇶];R;🇷];S;🇸];T;🇹];U;🇺];V;🇻];W;🇼];X;🇽];Y;🇾];Z;🇿];1;1️⃣];2;2️⃣];3;3️⃣];4;4️⃣];5;5️⃣];6;6️⃣];7;7️⃣];8;8️⃣];9;9️⃣];#;#️⃣];!;❕];?;❔];0;0️⃣]
$deleteCommand
$onlyIf[$noMentionMessage!=;You need to write something for converting it to emoji.]
$onlyIf[$mentioned[1]!=;Please dont mention anyone. As i cant emojify mentions] 
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]
$suppressErrors`
})