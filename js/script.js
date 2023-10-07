//!======Cookies=========
document.addEventListener('DOMContentLoaded', function cookies() {
    const cookiesPopup = document.querySelector('.cookies');
    const okButton = document.querySelector('#btn-ok');
    const yesButton = document.querySelector('#btn-yes');

    const closeCookiesPopup = () => {
        cookiesPopup.style.display = 'none';
    };

    okButton.addEventListener('click', (event) => {
        event.stopPropagation();
        closeCookiesPopup();
    });

    yesButton.addEventListener('click', (event) => {
        event.stopPropagation();
        closeCookiesPopup();
    });

    // Также добавляем обработчик события для .cookies для случаев, когда пользователь кликает вне кнопок
    cookiesPopup.addEventListener('click', (event) => {
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
const fraction = document.getElementById('fraction');
const slides = document.querySelectorAll('.swiper-slide');
const slideCount = slides.length;

function formatNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
}

const slideCountText = slideCount >= 10 ? slideCount.toString() : `0${slideCount}`;
fraction.innerHTML = `<span>${formatNumber(1)}</span> / <span>${slideCountText}</span>`;

new Swiper('.benefits__slider', {
    loop: false,
    speed: 800,
    spaceBetween: 30,
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
    pagination: {
        el: '.pagination-slider',
        clickable: true,
    },
    on: {
        slideChange: (swiper) => {
            const currentIndex = swiper.realIndex + 1;
            fraction.innerHTML = `<span>${formatNumber(currentIndex)}</span> / <span>${slideCountText}</span>`;
        },
    },
});

document.addEventListener('DOMContentLoaded', function () {
    //!ACCORDION
    let accordion = new Accordion('.accordion-container', {
        duration: 600,
        ariaEnabled: true,
        collapse: true,
        showMultiple: false,
        openOnInit: [],
        elementClass: 'ac',
        triggerClass: 'ac-trigger',
        panelClass: 'ac-panel',
        activeClass: 'is-active',
    });

    accordion.open(0);
});

function DynamicAdapt() {
    // Динамический адаптив
    function DynamicAdapt(type) {
        this.type = type;
    }
    DynamicAdapt.prototype.init = function () {
        const _this = this;
        // массив объектов
        this.оbjects = [];
        this.daClassname = '_dynamic_adapt_';
        // массив DOM-элементов
        this.nodes = document.querySelectorAll('[data-da]');
        // наполнение оbjects объктами
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            const data = node.dataset.da.trim();
            const dataArray = data.split(',');
            const оbject = {};
            оbject.element = node;
            оbject.parent = node.parentNode;
            оbject.destination = document.querySelector(dataArray[0].trim());
            оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
            оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.оbjects.push(оbject);
        }
        this.arraySort(this.оbjects);
        // массив уникальных медиа-запросов
        this.mediaQueries = Array.prototype.map.call(
            this.оbjects,
            function (item) {
                return '(' + this.type + '-width: ' + item.breakpoint + 'px),' + item.breakpoint;
            },
            this
        );
        this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
            return Array.prototype.indexOf.call(self, item) === index;
        });
        // навешивание слушателя на медиа-запрос
        // и вызов обработчика при первом запуске
        for (let i = 0; i < this.mediaQueries.length; i++) {
            const media = this.mediaQueries[i];
            const mediaSplit = String.prototype.split.call(media, ',');
            const matchMedia = window.matchMedia(mediaSplit[0]);
            const mediaBreakpoint = mediaSplit[1];
            // массив объектов с подходящим брейкпоинтом
            const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
                return item.breakpoint === mediaBreakpoint;
            });
            matchMedia.addListener(function () {
                _this.mediaHandler(matchMedia, оbjectsFilter);
            });
            this.mediaHandler(matchMedia, оbjectsFilter);
        }
    };
    DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
        if (matchMedia.matches) {
            for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            }
        } else {
            //for (let i = 0; i < оbjects.length; i++) {
            for (let i = оbjects.length - 1; i >= 0; i--) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) {
                    this.moveBack(оbject.parent, оbject.element, оbject.index);
                }
            }
        }
    };
    // Функция перемещения
    DynamicAdapt.prototype.moveTo = function (place, element, destination) {
        element.classList.add(this.daClassname);
        if (place === 'last' || place >= destination.children.length) {
            destination.insertAdjacentElement('beforeend', element);
            return;
        }
        if (place === 'first') {
            destination.insertAdjacentElement('afterbegin', element);
            return;
        }
        destination.children[place].insertAdjacentElement('beforebegin', element);
    };
    // Функция возврата
    DynamicAdapt.prototype.moveBack = function (parent, element, index) {
        element.classList.remove(this.daClassname);
        if (parent.children[index] !== undefined) {
            parent.children[index].insertAdjacentElement('beforebegin', element);
        } else {
            parent.insertAdjacentElement('beforeend', element);
        }
    };
    // Функция получения индекса внутри родителя
    DynamicAdapt.prototype.indexInParent = function (parent, element) {
        const array = Array.prototype.slice.call(parent.children);
        return Array.prototype.indexOf.call(array, element);
    };
    // Функция сортировки массива по breakpoint и place
    // по возрастанию для this.type = min
    // по убыванию для this.type = max
    DynamicAdapt.prototype.arraySort = function (arr) {
        if (this.type === 'min') {
            Array.prototype.sort.call(arr, function (a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) {
                        return 0;
                    }

                    if (a.place === 'first' || b.place === 'last') {
                        return -1;
                    }

                    if (a.place === 'last' || b.place === 'first') {
                        return 1;
                    }

                    return a.place - b.place;
                }

                return a.breakpoint - b.breakpoint;
            });
        } else {
            Array.prototype.sort.call(arr, function (a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) {
                        return 0;
                    }

                    if (a.place === 'first' || b.place === 'last') {
                        return 1;
                    }

                    if (a.place === 'last' || b.place === 'first') {
                        return -1;
                    }

                    return b.place - a.place;
                }

                return b.breakpoint - a.breakpoint;
            });
            return;
        }
    };
    const da = new DynamicAdapt('max');
    da.init();

    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
            );
        },
    };
}

DynamicAdapt();

//!====== Burger Menu=========
document.addEventListener('DOMContentLoaded', function burgerMenu() {
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
});
