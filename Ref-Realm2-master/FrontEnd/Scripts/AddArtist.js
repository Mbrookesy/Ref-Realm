let artistpse = document.getElementById('artistpse');
let artistfn = document.getElementById('artistfn');
let artistln = document.getElementById('artistln');
let artistcountry = document.getElementById('artistcountry');

function addArtist(){
    fetch("http://localhost:8080/artist/add/"
    + artistpse.value + "/"
    + artistfn.value + "/"
    + artistln.value + "/"
    + artistcountry.value + "/", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' }
    })
    .then(json => alert("Artist " + artistpse.value + " added"))
    .catch(err => console.error(err));
}