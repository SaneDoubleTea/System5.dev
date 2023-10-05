//!======Swiper=========
// import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from "swiper";

// new Swiper(".swiper", {
//     modules: [Navigation, Pagination, EffectFade, Scrollbar],
//     loop: false,
//     speed: 800,
//     effect: "fade",
//     spaceBetween: 30,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         /*  type: "fraction", */
//         //custom bullets
//         /* renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + "</span>";
//         }, */

//         /* type: "custom",
//         renderCustom: function (swiper, current, total) {
//             let indT = total >= 10 ? total : `0${total}`;
//             let indC = current >= 10 ? current : `0${current}`;
//             return `<b>${indC}</b> <span></span>${indT}`;
//         }, */
//     },
//     scrollbar: {
//         el: ".swiper-scrollbar",
//         hide: false,
//         draggable: true,
//         dragSize: 100,
//     },
// });

//!======Modal=========
// import MicroModal from "micromodal";
// MicroModal.init({
//     // onShow: modal => console.info(`${modal.id} is shown`), // [1]
//     // onClose: modal => console.info(`${modal.id} is hidden`), // [2]
//     openTrigger: 'data-micromodal-trigger', // [3]
//     closeTrigger: 'data-custom-close', // [4]
//     disableScroll: true, // [5]
//     disableFocus: false, // [6]
//     awaitOpenAnimation: false, // [7]
//     awaitCloseAnimation: false, // [8]
//     debugMode: true, // [9]
// });

//!ACCORDION
// import Accordion from "accordion-js";
//var accordion = new Accordion(".accordion-container");
// var accordion = new Accordion(".accordion-container", {
//     // animation duration in ms {number}
//     duration: 600,
//     // add ARIA elements to the HTML structure {boolean}
//     ariaEnabled: true,
//     // allow collapse expanded panel {boolean}
//     collapse: true,
//     // show multiple elements at the same time {boolean}
//     showMultiple: false,
//     // show accordion elements during initialization {array}
//     openOnInit: [],
//     // element class {string}
//     elementClass: "ac",
//     // trigger class {string}
//     triggerClass: "ac-trigger",
//     // panel class {string}
//     panelClass: "ac-panel",
//     // active element class {string}
//     activeClass: "is-active",
// });

//!BURGER MENU
const navBtn = document.querySelector('.nav-btn');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

//Клик по кнопке
navBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleMobilenav();
});

//Клик по окну за пределами навигации
window.addEventListener('click', function () {
    if (body.classList.contains('no-scroll')) {
        toggleMobilenav();
    }
});
//останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener('click', function (event) {
    event.stopPropagation();
});

function toggleMobilenav() {
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-btn-close');
    body.classList.toggle('no-scroll');
}

//!статичный хедер при скролле
(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 400) {
            header.classList.add('header--active');
        } else {
            header.classList.remove('header--active');
        }
    };
})();
