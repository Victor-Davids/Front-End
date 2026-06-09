const imagens = [
    "./assets/imagens/painel_solar.jpg",
    "./assets/imagens/estufa.jpg",
    "./assets/imagens/Sistema_agua.jpg",
];

let indice = 0;

function proximo() {
    console.log(imagens[indice]);
    indice = (indice + 1) % imagens.length;
    document.getElementById("slide").src = imagens[indice];
}


function anterior() {
    indice--;
    if (indice < 0) {
        indice = imagens.length - 1;
    }
    document.getElementById("slide").src = imagens[indice];
}

function tema(cor) {
    document.getElementById("quiz-section").style.backgroundColor = cor;
    if (cor === '#000001') {
        document.body.style.color = '#ff9800';
        document.body.classList.remove('text');
        document.body.classList.add('text-light');
    }
    if (cor === '#ff9800') {
        document.body.style.color = '#000001';
        document.body.classList.remove('text');
        document.body.classList.add('text-light');

    }
    if (cor === '#2f2c79') {
        document.body.style.color = '#F9F9F9';
        document.body.classList.remove('textFundo');
        document.body.classList.add('text-light');
    }
}