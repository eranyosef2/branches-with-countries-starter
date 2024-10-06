'use strict'

function onGetCountryInfo() {
    console.log('Hi')
    const countryName = document.getElementById('countryInput').value
    const preTag = document.getElementById('countryData')

    if (!countryName) {
        preTag.textContent = "Please enter a country name!"
        return
    }

    getCountryByName(countryName)
        .then(countryData => {
            renderInfo(countryData)
        })
        .catch(error => {
            preTag.textContent = "Error fetching country data!"
        })
}

function renderInfo(data) {
    console.log('Rendering...')
    const preTag = document.getElementById('countryData')
    preTag.textContent = JSON.stringify(data, null, 2)
}

document.getElementById('fetchBtn').addEventListener('click', onGetCountryInfo)