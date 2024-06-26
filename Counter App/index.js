let count = 0

function increment(){
    count = count + 1
    document.getElementById("count").innerText = count 
}

function save(){
    document.getElementById("record").textContent += count + " -"
    count = 0
    document.getElementById("count").innerText = count  
}