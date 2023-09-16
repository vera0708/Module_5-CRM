import { addGoodPage, getData, postGood } from "./data.js";
import { renderEditingRow } from "./renders.js";
import { calculateTotalSum } from "./utilities.js";
import { createModalError } from "./createElements.js";

const openModal = (editingGood) => {
    const overlay = document.querySelector('.modal-overlay');
    const form = document.querySelector('.form');
    if (editingGood) {
        fillForm(form, editingGood);
    }
    overlay.classList.add('is-visible');
};

export const closeModal = () => {
    const overlay = document.querySelector('.modal-overlay');
    const form = document.querySelector('.form');
    overlay.classList.remove('is-visible');
    form.reset();
};

export const formControl = (form, table) => {
    const formSum = form.querySelector('.main-table__total-info__sum');
    const priceAddedGood = form.querySelector("input[name='price']");
    const countAddedGood = form.querySelector("input[name='count']");
    const discountAddedGood = form.querySelector("input[name='discount']");

    priceAddedGood.addEventListener('input', () => {
        sumGoodSum();
    });

    countAddedGood.addEventListener('blur', () => {
        sumGoodSum();
    });

    discountAddedGood.addEventListener('blur', () => {
        sumGoodSum();
    });

    const sumGoodSum = () => {
        if (countAddedGood.value === '' || priceAddedGood.value === '') {
            return;
        }
        let sum = priceAddedGood.value * countAddedGood.value;

        if (discountAddedGood !== '') {
            sum -= discountAddedGood.value;
        };

        formSum.textContent = sum.toLocaleString('ru');
        if (sum < 0 || sum === undefined) {
            alert('Проверьте введённые данные');
            return;
        }
        return formSum.textContent;
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newGood = Object.fromEntries(formData);
        console.log('newGood: ', newGood);

        if (form.title.textContent === 'Изменить товар') {
            //  ТАК И НЕ ПОНИМАЮ, ЧТО ДЕЛАТЬ
            renderEditingRow(row, editingGood);
            alert(`Товар ${receivedGood.title} успешно изменен`);
        } else {
            const receivedGood = await postGood(newGood);
            addGoodPage(receivedGood, table);
            alert(`Товар ${receivedGood.title} успешно добавлен в таблицу`);
        }

        try {
            calculateTotalSum();
            closeModal();

        } catch (error) {
            // if (errors.message === 422 || errors.message === 404 || Math.round(errors.message / 100) === 5) {
            //     alert('Произошла ошибка на сервере, статус ' + errors.message);
            // } else {
            console.log(`Ошибка- ${error.message}`, error);
            createModalError();
            // }
        }
    });
};

const fillForm = async (form, editingGood) => {
    const { title, category, description, count, discount, price, units } = await getData(editingGood.id);
    form.title.value = title;
    form.category.value = category;
    form.description.value = description;
    form.count.value = count;
    form.discount.value = discount;
    form.price.value = price;
    form.units.value = units;
};

export const modalControl = (overlay, form, btnOpenForm, editingGood) => {
    const btnAddGood = document.querySelector('.table__button-submit');

    if (btnAddGood === btnOpenForm) {
        btnOpenForm.addEventListener('click', () => {
            openModal();
        });
    } else {
        const titleForm = document.querySelector('.modal__title');
        titleForm.textContent = 'Изменить товар';
        const idText = document.querySelector('.modal__title-text');
        idText.classList.remove('visually-hidden');
        idText.classList.add('is-visible');
        const idEdit = document.querySelector('.modal__title-id');
        idEdit.textContent = `${editingGood.id}`;
        const btnSubmitForm = form.querySelector('.form__button');
        console.log(btnSubmitForm);
        btnSubmitForm.textContent = 'Изменить товар';
        openModal(editingGood);
    }

    overlay.addEventListener('click', (e) => {
        const target = e.target;
        if (target === overlay ||
            target.closest('.modal__close')) {
            closeModal();
        };
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal();
        };
    });

    const isChecked = () => {
        const agreed = document.getElementById('agree');
        const input = document.getElementById('discount');
        agreed.addEventListener('click', e => {
            if (!agreed.checked) {
                input.disabled = true;
                input.value = '';
            } else {
                input.disabled = false;
                input.focus();
            }
        });
    };
    isChecked();

    return {
        closeModal,
    }
};

export const openBtnImg = (table) => {
    table.addEventListener('click', (e) => {
        const target = e.target;
        const btnImg = target.closest('.eighth-column_icon-img');
        if (btnImg) {
            let goodImg = btnImg.dataset.pic;
            console.log('goodImg: ', goodImg);
            goodImg = open('img/телефон-Xiomi.jpg', '', 'width=600, height=600');
            goodImg.moveTo(screen.width / 2 - 300, screen.height / 2 - 300);
        };
    });
};