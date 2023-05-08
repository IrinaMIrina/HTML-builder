const {stdin, stdout} = process;
const fs = require('fs');
const path = require('path');

const recording  =fs.createWriteStream(path.join(__dirname, 'yourtext.txt'), 'utf-8');

stdout.write ('Привет, студент! Введите Ваш текст:')
stdin.on('data', data => {
    const greeting = data.toString();
    recording.write(`\nВаш введенный текст - "${greeting}"`);
    process.exit();
})