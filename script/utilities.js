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

export const onlyNumbers = (inputName) => {
    inputName.addEventListener('input', () => {
        inputName.value = inputName.value.replace(/\D/g, '');
    });
};

export const onlyRusLetterSpace = (inputName) => {
    inputName.addEventListener('input', () => {
        inputName.value = inputName.value.replace(/[^А-ЯЁ ]/gi, '');
    });
};

export const onlyRusLetter = (inputName) => {
    inputName.addEventListener('input', () => {
        inputName.value = inputName.value.replace(/[^А-ЯЁ]/ig, '');
    });
};
export const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
        // функции resolve и reject создаёт сам JS
        const reader = new FileReader();
        reader.addEventListener('loadend', () => {
            resolve(reader.result);
        });
        reader.addEventListener('error', (err) => {
            reject(err);
        });
        reader.readAsDataURL(file);
    });
};

export const currencyFormatRUB = (num) => {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0,
    }).format(num)
};