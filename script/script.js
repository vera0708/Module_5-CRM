import { formControl, modalControl, openBtnImg } from "./control.js";
import deleteRow from "./deleting.js";
import { renderGoodTable, renderGoods } from "./renders.js";
import sortRows from "./sorting.js";
import calculateTotalSum from "./utilities.js";
import { getData } from "./data.js";


{
    const init = (selectorApp) => {
        const app = document.querySelector(selectorApp);
        const { table, thead, btnOpenForm, overlay, form } = renderGoodTable(app);
        renderGoods(table, getData());
        calculateTotalSum(table);
        deleteRow(table);
        openBtnImg(table);

        const { closeModal } = modalControl(btnOpenForm, overlay);
        formControl(form, table, closeModal);
        sortRows(thead, table);
    }
    window.goodShopInit = init;
}
