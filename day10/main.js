const input = document.querySelector('.input');
const list = document.querySelector('.list-todos');
const trashs = document.querySelectorAll('.item-todo i')
const btnAdd = document.querySelector('.btn-add')
const items = document.querySelectorAll('.item-todo');


var data = []

function render(dataList) {
    const html = dataList.map(item => {
        return `<li class="item-todo">
        <span>
        ${item}
        </span>
        <i class='bx bxs-trash-alt'></i>
        </li>`
    })
    list.innerHTML = html.join(' ')
}

function addTodo() {
    const value = input.value.trim();
    const li = document.createElement('li')
    if (value) {
        const html = `<li class="item-todo">
                        <span>
                            ${value}
                        </span>
                        <i class='bx bxs-trash-alt'></i>
                    </li>`
        li.innerHTML = html
        list.appendChild(li)
        input.value = ''
    }
}

btnAdd.addEventListener('click', addTodo)

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function (e) {
        const tagName = e.target.localName
        if (tagName !== 'i') {
            items[i].firstElementChild.classList.toggle('text-gach')
        } else {
            let value = items[i].firstElementChild.innerText

        }
    })
}