function count() {
    let counter = 0; 

    return function() {
        counter++;
        console.log(counter);
    };
}

const counterPlus = count();

counterPlus(); 
counterPlus();
counterPlus();