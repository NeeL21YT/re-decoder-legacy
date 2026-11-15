module.exports = ({
  name: "fractur",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;ℨ];Y;𝔜];X;𝔛];W;𝔚];V;𝔙];U;𝔘];T;𝔗];S;𝔖];R;ℜ];Q;𝔔];P;𝔓];O;𝔒];Ñ;Ñ];N;𝔑];M;𝔐];L;𝔏];K;𝔎];J;𝔍];I;ℑ];H;ℌ];G;𝔊];F;𝔉];E;𝔈];D;𝔇];C;ℭ];B;𝔙];A;𝔄];z;𝔷];y;𝔶];x;𝔵];w;𝔴];v;𝔳];u;𝔳];t;];s;𝔰];r;𝔯];q;𝔮];p;𝔭];o;𝔬];ñ;ñ];n;𝔫];m;𝔪];l;𝔩];k;𝔨];j;𝔧];i;𝔦];h;𝔥];g;𝔤];f;𝔣];e;𝔢];d;𝔡];c;𝔠];b;𝔟];a;𝔞]
$argsCheck[>0;Write something to convert to **\`$commandName\`** text.] 

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})