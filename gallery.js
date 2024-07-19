document.querySelector('.left-arrow').addEventListener('click', () => {
    document.querySelector('.gallery-wrapper').scrollBy({
        left: -document.querySelector('.gallery-item').offsetWidth - 16, // Adjust based on item width and gap
        behavior: 'smooth'
    });
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    document.querySelector('.gallery-wrapper').scrollBy({
        left: document.querySelector('.gallery-item').offsetWidth + 16, // Adjust based on item width and gap
        behavior: 'smooth'
    });
});
