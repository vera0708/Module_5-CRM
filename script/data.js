import { createRow } from "./createElements.js";
import { API_URL } from "./const.js";

// https://persistent-mangrove-fountain.glitch.me/

/*export const setData = (value) => { 
    goods = value;
};*/

export const getData = async () => {
    const result = await fetch(`${API_URL}api/goods`);
    const goods = await result.json();
    console.log('getData = ', goods);
    return goods;
};

/*export const addGoodItem = async (good) => {
    const data = await getData();
    data.push(good);
    return data;
};*/

export const addGoodPage = (good, table) => {
    table.append(createRow(good));
};

export const deleteGoodItem = async (goodId) => {
    const data = await getData();
    for (let i = 0; i < data.length; i++) {
        if (goodId === data[i].id.toString()) {
            data.splice([i], 1);
        };
    };
    return data;
};

export const removeItem = async (goodId) => {
    await fetch(`${API_URL}api/goods/${goodId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
