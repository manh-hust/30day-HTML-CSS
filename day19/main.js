const color = document.querySelector('.color');
const deletes = document.querySelector('.delete');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const printer = document.querySelector('.printer');
const close = document.querySelector('.close');
const tool = document.querySelector('.tool')

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

        ctx.beginPath();
        ctx.moveTo(currentPos.x, currentPos.y);
        ctx.lineTo(currentPosAfter.x, currentPosAfter.y);
        ctx.strokeStyle = colorType
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
})
// Delete line
deletes.addEventListener('click', function (e) {
    if (colorType !== '#fff') {
        colorType = '#fff';
    } else {

    }
    this.classList.toggle('active')
})