// Всплывающие окна
import myModal from 'https://shpilson.github.io/movee/scripts/popup/popup.js'; // Модальное окно (на главной)
import repeatMainModal from 'https://shpilson.github.io/movee/scripts/popup/popupActivate.js'; //  Активирация окна на главной странице

const pages = {
    all: document.querySelector('.wrapper')
}

if (pages.all) {
    myModal();
    repeatMainModal();
}