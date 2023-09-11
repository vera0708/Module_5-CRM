import calculateTotalSum from "./utilities.js";
import { deleteGoodItem, removeItem, getData } from "./data.js";

const deleteRow = (table) => {
    table.addEventListener('click', async (e) => {
        const target = e.target;
        const delCart = target.closest('.eighth-column_icon-del');
        if (delCart) {
            const row = delCart.closest('.table__content-row');
            const id = row.querySelector('.table__content-column-first').textContent;
            await removeItem(id);
            const data = await getData(id);
            target.closest('.table__content-row').remove();
            calculateTotalSum(data);
        };
    });
};

export default deleteRow;