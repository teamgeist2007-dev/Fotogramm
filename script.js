const ImageCount = 12;

const ImageNames = [
    'Unterkunft in Moniga del Garda',
    'Platz in der Altstadt',
    'Balkon mit Blumen',
    'Altstadt mit Palmen',
    'Hotel Castello in Sirmione',
    'Zugbrücke der Scaligerburg in Sirmione',
    'Eingang der Scaligerburg in Sirmione',
    'Zitronenbaum am Gardasee',
    'Steinbrunnen am Gardasee',
    'Villa am Gardasee',
    'Blick über den Gardasee',
    'Straße in der Scaligerburg'
];

let currentImage = 1;

function renderImageCount(){
    for(let i = 1; i <= ImageCount; i++){
            const imageName = ImageNames[i - 1];
        document.getElementById('photo-gallery').innerHTML += `<img class="gallery-image" src="./assets/img/Bild${i}.jpeg" alt="${imageName}" onclick="openImage(${i})">`;
    }
}

function updateImage(){
    const imageName = ImageNames[currentImage - 1];
    const dialogImage = document.getElementById('dialog-image');

    dialogImage.src = `./assets/img/Bild${currentImage}.jpeg`;
    dialogImage.alt = imageName;
    document.getElementById('dialog-title').innerHTML = imageName;
    document.getElementById('image-counter').innerHTML = `${currentImage} / ${ImageCount}`;
}

function openImage(i){
    currentImage = i;
   
    updateImage();
    document.getElementById('image-dialog').showModal();
    document.getElementById('dialog-title').focus();
}

function closeImage() {
    document.getElementById('image-dialog').close();
    
}

function nextImage() {
    currentImage++;

    if(currentImage > ImageCount) {
        currentImage = 1;
    }

    updateImage();
}

function lastImage() {
    currentImage--;

    if(currentImage < 1) {
        currentImage = ImageCount;
    }

    updateImage();
}

renderImageCount();