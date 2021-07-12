import {v4 as uuid} from "uuid";
import RaidService from "../services/RaidService";
import StringInTables from "../services/StringInTables";

const nameRaid = document.getElementById("raid"),
    dateRaid = document.getElementById("day"),
    Vector1 = document.getElementsByClassName("Vector")[0],
    Vector2 = document.getElementsByClassName("Vector")[1],
    valueRaid = document.getElementById("nameRaid2"),
    valueR = document.getElementsByName("raid"),
    raidName = document.getElementsByClassName("nameRaid")[0],
    submitButton = document.getElementsByClassName("addRaid")[0],
    error = document.getElementById('error'),
    errRaid = document.getElementById('errRaid'), 
    inputNameRaid = document.getElementsByClassName('inputNameRaid'),
    divNameRaid = document.getElementsByClassName('nameRaid'),
    urltoInterview = document.querySelectorAll('.url')[0],
    urltoTable =document.querySelectorAll('.url')[1],
    nicknameOfRl = document.querySelector('#nicknameBox'),
    errNick = document.querySelector('#errNick'),
    complete = document.querySelector('.complete'), 
    success = document.querySelector('.success'),
    date = new Date(),
    raidApi = new RaidService;

dateRaid.value=formattedDate(date);

const loading = document.getElementsByClassName("loading")[0],
    container = document.getElementsByClassName("container")[0],
    containerHead = document.getElementsByClassName("container-head")[0]

let valueRaidCheck = false,
    raid, 
    raidInform = {
        creatorNickName: undefined,
        dueDate: undefined, 
        encryptedUrlToTable: undefined
    },
    json;

if(window.location.hash !== '') {
    let nickname = '', 
        newUrl ='',
        raidIndex = window.location.hash.slice(window.location.hash.indexOf('&')+6); 
    raidApi.getRaidsByUUID(raidIndex,window.location.hash.slice(1,window.location.hash.indexOf('&')))
    .then((res) => {
        nickname = res[0].creatorNickName; 
        newUrl = `${urltoInterview.href.slice(0,urltoInterview.href.lastIndexOf('/'))}/interviewModule.html?uuid=${window.location.hash.slice(1,window.location.hash.indexOf('&'))}&RAID=${raidIndex}&RL=${nickname}`; 
        urltoInterview.href = newUrl;
        newUrl = `${urltoTable.href.slice(0,urltoInterview.href.lastIndexOf('/'))}/reviewTableModule.html?uuid=${window.location.hash}&RAID=${raidIndex}`; 
        urltoTable.href = newUrl; 
    });
    successResponse(); 
}

raidName.addEventListener("click", () => {
    if (!valueRaidCheck) {
        valueRaid.style.display = "flex"
        valueRaidCheck = true}
    else {
        valueRaid.style.display = "none"
        valueRaidCheck = false}
})

valueR[1].addEventListener("click", () => {
    valueR[0].value = valueR[1].value ;
    valueRaid.style.display = "none" ;
    inputNameRaid[0].classList.add('activeText');
    divNameRaid[0].classList.add('activeBlock');

})
valueR[2].addEventListener("click", () => {
    valueR[0].value = valueR[2].value ;
    valueRaid.style.display = "none" ;
    inputNameRaid[0].classList.add('activeText');
    divNameRaid[0].classList.add('activeBlock');
})
valueR[3].addEventListener("click", () => {
    valueR[0].value = valueR[3].value ;
    valueRaid.style.display = "none" ;
    inputNameRaid[0].classList.add('activeText');
    divNameRaid[0].classList.add('activeBlock');
})
valueR[4].addEventListener("click", () => {
    valueR[0].value = valueR[4].value ;
    valueRaid.style.display = "none" ;
    inputNameRaid[0].classList.add('activeText');
    divNameRaid[0].classList.add('activeBlock');
})

submitButton.addEventListener("click", () => {
    
    loadingStart();

    error.style.display = 'none' ;
    errRaid.style.display = 'none' ;
    errNick.style.display = 'none';

    if(nicknameOfRl.value === '') {
        error.style.display = 'flex' ;
        errNick.style.display = 'flex';
        loadingEnd(); 
    }
    if (valueR[0].value === "ВЫБЕРИ ЗДЕСЬ") {
        error.style.display = 'flex' ;
        errRaid.style.display = 'flex' ;
        loadingEnd(); 
    }else{
         switch(valueR[0].value) {
             case 'Каражан': { 
                raid = 0;  
                break; 
             }
             case 'Логово Магтеридона': { 
                raid = 1;  
                break; 
             }
             case 'Наксрамас': { 
                raid = 2;  
                break; 
             }
             case 'Логово Груула': { 
                raid = 3;  
                break; 
             }
         }

        raidInform.dueDate = dateRaid.value ;
        raidInform.encryptedUrlToTable = uuid(); 
        raidInform.creatorNickName = nicknameOfRl.value;
        json = JSON.stringify(raidInform) ;

        raidApi.createNewRaid(raid,json).then((res)=> { 
            if(res.message === 'New instance just Created!') {
                let newUrl =''; 
                newUrl = `${urltoInterview.href.slice(0,urltoInterview.href.lastIndexOf('/'))}/interviewModule.html?uuid=${raidInform.encryptedUrlToTable}&RAID=${raid}&RL=${nicknameOfRl.value}`; 
                urltoInterview.href = newUrl;
                newUrl = `${urltoTable.href.slice(0,urltoInterview.href.lastIndexOf('/'))}/reviewTableModule.html?uuid=${raidInform.encryptedUrlToTable}&RAID=${raid}`; 
                urltoTable.href = newUrl; 
                window.location.hash = raidInform.encryptedUrlToTable + '&RAID=' + raid; 
                successResponse(); 
                loadingEnd(); 
            }
        });
    }
});

loadingEnd(); 


function loadingStart() {
    loading.style.display = "block"
    container.style.display = "none"
    containerHead.style.display = "none"
}

function loadingEnd() {
    loading.style.display = "none"
    container.style.display = "block"
    containerHead.style.display = "block"
}

function formattedDate(d) {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
  
    return `${year}-${month}-${day}`;
}

function successResponse() { 
    complete.style.display = 'flex'; 
    success.style.display = 'flex'; 
}
