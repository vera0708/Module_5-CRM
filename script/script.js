'use strict';

const modalTitles = document.querySelectorAll('.modal__title');
console.log(modalTitles);

const productId = document.querySelector('.modal__title-id');
console.log(productId);

const modalCloseBtn = document.querySelector('.modal__close');
console.log(modalCloseBtn);

const modalForm = document.querySelector('.modal__form');
console.log(modalForm);

const discountCheckbox = modalForm.querySelector('.box-discount__input-check');
console.log(discountCheckbox);

// const discountTextField = modalForm.querySelector('.box-discount__input-discount');
// console.log(discountTextField);

const discountTextField = modalForm.querySelector('#discount');
console.log(discountTextField);

const totalPrice = modalForm.querySelector('.form__total-info__sum');
console.log(totalPrice);
