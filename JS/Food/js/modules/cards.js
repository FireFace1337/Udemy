import {getResource} from '../services/services';

function cards() {
    // classes

class MenuCard {
    constructor (title, descr, price, src, alt, parrent, ...classes) {
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.src = src;
        this.alt = alt;
        this.exchange = 75;
        this.parrent = document.querySelector(parrent);
        this.classes = classes;
        this.changeToRUB();
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
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}"</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
        </div>
        `; 

    this.parrent.append(element);
    }
}

getResource('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({title, descr, price, img, altimg}) => {
            new MenuCard(title, descr, price, img, altimg, '.menu .container').render();
        });
    });

// const sueta = new Menu ('Меню "Sуета', 
// 'Что тут описывать то?', 
// 1000, null, 'suetaaaa', '.menu .container');
// sueta.render();
}

export default cards;