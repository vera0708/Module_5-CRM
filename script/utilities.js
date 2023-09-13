// import { getData } from "./data.js";

export const calculateTotalSum = () => {
    const goodPrices = document.querySelectorAll('.table__content-column-seventh');
    const pSum = document.querySelector('.main-table__total-info__sum');

    let totalSum = 0;
    for (let i = 1; i < goodPrices.length; i++) {
        totalSum = +goodPrices[i].textContent + totalSum;
    };

    pSum.textContent = currencyFormatRUB(totalSum);
    // pSum.textContent = totalSum.toLocaleString('ru');
    return pSum.textContent;
};

export const currencyFormatRUB = (num) => {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0,
    }).format(num)
}