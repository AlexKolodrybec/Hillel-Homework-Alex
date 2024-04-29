function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

const array = [4234, 30, 41, 15, 20, 543];
removeElement(array, 30);
console.log(array);