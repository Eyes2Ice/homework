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

    new Swiper('.kitchen__slider', {
        initialSlide: 0,
        spaceBetween: 50,
        slidesPerView: 2,

        navigation: {
            nextEl: '.kitchen__next',
            prevEl: '.kitchen__prev',
        },

        breakpoints: {
            1101: {
                spaceBetween: 104,
            },
            1001: {
                slidesPerView: 2,
            },
        },
    });
})()
