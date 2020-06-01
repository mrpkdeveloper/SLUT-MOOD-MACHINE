let value1 = document.getElementById('value-1')
let value2 = document.getElementById('value-2')
let value3 = document.getElementById('value-3')
// let idspeed = document.getElementById('idspeed')
let Stop_bttn = document.getElementById('stop-bttn')
let Start_bttn = document.getElementById('start-bttn')

let values = [
    '😁', '😃', '😎', '😇', '😅', '😠', '😨', '😕', '😁', '😁', '😁', '😁', '😁', '😁'
]

function randomvalues() {
    return values[Math.floor(Math.random() * 14)]
}

let animateid;

function updateanimation(newspeed) {
    if (animateid) clearInterval(animateid)

    animateid = setInterval(() => {
        value1.innerText = randomvalues()
        value2.innerText = randomvalues()
        value3.innerText = randomvalues()

    }, 1000 / newspeed)
}

// idspeed.onchange = function (ev) {
//     // document.documentElement => this is root of css
//     document.documentElement.style.setProperty('--speed', ev.target.value)
//     updateanimation(ev.target.value)
// }

Start_bttn.onclick = function () {
    document.documentElement.style.setProperty('--speed', 5)
    updateanimation(5)
}

Stop_bttn.onclick = function () {
    document.documentElement.style.setProperty('--speed', 0)
    clearInterval(animateid) //face change stop
    if (value1.innerText == value2.innerText && value1.innerText == value3.innerText) {
        console.log("u win")
        window.alert("u win")
    } else {
        console.log("u loose")
        window.alert("u loose")
    }
} 