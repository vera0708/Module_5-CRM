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

export const renderEditingRow = (goodRow, { id, title, category, units, price, count }) => {
    goodRow.innerHTML = `
    <td class="table__content-column table__content-column-first">${id}</td>
    <td class="table__content-column table__content-column-second">${title}</td>
    <td class="table__content-column table__content-column-third">${category}</td>
    <td class="table__content-column table__content-column-fourth">${units}</td>
    <td class="table__content-column table__content-column-fifth">${count}</td>
    <td class="table__content-column table__content-column-sixth">${price}</td>
    <td class="table__content-column table__content-column-seventh">${count * price}</td>
    <td class="table__content-column table__content-column-eighth">
        <button class="eighth-column_icon eighth-column_icon-img" data-pic="url"></button>
        <button class="eighth-column_icon eighth-column_icon-edit"></button>
        <button class="eighth-column_icon eighth-column_icon-del"></button>
    </td>
        `;
    return goodRow;
}