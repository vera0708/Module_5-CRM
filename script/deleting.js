import calculateTotalSum from "./utilities.js";
import { deleteGoodItem, removeItem } from "./data.js";

const deleteRow = async (table) => {
    table.addEventListener('click', (e) => {
        const target = e.target;
        const delCart = target.closest('.eighth-column_icon-del');
        if (delCart) {
            const row = delCart.closest('.table__content-row');
            const id = row.querySelector('.table__content-column-first').textContent;
            const data = deleteGoodItem(id);
            removeItem(id);
            target.closest('.table__content-row').remove();
            calculateTotalSum(data);
        };
    });
};

export default deleteRow;