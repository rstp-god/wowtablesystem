const loading = document.getElementsByClassName("loading")[0],
    container = document.getElementsByClassName("container")[0],
    tableContainer = document.getElementsByClassName("container")[0],
    choiseBlocks = document.getElementsByClassName("choiseBlocks")[0]

let xhr = new XMLHttpRequest(); 
xhr.open("GET", "createRaidModule.html", false)
xhr.send();
console.log(xhr.status)

if(xhr.status == 200){
    loading.style.display = "none"
    container.style.display = "block"
    choiseBlocks.style.display = "block"
    tableContainer.style.display = "block"
}
