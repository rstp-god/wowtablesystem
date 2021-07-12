import iconsEnum from '../enums'; 
import StringInTable from '../services/StringInTables'; 
import RaidService from '../services/RaidService';

const api = new StringInTable(), 
      apiRaids = new RaidService();

const loading = document.getElementsByClassName("loading")[0],
    container = document.getElementsByClassName("container")[0],
    tableContainer = document.getElementsByClassName("container")[0],
    choiseBlocks = document.getElementsByClassName("choiseBlocks")[0],
    header = document.querySelector('.text'), 
    dateBlock = document.getElementsByTagName('time'), 
    insertInTable = document.getElementsByTagName('table'), 
    Url = window.location.search;

const UUID = Url.slice(6,Url.indexOf('&')),
      raid = +Url.slice(Url.indexOf('&')+6,Url.lastIndexOf('&')), 
      RaidLeader = Url.slice(Url.lastIndexOf('&')+4);

loadingStart(); 
console.log(insertInTable); 
let insertString = `<tr class="allLines">
                    <th class="tableLines highLine" id="numberLine">№</th>
                    <th class="tableLines highLine">Никнейм</th>
                    <th class="tableLines highLine">Роль</th>
                    <th class="tableLines highLine">Класс</th>
                    <th class="tableLines highLine" id="lastLineBlock">Комментарий</th>
                    </tr>`; 

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
     
api.getByNicknameAndUUID(raid,RaidLeader,UUID).then((res)=> {
    if(res.lenght !== 0) {
        console.log(res);
        res.forEach((value) => {
            insertString += `
            <tr class="allLines">
            <td class="tableLines" id="firstLineBlock">${value.id}</td>
            <td class="tableLines"> 
                <p class="textInTable">
                    ${value.nickName}
                </p>
            </td>
            <td class="tableLines">
                    <div class='imgContent'>
                            <img class="icons" src="${iconsEnum[value.role]}">
                            <p class="textInTable">${value.role}</p>
                    </div>
            </td>
            <td class="tableLines">
                    <div class='imgContent'>
                        <img class="icons" src="${iconsEnum[value.class]}">
                        <p class="textInTable">${value.class}</p>
                    </div>
            </td>
            <td class="tableLines" id="lastLineBlock"> 
                <p class="textInTable">
                    ${value.moreInfo}
                </p>
            </td>
        </tr>`
        });
        loadingEnd();
    }
}); 



function loadingStart() {
    loading.style.display = "block"
    container.style.display = "none"
    choiseBlocks.style.display = "none"
    tableContainer.style.display = "none"
}

function loadingEnd() { 
    loading.style.display = "none"
    container.style.display = "block"
    choiseBlocks.style.display = "block"
    tableContainer.style.display = "block"
    insertInTable[0].innerHTML  =  insertString;
}
