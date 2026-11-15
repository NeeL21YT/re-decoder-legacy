module.exports = ({
  name: "bscript",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;𝓩];Y;𝓨];X;𝓧];W;𝓦];V;𝓥];U;𝓤];T;𝓣];S;𝓢];R;𝓡];Q;𝓠];P;𝓟];O;𝓞];Ñ;Ñ];N;𝓝];M;𝓜];L;𝓛];K;𝓚];J;𝓙];I;𝓘];H;𝓗];G;𝓖];F;𝓕];E;𝓔];D;𝓓];C;𝓒];B;𝓑];A;𝓐];z;𝔃];y;𝔂];x;𝔁];w;𝔀];v;𝓿];u;𝓾];t;𝓽];s;𝓼];r;𝓻];q;𝓺];p;𝓹];o;𝓸];ñ;ñ];n;𝓷];m;𝓶];l;𝓵];k;𝓴];j;𝓳];i;𝓲];h;𝓱];g;𝓰];f;𝓯];e;𝓮];d;𝓭];c;𝓬];b;𝓫];a;𝓪]

$argsCheck[>0;Write something to convert to **\`$commandName\`** text.] 
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]
$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]


`})