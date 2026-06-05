module.exports = ({
  name: "smooth",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]

> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;ȥ];Y;ყ];X;x];W;ɯ];V;ʋ];U;υ];T;ƚ];S;ʂ];R;ɾ];Q;ϙ];P;ρ];O;σ];Ñ;Ñ];N;ɳ];M;ɱ];L;ʅ];K;ƙ];J;ʝ];I;ι];H;ԋ];G;ɠ];F;ϝ];E;ҽ];D;ԃ];C;ƈ];B;Ⴆ];A;α];z;ȥ];y;ყ];x;x];w;ɯ];v;ʋ];u;υ];t;ƚ];s;ʂ];r;ɾ];q;ϙ];p;ρ];o;σ];ñ;ñ];n;ɳ];m;ɱ];l;ʅ];k;ƙ];j;ʝ];i;ι];h;ԋ];g;ɠ];f;ϝ];e;ҽ];d;ԃ];c;ƈ];b;Ⴆ];a;α]

$onlyIf[$message[1]!=;Write something to convert to **\`$commandName\`** text.]

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})