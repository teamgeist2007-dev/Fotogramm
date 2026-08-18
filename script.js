const ImageCount = 12;

function renderImageCount(){
    for(let i = 1; i <= ImageCount; i++){
        document.getElementById('photo-gallery').innerHTML += `<img src="./assets/img/Bild${i}.jpeg" alt="Bild ${i}">`;
    }
}

renderImageCount();