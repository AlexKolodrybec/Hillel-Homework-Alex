let url = '';

    function enterUrl() {
        url = prompt('Введіть посилання:');
    }
    
    function redirectToUrl() {
        if (url) {
            window.location.href = url;
        } else {
            alert('Спочатку введіть посилання.');
        }
    }