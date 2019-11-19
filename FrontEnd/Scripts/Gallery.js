function getall() {
    fetch("http://localhost:8080/artdetails/all/reverse")
        .then((res) => res.json())
        .then(json => output(json))
        .catch(err => console.error(err));
}

function output(txt) {
    let e = document.querySelector("p");
    e.innerHTML = "";
    console.log(txt);
    let i = 0;
    txt.forEach(art =>{
    let downloadbutton = document.createElement('a');
    downloadbutton.download;
    downloadbutton.innerHTML = "View";
    downloadbutton.className = "btn btn-orangu my-2";
    downloadbutton.href = art.image_url;
    let artshell = document.createElement('div');
    let artlink = document.createElement('a');
    let artwork = document.createElement('img');
    artshell.id = "GalleryShell" + i;
    artlink.id = "GalleryLink" + i;
    artshell.className = "col-sm-6 col-md-4 col-lg-3 item";
    artlink.dataset.lightbox = "photos";
    artlink.href = art.image_url;
    artwork.className = "img-fluid";
    artwork.src = art.image_url;
    document.getElementById('RecentGallery').append(artshell);
    document.getElementById('GalleryShell' + i).append(artlink);
    document.getElementById('GalleryLink' + i).append(artwork);
    document.getElementById('GalleryShell' + i).append(downloadbutton);
    i = i + 1;
}
    );
}
