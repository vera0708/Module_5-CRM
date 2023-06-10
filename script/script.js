'use strict';
/*
const modalTitles = document.querySelectorAll('.modal__title');

const productId = document.querySelector('.modal__title-id');

const modalCloseBtn = document.querySelector('.modal__close');

const modalForm = document.querySelector('.modal__form');

const discountCheckbox = modalForm.querySelector('.box-discount__input-check');

const discountTextField = modalForm.querySelector('#discount');

const totalPrice = modalForm.querySelector('.form__total-info__sum');
*/

const table = document.querySelector('.table__content-body');

/*const getGoods = async () => {
    const res = await fetch('/goods.json');
    const data = await res.json();

    return data;
};*/

const goods = [
    {
        "id": 253842678,
        "title": "Смартфон Xiaomi 11T 8/128GB",
        "price": 27000,
        "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
        "category": "mobile-phone",
        "discont": false,
        "count": 3,
        "units": "шт",
        "images": {
            "small": "img/smrtxiaomi11t-m.jpg",
            "big": "img/smrtxiaomi11t-b.jpg"
        }
    },
    {
        "id": 296378448,
        "title": "Радиоуправляемый автомобиль Cheetan",
        "price": 4000,
        "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
        "category": "toys",
        "discont": 5,
        "count": 1,
        "units": "шт",
        "images": {
            "small": "img/cheetancar-m.jpg",
            "big": "img/cheetancar-b.jpg"
        }
    },
    {
        "id": 215796548,
        "title": "ТВ приставка MECOOL KI",
        "price": 12400,
        "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
        "category": "tv-box",
        "discont": 15,
        "count": 4,
        "units": "шт",
        "images": {
            "small": "img/tvboxmecool-m.jpg",
            "big": "img/tvboxmecool-b.jpg"
        }
    },
    {
        "id": 246258248,
        "title": "Витая пара PROConnect 01-0043-3-25",
        "price": 22,
        "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
        "category": "cables",
        "discont": false,
        "count": 420,
        "units": "v",
        "images": {
            "small": "img/lan_proconnect43-3-25.jpg",
            "big": "img/lan_proconnect43-3-25-b.jpg"
        }
    }
]

const createTd = (value, className) => {
    const td = document.createElement('td');
    td.className = className;
    td.textContent = value;

    return td;
}

const createRow = (good) => {
    const row = document.createElement('tr');
    row.className = 'table__content-row';

    const tdId = createTd(good.id, 'table__content-column-first');
    const tdTitle = createTd(good.title, 'table__content-column-second');
    const tdPrice = createTd(good.price, 'table__content-column-sixth');
    const tdDescription = createTd(good.description, 'table__content-column-third');
    const tdCategory = createTd(good.category, 'table__content-column-third');
    const tdDiscont = createTd(good.discont, 'table__content-column-fifth');
    const tdCount = createTd(good.count, 'table__content-column-fifth');
    const tdUnits = createTd(good.units, 'table__content-column-fourth');
    const tdImageSmall = createTd(good.images.small, 'box__img-img');
    const tdImageBig = createTd(good.images.big, 'box__img-img');

    row.append(tdId, tdTitle, tdPrice, tdDescription, tdCategory, tdDiscont, tdCount, tdUnits, tdImageSmall, tdImageBig);
    return row;
};

const renderGoods = (table, goods) => {
    const allRow = goods.map(createRow);
    table.append(...allRow);
    return allRow;
}

const allRow = renderGoods(table, goods);

// const renderGoods = async () => {
//     const goods = await getGoods();
//     for (let i = 0; i < goods.length; i++) {
//         const row = createRow(goods[i]);
//         console.log(row);
//         table.append(row);
//     };
// };
// renderGoods();
