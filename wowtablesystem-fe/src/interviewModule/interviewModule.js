import StringInTables from '../services/StringInTables';
import CookieService from '../services/CookieService';
import RaidService from '../services/RaidService';


const api = new StringInTables(), 
      apiRaids = new RaidService(); 

let dots = document.getElementsByName('class'),
    submitButton = document.getElementById('submitButton'),
    nickName = document.getElementById('NicknameBox'),
    role = document.getElementsByName('RaidRole'),
    moreInformation = document.getElementById('info'), 
    icons = document.querySelectorAll('.dots'),
    error = document.getElementById('error'),
    errNick = document.getElementById('errNick'),
    errClass = document.getElementById('errClass'),
    errRol = document.getElementById('errRol'),
    complete = document.querySelector('.complete'), 
    success = document.querySelector('.success'), 
    header = document.querySelector('.text'), 
    dateBlock = document.getElementsByTagName('time'),
    Url = window.location.search;


const UUID = Url.slice(6,Url.indexOf('&')),
      raid = +Url.slice(Url.indexOf('&')+6,Url.lastIndexOf('&')), 
      RaidLeader = Url.slice(Url.lastIndexOf('&')+4);

      registerAllowed();

let inform = {
        nickName: undefined,
        class: undefined,
        role: undefined,
        moreInformation: undefined,
        nicknameOfRL: RaidLeader, 
        encryptedUrl: UUID, 
    },
    PrevRaidRole = undefined,
    PrevClassName = undefined,
    json; 

const loading = document.getElementsByClassName("loading")[0],
    container = document.getElementsByClassName("container")[0],
    containerMain = document.getElementsByClassName("MainContainer")[0];




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

submitButton.addEventListener('click', addData);
loadingEnd();

function addData (){

    loadingStart();

    error.style.display = 'none'
    errNick.style.display = 'none'
    errClass.style.display = 'none'
    errRol.style.display = 'none'
    let checkedInfotm = {
        nickName: false,
        class: false,
        role: false
    }
    
    inform.nickName = nickName.value;
    if(!inform.nickName){
        error.style.display = 'block'
        errNick.style.display = 'block'
        checkedInfotm.nickName = true
    }
        
    
    for (let i = 0; i < dots.length; i++) {
    if (dots[i].checked) {
        inform.class = dots[i].value
        checkedInfotm.class = true
        break;
    }
    }
    for (let i = 0; i < role.length; i++) {
    if (role[i].checked) {
        inform.role = role[i].value
        checkedInfotm.role = true
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
    inform.moreInfo = moreInformation.value;

    json = JSON.stringify(inform);
    
    api.createNewString(raid,json).then((response) => { 
        if(response.message === 'New instance just Created!') {
            loadingEnd(); 
            successResponse();
        }
    }); 
}


function loadingStart() {
    loading.style.display = "block"
    container.style.display = "none"
    containerMain.style.display = "none"
}

function loadingEnd() {
    loading.style.display = "none"
    container.style.display = "block"
    containerMain.style.display = "block"
}

function successResponse() { 
    complete.style.display = 'flex'; 
    success.style.display = 'flex'; 
    containerMain.style.display = "none"
    document.cookie = 'flag = already registerd expires 7d'; 
}

function alreadyEnd() {
    complete.style.display = 'flex';
    success.textContent = 'Упс, регистрация уже закончилась! В следующий раз обязательно успеешь!'; 
    success.style.display = 'flex'; 
    containerMain.style.display = "none"
}

function registerAllowed() { 
    apiRaids.getRaidsByUUID(raid,UUID).then((response) => { 
        let expiresDate = new Date(response[0].dueDate), 
            today = new Date(); 
        if (expiresDate <= today)  {
            alreadyEnd();
        }
        switch(raid) {
            case 0: { 
                header.textContent = 'Каражан'
                break; 
            }
            case 1: { 
                header.textContent = 'Логово Магтеридона'
                break; 
            }
            case 2: { 
                header.textContent = 'Наксрамас'
                break; 
            }
            case 3: { 
                header.textContent = 'Логово груула'
                break; 
            }
        }
        dateBlock[0].innerHTML=expiresDate.toLocaleDateString();
    })
}
