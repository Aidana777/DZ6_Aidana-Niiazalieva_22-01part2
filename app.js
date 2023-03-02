const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const convert = (elem, target, isTrue) => {
    elem.addEventListener('input', () => {
        fetch('data.json')
            .then(response => response.json())
            .then(response => {
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
                elem.value === '' && (target.value = '')
                elem.value === '' && (isTrue.value = '')
            })

    })

}

convert(som, usd, eur, true)
convert(usd, som, eur, false)
convert(eur, som, usd, false)

