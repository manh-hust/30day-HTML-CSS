const input = document.querySelector('#search-input')
const city = document.querySelector('#city')
const time = document.querySelector('#time')
const temperature = document.querySelector('#temperature')
const shortDesc = document.querySelector('.short-desc')
const view = document.querySelector('#view')
const wind = document.querySelector('#wind')
const cloud = document.querySelector('#cloud')

async function changeWeatherUI(cityInput) {
    let value = cityInput || 'ha noi'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    const res = await fetch(url)
    const data = await res.json()
    const cityName = data.name
    const country = data.sys.country
    city.innerText = `${cityName}, ${country}`
    view.innerText = data.visibility + ' (m)'
    wind.innerText = data.wind.speed + ' (m/s)'
    cloud.innerText = data.main.humidity + ' (%)'
    temperature.innerText = data.main.temp.toFixed()
    shortDesc.innerText = data.weather[0].main
    time.innerText = new Date().toLocaleDateString('vi')
}

changeWeatherUI()

addEventListener('keydown', function (e) {
    const whichEnter = e.which
    if (whichEnter === 13) {
        changeWeatherUI(input.value.trim())
        input.value = ''
    }

})