const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

// const convert = (elem, target, isTrue) => {
//     elem.addEventListener('input', () => {
//         const request = new XMLHttpRequest()
//         request.open("GET", "data.json")
//         request.setRequestHeader("Content-type", "application/json")
//         request.send()
//         request.onload = () => {
//             const response = JSON.parse(request.response)
//             if (elem === som) {
//                 target.value = (elem.value / response.usd).toFixed(2)
//                 isTrue.value = (elem.value / response.eur).toFixed(2)
//             } else if (elem === usd) {
//                 target.value = (elem.value * response.usd).toFixed(2)
//                 isTrue.value = (elem.value * response.usd / response.eur).toFixed(2)
//             } else if (elem === eur) {
//                 target.value = (elem.value * response.eur).toFixed(2)
//                 isTrue.value = (elem.value * response.eur / response.usd).toFixed(2)
//             }
//             elem.value === '' && (target.value = '')
//             elem.value === '' && (isTrue.value = '')
//         }
//     })
// }

// convert(som, usd, eur, true)
// convert(usd, som, eur, false)
// convert(eur, som, usd, false)

document.addEventListener('DOMContentLoaded', function (elem, target, isTrue) {
    const som = document.querySelector('#som')
    const usd = document.querySelector('#usd')
    const eur = document.querySelector('#eur')
    async function fetchProducts(url) {
        let data = await fetch(url)
        let response = await data.json()
        elem.addEventListener('input', () => {
            if (elem === som) {
                target.value = (elem.value / response.usd).toFixed(2)
                isTrue.value = (elem.value / response.eur).toFixed(2)
            } else if (elem === usd) {
                target.value = (elem.value * response.usd).toFixed(2)
                isTrue.value = (elem.value * response.usd / response.eur).toFixed(2)
            } else if (elem === eur) {
                target.value = (elem.value * response.eur).toFixed(2)
                isTrue.value = (elem.value * response.eur / response.usd).toFixed(2)
            }


        })
    }
    fetchProducts('data.json')
})