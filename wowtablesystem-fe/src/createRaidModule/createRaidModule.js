const nameRaid = document.getElementById("raid"),
    dateRaid = document.getElementById("day"),
    Vector1 = document.getElementsByClassName("Vector")[0],
    Vector2 = document.getElementsByClassName("Vector")[1],
    valueRaid = document.getElementById("nameRaid2"),
    valueR = document.getElementsByName("raid"),
    raidName = document.getElementsByClassName("nameRaid")[0],
    submitButton = document.getElementsByClassName("addRaid")[0],
    error = document.getElementById('error'),
    errRaid = document.getElementById('errRaid')

const loading = document.getElementsByClassName("loading")[0],
    container = document.getElementsByClassName("container")[0],
    containerHead = document.getElementsByClassName("container-head")[0]

let xhr = new XMLHttpRequest(); 
xhr.open("GET", "createRaidModule.html", false)
xhr.send();
console.log(xhr.status)

if(xhr.status == 200){
    loading.style.display = "none"
    container.style.display = "block"
    containerHead.style.display = "block"
}

let valueRaidCheck = false,
    raidInform = {
        raid: undefined,
        data: undefined
    },
    json

raidName.addEventListener("click", () => {
    if (!valueRaidCheck) {
        valueRaid.style.display = "flex"
        valueRaidCheck = true}
    else {
        valueRaid.style.display = "none"
        valueRaidCheck = false}
})

valueR[1].addEventListener("click", () => {
    valueR[0].value = valueR[1].value
    valueRaid.style.display = "none"
})
valueR[2].addEventListener("click", () => {
    valueR[0].value = valueR[2].value
    valueRaid.style.display = "none"
})
valueR[3].addEventListener("click", () => {
    valueR[0].value = valueR[3].value
    valueRaid.style.display = "none"
})
valueR[4].addEventListener("click", () => {
    valueR[0].value = valueR[4].value
    valueRaid.style.display = "none"
})

submitButton.addEventListener("click", () => {

    error.style.display = 'none'
    errRaid.style.display = 'none'

    if (valueR[0].value == "ВЫБЕРИ ЗДЕСЬ") {
        error.style.display = 'block'
        errRaid.style.display = 'block'
    }else{
        raidInform.raid = valueR[0].value

        raidInform.data = dateRaid.value

        json = JSON.stringify(raidInform)
    }
})