const process = document.querySelector('.process')
const range = document.querySelector('.range')
const percentt = document.querySelector('.percent')
const body = document.querySelector('body')

range.addEventListener('mousemove', function (e) {
    const max = this.offsetWidth
    const x = e.pageX - this.offsetLeft;
    const percent = ((x / max) * 100).toFixed();
    process.style.width = `${percent}%`
    percentt.innerText = `${percent}%`
    body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`
})