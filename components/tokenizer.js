module.exports = {
    tokenizer (input) {
        /* preface */
        let parsedInput;
        let _currentToken;
        let parsedOutput;
        let argRegex = /((^|)[a-zA-Z0-9]*($| ))|('[a-zA-Z0-9 ]*')/gm;
        /* stepone */
        parsedInput = input.split(';');
        if(parsedInput.length > 50) return 'erra';
        if(parsedInput.length < 1) return 'errb';

        /* stepdos */
        parsedInput.forEach((e)=>{
            _currentToken = e.trim().split(' ');
            parsedOutput = _currentToken[0];
            if(_currentToken[1])parsedOutput = parsedOutput.replace('%1', _currentToken[1])
            if(_currentToken[2])parsedOutput = parsedOutput.replace('%2', _currentToken[2]);
        });
        return parsedOutput;

    },
    tokens: {
        'nop': ';',
        'let': 'let %1 %2',
        'ieq': 'if(%1 == %2){',
        'igt': 'if(%1 > %2){',
        'ilt': 'if(%1 < %2){',
        'for': 'for(_FORVAR = 0; _FORVAR <= %1; _FORVAR++){',
        'snd': 'interaction.reply("%1");',
        'chn': ';',
        'get': ';',
        'ebk': '}'


    }
}