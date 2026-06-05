module.exports = ({
  name: "sans",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;𝖹];Y;𝖸];X;𝖷];W;𝖶];V;𝖵];U;𝖴];T;𝖳];S;𝖲];R;𝖱];Q;𝖰];P;𝖯];O;𝖮];Ñ;Ñ];N;𝖭];M;𝖬];L;𝖫];K;𝖪];J;𝖩];I;𝖨];H;𝖧];G;𝖦];F;𝖥];E;𝖤];D;𝖣];C;𝖢];B;𝖡];A;𝖠];z;𝗓];y;𝗒];x;𝗑];w;𝗐];v;𝗏];u;𝗎];t;𝗍];s;𝗌];r;𝗋];q;𝗊];p;𝗉];o;𝗈];ñ;ñ];n;𝗇];m;𝗆];l;𝗅];k;𝗄];j;𝗃];i;𝗂];h;𝗁];g;𝗀];f;𝖿];e;𝖾];d;𝖽];c;𝖼];b;𝖻];a;𝖺]
$argsCheck[>0;Write something to convert to \`$commandName\` text.] 
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]
$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})