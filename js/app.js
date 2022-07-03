"use strict";

let box = document.querySelector(".boxOne")
let input = document.querySelector(".input__text")
let form = document.querySelector(".form")



let renderLocation = function (data1) {
    let html = `
        <h2 class="country-name">${data1.name}</h2>
        <p style="font-size: 20px;" >Country: <span class="country-nickname">${data1.sys.country}</span></p>
        <p style="margin-bottom: 5px; margin-top: 5px; font-size: 18px;" class="gradus">${data1.main.temp} °C </p>
        <p style="font-size: 20px;">Speed: <span class="speed">${data1.wind.speed} m/s</span></p>    
        <p style="font-size: 18px; margin-top: 5px;">Desc: <span class="desc">${data1.weather[0].description}</span></p>    
        `
        box.insertAdjacentHTML('beforeend' , html)
    
}

let locationData = async function (location) {

    let locationApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)
    let data = await locationApi.json()
    console.log(data);
    renderLocation(data)
}


form.addEventListener("submit" , function(e){
    e.preventDefault()
    let inputValue =input.value 
    box.innerHTML = null 
    locationData(inputValue)
})