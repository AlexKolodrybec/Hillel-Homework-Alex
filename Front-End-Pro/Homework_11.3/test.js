document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('randomImageButton');
    const img = document.getElementById('randomImage');

    const images = [
        '01.jpg',
        '02.jpg',
        '03.jpg',
        '04.jpg',
        '05.jpg',
        '06.jpg',
        '07.jpg',
        '08.jpg',
        '09.jpg',
        '10.jpg'
    ];

    button.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        const selectedImage = images[randomIndex];
        img.src = `images/${selectedImage}`;
    });
});