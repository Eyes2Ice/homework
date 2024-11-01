(function () {

    // ==============================Табуляция================================
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
})()
