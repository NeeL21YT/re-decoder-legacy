module.exports = ({
  name: "typewriter",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;𝚉];Y;𝚈];X;𝚇];W;𝚆];V;𝚅];U;𝚄];T;𝚃];S;𝚂];R;𝚁];Q;𝚀];P;𝙿];O;𝙾];Ñ;Ñ];N;𝙽];M;𝙼];L;𝙻];K;𝙺];J;𝙹];I;𝙸];H;𝙷];G;𝙶];F;𝙵];E;𝙴];D;𝙳];C;𝙲];B;𝙱];A;𝙰];z;𝚣];y;𝚢];x;𝚡];w;𝚠];v;𝚟];u;𝚞];t;𝚝];s;𝚜];r;𝚛];q;𝚚];p;𝚙];o;𝚘];ñ;ñ];n;𝚗];m;𝚖];l;𝚕];k;𝚔];j;𝚓];i;𝚒];h;𝚑];g;𝚐];f;𝚏];e;𝚎];d;𝚍];c;𝚌];b;𝚋];a;𝚊]
$argsCheck[>0;Write something to convert to **\`$commandName\`** text.] 
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]
$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})