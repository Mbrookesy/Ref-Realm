let charnamechoice = document.getElementById('charnamechoice');
let hairstylechoice = document.getElementById('hairstylechoice');
let haircolourchoice = document.getElementById('haircolourchoice');
let eyecolourchoice = document.getElementById('eyecolourchoice');
let bodychoice = document.getElementById('bodychoice');
let franchisechoice = document.getElementById('franchisechoice');
let clothingchoice = document.getElementById('clothingchoice');
let sexchoice = document.getElementById('sexchoice');
let agechoice = document.getElementById('agechoice');
let pseudonymchoice = document.getElementById('pseudonymchoice');
let fnchoice = document.getElementById('fnchoice');
let lastnamechoice = document.getElementById('lastnamechoice');
let countrychoice = document.getElementById('countrychoice');

let urlchoice = document.getElementById('urlchoice');
let websitechoice = document.getElementById('websitechoice');

let mainid = document.getElementById('mainid');
let charid = document.getElementById('charid');
let artdetid = document.getElementById('artdetid');
let artistid = document.getElementById('artistid');

function artistSelector(){
    fetch("http://localhost:8080/artist/all/")
    .then((res) => res.json())
    .then(json => outputartist(json))
    .catch(err => console.error(err));
}

function outputartist(txt) {
    let i = 0;
    txt.forEach(artist =>{let SA = document.createElement('option');
    SA.value = artist.id;
    SA.innerText = artist.pseudonym;
    SA.id = "ArtistChoice" + i;
    document.getElementById('ArtistSelector').append(SA);
    i = i + 1;
}
    );
}

function characterSelector(){
    fetch("http://localhost:8080/character/all/")
    .then((res) => res.json())
    .then(json => outputcharacter(json))
    .catch(err => console.error(err));
}

function outputcharacter(txt) {
    let i = 0;
    txt.forEach(char =>{let SA = document.createElement('option');
    SA.value = char.id;
    SA.innerText = "Name: " + char.name + " Series: " + char.series;
    SA.id = "CharChoice" + i;
    document.getElementById('CharacterSelector').append(SA);
    i = i + 1;
}
    );
}

let artistS = document.getElementById('ArtistSelector');
let charS = document.getElementById('CharacterSelector');

let artnamechoice = document.getElementById('artnamechoice');
let imgurlchoice = document.getElementById('imgurlchoice');
let anglechoice = document.getElementById('anglechoice');
let artstylechoice = document.getElementById('artstylechoice');
let colourstylechoice = document.getElementById('colourstylechoice');
let posechoice = document.getElementById('posechoice');
let scenechoice = document.getElementById('scenechoice');
let camerachoice = document.getElementById('camerachoice');
let mediumchoice = document.getElementById('mediumchoice');

function createIllu(){

    fetch("http://localhost:8080/artdetails/add/",{
        method: 'POST',
        body: JSON.stringify({
            artname: artnamechoice.value,
            image_url: imgurlchoice.value, 
            angle: anglechoice.value, 
            art_style: artstylechoice.value, 
            colour_style: colourstylechoice.value, 
            pose: posechoice.value, 
            scene: scenechoice.value, 
            camera_focus: camerachoice.value,
            medium: mediumchoice.value,
            artistId: artistS.value
         }),
        headers: { 'Content-type': 'application/json' }
    })
    .then(json => json.json())
    .catch(err => console.error(err));

    fetch("http://localhost:8080/artdetails/findmax/")
    .then(json => json.json())
    .then(result => fetch("http://localhost:8080/illustration/add/" + (result + 1) + "/" + charS.value, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' }
        })).then(json => json.json())
        .catch(err => console.error(err));
        alert("Illustration Added");
}
