const cityInput = document.querySelector('.city-input')
const searchBtn = document.querySelector('.search-btn')
const currentTempH1 = document.querySelector('.current-temp')
const form = document.querySelector('.form')

function handleSubmit(e) {
    e.preventDefault()

    const data = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value}&limit=5&appid=a51a186c7e0ce109902c5ce15b6ee69e`)

    console.log(data)

    /*
    const { currentTemp } = data
    
    if (Number(currentTemp) < 10) {
        currentTempH1.textContent = currentTemp + 'ºC ❄️'
    } else if (Number(currentTemp) > 10 && Number(currentTemp) < 25) {
        currentTempH1.textContent = currentTemp + 'ºC ☀️'
    } else if (Number(currentTemp) > 25) {
        currentTempH1.textContent = currentTemp + 'ºC 🔥'
    }
    */
}

form.addEventListener('submit', handleSubmit)

