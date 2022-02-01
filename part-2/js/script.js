/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();

let promo = document.getElementsByClassName('promo__adv');
for (let i = 0; i < promo.length; i++) {
    promo[i].remove();
}

let promoGenre = document.getElementsByClassName('promo__genre');
promoGenre[0].innerHTML = 'Драма';

let promoBackground = document.getElementsByClassName('promo__bg');
promoBackground[0].style.background = 'url(../img/bg.jpg)';

let promoMovies = document.getElementsByClassName('promo__interactive-item');
// promoMovies.forEach((item, i) => {
//     item.innerHTML = `${i} фильм ${movieDB.movies[i]}`;
// });
for (let i = 0; i < promoMovies.length; i++) {
    promoMovies[i].innerHTML = (i + 1) + ' ' + movieDB.movies[i];
}
