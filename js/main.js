// ============================================================
// main.js — Manipulação do DOM e Fluxo das Telas
// Requisitos atendidos:
//   - Interação com DOM (cliques, botões, eventos)
//   - Arrow functions e funções tradicionais
//   - Controle de fluxo (condicionais, loops)
// ============================================================


// ----------------------------
// Instância do Quiz
// ----------------------------

const quiz = new Quiz(perguntas, personagens);


// ----------------------------
// Seletores do DOM
// ----------------------------

const telaInicial     = document.getElementById("tela-inicial");
const telaQuestionario = document.getElementById("tela-questionario");
const telaResultado   = document.getElementById("tela-resultado");

const btnIniciar      = document.getElementById("btn-iniciar");
const btnReiniciar    = document.getElementById("btn-reiniciar");

const perguntaNumero  = document.getElementById("pergunta-numero");
const perguntaTexto   = document.getElementById("pergunta-texto");
const opcoesContainer = document.getElementById("opcoes-container");
const barraProgresso  = document.getElementById("barra-progresso");
const progressoTexto  = document.getElementById("progresso-texto");

const resultadoNome      = document.getElementById("resultado-nome");
const resultadoCategoria = document.getElementById("resultado-categoria");
const resultadoScore     = document.getElementById("resultado-score");
const resultadoDescricao = document.getElementById("resultado-descricao");
const resultadoImagem    = document.getElementById("resultado-imagem");


// ----------------------------
// Funções tradicionais de navegação entre telas
// ----------------------------

function mostrarTela(tela) {
  const telas = [telaInicial, telaQuestionario, telaResultado];
  telas.forEach(t => t.classList.add("oculto"));
  tela.classList.remove("oculto");
}

function iniciarQuiz() {
  quiz.reiniciar();
  mostrarTela(telaQuestionario);
  renderizarPergunta();
}

function finalizarQuiz() {
  const resultado = quiz.calcularResultado();
  renderizarResultado(resultado);
  mostrarTela(telaResultado);
}

function reiniciarQuiz() {
  quiz.reiniciar();
  mostrarTela(telaInicial);
}


// ----------------------------
// Funções tradicionais de renderização
// ----------------------------

function renderizarPergunta() {
  const pergunta = quiz.getPerguntaAtual();
  const progresso = quiz.getProgresso();

  // Atualiza o número e texto da pergunta
  perguntaNumero.textContent = `Pergunta ${progresso.atual} de ${progresso.total}`;
  perguntaTexto.textContent = pergunta.enunciado;

  // Atualiza a barra de progresso
  barraProgresso.style.width = `${progresso.percentual}%`;
  progressoTexto.textContent = `${progresso.percentual}%`;

  // Limpa as opções anteriores
  opcoesContainer.innerHTML = "";

  // Renderiza cada opção usando loop + arrow function
  pergunta.opcoes.forEach((opcao, index) => {
    const botao = document.createElement("button");
    botao.classList.add("opcao-btn");
    botao.textContent = opcao.texto;
    botao.setAttribute("data-index", index);

    // Evento de clique com arrow function
    botao.addEventListener("click", () => selecionarOpcao(opcao));

    opcoesContainer.appendChild(botao);
  });
}

function renderizarResultado(resultado) {
  const { personagem, scorePrincipal, categoria } = resultado;

  const categoriasLabel = {
    "racional":    "🔵 Racional",
    "meio-termo":   "🟡 Meio Termo",
    "emocional":   "🔴 Emocional"
  };

  resultadoNome.textContent      = personagem.nome;
  resultadoCategoria.textContent = categoriasLabel[categoria] || categoria;
  resultadoScore.textContent     = `Pontuação: ${scorePrincipal}`;
  resultadoDescricao.textContent = personagem.descricao;
  resultadoImagem.src            = personagem.imagem;
  resultadoImagem.alt            = personagem.nome;
}


// ----------------------------
// Arrow function — lógica de seleção de opção
// ----------------------------

const selecionarOpcao = (opcao) => {
  // Desabilita todos os botões após a escolha
  const botoes = document.querySelectorAll(".opcao-btn");
  botoes.forEach(btn => {
    btn.disabled = true;
    btn.classList.add("desabilitado");
  });

  // Marca a opção selecionada visualmente
  const indexSelecionado = Array.from(botoes).findIndex(btn => btn.textContent === opcao.texto);
  if (indexSelecionado !== -1) {
    botoes[indexSelecionado].classList.add("selecionado");
  }

  // Aguarda um momento e avança
  setTimeout(() => {
    const temProxima = quiz.responder(opcao);

    if (temProxima) {
      renderizarPergunta();
    } else {
      finalizarQuiz();
    }
  }, 600);
};


// ----------------------------
// Eventos
// ----------------------------

btnIniciar.addEventListener("click", iniciarQuiz);
btnReiniciar.addEventListener("click", reiniciarQuiz);


// ----------------------------
// Inicialização
// ----------------------------

mostrarTela(telaInicial);