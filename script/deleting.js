import calculateTotalSum from "./utilities.js";
import { getData } from "./data.js";

const deleteRow = (table) => {
    table.addEventListener('click', (e) => {
        const target = e.target;
        const delCart = target.closest('.eighth-column_icon-del');
        if (delCart) {
            const row = delCart.closest('.table__content-row');
            const id = row.querySelector('.table__content-column-first').textContent;
            target.closest('.table__content-row').remove();
            for (let i = 0; i < getData().length; i++) {
                if (id === getData()[i].id.toString()) {
                    getData().splice([i], 1);
                };
            }
            calculateTotalSum();
        };
    });
};

export default deleteRow;