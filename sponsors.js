document.addEventListener("DOMContentLoaded", function() {
    function adjustGridItems() {
        const container = document.querySelector('.sponsors-container');
        const gridItems = container.querySelectorAll('.grid-item');

        if (window.matchMedia("(min-width: 501px) and (max-width: 1100px)").matches) {
            if (gridItems.length % 2 !== 0) {
                if (!container.querySelector('.grid-item.extra')) {
                    const newItem = document.createElement('div');
                    newItem.className = 'grid-item extra'; 
                    newItem.textContent = ' '; 
                    container.appendChild(newItem);
                }
            }
        } else {
            const extraItem = container.querySelector('.grid-item.extra');
            if (extraItem) {
                container.removeChild(extraItem);
            }
        }
    }

    adjustGridItems();

    window.addEventListener('resize', adjustGridItems);
});