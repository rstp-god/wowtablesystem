let dots = document.getElementsByName('class'),
    sub = document.getElementById('sub'),
    nik = document.getElementById('nik'),
    pol = document.getElementsByName('pol'),
    info = document.getElementById('info'),
    json

let inform = {
    nik: null,
    class: null,
    rol: null,
    dop: null
}



sub.addEventListener('click', () =>{
    
    inform.nik = nik.value
    if(!inform.nik)
        alert("Введи ник")
    
    for (let i = 0; i < dots.length; i++) {
    if (dots[i].checked) {
        inform.class = dots[i].value
        break
    }
    }
    for (let i = 0; i < pol.length; i++) {
    if (pol[i].checked) {
        inform.rol = pol[i].value
        break
    }
    }
    if(inform.class == null){
        alert("Выбери класс")
    }
    if(inform.rol == null){
        alert("Выбери роль")
    }
    inform.dop = info.value

     json = JSON.stringify(inform)
})