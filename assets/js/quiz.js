const perguntas = [
    {
        pergunta: "Qual planeta é conhecido como Planeta Vermelho?",
        alternativas: ["Terra", "Marte", "Júpiter"],
        correta: 1
    },
    {
        pergunta: "Qual recurso é essencial para a agricultura?",
        alternativas: ["Água", "Areia", "Pedras"],
        correta: 0
    },
    {
        pergunta: "O projeto Marte Verde busca:",
        alternativas: ["Construir foguetes", "Criar condições para a vida", "Explorar oceanos"],
        correta: 1
    },
    {
        pergunta: "Os rovers são:",
        alternativas: ["Robôs exploradores", "Satélites", "Foguetes"],
        correta: 0
    },
    {
        pergunta: "Qual fator é analisado pelo projeto?",
        alternativas: ["Radiação", "Trânsito", "Marés"],
        correta: 0
    },
    {
        pergunta: "As cavernas podem ajudar porque:",
        alternativas: ["Possuem menor radiação", "São mais quentes", "Produzem oxigênio"],
        correta: 0
    },
    {
        pergunta: "A agricultura sustentável busca:",
        alternativas: ["Maior desperdício", "Uso eficiente de recursos", "Mais poluição"],
        correta: 1
    },
    {
        pergunta: "A energia solar utiliza:",
        alternativas: ["Luz do Sol", "Carvão", "Petróleo"],
        correta: 0
    },
    {
        pergunta: "Marte possui atmosfera rica em:",
        alternativas: ["Oxigênio", "Nitrogênio", "Dióxido de Carbono"],
        correta: 2
    },
    {
        pergunta: "O principal objetivo do Marte Verde é:",
        alternativas: ["Colonização sustentável", "Turismo espacial", "Mineração"],
        correta: 0
    }
];

function carregarQuiz() {
    let html = "";

    perguntas.forEach((p, i) => {
        html += `<h3>${i + 1}. ${p.pergunta}</h3>`;

        p.alternativas.forEach((alt, j) => {
            html += `
                <label>
                    <input type="radio" name="p${i}" value="${j}">
                    ${alt}
                </label><br>
            `;
        });

        html += "<br>";
    });

    document.getElementById("quiz").innerHTML = html;
}

function corrigirQuiz() {
    let pontos = 0;

    perguntas.forEach((p, i) => {
        const resposta = document.querySelector(
            `input[name="p${i}"]:checked`
        );

        if (resposta && Number(resposta.value) === p.correta) {
            pontos++;
        }
    });

    document.getElementById("resultado").innerHTML =
        `Você acertou <strong>${pontos}</strong> de ${perguntas.length} questões!`;
}

carregarQuiz();

function validarFormulario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (
        nome.trim() === "" ||
        email.trim() === "" ||
        mensagem.trim() === ""
    ) {
        alert("Preencha todos os campos!");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}