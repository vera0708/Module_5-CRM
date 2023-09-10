// import { getData } from "./data.js";

const calculateTotalSum = async (data) => {
    const pSum = document.querySelector('.main-table__total-info__sum');
    let totalSum = 0;

    await data.forEach(({ price, count }) => {
        totalSum += price * count;
    });
    console.log('рассчитывается data в calculateSum:');

    pSum.textContent = totalSum.toLocaleString('ru');
    return pSum.textContent;
};
export default calculateTotalSum;