let charnamechoice = document.getElementById('charnamechoice');
let hairstylechoice = document.getElementById('hairstylechoice');
let haircolourchoice = document.getElementById('haircolourchoice');
let eyecolourchoice = document.getElementById('eyecolourchoice');
let bodychoice = document.getElementById('bodychoice');
let franchisechoice = document.getElementById('franchisechoice');
let clothingchoice = document.getElementById('clothingchoice');
let sexchoice = document.getElementById('sexchoice');
let agechoice = document.getElementById('agechoice');
let anglechoice = document.getElementById('anglechoice');
let artstylechoice = document.getElementById('artstylechoice');
let colourstylechoice = document.getElementById('colourstylechoice');
let posechoice = document.getElementById('posechoice');
let scenechoice = document.getElementById('scenechoice');
let camerachoice = document.getElementById('camerachoice');
let mediumchoice = document.getElementById('mediumchoice');
let pseudonymchoice = document.getElementById('pseudonymchoice');
let fnchoice = document.getElementById('fnchoice');
let lastnamechoice = document.getElementById('lastnamechoice');
let countrychoice = document.getElementById('countrychoice');

function searching() {
    let stringStatement = {
        character: {
            name: charnamechoice.value,
            hair_colour: haircolourchoice.value,
            hair_style: hairstylechoice.value,
            eye_colour: eyecolourchoice.value,
            body_type: bodychoice.value,
            series: franchisechoice.value,
            clothing_style: clothingchoice.value,
            sex: sexchoice.value,
            age_group: agechoice.value,
        },
        art_detail: {
            angle: anglechoice.value,
            art_style: artstylechoice.value,
            colour_style: colourstylechoice.value,
            pose: posechoice.value,
            scene: scenechoice.value,
            camera_focus: camerachoice.value,
            medium: mediumchoice.value,
            artist: {
                pseudonym: pseudonymchoice.value,
                firstName: fnchoice.value,
                lastName: lastnamechoice.value,
                country: countrychoice.value,
            }
        }};

        for (var i in stringStatement.character){
            if (stringStatement.character[i] == null || stringStatement.character[i] == null || stringStatement.character[i] == ""){
                delete stringStatement.character[i];
        }
    }
        for (var j in stringStatement.art_detail){
            if (stringStatement.art_detail[j] == null || stringStatement.art_detail[j] == null || stringStatement.art_detail[j] == ""){
                delete stringStatement.art_detail[j];
        }
    }

    for (var k in stringStatement.art_detail.artist){
        if (stringStatement.art_detail.artist[k] == null || stringStatement.art_detail.artist[k] == null || stringStatement.art_detail.artist[k] == ""){
            delete stringStatement.art_detail.artist[k];
    }
}
    fetch("http://localhost:8080/illustration/search/all", {
        method: 'POST',
        body: JSON.stringify(stringStatement),
        headers: { 'Content-type': 'application/json' }
    })
    .then(res => res.json())
    .then(json => output(json))
    .catch(err => console.error(err));
}



function output(txt) {
    document.getElementById('RecentGallery').innerHTML = '';
    console.log(txt);
    let i = 0;
    let before = "";
    txt.forEach(art =>{
        if (before == art.art_detail.image_url){
            return;
        }
    let downloadbutton = document.createElement('a');
    downloadbutton.download;
    downloadbutton.innerHTML = "View";
    downloadbutton.className = "btn btn-orangu my-2";
    downloadbutton.href = art.art_detail.image_url;
    let artshell = document.createElement('div');
    let artlink = document.createElement('a');
    let artwork = document.createElement('img');
    artshell.id = "GalleryShell" + i;
    artlink.id = "GalleryLink" + i;
    artshell.className = "col-sm-6 col-md-4 col-lg-3 item";
    artlink.dataset.lightbox = "photos";
    artlink.href = art.art_detail.image_url;
    artwork.className = "img-fluid";
    artwork.src = art.art_detail.image_url;
    document.getElementById('RecentGallery').append(artshell);
    document.getElementById('GalleryShell' + i).append(artlink);
    document.getElementById('GalleryLink' + i).append(artwork);
    document.getElementById('GalleryShell' + i).append(downloadbutton);
    before = art.art_detail.image_url;
    i = i + 1;
}
    );
}