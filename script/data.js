import { createRow } from "./createElements.js";
import { API_URL } from "./const.js";

// https://persistent-mangrove-fountain.glitch.me/

/*const loadGoods = async () => {
    const result = await fetch(`${API_URL}api/goods`);
    const data = await result.json();
        return data;
};*/

/*export const setData = (value) => { 
    goods = value;
};*/

export const getData = async () => {
    const result = await fetch(`${API_URL}api/goods`);
    const goods = await result.json();
    console.log('getData = ', goods);
    // const goods = await loadGoods();
    return goods;
};

export const addGoodItem = async (good) => {
    const goods = await getData();
    goods.push(good);
};

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
};

export const removeItem = async (goodId) => {
    await fetch(`${API_URL}api/goods/${goodId}`, {
        method: 'DELETE'
    })
}
