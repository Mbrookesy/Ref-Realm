
function getall() {
    fetch("http://localhost:8080/character/all")
        .then((res) => res.json())
        .then(json => output(json))
        .catch(err => console.error(err));
}

function output(txt) {
    console.log(txt);
    let e = document.querySelector("p");
    e.innerHTML = "";
    txt.forEach(char => { let allstuff = document.createElement('p');
    allstuff.innerText = "id: " + char.id + " name: " + char.name;
    document.getElementById('bua').append(allstuff);}
    );

}