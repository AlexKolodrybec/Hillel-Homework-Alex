document.addEventListener('DOMContentLoaded', (event) => {
    const text = document.getElementById('text');
    const button = document.getElementById('colorButton');

    let isColored = false;

    button.addEventListener('click', () => {
        if (isColored) {
            text.style.color = 'black';
        } else {
            text.style.color = 'orange';
        }
        isColored = !isColored;
    });
});