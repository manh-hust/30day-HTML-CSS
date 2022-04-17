const color = document.querySelector('.color');
const deletes = document.querySelector('.delete');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const printer = document.querySelector('.printer');
const close = document.querySelector('.close');
const tool = document.querySelector('.tool');
const size = document.querySelector('.size');
const canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = screen.width
canvas.height = screen.height - tool.clientHeight

// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(300, 150);
// ctx.stroke();
var currentPos = {
    x: 0,
    y: 0
};
var currentPosAfter = {
    x: 0,
    y: 0
};

var isDrawing = false;
var colorType = '#000';
var cacheColor = '#000'
var sizeNumber = 10
// Draw
document.addEventListener('mousedown', function (e) {
    currentPos = {
        x: e.offsetX,
        y: e.offsetY
    };
    isDrawing = true
})
document.addEventListener('mousemove', function (e) {
    if (isDrawing) {
        currentPosAfter = {
            x: e.offsetX,
            y: e.offsetY
        };

        // Ve duong tron fill dasy tren moi diem
        ctx.beginPath();
        ctx.arc(currentPos.x, currentPos.y, sizeNumber / 2, 0, 2 * Math.PI);
        ctx.fillStyle = colorType
        ctx.fill();
        // Noi cac duong tron lai thanh duong thang
        ctx.beginPath();
        ctx.moveTo(currentPos.x, currentPos.y);
        ctx.lineTo(currentPosAfter.x, currentPosAfter.y);
        ctx.strokeStyle = colorType;
        ctx.lineWidth = sizeNumber;
        ctx.stroke();


        currentPos.x = currentPosAfter.x
        currentPos.y = currentPosAfter.y

    }
})
document.addEventListener('mouseup', function (e) {
    isDrawing = false
})

//Change color
color.addEventListener('input', function (e) {
    colorType = e.target.value;
    cacheColor = colorType
})
// Change size
minus.addEventListener('click', function (e) {

    sizeNumber = sizeNumber > 1 ? sizeNumber - 1 : 1;
    size.innerText = sizeNumber;
})
plus.addEventListener('click', function (e) {
    sizeNumber = sizeNumber < 15 ? sizeNumber + 1 : 15;
    size.innerText = sizeNumber;
})
// Delete line
deletes.addEventListener('click', function (e) {
    if (colorType !== '#fff') {
        colorType = '#fff';
        this.classList.add('active')
    } else {
        colorType = cacheColor
        this.classList.remove('active')
    }
})
// Reset all
close.addEventListener('click', function () {
    const {
        width,
        height
    } = canvas.getClientRects()[0];
    ctx.clearRect(0, 0, width, height)
})
//Pri.nt image
printer.addEventListener('click', function () {
    var urlBase = canvas.toDataURL()
    printer.setAttribute('href', urlBase)
    console.log(urlBase);
})