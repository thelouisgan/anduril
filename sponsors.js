document.addEventListener("DOMContentLoaded", function() {
    function goldAdjustGridItems() {
        const container = document.querySelector('.sponsors-container-gold');
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

    function silverAdjustGridItems() {
        const container = document.querySelector('.sponsors-container-silver');
        const gridItems = container.querySelectorAll('.grid-item');

        if (window.matchMedia("(min-width: 501px) and (max-width: 1100px)").matches) {
            if (gridItems.length % 3 == 2) {
                if (!container.querySelector('.grid-item.extra')) {
                    const newItem = document.createElement('div');
                    newItem.className = 'grid-item extra'; 
                    newItem.textContent = ' '; 
                    container.appendChild(newItem);
                }
            }
            if (gridItems.length % 3 == 1) {
                for (let i = extraItems.length; i < 2; i++) {
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

    goldAdjustGridItems();
    silverAdjustGridItems();

    window.addEventListener('resize', goldAdjustGridItems);
    window.addEventListener('resize', silverAdjustGridItems);
});