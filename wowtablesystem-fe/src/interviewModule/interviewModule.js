let dots = document.getElementsByName('class'),
    submitButton = document.getElementById('submitButton'),
    nickName = document.getElementById('NicknameBox'),
    role = document.getElementsByName('RaidRole'),
    moreInformation = document.getElementById('info');

let inform = {
    nickName: undefined,
    class: undefined,
    role: undefined,
    moreInformation: undefined
}

let json

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

    json = JSON.stringify(inform);
    console.log(json);
}
submitButton.addEventListener('click', addData)
