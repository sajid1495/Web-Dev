let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    let inputVal = Number(inputEl.value) 

    let mTf = (inputVal * 3.28084).toFixed(3) 
    let fTm = (inputVal * 0.3048).toFixed(3)
    let outputEl = document.getElementById("output-length")
    outputEl.innerText = `${inputVal} meters = ${mTf} feets | ${inputVal} feets = ${fTm} meters`

    let lTg = (inputVal * 0.264172).toFixed(3)
    let gTl = (inputVal * 3.78541).toFixed(3)
    outputEl = document.getElementById("output-volume")
    outputEl.innerText = `${inputVal} liters = ${lTg} gallons | ${inputVal} gallons = ${gTl} liters`

    let kTp = (inputVal * 2.20462).toFixed(3)
    let pTk = (inputVal * 0.453592).toFixed(3)
    outputEl = document.getElementById("output-mass")
    outputEl.innerText = `${inputVal} kilograms = ${kTp} pounds | ${inputVal} pounds = ${pTk} kilograms`

})