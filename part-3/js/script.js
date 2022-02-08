// tabs

let tabs = document.querySelectorAll('.tabheader__item');
let tabsContent = document.querySelectorAll('.tabcontent');
let tabsParent = document.querySelector('.tabheader__items');

function hideTabsContent() {
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');
    });
}

function showTabsContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
}

hideTabsContent();
showTabsContent();

tabsParent.addEventListener('click', (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (item == event.target) {
                hideTabsContent();
                showTabsContent(i);
            }
        });
    }
});

// timer 

// console.log(Date.parse(new Date ()));
// console.log(new Date());

const deadLine = '2022-02-09';

    function getTimeRemaining(endTime) {
        let total = Date.parse(endTime) - Date.parse(new Date ());
        let days = Math.floor(total / (1000 * 60 * 60 * 24));
        let hours = Math.floor(total / (1000 * 60 * 60) % 24);
        let minutes = Math.floor(total / (1000 * 60) % 60);
        let seconds = Math.floor ((total / 1000) % 60);


        return {
            total: total,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    

    function setClock(selector, endTime) {
        let timer = document.querySelector(selector);
        let days = timer.querySelector('#days');
        let hours = timer.querySelector('#hours');
        let minutes = timer.querySelector('#minutes');
        let seconds = timer.querySelector('#seconds');
        let timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            let t = getTimeRemaining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadLine);


    // modal


let modalTrigger = document.querySelectorAll('[data-modal]');
let modal = document.querySelector('.modal');
let modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
    btn.addEventListener('click', function() {
        modal.classList.add('show');
        modal.classList.remove('hide');
    });
});

modalCloseBtn.addEventListener('click', function() {
        modal.classList.remove('show');
        modal.classList.add('hide');
});


function showModalByScroll() {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        modal.classList.add('show');
        modal.classList.remove('hide');
        window.removeEventListener('scroll', showModalByScroll);
    }
}

window.addEventListener('scroll', showModalByScroll);


// classes

class Menu {
    constructor (title, desctiption, price, img, alt, parrent) {
        this.title = title;
        this.desctiption = desctiption;
        this.price = price;
        this.img = img;
        this.alt = alt;
        this.exchange = 75;
        this.parrent = document.querySelector(parrent);
        this.changeToRUB();
    }

    changeToRUB() {
        this.price = this.price * this.exchange;
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = ` <div class="menu__item">
        <img src=${this.img} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}"</h3>
        <div class="menu__item-descr">${this.desctiption}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
        </div>
    </div>`; 

    this.parrent.append(element);
    }
}

const fitnes = new Menu('Меню "Фитнес', 
'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
3, 'img/tabs/vegy.jpg', 'vegy', '.menu .container');
fitnes.render();

const elite = new Menu('Меню “Премиум',
'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
7, 'img/tabs/elite.jpg', 'elite', '.menu .container');
elite.render();

const post = new Menu('Меню "Постное', 
'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
6, 'img/tabs/post.jpg', 'post', '.menu .container');
post.render();

// const sueta = new Menu ('Меню "Sуета', 
// 'Что тут описывать то?', 
// 1000, null, 'suetaaaa', '.menu .container');
// sueta.render();