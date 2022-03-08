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

const deadLine = '2022-04-01';

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

modalTrigger.forEach(btn => {
    btn.addEventListener('click', function() {
        modal.classList.add('show');
        modal.classList.remove('hide');
    });
});

// modalCloseBtn.addEventListener('click', function() {
//         modal.classList.remove('show');
//         modal.classList.add('hide');
// });

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal();
    }
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
    constructor (title, desctiption, price, img, alt, parrent, ...classes) {
        this.title = title;
        this.desctiption = desctiption;
        this.price = price;
        this.img = img;
        this.alt = alt;
        this.exchange = 75;
        this.parrent = document.querySelector(parrent);
        this.changeToRUB();
        this.classes = classes;
    }

    changeToRUB() {
        this.price = this.price * this.exchange;
    }

    render() {
        const element = document.createElement('div');
        if (this.classes.length === 0) {
            element.classList.add('menu__item');
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }
        element.innerHTML = `
        <img src=${this.img} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}"</h3>
        <div class="menu__item-descr">${this.desctiption}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
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

// forms 

const forms = document.querySelectorAll('form');

const message = {
    success: 'Спасибо! Мы скоро с вами свяжемся!',
    loading: 'img/forms/spinner.svg',
    fail: 'Произошла ошибка'
};

forms.forEach(item => {
    postData(item);
});

function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;

        form.insertAdjacentElement('afterend', statusMessage);

        // const request = new XMLHttpRequest();
        // request.open('POST', 'server.php');
        
        // request.setRequestHeader('Content-type', 'application/json');
        const formData = new FormData(form);

        const object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });

        // const json = JSON.stringify(object);

        fetch('server.php', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(object)
        })
        .then(data => data.text())
        .then(data => {
            console.log(data);
            showThanksModal(message.success);
            form.reset();
            statusMessage.remove();
        }).catch(() => {
            showThanksModal(message.fail);
        }).finally(() => {
            form.reset();
        });

        // request.addEventListener('load', () => {
        //     if (request.status === 200) {
        //         console.log(request.response);
        //         showThanksModal(message.success);
        //         form.reset();
        //         statusMessage.remove();
        //     } else {
        //         showThanksModal(message.fail);
        //     }
        // });
    });
}

function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
    <div class="modal__content">
        <div class="modal__close" data-close>×</div>
        <div class="modal__title">${message}</div>
    </div>`;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.add('hide');
        closeModal();
    }, 4000);
}

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     body: JSON.stringify({name: 'Alex'}),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
//   .then(response => response.json())
//   .then(json => console.log(json));