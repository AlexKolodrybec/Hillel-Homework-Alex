const number = prompt("Введіть ціле число:");

function isPrime(num) {

    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

if (isPrime(number)) {
    console.log(`${number} є простим числом.`);
} else {
    console.log(`${number} не є простим числом.`);
}







