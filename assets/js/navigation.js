const ready = (callback) => {
    if(document.readyState != "loading")
        callback();
    else
        document.addEventListener("DOMContentLoaded", callback);
}

function toggleClass(element, className) {
    const classes = element.className.split(/\s+/);

    const cleanedClasses = classes.filter(e => e !== className);

    if (classes.length === cleanedClasses.length) {
        cleanedClasses.push(className);
    }

    element.className = cleanedClasses.join(' ');
}

function handleNavClick() {
    const body = document.querySelector('body');
    toggleClass(body, 'active');
}

ready(() => { 
    document.getElementById('menu-toggle').addEventListener('click', handleNavClick);
});

(function (window, document) {

    // we fetch the elements each time because docusaurus removes the previous
    // element references on page navigation
    function getElements() {
        return {
            layout: document.getElementById('layout'),
            menu: document.getElementById('menu'),
            menuLink: document.getElementById('menuLink')
        };
    }

    

    function toggleAll() {
        var active = 'active';
        var elements = getElements();

        toggleClass(elements.layout, active);
        toggleClass(elements.menu, active);
        toggleClass(elements.menuLink, active);
    }
    
    function handleEvent(e) {
        var elements = getElements();
        
        if (e.target.id === elements.menuLink.id) {
            toggleAll();
            e.preventDefault();
        } else if (elements.menu.className.indexOf('active') !== -1) {
            toggleAll();
        }
    }
    
    // document.addEventListener('click', handleEvent);

}(this, this.document));
