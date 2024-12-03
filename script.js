"use strict";

/* localStorage.setItem('number', 5); // Сохраняет в localStorage значение 5 с ключом 'number'.

// localStorage.removeItem('number'); // Удаляет элемент с ключом 'number' из localStorage.
localStorage.clear(); // Очищает весь localStorage, удаляя все сохраненные данные.

console.log(localStorage.getItem('number')); // Пытается получить значение 'number' из localStorage (вернет null, так как все очищено). */

const checkbox = document.querySelector('#checkbox'), // Получаем элемент чекбокса с id 'checkbox'.
    form = document.querySelector('form'), // Получаем элемент формы.
    change = document.querySelector('#color'); // Получаем кнопку с id 'color'.

if (localStorage.getItem('isChecked')) { // Проверяем, есть ли в localStorage ключ 'isChecked'.
    checkbox.checked = true; // Если ключ есть, устанавливаем чекбокс в состояние "выбран".
}

if (localStorage.getItem('bg') === 'changed') { // Проверяем, есть ли ключ 'bg' и равно ли его значение 'changed'.
    form.style.backgroundColor = 'red'; // Если да, устанавливаем красный цвет фона формы.
}

checkbox.addEventListener('change', () => { // Добавляем обработчик события для изменения состояния чекбокса.
    localStorage.setItem('isChecked', true); // При изменении состояния чекбокса сохраняем ключ 'isChecked' в localStorage.
});

change.addEventListener('click', () => { // Добавляем обработчик события на кнопку с id 'color'.
    if (localStorage.getItem('bg') === 'changed') { // Если ключ 'bg' равен 'changed',
        localStorage.removeItem('bg'); // удаляем ключ из localStorage.
        form.style.backgroundColor = '#fff'; // Меняем фон формы на белый.
    } else { // Если ключа нет или он имеет другое значение,
        localStorage.setItem('bg', 'changed'); // сохраняем ключ 'bg' со значением 'changed'.
        form.style.backgroundColor = 'red'; // Устанавливаем фон формы красным.
    }
});

const person = { // Создаем объект person.
    name: 'Alex', // Свойство name со значением 'Alex'.
    age: 25 // Свойство age со значением 25.
};

const serializedPerson = JSON.stringify(person); // Сериализуем объект person в строку JSON.
localStorage.setItem('alex', serializedPerson); // Сохраняем сериализованный объект в localStorage с ключом 'alex'.

console.log(JSON.parse(localStorage.getItem('alex'))); // Получаем объект 'alex' из localStorage, парсим его обратно в объект и выводим в консоль.
