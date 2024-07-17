import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-bb2a5-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

onValue(referenceInDB, function(snapshot){
    if(snapshot.exists()){
        const snapshotValue =  snapshot.val()
        const leads = Object.values(snapshotValue)
        renderList(leads)
    }
})

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deletBtn = document.getElementById("delet-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function () {
    push(referenceInDB, inputEl.value)
    inputEl.value = ""
})

deletBtn.addEventListener("dblclick", function () {
    remove(referenceInDB)
    ulEl.innerHTML = ""
})

function renderList(leads) {
    let listItem = ""

    for (let i = 0; i < leads.length; i++) {
        listItem += `<li>
                        <a target = "_blank" href = "${leads[i]}">
                        ${leads[i]}
                        </a>
                    </li>`
    }
    ulEl.innerHTML = listItem
}