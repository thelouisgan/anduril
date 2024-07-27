document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.menu ul li a');

    function setActiveLink() {
        const currentPath = window.location.hash;

        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.parentElement.classList.add('current-menu-item');
            } else {
                link.parentElement.classList.remove('current-menu-item');
            }
        });
    }

    // Initial set of the active link
    setActiveLink();

    // Listen for hash changes to update the active link
    window.addEventListener('hashchange', function () {
        setActiveLink();
    });

    // Add click event listeners to update the active link immediately
    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(link => {
                link.parentElement.classList.remove('current-menu-item');
            });
            this.parentElement.classList.add('current-menu-item');
        });
    });
});