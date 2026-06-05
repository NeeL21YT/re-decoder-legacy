module.exports = ({
  name: "manga",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;乙];Y;ㄚ];X;乂];W;山];V;ᐯ];U;ㄩ];T;ㄒ];S;丂];R;尺];Q;Ҩ];P;卩];O;ㄖ];Ñ;Ñ];N;几];M;爪];L;ㄥ];K;Ҝ];J;ﾌ];I;|];H;卄];G;ᘜ];F;千];E;乇];D;ᗪ];C;匚];B;乃];A;卂];z;乙];y;ㄚ];x;乂];w;山];v;ᐯ];u;ㄩ];t;ㄒ];s;丂];r;尺];q;Ҩ];p;卩];o;ㄖ];ñ;ñ];n;几];m;爪];l;ㄥ];k;Ҝ];j;ﾌ];i;|];h;卄];g;ᘜ];f;千];e;乇];d;ᗪ];c;匚];b;乃];a;卂]
$argsCheck[>0;Write something to convert to **\`$commandName\`** text.] 

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})