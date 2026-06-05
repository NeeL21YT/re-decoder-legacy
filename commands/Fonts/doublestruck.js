module.exports = ({
  name: "doublestruck",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;ℤ];Y;𝕐];X;𝕏];W;𝕎];V;𝕍];U;𝕌];T;𝕋];S;𝕊];R;ℝ];Q;ℚ];P;ℙ];O;𝕆];Ñ;Ñ];N;ℕ];M;𝕄];L;𝕃];K;𝕂];J;𝕁];I;𝕀];H;ℍ];G;𝔾];F;𝔽];E;𝔼];D;𝔻];C;ℂ];B;𝔹];A;𝔸];z;𝕫];y;𝕪];x;𝕩];w;𝕨];v;𝕧];u;𝕦];t;𝕥];s;𝕤];r;𝕣];q;𝕢];p;𝕡];o;𝕠];ñ;ñ];n;𝕟];m;𝕞];l;𝕝];k;𝕜];j;𝕛];i;𝕚];h;𝕙];g;𝕘];f;𝕗];e;𝕖];d;𝕕];c;𝕔];b;𝕓];a;𝕒]
$argsCheck[>0;Write something to convert to **\`$commandName\`** text.] 
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]
$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})