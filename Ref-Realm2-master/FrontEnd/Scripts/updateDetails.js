let deleteoptions = document.getElementById('deleteoptions');
let groupchoice = document.getElementById('groupchoice');
let detailsChange = document.getElementById('DetailsChange');

function getAnyDetail2(){
    if (groupchoice.value == "artist"){
        getArtistList();
    } else if (groupchoice.value == "character"){
        getCharacterList();
    } else if (groupchoice.value == "illustration"){
        getArtworkList();
    }
}

function getAnyDetail(){
    if (groupchoice.value == "artist"){
        getArtistDetails1();
    } else if (groupchoice.value == "character"){
        getCharacterDetails1();
    } else if (groupchoice.value == "illustration"){
        getArtworkDetails1();
    }
}

function getArtistList(){
    fetch("http://localhost:8080/artist/all")
        .then((res) => res.json())
        .then(json => displayAritst(json))
        .catch(err => console.error(err));
}

function displayAritst(txt) {
    deleteoptions.innerHTML = "";
    let i = 0;
    txt.forEach(artist =>{let choiceist = document.createElement('option');
    choiceist.id = "artistchoiceid" + i;
    choiceist.value = artist.id;
    choiceist.innerText = artist.pseudonym;
    document.getElementById('deleteoptions').append(choiceist);
    i++;
}
    );
}

function getArtistDetails1(){
    fetch("http://localhost:8080/artist/find/" + deleteoptions.options[deleteoptions.selectedIndex].value)
    .then((res) => res.json())
    .then(json => getArtistDetails2(json))
    .catch(err => console.error(err));
}

function getArtistDetails2(txt){
    detailsChange.innerHTML = "";
    let i = 0;
    txt.forEach(artist =>{
        let pseudo = document.createElement('input');
        let FN = document.createElement('input');
        let LN = document.createElement('input');
        let Ctry = document.createElement('input');

        let pseudotag = document.createElement('p');
        let FNtag = document.createElement('p');
        let LNtag = document.createElement('p');
        let Ctrytag = document.createElement('p');

        pseudo.value = artist.pseudonym;
        pseudotag.innerText = "Username: ";
        pseudotag.className = "lead text-white";
        FN.value = artist.firstName;
        FNtag.innerText = "First Name: ";
        FNtag.className = "lead text-white";
        LN.value = artist.lastName;
        LNtag.innerText = "Last Name: ";
        LNtag.className = "lead text-white";
        Ctry.value = artist.country;
        Ctrytag.innerText = "Country: ";
        Ctrytag.className = "lead text-white";

        pseudo.id = "artistDetailpseudo";
        FN.id = "artistDetailFN";
        LN.id = "artistDetailLN";
        Ctry.id = "artistDetailCtry";

        document.getElementById('DetailsChange').append(pseudotag);
        document.getElementById('DetailsChange').append(pseudo);
        document.getElementById('DetailsChange').append(FNtag);
        document.getElementById('DetailsChange').append(FN);
        document.getElementById('DetailsChange').append(LNtag);
        document.getElementById('DetailsChange').append(LN);
        document.getElementById('DetailsChange').append(Ctrytag);
        document.getElementById('DetailsChange').append(Ctry);
        i++;
    }
    );
}

function getCharacterList(){
    fetch("http://localhost:8080/character/all")
    .then((res) => res.json())
    .then(json => displayCharacter(json))
    .catch(err => console.error(err));
}

function displayCharacter(txt) {
    deleteoptions.innerHTML = "";
    let i = 0;
    txt.forEach(char =>{let choicechar = document.createElement('option');
    choicechar.id = "charchoiceid" + i;
    choicechar.value = char.id;
    choicechar.innerText = "Name: " + char.name + " Series: " + char.series;
    document.getElementById('deleteoptions').append(choicechar);
    i++;
}
    );
}

function getCharacterDetails1(){
    fetch("http://localhost:8080/character/find/" + deleteoptions.options[deleteoptions.selectedIndex].value)
    .then((res) => res.json())
    .then(json => getCharacterDetails2(json))
    .catch(err => console.error(err));
}

function getCharacterDetails2(txt){
    detailsChange.innerHTML = "";
    let i = 0;
    txt.forEach(char =>{
        let name = document.createElement('input');
        let hairColour = document.createElement('input');
        let hairStyle = document.createElement('input');
        let eyeColour = document.createElement('input');
        let bodyType = document.createElement('input');
        let series = document.createElement('input');
        let clothingStyle = document.createElement('input');
        let sex = document.createElement('input');
        let ageGroup = document.createElement('input');

        let nametag = document.createElement('p');
        let HCtag = document.createElement('p');
        let HStag = document.createElement('p');
        let ECtag = document.createElement('p');
        let BTtag = document.createElement('p');
        let Seriestag = document.createElement('p');
        let CStag = document.createElement('p');
        let Sextag = document.createElement('p');
        let AGtag = document.createElement('p');

        nametag.innerText = "Name: ";
        nametag.className = "lead text-white";
        HCtag.innerText = "Hair Colour: ";
        HCtag.className = "lead text-white";
        HStag.innerText = "Hair Style: ";
        HStag.className = "lead text-white";
        ECtag.innerText = "Eye Colour: ";
        ECtag.className = "lead text-white";
        BTtag.innerText = "Body Type: ";
        BTtag.className = "lead text-white";
        Seriestag.innerText = "Series: ";
        Seriestag.className = "lead text-white";
        CStag.innerText = "Clothing Style: ";
        CStag.className = "lead text-white";
        Sextag.innerText = "Sex: ";
        Sextag.className = "lead text-white";
        AGtag.innerText = "Age Group: ";
        AGtag.className = "lead text-white";
        
        name.value = char.name;
        hairColour.value = char.hair_colour;
        hairStyle.value = char.hair_style;
        eyeColour.value = char.eye_colour;
        bodyType.value = char.body_type;
        series.value = char.series;
        clothingStyle.value = char.clothing_style;
        sex.value = char.sex;
        ageGroup.value = char.age_group;

        name.id = "charDetName";
        hairColour.id = "charDetHC";
        hairStyle.id = "charDetHS";
        eyeColour.id = "charDetEC";
        bodyType.id = "charDetBT";
        series.id = "charDetSeries";
        clothingStyle.id = "charDetCS";
        sex.id = "charDetSex";
        ageGroup.id = "charDetAG";

        document.getElementById('DetailsChange').append(nametag);
        document.getElementById('DetailsChange').append(name);
        document.getElementById('DetailsChange').append(HCtag);
        document.getElementById('DetailsChange').append(hairColour);
        document.getElementById('DetailsChange').append(HStag);
        document.getElementById('DetailsChange').append(hairStyle);
        document.getElementById('DetailsChange').append(ECtag);
        document.getElementById('DetailsChange').append(eyeColour);
        document.getElementById('DetailsChange').append(BTtag);
        document.getElementById('DetailsChange').append(bodyType);
        document.getElementById('DetailsChange').append(Seriestag);
        document.getElementById('DetailsChange').append(series);
        document.getElementById('DetailsChange').append(CStag);
        document.getElementById('DetailsChange').append(clothingStyle);
        document.getElementById('DetailsChange').append(Sextag);
        document.getElementById('DetailsChange').append(sex);
        document.getElementById('DetailsChange').append(AGtag);
        document.getElementById('DetailsChange').append(ageGroup);
        
        i++;
    }
    );
}

function getArtworkList(){
    fetch("http://localhost:8080/artdetails/all")
    .then((res) => res.json())
    .then(json => displayArtwork(json))
    .catch(err => console.error(err));
}

function displayArtwork(txt) {
    deleteoptions.innerHTML = "";
    let i = 0;
    txt.forEach(art =>{let choicework = document.createElement('option');
    choicework.id = "artworkchoiceid" + i;
    choicework.value = art.id;
    choicework.innerText = art.artname;
    document.getElementById('deleteoptions').append(choicework);
    i++;
}
    );
}

function getArtworkDetails1(){
    fetch("http://localhost:8080/artdetails/find/" + deleteoptions.options[deleteoptions.selectedIndex].value)
    .then((res) => res.json())
    .then(json => getArtworkDetails2(json))
    .catch(err => console.error(err));
}

function getArtworkDetails2(txt){
    detailsChange.innerHTML = "";
    let i = 0;
    txt.forEach(artwork =>{
        let name = document.createElement('input');
        let imgurl = document.createElement('input');
        let angle = document.createElement('input');
        let artStyle = document.createElement('input');
        let colourStyle = document.createElement('input');
        let pose = document.createElement('input');
        let scene = document.createElement('input');
        let camerafocus = document.createElement('input');
        let medium = document.createElement('input');
        let artist = document.createElement('input');

        let namettag = document.createElement('p');
        let IGtag = document.createElement('p');
        let Angletag = document.createElement('p');
        let ASttag = document.createElement('p');
        let CSttag = document.createElement('p');
        let Posetag = document.createElement('p');
        let Scenetag = document.createElement('p');
        let CFtag = document.createElement('p');
        let Mediumtag = document.createElement('p');
        let Artisttag = document.createElement('p');

        namettag.innerText = "Art Name: ";
        namettag.className = "lead text-white";
        IGtag.innerText = "URL: ";
        IGtag.className = "lead text-white";
        Angletag.innerText = "Angle: ";
        Angletag.className = "lead text-white";
        ASttag.innerText = "Art Style: ";
        ASttag.className = "lead text-white";
        CSttag.innerText = "Clothing Style: ";
        CSttag.className = "lead text-white";
        Posetag.innerText = "Pose: ";
        Posetag.className = "lead text-white";
        Scenetag.innerText = "Scene: ";
        Scenetag.className = "lead text-white";
        CFtag.innerText = "Sex: ";
        CFtag.className = "lead text-white";
        Mediumtag.innerText = "Medium: ";
        Mediumtag.className = "lead text-white";
        Artisttag.innerText = "Artist ID: ";
        Artisttag.className = "lead text-white";
        
        name.value = artwork.artname;
        imgurl.value = artwork.image_url;
        angle.value = artwork.angle;
        artStyle.value = artwork.art_style;
        colourStyle.value = artwork.colour_style;
        pose.value = artwork.pose;
        scene.value = artwork.scene;
        camerafocus.value = artwork.camera_focus;
        medium.value = artwork.medium;
        artist.value = artwork.artistId;

        name.id = "artworkDetName";
        imgurl.id = "artworkDetIMG";
        angle.id = "artworkDetAngle";
        artStyle.id = "artworkDetAS";
        colourStyle.id = "artworkDetCS";
        pose.id = "artworkDetPose";
        scene.id = "artworkDetScene";
        camerafocus.id = "artworkDetCF";
        medium.id = "artworkDetMedium";
        artist.id = "artworkDetArt";

        document.getElementById('DetailsChange').append(namettag);
        document.getElementById('DetailsChange').append(name);
        document.getElementById('DetailsChange').append(IGtag);
        document.getElementById('DetailsChange').append(imgurl);
        document.getElementById('DetailsChange').append(Angletag);
        document.getElementById('DetailsChange').append(angle);
        document.getElementById('DetailsChange').append(ASttag);
        document.getElementById('DetailsChange').append(artStyle);
        document.getElementById('DetailsChange').append(CSttag);
        document.getElementById('DetailsChange').append(colourStyle);
        document.getElementById('DetailsChange').append(Posetag);
        document.getElementById('DetailsChange').append(pose);
        document.getElementById('DetailsChange').append(Scenetag);
        document.getElementById('DetailsChange').append(scene);
        document.getElementById('DetailsChange').append(CFtag);
        document.getElementById('DetailsChange').append(camerafocus);
        document.getElementById('DetailsChange').append(Mediumtag);
        document.getElementById('DetailsChange').append(medium);
        document.getElementById('DetailsChange').append(Artisttag);
        document.getElementById('DetailsChange').append(artist);
    }
    );
}

function deletesection(){
    console.log(groupchoice.value);

    let pseudoA = document.getElementById("artistDetailpseudo");
    let FNA = document.getElementById("artistDetailFN");
    let LNA = document.getElementById("artistDetailLN");
    let CtryA = document.getElementById("artistDetailCtry");

    let nameC = document.getElementById("charDetName");
    let hairColourC = document.getElementById("charDetHC");
    let hairStyleC = document.getElementById("charDetHS");
    let eyeColourC = document.getElementById("charDetEC");
    let bodyTypeC = document.getElementById("charDetBT");
    let seriesC = document.getElementById("charDetSeries");
    let clothingStyleC = document.getElementById("charDetCS");
    let sexC = document.getElementById("charDetSex");
    let ageGroupC = document.getElementById("charDetAG");

    let nameAr = document.getElementById("artworkDetName");
    let imgurlAr = document.getElementById("artworkDetIMG");
    let angleAr = document.getElementById("artworkDetAngle");
    let artStyleAr = document.getElementById("artworkDetAS");
    let colourStyleAr = document.getElementById("artworkDetCS");
    let poseAr = document.getElementById("artworkDetPose");
    let sceneAr = document.getElementById("artworkDetScene");
    let camerafocusAr = document.getElementById("artworkDetCF");
    let mediumAr = document.getElementById("artworkDetMedium");
    let artistAr = document.getElementById("artworkDetArt");

    if (groupchoice.value == "artist"){
        fetch("http://localhost:8080/artist/update/" + deleteoptions.options[deleteoptions.selectedIndex].value + "/" + pseudoA.value + "/" + FNA.value + "/" + LNA.value + "/" + CtryA.value, {
            method: 'PUT'
        })
        .then(json => alert("Updated Artist"))
        .catch(err => console.error(err));
    } else if (groupchoice.value == "character"){
        fetch("http://localhost:8080/character/update/" + deleteoptions.options[deleteoptions.selectedIndex].value + "/" + nameC.value + "/" + hairColourC.value + "/" + hairStyleC.value + "/" + eyeColourC.value + "/" + bodyTypeC.value + "/" + seriesC.value + "/" + clothingStyleC.value + "/" + sexC.value + "/" + ageGroupC.value, {
            method: 'PUT'
        })
        .then(json => alert("Updated Character"))
        .catch(err => console.error(err));
    } else if (groupchoice.value == "illustration"){
        fetch("http://localhost:8080/artdetails/update/", {
            method: 'PUT',
        body: JSON.stringify({
            id: deleteoptions.options[deleteoptions.selectedIndex].value,
            artname: nameAr.value,
            image_url: imgurlAr.value, 
            angle: angleAr.value, 
            art_style: artStyleAr.value, 
            colour_style: colourStyleAr.value, 
            pose: poseAr.value, 
            scene: sceneAr.value, 
            camera_focus: camerafocusAr.value,
            medium: mediumAr.value,
            artistId: artistAr.value
         }),
        headers: { 'Content-type': 'application/json' }
    })
        .then(json => alert("Updated Artwork"))
        .catch(err => console.error(err));
    }
}
