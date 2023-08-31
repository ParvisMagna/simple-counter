let count = 0
let countStat = document.getElementById("count")
let countSave = document.getElementById("save")

function increment() {
    count += 1
    countStat.textContent = count
}

function save() {
    countSave.textContent += count + " - "
}