/*  fetch('https://persistent-mangrove-fountain.glitch.me/api/goods')

fetch('http://localhost:3000/api/goods', {
    method: 'POST',
    body: JSON.stringify({
        title: 'cable XXX',
        description: 'длинный белый (3м * 0.05)',
         category: 'others',
        price: 1600,
         units: 'шт',
         count: 10,
     }),
     headers: {
        'Content-Type': 'application/json'
    }
 });*/

/* AJAX
// получение данных
const loadGoods = (callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://cryptic-temple-67544.herokuapp.com/api/goods');
    xhr.addEventListener('load', () => {
        const data = JSON.parse(xhr.response);
        callback(data);
    });
    xhr.addEventListener('error', () => {
        console.log('error');
    });
    xhr.send();
};
// находим кнопку по нажатию на которую будем получать товары:
const get = document.querySelector('#get');
get.addEventListener('click', () => {
    loadGoods(renderGoods);
});
// отправка данных
const sendData = (body, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.addEventListener('load', () => {
        const data = JSON.parse(xhr.response);
        callback(data);
    });
    xhr.addEventListener('error', () => {
        console.log('error');
    });
    xhr.send(JSON.stringify(body));
};
// находим кнопку по нажатию на которую будем получать товары:
const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    sendData({
        title: form.title.value,
        body: form.description.value,
    })
}, (data) => {
    form.textContent = `Заявка номер ${data.id} успешно отправлена`
});
*/
/* const goods = [
    {
        "id": 253842678,
        "title": "Смартфон Xiaomi 11T 8/128GB",
        "price": 27000,
        "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
        "category": "mobile-phone",
        "discont": false,
        "count": 3,
        "cost": 81000,
        "units": "шт",
        "images": {
            "small": "img/smrtxiaomi11t-m.jpg",
            "big": "img/smrtxiaomi11t-b.jpg"
        }
    },
    {
        "id": 937295527,
        "title": "Настольная игра “На 4-х ногах”",
        "price": 14,
        "description": "Настольная игра является хорошим подарком который используется всёй семьей. В процессе игры ее помощью вы сможете обеспечить хорошее настроение и времяпровождение с друзьями.",
        "category": "Настольные игры",
        "discont": false,
        "count": 12,
        "cost": 168,
        "units": "шт",
        "images": {
            "small": "img/lan_proconnect43-3-25.jpg",
            "big": "img/lan_proconnect43-3-25-b.jpg"
        }
    },
    {
        "id": 296378448,
        "title": "Радиоуправляемый автомобиль Cheetan",
        "price": 4000,
        "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
        "category": "toys",
        "discont": 5,
        "count": 1,
        "cost": 4000,
        "units": "шт",
        "images": {
            "small": "img/cheetancar-m.jpg",
            "big": "img/cheetancar-b.jpg"
        }
    },
    {
        "id": 215796548,
        "title": "ТВ приставка MECOOL KI",
        "price": 12400,
        "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
        "category": "tv-box",
        "discont": 15,
        "count": 4,
        "cost": 49600,
        "units": "шт",
        "images": {
            "small": "img/tvboxmecool-m.jpg",
            "big": "img/tvboxmecool-b.jpg"
        }
    },
    {
        "id": 246258248,
        "title": "Витая пара PROConnect 01-0043-3-25",
        "price": 22,
        "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
        "category": "cables",
        "discont": false,
        "count": 420,
        "cost": 9240,
        "units": "v",
        "images": {
            "small": "img/lan_proconnect43-3-25.jpg",
            "big": "img/lan_proconnect43-3-25-b.jpg"
        }
    },
];
*/