import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSetting = {
    databaseURL: "https://add-to-cart-3194e-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app) 
const shoppingListInDB = ref(database, "ShoppingList")

const inputData = document.getElementById("input-field")
const addBtn = document.getElementById("add-btn")
const shoppingList = document.getElementById("shopping-list") 

addBtn.addEventListener("click", function () {
    const inputText = inputData.value
    push(shoppingListInDB, inputText)
    inputData.value = ""
})

onValue(shoppingListInDB, function(snapshot){
    let itemsArray = Object.values(snapshot.val())

    shoppingList.innerHTML = "" 

    for (let i = 0; i < itemsArray.length; i++) {
        const element = itemsArray[i]; 
        appendItenToShoppingList(element)
    }
}) 
 

function appendItenToShoppingList(inputText){
    shoppingList.innerHTML += `<li>${inputText}</li>`
}