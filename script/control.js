import { addGoodPage, getData } from "./data.js";
import calculateTotalSum from "./utilities.js";
import { API_URL } from "./const.js";
import { createModalError } from "./createElements.js";

export const formControl = (form, table, closeModal) => {
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

        try {
            const response = await fetch(`${API_URL}api/goods`, {
                method: 'POST',
                body: JSON.stringify(newGood),
            });

            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.status);
            }

            const receivedGood = await response.json();

            const data = await getData();
            calculateTotalSum(data);
            addGoodPage(receivedGood, table);
            closeModal();
            alert(`Товар ${receivedGood.title} успешно добавлен в таблицу`);
            form.reset();

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

export const modalControl = (btnOpenForm, overlay) => {
    const openModal = () => {
        console.log('overlay из openModal', overlay)
        overlay.classList.add('is-visible');
    }

    const closeModal = () => {
        overlay.classList.remove('is-visible');
    }

    btnOpenForm.addEventListener('click', () => {
        openModal();
    });

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