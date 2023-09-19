import { addGoodPage, editGood, getCategory, postGood } from "./data.js";
import { renderEditingRow } from "./renders.js";
import { calculateTotalSum, toBase64 } from "./utilities.js";
import { createModalError } from "./createElements.js";
import { API_URL } from "./const.js";

export const openModal = (good = null) => {
    const overlay = document.querySelector('.modal-overlay');
    const form = document.querySelector('.form');

    if (good) {
        fillForm(good, form);
        adjustModalTexts(good, form);
    }

    overlay.classList.add('is-visible');

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
};

export const closeModal = () => {
    const overlay = document.querySelector('.modal-overlay');
    const form = document.querySelector('.form');
    overlay.classList.remove('is-visible');
    formReset(form);
    hidePreview();
};

const formReset = (form) => {
    form.reset();

    adjustForm(form);
};

export const formControl = (form, table) => {
    const formSum = form.querySelector('.main-table__total-info__sum');
    const priceAddedGood = form.querySelector("input[name='price']");
    const countAddedGood = form.querySelector("input[name='count']");
    const discountAddedGood = form.querySelector("input[name='discount']");
    updateCategory();

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

        if (newGood.image.size > 1000000) {
            console.log('image.size больше 1 Мб: ', newGood.image.size);
        } else if (newGood.image.size) {
            newGood.image = await toBase64(newGood.image);
        } else {
            delete newGood.image;
        }


        const editingId = form.querySelector('.modal__title-id').textContent?.trim();;

        try {
            if (editingId) {
                const receivedGood = await editGood(editingId, newGood);

                const rows = document.querySelectorAll('.table__content-row');

                rows.forEach(tr => {
                    const trId = tr.querySelector('.table__content-column-first')?.textContent?.trim();

                    if (trId === editingId) {
                        renderEditingRow(tr, receivedGood);
                    }
                });

                alert(`Товар ${receivedGood.title} успешно изменен`);
            } else {
                const receivedGood = await postGood(newGood);
                addGoodPage(receivedGood, table);
                alert(`Товар ${receivedGood.title} успешно добавлен в таблицу`);
            }

            calculateTotalSum();
            closeModal();
            updateCategory();
        } catch (error) {

            if (Number(error.message) === 422 || Number(error.message) === 404 || Math.round(Number(error.message) / 100) === 5) {
                alert('Произошла ошибка на сервере');
            } else {
                createModalError();
            }

        }
    });
};

const fillForm = (good, form) => {
    const { title,
        category,
        description,
        count,
        discount,
        price,
        units,
        image
    } = good;

    form.title.value = title;
    form.category.value = category;
    form.description.value = description;
    form.count.value = count;
    form.discount.value = discount;
    form.price.value = price;
    form.units.value = units;
    showPreview(`${API_URL}${image}`)
};

const adjustModalTexts = (editingGood, form) => {
    adjustForm(form, editingGood);
}

const adjustForm = (form, editingGood = null) => {
    const changeGood = 'Изменить товар';
    const createGood = 'Добавить товар';

    const texts = {
        title: !!editingGood ? changeGood : createGood,
        id: !!editingGood ? editingGood.id : '',
        // image:  ?   :   ,
    };

    const titleForm = document.querySelector('.modal__title');
    titleForm.textContent = texts.title;

    const idEdit = document.querySelector('.modal__title-id');
    idEdit.textContent = texts.id;

    const btnSubmitForm = form.querySelector('.table__button-submit');
    btnSubmitForm.textContent = texts.title;

    const idText = document.querySelector('.modal__title-text');

    if (!!editingGood) {
        idText.classList.remove('visually-hidden');
        idText.classList.add('is-visible');
    } else {
        idText.classList.add('visually-hidden');
        idText.classList.remove('is-visible');
    }
};
export const openModalControl = (overlay, btnOpenForm) => {
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
};

export const showPreview = (src) => {
    const preview = document.querySelector('.box__img-img');
    preview.style.display = 'block';
    preview.src = src;
};

export const hidePreview = () => {
    const preview = document.querySelector('.box__img-img');
    preview.style.display = '';
    preview.src = '';
};

export const previewImage = (form) => {
    // const imageFile = form.image;
    const imageFile = document.querySelector('[name="image"]');
    imageFile.addEventListener('change', async () => {
        console.log('imageFile.files: ', imageFile.files);
        if (imageFile.files.length) {
            console.log(imageFile.files[0]);
            /*  name: "unsplash_WHPsxhB4mWQ.png"
                size: 68219
                type: "image/png"
                webkitRelativePath: ""             */
            const src = await toBase64(imageFile.files[0]);
            showPreview(src);
        }
    });
};

const updateCategory = async () => {
    category.textContent = '';
    const categoryList = await getCategory();
    /*console.log('categoryList: ', categoryList);
     const categoryOption = categoryList.map(categ => {
         const option = document.createElement('option');
         option.value = categ;
         return option;
     });*/
    // category.append(...categoryOption);
};