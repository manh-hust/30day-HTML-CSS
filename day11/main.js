const btnSuccess = document.querySelector('.control .success')
const btnWarning = document.querySelector('.control .warning')
const btnError = document.querySelector('.control .error')
const toastList = document.querySelector('#toasts')

btnSuccess.addEventListener('click', function () {
    createToast('success')
})
btnWarning.addEventListener('click', function () {
    createToast('warning')
})
btnError.addEventListener('click', function () {
    createToast('error')
})


function createToast(status) {
    let html = ''
    switch (status) {
        case 'success':
            html = `  
            <i class='bx bx-check-circle'></i>
            <span class="message">This is a Success message!</span>
            <span class="countdown"></span> `
            break;
        case 'warning':
            html = `  
            <i class='bx bxs-error'></i>
            <span class="message">This is a Warning message!</span>
            <span class="countdown"></span> `
            break;
        case 'error':
            html = `  
            <i class='bx bxs-error-circle'></i>
            <span class="message">This is a Error message!</span>
            <span class="countdown"></span> `
            break;
        default:
    }
    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML = html
    toastList.appendChild(toast)

    setTimeout(function () {
        toast.style.animation = 'slide_hide 2s ease forwards'
    }, 4000)
    setTimeout(function () {
        toast.remove()
    }, 6000)
}