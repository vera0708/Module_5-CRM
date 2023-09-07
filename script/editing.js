import calculateTotalSum from "./utilities.js";
import { API_URL } from "./const.js";
import { createModalError } from "./createElements.js";

const sendData = (body, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${API_URL}api/goods`);

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.addEventListener('load', () => {
        const data = JSON.parse(xhr.response);
        callback(data);
    });
    xhr.addEventListener('error', () => {
        console.log('error');
    });
    xhr.send(JSON.stringify(body));
};

const editRow = async (form, table, closeModal) => {
    table.addEventListener('click', (e) => {
        const target = e.target;
        const editCart = target.closest('.eighth-column_icon-edit');
        if (editCart) {
            const row = editCart.closest('.table__content-row');
            const id = row.querySelector('.table__content-column-first').textContent;
            editingId = fetch(`${API_URL}api/goods/${id}`);
            console.log(`editingId ${editingId}`);
            form.addEventListener('submit', e => {
                e.preventDefault();
                /* sendData({
                     title: form.title.value,
                     body: form.description.value,
                 }, (data) => {
                     form.textContent = `Товар ${data.id} успешно изменён`
                 });*/

                fetch(`${API_URL}api/goods`, {
                    method: 'PATCH',
                    body: JSON.stringify(editingGood)
                })
                    .then(editingGood => {
                        alert(`Товар ${editingGood.title} успешно отредактирован`);
                        form.reset();
                        closeModal();
                    })
                    .catch(error => {
                        alert('Произошла ошибка, статус ' + error.message);
                        createModalError();
                    });
            });
            calculateTotalSum();
        };
    });
};

export default editRow;