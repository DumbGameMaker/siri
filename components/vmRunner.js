module.exports = {
    vmRunner(input) {
        if(input.startsWith('err')) return `interaction.reply('error code ${input}');`;

    }
}