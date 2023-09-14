import { formControl, modalControl, openBtnImg } from "./control.js";
import deleteRow from "./deleting.js";
import { renderGoodTable, renderGoods } from "./renders.js";
import sortRows from "./sorting.js";
import { calculateTotalSum } from "./utilities.js";
import { getData } from "./data.js";
import editRow from "./editing.js";

{
    const init = async (selectorApp) => {
        const app = document.querySelector(selectorApp);
        const { table, thead, btnOpenForm, overlay, form } = renderGoodTable(app);
        const data = await getData();
        renderGoods(table, data);
        calculateTotalSum();
        deleteRow(table);
        openBtnImg(table);
        const { closeModal } = modalControl(btnOpenForm);
        formControl(form, table, closeModal);
        editRow(table);
        sortRows(thead, table);
    }
    window.goodShopInit = init;
}
