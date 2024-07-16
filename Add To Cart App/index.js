import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        shoppingList.innerHTML = ""
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItenToShoppingList(currentItem)
        }    
    } else {
        shoppingList.innerHTML = "No items here... yet"
    }
}) 
 

function appendItenToShoppingList(item){
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue
    
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    shoppingList.append(newEl)
}