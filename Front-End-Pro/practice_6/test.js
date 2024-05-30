document.getElementById('slider').addEventListener('input', function() {
    const image = document.getElementById('image');
    const size = this.value;
    image.style.width = size + '10px';
});