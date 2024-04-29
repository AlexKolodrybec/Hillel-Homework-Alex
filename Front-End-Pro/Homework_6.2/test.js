function calcAVG(array) {
    let sum = 0;
    let count = 0;

    for (let element of array) {
        if (typeof element === 'number') {
            sum += element;
            count++;
        }
    }

    if (count > 0) {
        return sum / count;
    } 
}

const array = [55, '2', 100, 'four', 60];
const avg = calcAVG(array);
console.log(avg);