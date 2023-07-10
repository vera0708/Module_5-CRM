import { createFooter, createForm, createMain, createRow, createTable, createTableBody, createTableComplete, createUpperLine } from "./createElements.js";

export const renderGoods = (elem, goods) => {
    const allRow = goods.map(createRow);
    elem.append(...allRow);
    return allRow;
};

export const renderGoodTable = (app) => {
    const upperLine = createUpperLine();

    const { tableComplete, btnOpenForm } = createTableComplete();

    const { overlay, form } = createForm();

    const table = createTable();
    const footer = createFooter();
    const tableBody = createTableBody();
    tableBody.append(tableComplete, table, footer);

    const main = createMain();
    main.container.append(upperLine, tableBody, overlay);
    app.append(main);

    return {
        upperLine,
        table: table.tbody,
        thead: table.thead,
        btnOpenForm,
        overlay,
        form,
    }
};