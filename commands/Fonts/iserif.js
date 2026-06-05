module.exports = ({
  name: "iserif",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;𝑍];Y;𝑌];X;𝑋];W;𝑊];V;𝑉];U;𝑈];T;𝑇];S;𝑆];R;𝑅];Q;𝑄];P;𝑃];O;𝑂];Ñ;Ñ];N;𝑁];M;𝑀];L;𝐿];K;𝐾];J;𝐽];I;𝐼];H;𝐻];G;𝐺];F;𝐹];E;𝐸];D;𝐷];C;𝐶];B;𝐵];A;𝐴];z;𝑧];y;𝑦];x;𝑥];w;𝑤];v;𝑣];u;𝑢];t;𝑡];s;𝑠];r;𝑟];q;𝑞];p;𝑝];o;𝑜];ñ;ñ];n;𝑛];m;𝑚];l;𝑙];k;𝑘];j;𝑗];i;𝑖];h;ℎ];g;𝑔];f;𝑓];e;𝑒];d;𝑑];c;𝑐];b;𝑏];a;𝑎]
$argsCheck[>0;Write something to convert to **\`$commandName\`** text.] 
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]
$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})