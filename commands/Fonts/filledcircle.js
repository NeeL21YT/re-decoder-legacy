module.exports = ({
  name: "filledcircle",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;🅩];Y;🅨];X;🅧];W;🅦];V;🅥];U;🅤];T;🅣];S;🅢];R;🅡];Q;🅠];P;🅟];O;🅞];Ñ;Ñ];N;🅝];M;🅜];L;🅛];K;🅚];J;🅙];I;🅘];H;🅗];G;🅖];F;🅕];E;🅔];D;🅓];C;🅒];B;🅑];A;🅐];z;🅩];y;🅨];x;🅧];w;🅦];v;🅥];u;🅤];t;🅣];s;🅢];r;🅡];q;🅠];p;🅟];o;🅞];ñ;ñ];n;🅝];m;🅜];l;🅛];k;🅚];j;🅙];i;🅘];h;🅗];g;🅖];f;🅕];e;🅔];d;🅓];c;🅕];b;🅑];a;🅐]
$argsCheck[>0;Write something to convert to **\`$commandName\`** text.] 

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})