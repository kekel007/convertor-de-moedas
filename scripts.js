const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valueconverted = document.querySelector(".value-converted")
    const value = document.querySelector(".value")

    console.log(currencySelect.value)


    const dolarToday = 6.19
    const euroToday = 6.46
    const libraToday = 7.79
    const bitcoinToday = 135000


    if (currencySelect.value == "dolar") {
        value.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        value.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }


    if (currencySelect.value == "libra") {
        value.innerHTML = new Intl.NumberFormat("de-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    if (currencySelect.value == "bitcoin") {
        value.innerHTML = (inputCurrencyValue / bitcoinToday).toFixed(8) + "BTC"
    }


    valueconverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyname = document.getElementById("currency-name")
    const currencyimage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyname.innerHTML = "dolar"
        currencyimage.src = "./assets/usa.png"

    }

    if (currencySelect.value == "euro") {
        currencyname.innerHTML = "euro"
        currencyimage.src = "./assets/euro.png"

    }

    if (currencySelect.value == "libra") {
        currencyname.innerHTML = "libra"
        currencyimage.src = "./assets/libra.png"

    }

    if (currencySelect.value == "bitcoin") {
        currencyname.innerHTML = "bitcoin"
        currencyimage.src = "./assets/bitcoin.png"


    }



}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)



