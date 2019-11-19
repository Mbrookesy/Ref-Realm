let charname = document.getElementById('charname');
let charfranchise = document.getElementById('charfranchise');
let chareye = document.getElementById('chareye');
let charhaircol = document.getElementById('charhaircol');
let charhairstyle = document.getElementById('charhairstyle');
let chargender = document.getElementById('chargender');
let charage = document.getElementById('charage');
let charbody = document.getElementById('charbody');
let charclothing = document.getElementById('charclothing');

function addCharacter(){
    fetch("http://localhost:8080/character/add/"
    + charname.value + "/"
    + charhaircol.value + "/"
    + charhairstyle.value + "/"
    + chareye.value + "/"
    + charbody.value + "/"
    + charfranchise.value + "/"
    + charclothing.value + "/"
    + chargender.value + "/"
    + charage.value + "/", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' }
    })
    .then(json => alert("Character " + charname.value + " added"))
    .catch(err => console.error(err));
}

