const pages = {
    all: document.querySelector('.wrapper')
}

// Всплывающие окна
import myModal from './scripts/popup/popup.js'; // Модальное окно (на главной)
import repeatMainModal from './scripts/popup/popupActivate.js'; //  Активирация окна на главной странице

if (pages.all) {
    myModal();
    repeatMainModal();
}