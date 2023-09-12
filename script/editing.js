import calculateTotalSum from "./utilities.js";
import { API_URL } from "./const.js";
import { createModalError } from "./createElements.js";
import { editGood } from "./data.js";

const fillForm = async (form, editingGood) => {
    const titleForm = document.querySelector('.modal__title');
    titleForm.textContent = 'Изменить товар';
    const idText = document.querySelector('.modal__title-text');
    idText.classList.remove('visually-hidden');
    idText.classList.add('is-visible');
    const id = document.querySelector('.modal__title-id');
    id.textContent = `${editingGood.id}`;
    const btnSubmitForm = form.querySelector('.table__button-submit');
    console.log(btnSubmitForm);
    btnSubmitForm.textContent = 'Изменить товар';

    form.title.value = editingGood.title;
    form.category.value = editingGood.category;
    form.description.value = editingGood.description;
    form.count.value = editingGood.count;
    form.discount.value = editingGood.discount;
    form.price.value = editingGood.price;
    form.units.value = editingGood.units;
}

const editRow = async (form, table, closeModal) => {
    table.addEventListener('click', async (e) => {
        const target = e.target;
        const editCart = target.closest('.eighth-column_icon-edit');
        if (editCart) {
            const row = editCart.closest('.table__content-row');
            const id = row.querySelector('.table__content-column-first').textContent;

            const editingResponse = await fetch(`${API_URL}api/goods/${id}`);
            const editingGood = await editingResponse.json();
            const editingGoodId = editingGood.id;

            fillForm(form, editingGood);

            const overlay = document.querySelector('.modal-overlay');
            overlay.classList.add('is-visible');

            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                try {
                    editGood(editingGood);
                    console.log(`Товар ${editingGood.title} успешно отредактирован`);
                    const data = await getData();
                    calculateTotalSum(data);
                    overlay.classList.remove('is-visible');
                    form.reset();
                } catch (error) {
                    alert('Произошла ошибка, статус ' + error.message);
                    createModalError();
                }
            });
        };
    });
};

export default editRow;