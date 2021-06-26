let dots = document.getElementsByName('class'),
    submitButton = document.getElementById('sub'),
    nickName = document.getElementById('nik'),
    role = document.getElementsByName('pol'),
    moreInformation = document.getElementById('info')

let inform = {
    nickName: undefined,
    class: undefined,
    role: undefined,
    moreInformation: undefined
}

const json

function addData (){
    
    inform.nickName = nickName.value
    if(!inform.nickName)
        alert("Введи ник")
    
    for (let i = 0; i < dots.length; i++) {
    if (dots[i].checked) {
        inform.class = dots[i].value
        break
    }
    }
    for (let i = 0; i < role.length; i++) {
    if (role[i].checked) {
        inform.role = role[i].value
        break
    }
    }
    if(!inform.class){
        alert("Выбери класс")
    }
    if(!inform.role){
        alert("Выбери роль")
    }
    inform.moreInformation = moreInformation.value

    json = JSON.stringify(inform)
}
sub.addEventListener('click', addData)

