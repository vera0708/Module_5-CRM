'use strict';

const modalTitles = document.querySelectorAll('.modal__title');

const productId = document.querySelector('.modal__title-id');
// console.log(productId);

const modalCloseBtn = document.querySelector('.modal__close');
// console.log(modalCloseBtn);

const modalForm = document.querySelector('.modal__form');

const discountCheckbox = modalForm.querySelector('.box-discount__input-check');

const discountTextField = modalForm.querySelector('#discount');
// console.log(discountTextField);

const totalPrice = modalForm.querySelector('.form__total-info__sum');

const table = document.querySelector('.table__content-body');

const tableRow = document.querySelectorAll('.table__content-row');
console.log(tableRow);

const tableColumn = document.querySelectorAll('.table__content-column');
console.log(tableColumn);


const createRow = (classElem) => {
    goods.forEach(element => {

    });
    const listRow = createElement('tr', {
        className: 'table__content-row',
    });
    const listitem = createElement('td', {
        className: classElem,
    });
    listRow.append(listitem);
}


{/* <tr class="table__content-row">
    <td class="table__content-column table__content-column-first">246016548</td>
                            <td class="table__content-column table__content-column-second">Навигационная система
                                Soundmax</td>
                            <td class="table__content-column table__content-column-third">Техника для дома</td>
                            <td class="table__content-column table__content-column-fourth">шт</td>
                            <td class="table__content-column table__content-column-fifth">5</td>
                            <td class="table__content-column table__content-column-sixth">$100</td>
                            <td class="table__content-column table__content-column-seventh">$500</td>
                            <td class="table__content-column table__content-column-eighth">
                                <button class="eighth-column_icon eighth-column_icon-img"></button>
                                <button class="eighth-column_icon eighth-column_icon-edit"></button>
                                <button class="eighth-column_icon eighth-column_icon-del"></button>
                            </td>
</tr> */}

/*const tr = document.createElement("tr");
  tr.classList.add("list-product__tr");
  tr.dataset.pic = image;
  tr.dataset.id = id;
  tr.insertAdjacentHTML(
    "afterbegin",
    `
      <td class=list-product__td>${id}</td>
      <td class=list-product__td>${title}</td>
      <td class=list-product__td>${category}</td>
*/