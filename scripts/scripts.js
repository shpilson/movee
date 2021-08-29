// Всплывающие окна
import myModal from './popup/popup.js'; // Модальное окно (на главной)
import repeatMainModal from './popup/popupActivate.js'; //  Активирация окна на главной странице

const pages = {
    all: document.querySelector('.wrapper')
}


if (pages.all) {
    myModal();
    repeatMainModal();
}