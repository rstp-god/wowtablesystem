let dots = document.getElementsByName('class'),
    submitButton = document.getElementById('submitButton'),
    nickName = document.getElementById('NicknameBox'),
    role = document.getElementsByName('RaidRole'),
    moreInformation = document.getElementById('info'), 
    icons = document.querySelectorAll('.dots'),
    error = document.getElementById('error'),
    errNick = document.getElementById('errNick'),
    errClass = document.getElementById('errClass'),
    errRol = document.getElementById('errRol')
   
let inform = {
    nickName: undefined,
    class: undefined,
    role: undefined,
    moreInformation: undefined
    },
    PrevRaidRole = undefined,
    PrevClassName = undefined,
    json; 

icons.forEach((icon)=> { 
    icon.addEventListener( 'click' , 
    (event) => { 
        let element = document.getElementById(event.target.id).parentElement.nextElementSibling; 
        if (event.target.name === 'RaidRole') {
            element.classList.add('_active');
            PrevRaidRole ? document.getElementById(PrevRaidRole).parentElement.nextElementSibling.classList.remove('_active') : PrevRaidRole = event.target.id;
            PrevRaidRole = event.target.id; 
        } 
        if (event.target.name === 'class') {
            element.classList.add('_active');
            PrevClassName ? document.getElementById(PrevClassName).parentElement.nextElementSibling.classList.remove('_active') : PrevClassName = event.target.id;
            PrevClassName = event.target.id;    
        }
    }); 
}); 

submitButton.addEventListener('click', addData)

function addData (){

    error.style.display = 'none'
    errNick.style.display = 'none'
    errClass.style.display = 'none'
    errRol.style.display = 'none'
    
    inform.nickName = nickName.value;
    if(!inform.nickName){
        error.style.display = 'block'
        errNick.style.display = 'block'
    }
        
    
    for (let i = 0; i < dots.length; i++) {
    if (dots[i].checked) {
        inform.class = dots[i].value
        break;
    }
    }
    for (let i = 0; i < role.length; i++) {
    if (role[i].checked) {
        inform.role = role[i].value
        break;
    }
    }
    if(!inform.class){
        error.style.display = 'block'
        errClass.style.display = 'block'
    }
    if(!inform.role){
        error.style.display = 'block'
        errRol.style.display = 'block'
    }
    inform.moreInformation = moreInformation.value;

    json = JSON.stringify(inform);
}

