import { calculateTotalSum } from "./utilities.js";
import { removeGood, getData } from "./data.js";

const deleteRow = (table) => {
    table.addEventListener('click', async (e) => {
        const target = e.target;
        const delCart = target.closest('.eighth-column_icon-del');
        if (delCart) {
            const row = delCart.closest('.table__content-row');
            const id = row.querySelector('.table__content-column-first').textContent;
            const dataDel = await removeGood(id);
            console.log('dataDel: ', dataDel);
            const data = await getData();
            console.log('data: ', data);
            target.closest('.table__content-row').remove();
            calculateTotalSum();
        };
    });
};

export default deleteRow;