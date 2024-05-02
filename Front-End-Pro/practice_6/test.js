let numbers = [1, 2, 3, 4, 5];

function addToArr(arr, num) {
    arr.push(num);
}

let newNumber = 6;
addToArr(numbers, newNumber);

console.log(numbers);