module.exports = ({
  name: "script",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;𝒵];Y;𝒴];X;𝒳];W;𝒲];V;𝒱];U;𝒰];T;𝒯];S;𝒮];R;ℛ];Q;𝒬];P;𝒫];O;𝒪];Ñ;Ñ];N;𝒩];M;ℳ];L;ℒ];K;𝒦];J;𝒥];I;ℐ];H;ℋ];G;𝒢];F;ℱ];E;ℰ];D;𝒟];C;𝒞];B;ℬ];A;𝒜];z;𝓏];y;𝓎];x;𝓍];w;𝓌];v;𝓋];u;𝓊];t;𝓉];s;𝓈];r;𝓇];q;𝓆];p;𝓅];o;ℴ];ñ;ñ];n;𝓃];m;𝓂];l;𝓁];k;𝓀];j;𝒿];i;𝒾];h;𝒽];g;ℊ];f;𝒻];e;ℯ];d;𝒹];c;𝒸];b;𝒷];a;𝒶]
$argsCheck[>0;Write something to convert to fancy text.] 
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]
$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})