function getall() {
    fetch("http://localhost:8080/artdetails/all")
        .then((res) => res.json())
        .then(json => output(json))
        .catch(err => console.error(err));
}

function output(txt) {
    let e = document.querySelector("p");
    e.innerHTML = "";
    console.log(txt);
    txt.forEach(art =>{let artshell = document.createElement('div');
    let artlink = document.createElement('a');
    let artwork = document.createElement('img');
    artshell.className = "col-sm-6 col-md-4 col-lg-3 item";
    artlink.data-lightbox = "photos";
    artlink.href = art.image_url;
    artwork.className = "img-fluid";
    artwork.src = art.image_url;
    //postered.addEventListener('click', () => window.location.href = './film.html?id=' + film.imdbID);
    document.getElementById('card').append(postered);
    document.getElementById('card').append(title);
    document.getElementById('card').append(restText);}
    );
}
