// Загрузка страницы
window.onload = function () {
    showData();
    showTime();
    showImg();
};

let showData = function () {
    let len = document.getElementById('list').getElementsByTagName('li').length; // Количество картинок
    let h1 = document.createElement('h1'); // Создаем элемент h1
    h1.innerHTML = 'В галереи всего ' + len + ' изображений. '; // Загружаем элемент h1 смыслом
    document.getElementById('section').insertAdjacentElement('beforebegin', h1); // Находим где вставить наш h1 и вставляем его 
};

let showTime = function () { // Функция для вывода времени
    // Опции времени
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timezone: 'UTC'
    };

    let h2 = document.createElement('h2'); //Создаем элемент h2
    h2.innerHTML = 'Местное время: ' + (new Date().toLocaleString("ua", options)) + '.'; // Загружаем элемент h2 смыслом
    document.getElementById('section').insertAdjacentElement('beforebegin', h2); // Находим где вставить наш h2 и вставляем его 
};


let block = document.createElement('div');

function showImg() { // Функция, которая находит все картинки, их путь. И при клике на картинку, открывается нужная.
    let item = document.querySelectorAll('.list-item');
    for (let i = 0; i < item.length; i++) {
        item[i].addEventListener('click', function () {
            const imgSrc = event.currentTarget.querySelector('img').getAttribute('src');
            block.innerHTML = '<img src=' + imgSrc + '>';
            document.getElementById('modalContent').insertAdjacentElement('afterbegin', block)
            showDetails()
        });
    }
};

let myMod = document.getElementById('myModal');

// Открыть модальное окно
function showDetails() {
    myMod.classList.add('open');
};

// Закрыть модальное окно
document.getElementById('close').addEventListener('click', (e) => {
    block.innerHTML = " ";
    myMod.classList.remove('open');
});