let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deletBtn = document.getElementById("delet-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderList(myLeads)
}


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderList(myLeads)
})

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url) 
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderList(myLeads)
    })
})

deletBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    renderList(myLeads)
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