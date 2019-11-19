let deleteoptions = document.getElementById('deleteoptions');
let groupchoice = document.getElementById('groupchoice');

function getAnyDetail(){
    if (groupchoice.value == "artist"){
        getArtistList();
    } else if (groupchoice.value == "character"){
        getCharacterList();
    } else if (groupchoice.value == "illustration"){
        getArtworkList();
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



function deletesection(){
    console.log(groupchoice.value);
    if (groupchoice.value == "artist"){
        fetch("http://localhost:8080/artist/remove/" + deleteoptions.value,{
            method: 'DELETE'
        })
        .then(json => alert("Removed Artist"))
        .catch(err => console.error(err));
    } else if (groupchoice.value == "character"){
        fetch("http://localhost:8080/character/remove/" + deleteoptions.value, {
            method: 'DELETE'
        })
        .then(json => alert("Removed Character"))
        .catch(err => console.error(err));
    } else if (groupchoice.value == "illustration"){
        fetch("http://localhost:8080/illustration/remove/" + deleteoptions.value, {
            method: 'DELETE'
        })
        .catch(err => console.error(err));

        fetch("http://localhost:8080/artdetails/remove/" + deleteoptions.value, {
            method: 'DELETE'
        })
        .then(json => alert("Removed Artwork"))
        .catch(err => console.error(err));
    }
}
