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

function renderImageCount(){
    for(let i = 1; i <= ImageCount; i++){
        document.getElementById('photo-gallery').innerHTML += `<img class="gallery-image" src="./assets/img/Bild${i}.jpeg" alt="Bild ${i}" onclick="openImage(${i})">`;
    }
}

function openImage(i){
    const imageDialog = document.getElementById('image-dialog');
    const dialogImage = document.getElementById('dialog-image');
    const imageName = ImageNames[i - 1];

    dialogImage.src = `./assets/img/Bild${i}.jpeg`;
    dialogImage.alt = imageName;
    document.getElementById('dialog-title').innerHTML = imageName;
    imageDialog.showModal();
    document.getElementById('dialog-title').focus();
}

function closeImage() {
    document.getElementById('image-dialog').close();
    
}

renderImageCount();