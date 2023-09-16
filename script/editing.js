import { openModal } from "./control.js";
import { getGood } from "./data.js";

const editRow = async (table) => {
    table.addEventListener('click', async (e) => {
        const target = e.target;
        const editCart = target.closest('.eighth-column_icon-edit');

        if (!editCart) {
            return;
        }

        console.log('editCart: ', editCart);

        const row = editCart.closest('.table__content-row');
        const idRow = row.querySelector('.table__content-column-first').textContent;
        const editingGood = await getGood(idRow);

        openModal(editingGood);
    });
};

export default editRow;