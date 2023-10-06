//!======Swiper=========
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
//!====== Burger Menu=========
document.addEventListener('DOMContentLoaded', function burgerMenu() {
    const navBtn = document.querySelector('.nav-btn'),
        mobileNav = document.querySelector('.mobile-nav'),
        body = document.body;

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
});

//!======Cookies=========
document.addEventListener('DOMContentLoaded', function cookies() {
    const cookiesPopup = document.querySelector('.cookies');
    const okButton = document.querySelector('#btn-ok');
    const yesButton = document.querySelector('#btn-yes');

  const closeCookiesPopup = () => {
    cookiesPopup.style.display = "none";
  };

  okButton.addEventListener("click", (event) => {
    event.stopPropagation();
    closeCookiesPopup();
  });

  yesButton.addEventListener("click", (event) => {
    event.stopPropagation();
    closeCookiesPopup();
  });

  // Также добавляем обработчик события для .cookies для случаев, когда пользователь кликает вне кнопок
  cookiesPopup.addEventListener("click", (event) => {
    if (event.target === cookiesPopup) {
      closeCookiesPopup();
    }
  });
});

//!======Modal=========
document.addEventListener('DOMContentLoaded', function modalWindow() {
    MicroModal.init({
        openTrigger: 'data-micromodal-trigger',
        closeTrigger: 'data-custom-close',
        disableScroll: true,
        disableFocus: false,
        awaitOpenAnimation: false,
        awaitCloseAnimation: false,
        debugMode: true,
    });
});

//!======Radio Buttons=========
document.addEventListener('DOMContentLoaded', function RadioButtons() {
    const customRadios = document.querySelectorAll('.custom-radio');

    customRadios.forEach((customRadio) => {
        const radioInput = customRadio.querySelector('input[type="radio"]');

        radioInput.addEventListener('change', () => {
            customRadios.forEach((otherRadio) => {
                otherRadio.classList.remove('custom-radio--active');
            });

            if (radioInput.checked) {
                customRadio.classList.add('custom-radio--active');
            }
        });
    });
});

// !======Radio Linsk===========
document.addEventListener('DOMContentLoaded', function () {
    const personalRadio = document.getElementById('personalRadio');
    const organizationRadio = document.getElementById('organizationRadio');
    const nextButton = document.getElementById('nextButton');

    const personalLink = 'https://google.com';
    const organizationLink = 'https://google.com/images';

    let selectedOption = null;

    personalRadio.addEventListener('change', function () {
        selectedOption = personalLink;
    });

    organizationRadio.addEventListener('change', function () {
        selectedOption = organizationLink;
    });

    nextButton.addEventListener('click', function (e) {
        e.preventDefault(); // Предотвращаем стандартное действие ссылки.

        if (selectedOption !== null) {
            // Открываем выбранную ссылку в новом окне.
            window.open(selectedOption, '_blank');
        } else {
            alert('Please choose option.');
        }
    });
});

//======Swiper=========
const fraction = document.getElementById("fraction");
const slides = document.querySelectorAll(".swiper-slide");
const slideCount = slides.length;

function formatNumber(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

const slideCountText = slideCount >= 10 ? slideCount.toString() : `0${slideCount}`;
fraction.innerHTML = `<span>${formatNumber(1)}</span> / <span>${slideCountText}</span>`;

new Swiper(".benefits__slider", {
  loop: false,
  speed: 800,
  spaceBetween: 30,
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },
  pagination: {
    el: ".pagination-slider",
    clickable: true,
  },
  on: {
    slideChange: (swiper) => {
      const currentIndex = swiper.realIndex + 1;
      fraction.innerHTML = `<span>${formatNumber(currentIndex)}</span> / <span>${slideCountText}</span>`;
    },
  },
});

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
