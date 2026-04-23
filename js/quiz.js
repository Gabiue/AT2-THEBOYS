// ============================================================
// quiz.js — Classe Quiz e Lógica de Pontuação
// Requisitos atendidos:
//   - Orientação a objetos (class Quiz)
//   - Funções tradicionais (function)
//   - Arrow functions (=>)
//   - Estruturas de dados (listas, objetos)
//   - Controle de fluxo (condicionais, loops)
// ============================================================


// ----------------------------
// Funções tradicionais auxiliares (fora da classe)
// ----------------------------

function definirCategoria(scorePrincipal) {
    if (scorePrincipal <= 20) return "racional";
    if (scorePrincipal <= 50) return "meio-termo";
    return "emocional";
  }
  
  function filtrarPersonagensPorCategoria(personagens, categoria) {
    return personagens.filter(p => p.categoria === categoria);
  }
  
  function calcularMaiorAfinidade(personagensCategoria, afinidade) {
    let melhorPersonagem = null;
    let maiorPontuacao = -1;
  
    for (let i = 0; i < personagensCategoria.length; i++) {
      const personagem = personagensCategoria[i];
      const pontos = afinidade[personagem.id];
  
      if (pontos > maiorPontuacao) {
        maiorPontuacao = pontos;
        melhorPersonagem = personagem;
      }
    }
  
    return melhorPersonagem;
  }
  
  
  // ----------------------------
  // Classe principal
  // ----------------------------
  
  class Quiz {
    constructor(perguntas, personagens) {
      this.perguntas = perguntas;
      this.personagens = personagens;
      this.indicePerguntaAtual = 0;
      this.scorePrincipal = 0;
      this.afinidade = this._inicializarAfinidade();
      this.respostas = [];
    }
  
    // Arrow function como método — inicializa afinidade zerada pra cada personagem
    _inicializarAfinidade = () => {
      const afinidade = {};
      this.personagens.forEach(personagem => {
        afinidade[personagem.id] = 0;
      });
      return afinidade;
    }
  
    getPerguntaAtual = () => {
      return this.perguntas[this.indicePerguntaAtual];
    }
  
    getTotalPerguntas = () => {
      return this.perguntas.length;
    }
  
    isUltimaPergunta = () => {
      return this.indicePerguntaAtual === this.perguntas.length - 1;
    }
  
    temProximaPergunta = () => {
      return this.indicePerguntaAtual < this.perguntas.length - 1;
    }
  
    // Registra a resposta e soma pontuações
    responder = (opcao) => {
      this.respostas.push({
        perguntaId: this.getPerguntaAtual().id,
        opcaoEscolhida: opcao.texto
      });
  
      this.scorePrincipal += opcao.scorePrincipal;
  
      // Arrow function no forEach para somar afinidade
      Object.entries(opcao.afinidade).forEach(([personagemId, pontos]) => {
        if (this.afinidade.hasOwnProperty(personagemId)) {
          this.afinidade[personagemId] += pontos;
        }
      });
  
      if (this.temProximaPergunta()) {
        this.indicePerguntaAtual++;
        return true;
      }
  
      return false;
    }
  
    // Usa as funções tradicionais auxiliares para calcular resultado
    calcularResultado = () => {
      const categoria = definirCategoria(this.scorePrincipal);
      const personagensCategoria = filtrarPersonagensPorCategoria(this.personagens, categoria);
      const personagemFinal = calcularMaiorAfinidade(personagensCategoria, this.afinidade);
  
      return {
        personagem: personagemFinal,
        scorePrincipal: this.scorePrincipal,
        categoria: categoria,
        afinidade: this.afinidade
      };
    }
  
    getProgresso = () => {
      const atual = this.indicePerguntaAtual + 1;
      const total = this.getTotalPerguntas();
      const percentual = Math.round((atual / total) * 100);
  
      return { atual, total, percentual };
    }
  
    reiniciar = () => {
      this.indicePerguntaAtual = 0;
      this.scorePrincipal = 0;
      this.afinidade = this._inicializarAfinidade();
      this.respostas = [];
    }
  }