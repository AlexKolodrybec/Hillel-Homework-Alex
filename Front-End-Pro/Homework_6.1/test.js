function removeCharacters(message, charsToRemove) {
    let regex = new RegExp(charsToRemove.join('|'), 'g');
    return message.replace(regex, '');
}

let message = " hello world";
let charsToRemove = ['l', 'd'];

let result = removeCharacters(str, charsToRemove);
console.log(result);