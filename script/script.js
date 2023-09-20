import { formControl, openModalControl, previewImage } from "./control.js";
import deleteRow from "./deleting.js";
import { renderGoodTable, renderGoods } from "./renders.js";
import sortRows from "./sorting.js";
import { calculateTotalSum } from "./utilities.js";
import { getData } from "./data.js";
import editRow from "./editing.js";
import showImage from "./showImg.js";

{
    const init = async (selectorApp) => {
        const app = document.querySelector(selectorApp);
        const { table, thead, btnOpenForm, overlay, form } = renderGoodTable(app);
        const data = await getData();
        renderGoods(table, data);
        calculateTotalSum();
        deleteRow(table);
        showImage(table);
        previewImage(form);
        openModalControl(overlay, btnOpenForm);
        formControl(form, table);
        editRow(table);
        sortRows(thead, table);
    }
    window.goodShopInit = init;
}
