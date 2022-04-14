const leftControl = document.querySelector('.control-left')
const rightControl = document.querySelector('.control-right')
const mainImage = document.querySelector('.main-image img')
const smallImages = document.querySelectorAll('.small-image img')
const smallImagesWrap = document.querySelectorAll('.small-image')

for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].addEventListener('click', function (e) {
        // Remove tat ca class active truoc khi click
        removeActive(smallImagesWrap);
        active(i)
        // Set url cho main-image khi click vao small-image
        const url = this.src
        mainImage.src = url
        mainImage.setAttribute('current', i + 1);
    })
}

leftControl.addEventListener('click', function () {
    removeActive()
    // Giam current len 1 khi lick
    var current = mainImage.getAttribute('current')
    current = parseInt(current)
    if (current === 1) {
        current = smallImages.length;
    } else {
        current = current - 1;
    }
    slide(current)
})

rightControl.addEventListener('click', function () {
    removeActive()
    // Tang current len 1 khi lick
    var current = mainImage.getAttribute('current')
    current = parseInt(current)
    if (current === smallImages.length) {
        current = 1;
    } else {
        current = current + 1;
    }
    slide(current)
})

// Remove tat cac cac element trong warrap co class active
function removeActive() {
    for (const item of smallImagesWrap) {
        item.classList.remove('active')
    }
}
// Add class active vo warrap co vi tri current
function active(current) {
    smallImagesWrap[current].classList.add('active')
}
// Slide link khi lick control
function slide(current) {
    const url = smallImages[current - 1].src
    mainImage.src = url
    mainImage.setAttribute('current', current);
    /* animation: slide 0.3s ease; */
    mainImage.style.animation = 'slide 0.3s ease'
    active(current - 1)
}