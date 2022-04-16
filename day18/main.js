const boxs = document.querySelectorAll('.box')
const target = document.querySelector('.target')

boxs.forEach(box => {
    box.addEventListener('dragover', function (e) {
        e.preventDefault()
        this.appendChild(target)
    })
    box.addEventListener('drop', function (e) {
        // this.appendChild(target)
    })
})