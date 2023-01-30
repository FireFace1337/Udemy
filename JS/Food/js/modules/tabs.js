function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    // tabs

    let tabs = document.querySelectorAll(tabsSelector);
    let tabsContent = document.querySelectorAll(tabsContentSelector);
    let tabsParent = document.querySelector(tabsParentSelector);

    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabsContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (event) => {
        if (event.target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (item == event.target) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
}

export default tabs;