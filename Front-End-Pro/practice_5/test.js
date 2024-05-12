function sum() {
    let numbers = [];

    do {
        let userInput = prompt('Введіть число');

        if (userInput === '' || userInput === null || isNaN(userInput)) {
            break;
        }

        numbers.push(+userInput);
    } while(true)

    let sum = numbers.reduce(function(total, current) {
        return total + current;
    }, 0);

    return sum;
}

console.log(sum());