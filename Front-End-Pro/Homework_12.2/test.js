document.getElementById('buttonContainer').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        alert('Клікнуто по кнопці: ' + event.target.innerText);
    }
});