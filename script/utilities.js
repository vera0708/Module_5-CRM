import { getData } from "./data.js";

const calculateTotalSum = async () => {
    const pSum = document.querySelector('.main-table__total-info__sum');
    let totalSum = 0;
    const data = await getData();
    data.forEach(({ price, count }) => {
        totalSum += price * count;
    });

    pSum.textContent = totalSum.toLocaleString('ru');
    return pSum.textContent;
};
export default calculateTotalSum;