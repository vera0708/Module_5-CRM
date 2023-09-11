import calculateTotalSum from "./utilities.js";
import { API_URL } from "./const.js";
import { createModalError } from "./createElements.js";

const fillForm = async (form, editingGood) => {
    const titleForm = document.querySelector('.modal__title');
    titleForm.textContent = 'Изменить товар';
    const idText = document.querySelector('.modal__title-text');
    idText.classList.remove('visually-hidden');
    idText.classList.add('is-visible');
    const id = document.querySelector('.modal__title-id');
    id.textContent = `${editingGood.id}`;

    form.title.value = editingGood.title;
    form.category.value = editingGood.category;
    form.description.value = editingGood.description;
    form.count.value = editingGood.count;
    form.discount.value = editingGood.discount;
    form.price.value = editingGood.price;
    form.units.value = editingGood.units;

    const nameInput = form.querySelector("input[name='count']");
    nameInput.value = editingGood.title;
    // all other fields 
}

/* <div class="modal__title-block">
    <h2 class="modal__title modal__title-add">Добавить товар</h2>
    <h2 class="modal__title modal__title-change visually-hidden">Изменить товар</h2>
    <p class="modal__title-text visually-hidden">id:<span class="modal__title-id">201910241</span> </p> 
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
 проверка есть ли discount
 if (editingGood.discount !== 0 && editingGood.discount !== "") {
    checkbox.setAttribute("checked", "");
    input.disabled = false;
*/

const editRow = async (form, table, closeModal) => {
    table.addEventListener('click', async (e) => {
        const target = e.target;
        const editCart = target.closest('.eighth-column_icon-edit');

        if (editCart) {
            const row = editCart.closest('.table__content-row');
            const id = row.querySelector('.table__content-column-first').textContent;
            const editingResponse = await fetch(`${API_URL}api/goods/${id}`);
            const editingGood = await editingResponse.json();

            fillForm(form, editingGood);
            const overlay = document.querySelector('.modal-overlay');
            overlay.classList.add('is-visible');
            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                try {
                    const response = await fetch(`${API_URL}api/goods`, {
                        method: 'PATCH',
                        body: JSON.stringify(editingGood)
                    });

                    alert(`Товар ${editingGood.title} успешно отредактирован`);
                    form.reset();
                    closeModal();

                    calculateTotalSum();
                } catch (error) {
                    alert('Произошла ошибка, статус ' + error.message);
                    createModalError();
                }
            });
        };
    });
};

export default editRow;