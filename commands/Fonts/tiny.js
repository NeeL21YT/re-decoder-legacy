module.exports = ({
  name: "tiny",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;ᶻ];Y;ʸ];X;ˣ];W;ʷ];V;ᵛ];U;ᵘ];T;ᵗ];S;ˢ];R;ʳ];Q;ᵠ];P;ᵖ];O;ᵒ];Ñ;Ñⁿ̃];N;ⁿ];M;ᵐ];L;ˡ];K;ᵏ];J;ʲ];I;ⁱ];H;ʰ];G;ᵍ];F;ᶠ];E;ᵉ];D;ᵈ];C;ᶜ];B;ᵇ];A;ᵃ];z;ᶻ];y;ʸ];x;ˣ];w;ʷ];v;ᵛ];u;ᵘ];t;ᵗ];s;ˢ];r;ʳ];q;ᵠ];p;ᵖ];o;ᵒ];ñ;ⁿ̃];n;ⁿ];m;ᵐ];l;ˡ];k;ᵏ];j;ʲ];i;ⁱ];h;ʰ];g;ᵍ];f;ᶠ];e;ᵉ];d;ᵈ];c;ᶜ];b;ᵇ];a;ᵃ]
$argsCheck[>0;Write something to convert to **\`$commandName\`** text.] 
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]
$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})