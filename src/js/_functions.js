// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
import { burger } from "./functions/burger";

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from "./functions/disable-scroll";

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from "./functions/enable-scroll";

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper, { Navigation, Pagination, Scrollbar } from "swiper";

Swiper.use([Navigation, Pagination, Scrollbar]);

const swiper_docs = new Swiper('.swiper-docs', {
   

    loop: true,

    navigation: {
        prevEl: '.slider-nav .prev',
        nextEl: '.slider-nav .next'
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },

    speed: 1000
})




// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from "smooth-scroll";
// const scroll = new SmoothScroll('a[href*="#"]', {
//   header: "[data-scroll-header]",
// });

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

import { accordion } from "./functions/accordion";
import { MY_SELECT } from "./functions/my-select";
import { listener } from "./functions/listener";

function fixedHeader() {
  const header = document.querySelector('.header');
  const innerHeightHeader = header.getBoundingClientRect();
  const main = document.querySelector('.main')
  window.addEventListener('scroll', (e) => {
      let scrollY = window.scrollY;
      
      if (scrollY >= 550) {
          header.classList.add('fixed--header')
          main.style.marginTop = `${innerHeightHeader.height}` + 'px';
      } else {
          header.classList.remove('fixed--header')
          main.style.marginTop = 0;
      }
  })
}

fixedHeader();