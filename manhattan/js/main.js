(function () {

    // ==============================Бургер================================

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 750) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    // ==============================Табуляция>================================

    const tabControls = document.querySelector('.tab-controls')
    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeContent = document.querySelector('.tab-content--show')
        const activeControl = document.querySelector('.tab-controls__link--active')

        activeControl.classList.remove('tab-controls__link--active')
        activeContent.classList.remove('tab-content--show')

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')
    }

    // ==============================Модалка>================================

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.header__button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cansel') || target.closest('.button') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && document.body.classList.contains('body--opened-modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    })

    // ===============================Маска для телефонного инпута===========================

    const inputsTel = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask('+7 (999) 999-99-99');
    im.mask(inputsTel);

    // ===============================Cлайдер меню=================================

    const swiper = new Swiper('.kitchen__slider', {
        initialSlide: 0,
        spaceBetween: 50,
        slidesPerView: 1,

        navigation: {
            nextEl: '.kitchen__next',
            prevEl: '.kitchen__prev',
        },

        breakpoints: {
            1001: {
                slidesPerView: 2,
                spaceBetween: 104,
            },
            1101: {
                slidesPerView: 2,
                spaceBetween: 104,
            },
        },
    });

    // ===============================Аккордион=================================

    const accordionList = document.querySelector('.accordion-list');

    const firstAccordionItem = accordionList.querySelector('.accordion-list__item');
    const firstAccordionContent = firstAccordionItem.querySelector('.accordion-list__content');

    firstAccordionItem.classList.add('accordion-list__item--opened');
    firstAccordionContent.style.maxHeight = firstAccordionContent.scrollHeight + 'px';

    accordionList.addEventListener('click', (e) => {

        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return
        e.preventDefault();
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened')
            accordionOpenedContent.style.maxHeight = null;
        }
        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }
    })

    // =============================Cлайдер галлереи===================================

    new Swiper('.gallery__slider', {
        spaceBetween: 15,
        speed: 1000,
        slidesPerView: 2,
        initialSlide: 1,

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },

        breakpoints: {
            501: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
            601: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
            1001: {
                spaceBetween: 30,
                slidesPerView: 4,
            },
        },
    });

})()
