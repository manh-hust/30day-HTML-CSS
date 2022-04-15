const input = document.querySelector('#input')
const list = document.querySelector('.list')
const loading = document.querySelector('.loading')

const url = `https://fakestoreapi.com/products`

fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data) {
            setHtml(data)
            input.addEventListener('input', function (e) {
                var value = e.target.value
                var listFilter = data.filter(item => {
                    return item.title.toUpperCase().includes(value.toUpperCase(), 0) || item.price.toString().includes(value.toUpperCase(), 0)
                })
                setHtml(listFilter)
            })
        }
    })
    .catch((error) => {
        console.log("Error: ", error);
    })

function setHtml(data) {
    var html = data.map(item => {
        return `
        <li class="product">
            <img src="${item.image}" alt="">
            <div class="product-content">
                <h3>${item.title}</h3>
                <p>$${item.price}</p>
            </div>
        </li>
       `
    })
    list.innerHTML = html.join(' ')
}