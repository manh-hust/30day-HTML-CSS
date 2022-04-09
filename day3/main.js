const openBtn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal-cha')
const modalChild = document.querySelector('.modal')
const closeX = document.querySelector('.modal__head span')
const closeBtn = document.querySelector('.modal__body--btn')


openBtn.addEventListener('click', function(){
    modal.classList.remove('hide')
})

closeX.addEventListener('click', function(){
    modal.classList.add('hide')
})
closeBtn.addEventListener('click', function(){
    modal.classList.add('hide')
})

modal.addEventListener('click', function(){
    modal.classList.add('hide')
})

modalChild.addEventListener('click', function(e){
    e.stopPropagation()
})