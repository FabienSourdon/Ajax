let navBar = document.getElementById('navBar');
let mainCont = document.getElementById('main');
let navBtn = document.getElementById('navBtn');
let xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://swapi.dev/api/", true);
xhttp.responseType = 'json';
xhttp.send();

xhttp.onload = function () {
    let reponse = xhttp.response;
    let cntRep = Object.keys(reponse).length;
    newNav(reponse);
    addOnClick(reponse);

    //console.log(countJson)
}


/* FONCTIONS */

/* Ajout des menus */

function newNav(e) {
    for (elem in e) {
        let newDiv = document.createElement('div');
        newDiv.className = "menu"
        newDiv.innerHTML = "<p>" + elem + "</p>"
        navBar.appendChild(newDiv);
    }
}
/* ajout des events listener */

function addOnClick(e) {
    for (let i = 0; i < Object.keys(e).length; i++) {
        let objDiv = document.getElementsByClassName("menu");
        objDiv[i].addEventListener('click', function () { clickMenu(objDiv[i].innerText) });
    }
}

/* ajout déclenchement du click */

function clickMenu(e) {

    let reqChar = new XMLHttpRequest();
    reqChar.open("GET", "https://swapi.dev/api/" + e, true);
    reqChar.responseType = 'json';
    reqChar.send();

    reqChar.onload = function () {
        let repChar = reqChar.response;
        console.log(repChar)
    }
}