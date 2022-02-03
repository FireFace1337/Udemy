/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
    
    let promoMovies = document.querySelector('.promo__interactive-list');
    

    
    let addForm = document.querySelector('form.add');
    let addInput = addForm.querySelector('.adding__input');
    let checkBox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value;
        let check = checkBox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (check) {
                console.log(`Добавляем любимый фильм ${newFilm}`);
            }
        movieDB.movies.push(newFilm);
        movieDB.movies.sort();
        createMovieList();
        }
      
        event.target.reset();
    });
    


    function createMovieList() {
        promoMovies.innerHTML = "";
        movieDB.movies.forEach((film, i) => {
            promoMovies.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
    }

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        });
    });




    // let btn = document.querySelector('button');
    // btn.addEventListener('click', () => {
    //     alert('Click')
    // });
});

