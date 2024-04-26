let yearOfBirth = prompt('Ваш рік народження?');
let cityLives = prompt('В якому місті ви проживаєте?');
let sport = prompt('Ваш улюблений вид спорту?');

yearOfBirth = confirm("Шкода, що Ви не захотіли ввести свій рік народження")
cityLives = confirm("Шкода, що Ви не захотіли ввести своє місце проживання")
sport = confirm("Шкода, що Ви не захотіли ввести свій улюблений вид спорту")

const age = 2024 - yearOfBirth;

alert(`Ваш вік: ${age}`);

if (cityLives) {
    cityLives = cityLives.toLowerCase();
    switch (cityLives) {
       case "Київ":
        alert('Ти живеш у столиці України');
        break;

        case "Вашингтон":
        alert('Ти живеш у столиці США');
        break;

        case "Лондон":
        alert('Ти живеш у столиці Великобританії');
        break;

        default:
            alert(`Ти живеш у місті ${cityLives}`)
    }
};

if (sport) {
    sport = sport.toLowerCase();
    switch (sport) {
       case "Футбол":
        alert('Круто! Хочеш стати як Пеле?');
        break;

        case "Бокс":
        alert('Круто! Хочеш стати як Майкл Тайсон?');
        break;

        case "Баскетбол":
        alert('Круто! Хочеш стати як Майкл Джордан?');
        break;
}
}




