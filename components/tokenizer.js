module.exports = {
    tokenizer (input, interaction) {
        /* preface */
        let parsedInput;
        let _currentToken;
        let parsedOutput = '(async()=>{';
        let argRegex = /"[^"]+"|[\w]+/g;
        /* stepone */
        parsedInput = input.split(';');

        if(parsedInput.length > 50) return 'erra';
        if(parsedInput.length < 1) return 'errb';

        /* stepdos */
        console.log(parsedInput);
        parsedInput.forEach((e)=>{
            if(!e)return;
            console.log(e);
            _currentToken = e.trim().match(argRegex);
            console.log(_currentToken);
            parsedOutput += this.tokens[_currentToken[0]];
            if(_currentToken[1])parsedOutput = parsedOutput.replace('%1', _currentToken[1]);
            if(_currentToken[2])parsedOutput = parsedOutput.replace('%2', _currentToken[2]);
        });
        /* steptre */
        try {
            let e = interaction;
            console.log(e);
            let a = (async()=>{eval(parsedOutput + "})()")})();
        }catch (e) {
            console.log(e);

            return 'errc'
        }
        return a | parsedOutput;

    },
    tokens: {
        'nop': ';',
        'let': 'let %1 = %2;',
        'ieq': 'if(%1 == %2){',
        'igt': 'if(%1 > %2){',
        'ilt': 'if(%1 < %2){',
        'for': 'for(_FORVAR = 0; _FORVAR <= %1; _FORVAR++){',
        'rpl': 'await e.reply(%1);',
        'chn': ';',
        'get': ';',
        'ebk': '}',
        'def': 'await e.deferReply();',
        'fup': 'await e.followUp(%1);',
        'stp': 'return;',
        'snd': 'await e.channel.send(%1);'


    }
}