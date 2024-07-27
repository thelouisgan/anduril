var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('slides'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');

function slide(wrapper, items, prev, next) {
    var posX1 = 0,
        posX2 = 0,
        posInitial,
        posFinal,
        threshold = 100,
        slides = items.getElementsByClassName('slide'),
        slidesLength = slides.length,
        slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
        firstSlide = slides[0],
        secondSlide = slides[1],
        thirdSlide = slides[2],
        fourthSlide = slides[3],
        fifthSlide = slides[4],
        lastSlide = slides[slidesLength - 1],
        cloneFirst = firstSlide.cloneNode(true),
        cloneSecond = secondSlide.cloneNode(true),
        cloneThird = thirdSlide.cloneNode(true),
        cloneFourth = fourthSlide.cloneNode(true),
        cloneFifth = fifthSlide.cloneNode(true),
        cloneLast = lastSlide.cloneNode(true),
        index = 0,
        allowShift = true;
    
    // Clone first and last slide
    items.appendChild(cloneFirst);
    items.appendChild(cloneSecond);
    items.appendChild(cloneThird);
    items.appendChild(cloneFourth);

    items.insertBefore(cloneLast, firstSlide);
    items.insertBefore(cloneFifth, cloneLast);
    items.insertBefore(cloneFourth, cloneFifth);
    items.insertBefore(cloneThird, cloneFourth);
    wrapper.classList.add('loaded');

    // Click events
    prev.addEventListener('click', function () { shiftSlide(-1) });
    next.addEventListener('click', function () { shiftSlide(1) });
    
    // Transition events
    items.addEventListener('transitionend', checkIndex);
    
    function shiftSlide(dir, action) {
        items.classList.add('shifting');
        
        if (allowShift) {
        if (!action) { posInitial = items.offsetLeft; }

        if (dir == 1) {
            items.style.left = (posInitial - slideSize) + "px";
            index++;      
        } else if (dir == -1) {
            items.style.left = (posInitial + slideSize) + "px";
            index--;      
        }
        };
        
        allowShift = false;
  }
    
    function checkIndex (){
        items.classList.remove('shifting');

        if (index == -1) {
        items.style.left = -(slidesLength * slideSize) + "px";
        index = slidesLength - 1;
        }

        if (index == slidesLength) {
        items.style.left = -(1 * slideSize) + "px";
        index = 0;
        }
        
        allowShift = true;
    }
}

slide(slider, sliderItems, prev, next);