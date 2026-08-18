const ImageCount = 12;

function renderImageCount(){
    for(let i = 1; i <= ImageCount; i++){
        document.getElementById('photo-gallery').innerHTML += `<img class="gallery-image" src="./assets/img/Bild${i}.jpeg" alt="Bild ${i}" onclick="openImage(${i})">`;
    }
}

function openImage(i){
    const ImageDialog = document.getElementById('image-dialog');

    ImageDialog.innerHTML = `<img class="dialog-image" src="./assets/img/Bild${i}.jpeg" alt="Bild ${i}">`;
    ImageDialog.showModal();
}

renderImageCount();