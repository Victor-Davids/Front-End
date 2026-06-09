foi solicitado como fazer cada parte do script.

1. Slideshow com 3 imagens
HTML
<img id="slide" src="img1.jpg" width="500">

<button onclick="anterior()">◀</button>
<button onclick="proximo()">▶</button>
JavaScript
const imagens = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
];

let indice = 0;

function proximo() {
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
2. Formulário com validação
HTML
<form onsubmit="return validar()">
    <input type="text" id="nome" placeholder="Nome">
    <button type="submit">Enviar</button>
</form>
JavaScript
function validar() {
    let nome = document.getElementById("nome").value;

    if (nome.trim() === "") {
        alert("Preencha o nome!");
        return false;
    }

    return true;
}
3. Quiz com 10 perguntas
HTML
<div id="quiz"></div>
<button onclick="corrigirQuiz()">Finalizar</button>

<p id="resultado"></p>
JavaScript
const perguntas = [
    {
        pergunta: "Marte é conhecido como?",
        alternativas: ["Planeta Azul", "Planeta Vermelho", "Planeta Verde"],
        correta: 1
    }
];

function carregarQuiz() {
    let html = "";

    perguntas.forEach((p, i) => {
        html += `<p>${p.pergunta}</p>`;

        p.alternativas.forEach((alt, j) => {
            html += `
            <label>
                <input type="radio" name="p${i}" value="${j}">
                ${alt}
            </label><br>`;
        });
    });

    document.getElementById("quiz").innerHTML = html;
}

carregarQuiz();
4. Exibir resultado do quiz
function corrigirQuiz() {
    let pontos = 0;

    perguntas.forEach((p, i) => {
        let resposta = document.querySelector(`input[name="p${i}"]:checked`);

        if (resposta && Number(resposta.value) === p.correta) {
            pontos++;
        }
    });

    document.getElementById("resultado").innerText =
        `Você acertou ${pontos} de ${perguntas.length} questões!`;
}
5. Troca de tema (3 cores)
HTML
<button onclick="tema('white')">Claro</button>
<button onclick="tema('lightblue')">Azul</button>
<button onclick="tema('lightgreen')">Verde</button>
JavaScript
function tema(cor) {
    document.body.style.backgroundColor = cor;
}

A mudança de tema não afeta o texto sendo limitado ao quiz;

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

