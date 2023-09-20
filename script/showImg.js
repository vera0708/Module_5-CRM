import { API_URL } from "./const.js";
import { getGood } from "./data.js";

const showImage = async (table) => {
    table.addEventListener('click', async (e) => {
        const target = e.target;
        const imageBtn = target.closest('.eighth-column_icon-img');
        if (imageBtn) {
            const row = imageBtn.closest('.table__content-row');
            const id = row.querySelector('.table__content-column-first').textContent;
            const data = await getGood(id);
            const imageFile = data.image;
            // console.log('imageFile: ', imageFile);
            let goodImg = imageBtn.dataset.pic;
            goodImg = open(`${API_URL}${imageFile}`, '', 'width=600, height=600');
            goodImg.moveTo(screen.width / 2 - 300, screen.height / 2 - 300);
        };
    });
};

export default showImage;
/*
id: "6300524222"
image: "image/6300524222.jpg"
--------------------
   let goodImg = btnImg.dataset.pic;
            console.log('goodImg: ', goodImg);
            goodImg = open('img/телефон-Xiomi.jpg', '', 'width=600, height=600');
            goodImg.moveTo(screen.width / 2 - 300, screen.height / 2 - 300);

<input class="visually-hidden" tabindex="-1" type="file" name="image" id="image">
<button class="eighth-column_icon eighth-column_icon-img" data-pic="url"></button>
------------------------------------------
<label tabindex="0" for="image" class="btn btn-primary d-block mx-auto">Добавить изображение</label>
<input class="visually-hidden" tabindex="-1" type="file" name="image" id="image">
<input type="hidden" name="imagesave">
<div class="wrapper-preview">
    <img class="preview">
</div>*/


