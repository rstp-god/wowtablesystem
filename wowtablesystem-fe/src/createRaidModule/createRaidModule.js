import {v4 as uuid} from "uuid";
import RaidService from "../services/RaidService";

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
    date = new Date(),
    raidApi = new RaidService;

dateRaid.value=formattedDate(date);

const loading = document.getElementsByClassName("loading")[0],
    container = document.getElementsByClassName("container")[0],
    containerHead = document.getElementsByClassName("container-head")[0]

let valueRaidCheck = false,
    raid, 
    raidInform = {
        dueDate: undefined, 
        encryptedUrlToTable: undefined
    },
    json;

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

    if (valueR[0].value == "ВЫБЕРИ ЗДЕСЬ") {
        error.style.display = 'block' ;
        errRaid.style.display = 'block' ;
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
        json = JSON.stringify(raidInform) ;

        raidApi.createNewRaid(raid,json).then((res)=> { 
            // TODO loading end
            if(res.message === 'New instance just Created!') {
                let newUrl =''; 
                newUrl = `${urltoInterview.href.slice(0,urltoInterview.href.lastIndexOf('/'))}/interviewModule.html?uuid=${raidInform.encryptedUrlToTable}`; 
                urltoInterview.href = newUrl;
                console.log(urltoInterview);
                newUrl = `${urltoTable.href.slice(0,urltoInterview.href.lastIndexOf('/'))}/reviewTableModule.html?uuid=${raidInform.encryptedUrlToTable}`; 
                urltoTable.href = newUrl; 
                console.log(urltoTable); 
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
