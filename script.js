const ImageCount = 12;

function renderImageCount(){
    for(let i = 1; i <= ImageCount; i++){
        document.getElementById('photo-gallery').innerHTML += `<img class="gallery-image" src="./assets/img/Bild${i}.jpeg" alt="Bild ${i}" onclick="openImage(${i})">`;
    }
}

function openImage(i){
    const imageDialog = document.getElementById('image-dialog');
    const dialogImage = document.getElementById('dialog-image');

    dialogImage.src = `./assets/img/Bild${i}.jpeg`;
    dialogImage.alt = `Bild ${i}`;
    document.getElementById('dialog-title').innerHTML = `Bild ${i}`;
    imageDialog.showModal();
    document.getElementById('dialog-title').focus();
}

function closeImage() {
    document.getElementById('image-dialog').close();
    
}

renderImageCount();