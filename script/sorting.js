
const sortRows = (thead, table) => {
    thead.addEventListener('click', e => {
        const target = e.target;
        const headItems = thead.querySelectorAll('th');
        [...headItems].forEach((item, index) => {
            if (headItems[index].textContent) {
                if (target === item) {
                    let sortedRows = Array.from(table.rows).sort((rowA, rowB) => rowA.cells[index].innerHTML > rowB.cells[index].innerHTML ? 1 : -1);
                    table.append(...sortedRows);
                };
            }
        });
    });
};
export default sortRows;