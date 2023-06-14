'use strict';

const goods = [
    {
        "id": 253842678,
        "title": "Смартфон Xiaomi 11T 8/128GB",
        "price": 27000,
        "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
        "category": "mobile-phone",
        "discont": false,
        "count": 3,
        "cost": 81000,
        "units": "шт",
        "images": {
            "small": "img/smrtxiaomi11t-m.jpg",
            "big": "img/smrtxiaomi11t-b.jpg"
        }
    },
    {
        "id": 937295527,
        "title": "Настольная игра “На 4-х ногах”",
        "price": 14,
        "description": "Настольная игра является хорошим подарком который используется всёй семьей. В процессе игры ее помощью вы сможете обеспечить хорошее настроение и времяпровождение с друзьями.",
        "category": "Настольные игры",
        "discont": false,
        "count": 12,
        "cost": 168,
        "units": "шт",
        "images": {
            "small": "img/lan_proconnect43-3-25.jpg",
            "big": "img/lan_proconnect43-3-25-b.jpg"
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
        "cost": 4000,
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
        "cost": 49600,
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
        "cost": 9240,
        "units": "v",
        "images": {
            "small": "img/lan_proconnect43-3-25.jpg",
            "big": "img/lan_proconnect43-3-25-b.jpg"
        }
    },
];

{
    const modal = document.querySelector('.modal');
    const modalForm = document.querySelector('.modal__form');
    const modalCloseBtn = document.querySelector('.modal__close');
    /*  const modalTitles = document.querySelectorAll('.modal__title');
        const productId = document.querySelector('.modal__title-id');
        const discountCheckbox = modalForm.querySelector('.box-discount__input-check');
        const discountTextField = modalForm.querySelector('#discount');
        const totalPrice = modalForm.querySelector('.form__total-info__sum');
    */
    const tableComplete = document.querySelector('.table__complete');
    console.log(tableComplete);
    const btnAddGood = document.querySelector('.table__button-submit');

    btnAddGood.addEventListener('click', () => {
        modal.classList.add('is-visible');
    });

    modal.addEventListener('click', (eve) => {
        const target = eve.target;
        if (target === modal ||
            target.closest('.modal__close')) {
            modal.classList.remove('is-visible');
        };
    });

    const createTh = (value, className) => {
        const th = document.createElement('th');
        console.log(value);
        th.className = className;
        th.textContent = value;
        return th;
    }

    const createTable = () => {
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
        const thPrice = createTd('Цена', 'table__content-column-sixth');
        const thCost = createTh('ИТОГ', 'table__content-column-seventh');
        const thIcons = createTh('', 'table__content-column-eighth');
        tr.append(thId, thTitle, thCategory, thUnits, thCount, thPrice, thCost, thIcons);

        thead.append(tr);

        const tbody = document.createElement('tbody');
        tbody.classList.add('table__content-body');
        table.append(thead, tbody);
        table.tbody = tbody;
        return table;
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
        const tdCategory = createTd(good.category, 'table__content-column-third');
        const tdUnits = createTd(good.units, 'table__content-column-fourth');
        const tdCount = createTd(good.count, 'table__content-column-fifth');
        const tdPrice = createTd(good.price, 'table__content-column-sixth');
        const tdCost = createTd(good.cost, 'table__content-column-seventh');

        const tdIcons = document.createElement('td');
        tdIcons.classList.add('table__content-column-eighth');
        const btnNoImg = document.createElement('button');
        btnNoImg.classList.add('eighth-column_icon', 'eighth-column_icon-no-img');
        const btnImg = document.createElement('button');
        btnImg.classList.add('eighth-column_icon', 'eighth-column_icon-img');
        const btnEdit = document.createElement('button');
        btnEdit.classList.add('eighth-column_icon', 'eighth-column_icon-edit');
        const btnDel = document.createElement('button');
        btnDel.classList.add('eighth-column_icon', 'eighth-column_icon-del');
        tdIcons.append(btnImg, btnEdit, btnDel);

        row.append(tdId, tdTitle, tdCategory, tdUnits, tdCount, tdPrice, tdCost, tdIcons,);
        return row;
    };

    const renderGoods = (table, goods) => {
        const allRow = goods.map(createRow);
        table.append(...allRow);
        return allRow;
    };

    const table = createTable();
    renderGoods(table, goods);

    tableComplete.after(table);
    // const allRow = renderGoods(table, goods);
    const btnDelGood = document.querySelectorAll('.eighth-column_icon-del');

    table.addEventListener('click', (e) => {
        const target = e.target;
        if (target.closest('.eighth-column_icon-del')) {
            target.closest('.table__content-row').remove();
        };
    });

    /*const init = (selectorApp) => {
        const app = document.querySelector(selectorApp);
           const modal = createModal();
    }
     window.goodShopInit = init;
    */
}