module.exports = ({
  name: "saturn",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;Ẕ];Y;Ϥ];X;χ];W;Ɯ];V;Ɣ];U;Ц];T;Ť];S;ら];R;尺];Q;Ҩ];P;þ];O;Ø];Ñ;Ñ];N;Л];M;௱];L;Ł];K;Қ];J;ﾌ];I;ɪ];H;н];G;Ɠ];F;F];E;Ɛ];D;Ð];C;ㄈ];B;Ϧ];A;Λ];z;Ẕ];y;Ϥ];x;χ];w;Ɯ];v;Ɣ];u;Ц];t;Ť];s;ら];r;尺];q;Ҩ];p;þ];o;Ø];ñ;ñ];n;Л];m;௱];l;Ł];k;Қ];j;ﾌ];i;ɪ];h;н];g;Ɠ];f;F];e;Ɛ];d;Ð];c;ㄈ];b;Ϧ];a;Λ]
$argsCheck[>0;Write something to convert to **\`$commandName\`** text.] 

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})