/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

function toonLogin(event) {
    event.preventDefault();
    
    document.querySelector('.loginbg').style.display='flex';
}
document.querySelector('.account').addEventListener("click", toonLogin);



function verbergLogin(event) {
    event.preventDefault();

    document.querySelector('.loginbg').style.display='none';
}
document.querySelector('.close').addEventListener("click", verbergLogin);



function toonEnd(event) {
    event.preventDefault();
    
    document.querySelector("#endread").style.display='flex';
}
document.getElementById("#mobiel").addEventListener("click", toonEnd);



var imgOpgeslagen = document.querySelector("#saved");

function toonSaved() {
    document.querySelector("#saved");
    imgOpgeslagen.innerHTML ='<img src="/images/trash.png">'; 
}
document.querySelector("#saved").addEventListener("click", toonSaved);



