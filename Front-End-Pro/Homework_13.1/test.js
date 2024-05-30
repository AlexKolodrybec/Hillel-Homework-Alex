document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let isValid = true;

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    document.getElementById('nameError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('emailError').innerText = '';

    if (name.trim() === '') {
        document.getElementById('nameError').innerText = 'Необхідно вказати ім`я.';
        isValid = false;
    }

    if (message.trim().length < 5) {
        document.getElementById('messageError').innerText = 'Повідомлення має бути не менше 5 символів.';
        isValid = false;
    }

    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').innerText = 'Номер телефону повинен починатися з +380 і містити 9 цифр.';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Невірна адреса електронної пошти.';
        isValid = false;
    }

    if (isValid) {
        console.log('Name:', name);
        console.log('Message:', message);
        console.log('Phone:', phone);
        console.log('Email:', email);
    }
});