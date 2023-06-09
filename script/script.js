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

const getGoods = async () => {
    const res = await fetch('/goods.json');
    const data = await res.json();

    return data;
};

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

const renderGoods = async () => {
    const goods = await getGoods();

    for (let i = 0; i < goods.length; i++) {
        const row = createRow(goods[i]);
        console.log(row);

        table.append(row);
    };
};
renderGoods();
