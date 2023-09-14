import { modalControl } from "./control.js";
import { editGood } from "./data.js";

const editRow = async (table) => {
    table.addEventListener('click', async (e) => {
        const target = e.target;
        const editCart = target.closest('.eighth-column_icon-edit');
        console.log('editCart: ', editCart)
        const row = editCart.closest('.table__content-row');
        const editingGood = await editGood(row);
        console.log('row: ', row)
        const idRow = row.querySelector('.table__content-column-first').textContent;
        console.log('idRow: ', idRow)
        modalControl(editCart, editingGood);
    });
};

export default editRow;