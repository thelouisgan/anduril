const workItems = document.querySelectorAll('.work-item');
const galleryOverlay = document.getElementById('gallery-overlay');
const galleryContainers = document.querySelectorAll('.gallery-container');
const prevButton = document.querySelector('.prev-work');
const nextButton = document.querySelector('.next-work');
let currentGalleryIndex = 0;
let currentImageIndex = 0;

workItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentGalleryIndex = index; 
        currentImageIndex = 0; 
        showGallery(currentGalleryIndex);
        galleryOverlay.classList.add('visible'); 
    });
});

galleryOverlay.addEventListener('click', (e) => {
    if (e.target === galleryOverlay) {
        galleryOverlay.classList.remove('visible');
        const videos = galleryContainers[currentGalleryIndex].querySelectorAll('video');
        videos.forEach(video => video.pause());
    }
});

const galleryImages = document.querySelectorAll('.gallery-item');

galleryImages.forEach(image => {
    image.addEventListener('click', (e) => {
        e.stopPropagation(); 
    });
});

prevButton.addEventListener('click', (e) => {
    e.stopPropagation(); 
    navigateGallery('prev'); 
});

nextButton.addEventListener('click', (e) => {
    e.stopPropagation(); 
    navigateGallery('next'); 
});

function navigateGallery(direction) {
    const galleryItems = galleryContainers[currentGalleryIndex].querySelectorAll('.gallery-item');
    if (direction === 'prev') {
        currentImageIndex = (currentImageIndex === 0) ? galleryItems.length - 1 : currentImageIndex - 1;
    } else {
        currentImageIndex = (currentImageIndex === galleryItems.length - 1) ? 0 : currentImageIndex + 1;
    }
    updateGallery();
}

function updateGallery() {
    const galleryItems = galleryContainers[currentGalleryIndex].querySelectorAll('.gallery-item');
    galleryItems.forEach((item, i) => {
        item.style.display = (i === currentImageIndex) ? 'block' : 'none'; 
    });
}

function showGallery(index) {
    galleryContainers.forEach(container => {
        container.style.display = 'none'; 
    });

    const currentGallery = galleryContainers[index];
    currentGallery.style.display = 'block'; 
    updateGallery(); 
}

showGallery(currentGalleryIndex); 
