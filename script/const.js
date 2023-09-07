export const API_URL = 'https://persistent-mangrove-fountain.glitch.me/';

// Доступные методы:
// GET    /api/goods - получить список товаров, в query параметр search можно передать поисковый запрос
// POST   /api/goods - создать товар, в теле запроса нужно передать объект
//      {   title: string,
//          description: string,
//          price: number,
//          discount ?: number,
//          count: number,
//          units: string,
//          images ?: []
//      }
// GET    /api/goods/{id} - получить товар по его ID
// PATCH  /api/goods/{id} - изменить товар с ID, в теле запроса нужно передать объект
//      {   title: string,
//          description: string,
//          price: number,
//          discount ?: number,
//          count: number,
//          units: string,
//          images ?: []
//      }
// DELETE /api/goods/{id} - удалить товар по ID
// GET    /api/goods/discount - получить список дисконтных товаров
// GET    /api/goods/{category} - получить список товаров по категории
// GET    /api/category - получить список категорий {[]}