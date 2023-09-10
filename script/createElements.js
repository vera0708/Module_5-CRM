export const createMain = () => {
    const main = document.createElement('div');
    main.classList.add('main-table');
    const container = document.createElement('div');
    container.classList.add('main-table__container');
    main.append(container);
    main.container = container;
    return main;
};

export const createUpperLine = () => {
    const upperLine = document.createElement('div');
    upperLine.classList.add('main-table__first-line');
    const h2 = document.createElement('h2');
    h2.classList.add('main-table__title');
    h2.textContent = 'CMS';

    const totalInfo = document.createElement('div');
    totalInfo.classList.add('main-table__total-info');

    const pText = document.createElement('p');
    pText.classList.add('main-table_total-info__text');
    pText.textContent = 'Итоговая стоимость:';
    const pSum = document.createElement('p');
    pSum.classList.add('main-table__total-info__sum');
    pSum.textContent = '$ 900.00';

    totalInfo.append(pText, pSum);

    upperLine.append(h2, totalInfo);
    return upperLine;
};

export const createTableBody = () => {
    const tableBody = document.createElement('div');
    tableBody.classList.add('table', 'main-table__table');
    return tableBody;
};

export const createTableComplete = () => {
    const tableComplete = document.createElement('div');
    tableComplete.classList.add('table__complete');
    const tableSearch = document.createElement('div');
    tableSearch.classList.add('table__complete-seeking');
    tableSearch.insertAdjacentHTML('beforeend', `
        <button class="table__button-filter">Фильтр</button>
            <label class="table__label">
                <input class="table__input-search" type="text" name="search">
                <span class="table__input-text">Поиск по наименованию и категории</span>
            </label>     
        `);
    const btnOpenForm = document.createElement('button');
    btnOpenForm.classList.add('table__button-submit');
    btnOpenForm.textContent = 'Добавить товар';

    tableComplete.append(tableSearch, btnOpenForm);

    return {
        tableComplete,
        btnOpenForm,
    };
};

export const createTh = (value, className) => {
    const th = document.createElement('th');
    th.className = className;
    th.textContent = value;
    return th;
}

export const createTable = () => {
    const table = document.createElement('table');
    table.classList.add('table__content');

    const thead = document.createElement('thead');
    thead.classList.add('table__content-head');

    const tr = document.createElement('tr');
    tr.className = 'table__content-row';

    const thId = createTh('ID', 'table__content-column-first');
    const thTitle = createTh('Наименование', 'table__content-column-second');
    const thCategory = createTh('Категория', 'table__content-column-third');
    const thUnits = createTh('Ед/изм', 'table__content-column-fourth');
    const thCount = createTh('Количество', 'table__content-column-fifth');
    const thPrice = createTh('Цена', 'table__content-column-sixth');
    const thCost = createTh('ИТОГ', 'table__content-column-seventh');
    const thIcons = createTh('', 'table__content-column-eighth');
    tr.append(thId, thTitle, thCategory, thUnits, thCount, thPrice, thCost, thIcons);

    thead.append(tr);

    const tbody = document.createElement('tbody');
    tbody.classList.add('table__content-body');
    table.append(thead, tbody);
    table.tbody = tbody;
    table.thead = thead;

    return table;
};

export const createTd = (value, className) => {
    const td = document.createElement('td');
    td.className = className;
    td.textContent = value;
    return td;
}

export const createRow = (good) => {
    const row = document.createElement('tr');
    row.className = 'table__content-row';

    const tdId = createTd(good.id, 'table__content-column-first');
    const tdTitle = createTd(good.title, 'table__content-column-second');
    const tdCategory = createTd(good.category, 'table__content-column-third');
    const tdUnits = createTd(good.units, 'table__content-column-fourth');
    const tdCount = createTd(good.count, 'table__content-column-fifth');
    const tdPrice = createTd(good.price, 'table__content-column-sixth');

    const tdCost = document.createElement('td');
    tdCost.classList.add('table__content-column-seventh');
    tdCost.textContent = `${good.count * good.price}`.toLocaleString('ru');

    const tdIcons = document.createElement('td');
    tdIcons.classList.add('table__content-column-eighth');
    const btnNoImg = document.createElement('button');
    btnNoImg.classList.add('eighth-column_icon', 'eighth-column_icon-no-img');
    const btnImg = document.createElement('button');
    btnImg.classList.add('eighth-column_icon', 'eighth-column_icon-img');
    btnImg.dataset.pic = 'img/телефон-Xiomi.jpg';
    const btnEdit = document.createElement('button');
    btnEdit.classList.add('eighth-column_icon', 'eighth-column_icon-edit');
    const btnDel = document.createElement('button');
    btnDel.classList.add('eighth-column_icon', 'eighth-column_icon-del');
    tdIcons.append(btnImg, btnEdit, btnDel);

    row.append(tdId, tdTitle, tdCategory, tdUnits, tdCount, tdPrice, tdCost, tdIcons,);

    return row;
};

export const createFooter = () => {
    const footer = document.createElement('div');
    footer.classList.add('main-table__footer', 'footer');
    const container = document.createElement('div');
    container.classList.add('footer__container');

    const footerShowPage = document.createElement('div');
    footerShowPage.classList.add('footer__show-page');
    footerShowPage.insertAdjacentHTML('beforeend', `
        <p class="footer__show-page__text">Показывать на странице:</p>
            <button class="footer__show-page__number">10</button>   
        `);
    const footerPageInfo = document.createElement('div');
    footerPageInfo.classList.add('footer__pages-info');
    footerPageInfo.insertAdjacentHTML('beforeend', `1-10 of 276`);

    const footerBtnGroup = document.createElement('div');
    footerBtnGroup.classList.add('footer__button');
    const btnBack = document.createElement('button');
    btnBack.classList.add('footer__button-back');
    btnBack.innerHTML = `<svg width="6" height="10" viewBox="0 0 6 10" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.79971 1.10636C6.42812 0.51287 5.43313 -0.426818 4.80472 0.216126L0.196378 4.51891C-0.0654595 4.7662 -0.0654595 5.21131 0.196378 5.4586L4.80472 9.81084C5.43313 10.4043 6.42812 9.46464 5.79971 8.87115L1.71504 5.01348L5.79971 1.10636Z" />
                </svg>`;
    const btnHead = document.createElement('button');
    btnHead.classList.add('footer__button-head');
    btnHead.innerHTML = `<svg width="6" height="10" viewBox="0 0 6 10" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                     <path d="M5.79971 1.10636C6.42812 0.51287 5.43313 -0.426818 4.80472 0.216126L0.196378 4.51891C-0.0654595 4.7662 -0.0654595 5.21131 0.196378 5.4586L4.80472 9.81084C5.43313 10.4043 6.42812 9.46464 5.79971 8.87115L1.71504 5.01348L5.79971 1.10636Z" />
                 </svg>`;
    footerBtnGroup.append(btnBack, btnHead);
    container.append(footerShowPage, footerPageInfo, footerBtnGroup);
    footer.append(container);
    // footer.container = container;
    return footer;
};

export const createForm = () => {
    const overlay = document.createElement('div');
    overlay.classList.add('modal', 'modal-overlay');

    const form = document.createElement('form');
    form.classList.add('form', 'modal__form');
    form.insertAdjacentHTML('beforeend', `
            <div class="modal__title-block">
                <h2 class="modal__title modal__title-add  visually-hidden">Добавить товар</h2>
                <h2 class="modal__title modal__title-change">Изменить товар</h2>
                <p class="modal__title-text">id:<span class="modal__title-id">201910241</span> </p>
            </div>
            <fieldset class="form__box box">
                <label class="box__label box__label-name">
                    <span class="box__span">Наименование</span>
                    <input class="box__input" type="text" name="title" required>
                </label>
                <label class="box__label box__label-category">
                    <span class="box__span">Категория</span>
                    <input class="box__input" type="text" name="category" required>
                </label>

                <label class="box__label box__label-units">
                    <span class="box__span">Единицы измерения</span>
                    <input class="box__input" type="text" name="units">
                </label>

                <fieldset class="box__fieldset-discount">
                    <label class="box__label box__label-discount" for="discount"></label>
                    <span class="box__span">Дисконт</span>
                    <div class="box-discount">
                        <input class="box__input box-discount__input-check" type="checkbox" id="agree" name="agree" 
                            aria-label="Добавить скидку">
                        <input class="box__input box-discount__input-discount" type="number" name="discount"
                            id="discount" disabled>
                    </div>
                </fieldset>

                <label class="box__label box__label-description">
                    <span class="box__span">Описание</span>
                    <textarea class="box__text" name="description"></textarea>
                </label>
                <label class="box__label box__label-count">
                    <span class="box__span">Количество</span>
                    <input class=" box__input" type="number" name="count">
                </label>
                <label class="box__label box__label-price">
                    <span class="box__span">Цена</span>
                    <input class="box__input" type="number" name="price">
                </label>
                <div class="box__img-notice">
                    <p class="form__img-notice__text">Изображение не должно превышать размер 1 Мб</p>
                </div>
                <label class="box__label-img">
                    <span class="box__label-img-span">Добавить изображение</span>
                    <input class="box__file visually-hidden" type="file" name="file" accept="image/jpg">
                </label>
                <div class="box__img">
                    <img class="box__img-img visually-hidden" src="./img/modal-img.jpg" alt="Изображение товара">
                    <img class="box__img-no-img">
                </div>
            </fieldset>
        `);

    const btnClose = document.createElement('button');
    btnClose.classList.add('modal__close');
    btnClose.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L22 22" stroke="#6E6893" stroke-width="3" stroke-linecap="round" />
                    <path d="M2 22L22 2" stroke="#6E6893" stroke-width="3" stroke-linecap="round" />
                </svg>`;

    const totalForm = document.createElement('div');
    totalForm.classList.add('form__total');

    const totalFormInfo = document.createElement('div');
    totalFormInfo.classList.add('main-table__total-info');
    const formText = document.createElement('p');
    formText.classList.add('main-table_total-info__text');
    formText.textContent = 'Итоговая стоимость:';
    const formSum = document.createElement('p');
    formSum.classList.add('main-table__total-info__sum');
    formSum.textContent = `$ 0`;

    totalFormInfo.append(formText, formSum);
    const btnAddGood = document.createElement('button');
    btnAddGood.classList.add('table__button-submit');
    btnAddGood.textContent = 'Добавить товар';
    btnAddGood.type = 'submit';

    totalForm.append(totalFormInfo, btnAddGood);
    form.append(btnClose, totalForm);
    overlay.append(form);

    return {
        overlay, form
    }
};

export const createModalError = () => {
    const overlay = document.createElement('div');
    overlay.classList.add('modal', 'modal-overlay');
    const modalError = document.createElement('div');
    modalError.classList.add('modal-error');
    modalError.insertAdjacentHTML('beforeend', `
         <svg class="modal-error__img" width="94" height="94" viewBox="0 0 94 94" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L92 92" stroke="#D80101" stroke-width="3" stroke-linecap="round" />
                <path d="M2 92L92 2" stroke="#D80101" stroke-width="3" stroke-linecap="round" />
            </svg>
            <p class="modal-error__text">Что-то пошло не так</p>
        `);
    const btnErrorClose = document.createElement('button');
    btnErrorClose.classList.add('modal-error__close');
    btnErrorClose.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L22 22" stroke="#6E6893" stroke-width="3" stroke-linecap="round" />
                    <path d="M2 22L22 2" stroke="#6E6893" stroke-width="3" stroke-linecap="round" />
                </svg>`;
    btnErrorClose.type = 'button';

    modalError.append(btnErrorClose);
    overlay.append(modalError);
}