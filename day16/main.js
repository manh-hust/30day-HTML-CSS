const animationElements = document.querySelectorAll('.show-on-scroll')


function toggleAnimation(element) {
    const rect = element.getClientRects()[0]
    const heightScreen = window.innerHeight

    // Check element torng man hinh hay khong
    if (!(rect.bottom < 0 || rect.top > heightScreen)) {
        // Trong
        element.classList.add('start')
    } else {
        // Ngoai
        element.classList.remove('start')
    }
}



function checkAnimation() {
    animationElements.forEach(item => {
        toggleAnimation(item)
    })
}

window.onscroll = checkAnimation