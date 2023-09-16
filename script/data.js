import { createRow } from "./createElements.js";
import { API_URL } from "./const.js";

// https://persistent-mangrove-fountain.glitch.me/

export const getData = async (id) => {
    const response = await fetch(`${API_URL}api/goods/${id ? id : ''}`);
    const goods = await response.json();
    console.log('getData = ', goods);
    return goods;
};

export const postGood = async (data) => {
    const response = await fetch(`${API_URL}api/goods`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        return response.json()
    }
    throw new Error(response.status);
};

export const addGoodPage = (good, table) => {
    table.append(createRow(good));
};

export const editGood = async (editingGood) => {
    const response = await fetch(`${API_URL}api/goods/${editingGood.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingGood),
    });

    if (response.ok) {
        return response.json()
    }
    throw new Error(response.status);
};

export const removeGood = async (goodId) => {
    const response = await fetch(`${API_URL}api/goods/${goodId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        return response.json()
    }
    throw new Error(response.status);
};

/*export const deleteGoodItem = async (goodId) => {
    const data = await getData();
    for (let i = 0; i < data.length; i++) {
        if (goodId === data[i].id.toString()) {
            data.splice([i], 1);
        };
    };
    return data;
};*/

