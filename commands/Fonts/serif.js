module.exports = ({
  name: "serif",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;𝐙];Y;𝐘];X;𝐗];W;𝐖];V;𝐕];U;𝐔];T;𝐓];S;𝐒];R;𝐑];Q;𝐐];P;𝐏];O;𝐎];Ñ;Ñ];N;𝐍];M;𝐌];L;𝐋];K;𝐊];J;𝐉];I;𝐈];H;𝐇];G;𝐆];F;𝐅];E;𝐄];D;𝐃];C;𝐂];B;𝐁];A;𝐀];z;𝐳];y;𝐲];x;𝐱];w;𝐰];v;𝐯];u;𝐮];t;𝐭];s;𝐬];r;𝐫];q;𝐪];p;𝐩];o;𝐨];ñ;ñ];n;𝐧];m;𝐦];l;𝐥];k;𝐤];j;𝐣];i;𝐢];h;𝐡];g;𝐠];f;𝐟];e;𝐞];d;𝐝];c;𝐜];b;𝐛];a;𝐚]
$argsCheck[>0;Write something to convert to **\`$commandName\`** text.] 
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]
$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})