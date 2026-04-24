// ============================================================
// data.js — Personagens e Perguntas do Quiz "The Boys"
// ============================================================

// ----------------------------
// PERSONAGENS
// ----------------------------

const personagens = [
  // EMOCIONAIS
  {
    id: "homelander",
    nome: "Homelander",
    categoria: "emocional",
    descricao: `Você é o homem mais poderoso do mundo — e carrega esse peso de forma mais frágil do que qualquer um imagina. 
    Por trás da imagem construída de herói perfeito, existe uma necessidade profunda de aprovação e um medo constante do abandono. 
    Você age pelo impulso, pelo ego e pela urgência de ser reconhecido. 
    Quando não recebe o que acredita merecer, o limite entre proteção e destruição desaparece.`,
    imagem: "assets/images/homelander.jpg"
  },
  {
    id: "butcher",
    nome: "Billy Butcher",
    categoria: "emocional",
    descricao: `Você é movido pela raiva — e sabe disso. A diferença é que você transformou essa raiva em propósito. 
    Não tem problema em cruzar linhas que outros nem chegam perto, porque no seu mundo o fim justifica os meios. 
    Você é leal à sua própria forma, brutal quando precisa e incapaz de descansar enquanto ainda tem algo a vingar. 
    O problema é que às vezes você não sabe mais distinguir justiça de vingança.`,
    imagem: "assets/images/butcher.jpg"
  },
  {
    id: "thedeep",
    nome: "The Deep",
    categoria: "emocional",
    descricao: `Você toma decisões pelo desespero de não ser descartado. 
    A insegurança é o seu motor — você age para provar valor, para ser aceito, para não ficar pra trás. 
    Isso te faz cometer erros que você mesmo reconhece, mas a necessidade de pertencer fala mais alto. 
    No fundo, você tem mais potencial do que demonstra — mas ainda não aprendeu a confiar nisso sem precisar de validação externa.`,
    imagem: "assets/images/thedeep.jpg"
  },

  // MEIO TERMO
  {
    id: "atrain",
    nome: "A-Train",
    categoria: "meio-termo",
    descricao: `Você sabe o que é certo. Esse é exatamente o seu problema. 
    Você já provou — pra si mesmo e pra quem estava assistindo — que consegue fazer a escolha difícil, a escolha honesta. 
    Mas o ego e o medo de perder o que conquistou ainda puxam você de volta. 
    Você é o personagem em transformação: nem vilão, nem herói — alguém que ainda está decidindo quem quer ser. 
    E isso, de certa forma, te torna o mais humano de todos.`,
    imagem: "assets/images/atrain.jpg"
  },
  {
    id: "hughie",
    nome: "Hughie Campbell",
    categoria: "meio-termo",
    descricao: `Você entrou nessa sem pedir. Mas ficou porque não conseguia fazer diferente. 
    Você quer acreditar que existe um jeito certo de fazer as coisas — e tenta segui-lo mesmo quando o mundo ao redor não facilita. 
    Suas emoções são sua força e seu calcanhar de aquiles ao mesmo tempo. 
    Você não é o mais forte nem o mais frio da sala, mas é provavelmente o mais honesto — e isso conta mais do que parece.`,
    imagem: "assets/images/hughie.jpg"
  },
  {
    id: "mm",
    nome: "Mother's Milk",
    categoria: "meio-termo",
    descricao: `Você é a estrutura que segura tudo quando o caos bate. 
    Disciplinado, metódico e com um senso de responsabilidade que vai além do trabalho — você age pelo dever, mas também pelo amor. 
    A família é seu ponto cego e sua maior força. 
    Quando o limite entre proteção e obsessão some, você percebe — mas nem sempre a tempo. 
    Você é o tipo de pessoa que os outros procuram quando precisam de alguém que não vai desmoronar.`,
    imagem: "assets/images/mm.jpg"
  },

  // RACIONAIS
  {
    id: "stanedgar",
    nome: "Stan Edgar",
    categoria: "racional",
    descricao: `Você nunca levanta a voz. Nunca precisa. 
    O poder que você exerce é construído em camadas — estruturas, hierarquias, decisões que parecem neutras mas movem tudo por baixo. 
    Você pensa em sistemas enquanto os outros pensam em pessoas, e isso te dá uma vantagem que poucos conseguem enxergar. 
    Frio não significa vazio — significa que você aprendeu a separar emoção de eficiência. 
    E essa separação, nas mãos certas, é a forma mais sofisticada de controle que existe.`,
    imagem: "assets/images/stanedgar.jpg"
  },
  {
    id: "noir",
    nome: "Black Noir",
    categoria: "racional",
    descricao: `Você não precisa de palavras. Nem de reconhecimento. 
    Você executa — com precisão, sem ruído, sem hesitação. 
    Onde outros precisam de motivação, validação ou contexto, você só precisa saber o que fazer. 
    Existe uma lealdade quase absoluta na sua forma de agir, mas também um silêncio que os outros raramente conseguem interpretar. 
    Você é eficiente de um jeito que poucos conseguem ser — e carrega esse peso de forma completamente solitária.`,
    imagem: "assets/images/noir.jpg"
  },
  {
    id: "victoria",
    nome: "Victoria Neuman",
    categoria: "racional",
    descricao: `Você joga longo. Enquanto os outros reagem, você já está três movimentos à frente. 
    Você sobrevive em qualquer ambiente — não porque seja camaleão, mas porque entende poder melhor do que quem o detém. 
    Sua ambição não é impulsiva, é arquitetada. 
    Você sabe quando aparecer, quando desaparecer e quando mudar de lado sem que ninguém perceba que foi uma escolha deliberada. 
    Em um mundo de egos, você é estratégia pura.`,
    imagem: "assets/images/victoria.jpg"
  }
];


// ----------------------------
// PERGUNTAS
// ----------------------------

// Estrutura de cada opção:
// texto: string
// scorePrincipal: int (define a categoria: baixo=racional, alto=emocional)
// afinidade: objeto com pontos por personagem (usado como diferenciador interno)

const perguntas = [

  // --- BLOCO 1: Eixo Emocional/Racional ---

  {
    id: 1,
    enunciado: "Você está em uma reunião importante e alguém interrompe sua fala repetidamente. O que você faz?",
    opcoes: [
      {
        texto: "Ignora e continua — se desviar do foco só atrapalha.",
        scorePrincipal: 2,
        afinidade: { stanedgar: 1, noir: 1, victoria: 1 }
      },
      {
        texto: "Faz uma observação sutil pra que pare, sem criar conflito.",
        scorePrincipal: 4,
        afinidade: { atrain: 1, hughie: 1, mm: 1 }
      },
      {
        texto: "Confronta na hora. Isso não vai passar.",
        scorePrincipal: 7,
        afinidade: { homelander: 1, butcher: 1, thedeep: 1 }
      }
    ]
  },

  {
    id: 2,
    enunciado: "Você descobre que um colega de confiança está mentindo pra proteger a própria carreira. O que você faz?",
    opcoes: [
      {
        texto: "Calcula as consequências antes de agir.",
        scorePrincipal: 2,
        afinidade: { stanedgar: 1, noir: 1, victoria: 1 }
      },
      {
        texto: "Tenta conversar com ele antes de qualquer decisão.",
        scorePrincipal: 4,
        afinidade: { atrain: 1, hughie: 1, mm: 1 }
      },
      {
        texto: "Expõe na hora. Não importa o custo.",
        scorePrincipal: 7,
        afinidade: { homelander: 1, butcher: 1, thedeep: 1 }
      }
    ]
  },

  {
    id: 3,
    enunciado: "Você está sob pressão enorme e precisa agir rápido. Como decide?",
    opcoes: [
      {
        texto: "Organiza os fatos mentalmente e age com base no que faz mais sentido.",
        scorePrincipal: 2,
        afinidade: { stanedgar: 1, noir: 1, victoria: 1 }
      },
      {
        texto: "Tenta equilibrar o que sente com o que a situação exige.",
        scorePrincipal: 4,
        afinidade: { atrain: 1, hughie: 1, mm: 1 }
      },
      {
        texto: "Confia no instinto — análise demais paralisa.",
        scorePrincipal: 7,
        afinidade: { homelander: 1, butcher: 1, thedeep: 1 }
      }
    ]
  },

  {
    id: 4,
    enunciado: "Uma pessoa próxima te decepciona de forma inesperada. Qual é sua primeira reação?",
    opcoes: [
      {
        texto: "Processa internamente, avalia antes de reagir.",
        scorePrincipal: 2,
        afinidade: { stanedgar: 1, noir: 1, victoria: 1 }
      },
      {
        texto: "Fica abalado mas tenta entender o lado dela.",
        scorePrincipal: 4,
        afinidade: { atrain: 1, hughie: 1, mm: 1 }
      },
      {
        texto: "Reage imediatamente. A decepção fala mais alto.",
        scorePrincipal: 7,
        afinidade: { homelander: 1, butcher: 1, thedeep: 1 }
      }
    ]
  },

  {
    id: 5,
    enunciado: "Você precisa tomar uma decisão difícil com pouco tempo. Como age?",
    opcoes: [
      {
        texto: "Estrutura prós e contras rapidamente e decide com base nisso.",
        scorePrincipal: 2,
        afinidade: { stanedgar: 1, noir: 1, victoria: 1 }
      },
      {
        texto: "Equilibra raciocínio e intuição mesmo com pressa.",
        scorePrincipal: 4,
        afinidade: { atrain: 1, hughie: 1, mm: 1 }
      },
      {
        texto: "Vai no instinto — pensar demais é perder tempo.",
        scorePrincipal: 7,
        afinidade: { homelander: 1, butcher: 1, thedeep: 1 }
      }
    ]
  },

  // --- BLOCO 2: Diferenciador Interno ---
  // Cada pergunta diferencia os 3 personagens de UMA categoria
  // As 3 opções de cada pergunta têm scorePrincipal igual dentro da faixa da categoria

  {
    // P6 — Diferencia os EMOCIONAIS (Homelander / Butcher / The Deep)
    // scorePrincipal: 0 — não interfere na categoria, só conta afinidade
    id: 6,
    enunciado: "Você foi traído por alguém em quem confiava. O que domina seu pensamento?",
    opcoes: [
      {
        texto: "Raiva de mim mesmo por ter confiado — não vou cometer esse erro de novo.",
        scorePrincipal: 0,
        afinidade: { butcher: 3, homelander: 1, thedeep: 1 }
      },
      {
        texto: "A necessidade de que essa pessoa saiba exatamente o que perdeu ao me trair.",
        scorePrincipal: 0,
        afinidade: { homelander: 3, butcher: 1, thedeep: 1 }
      },
      {
        texto: "O medo de que isso prove que nunca fui bom o suficiente pra merecer lealdade.",
        scorePrincipal: 0,
        afinidade: { thedeep: 3, homelander: 1, butcher: 1 }
      }
    ]
  },

  {
    // P7 — Diferencia o MEIO-TERMO (A-Train / Hughie / MM)
    // scorePrincipal: 0 — não interfere na categoria, só conta afinidade
    id: 7,
    enunciado: "O que te faz continuar quando tudo parece difícil demais?",
    opcoes: [
      {
        texto: "Saber que as pessoas que dependem de mim não podem me ver parar.",
        scorePrincipal: 0,
        afinidade: { mm: 3, hughie: 1, atrain: 1 }
      },
      {
        texto: "A vontade de provar — pra mim mesmo — que sou capaz de ser melhor do que já fui.",
        scorePrincipal: 0,
        afinidade: { atrain: 3, mm: 1, hughie: 1 }
      },
      {
        texto: "A certeza de que desistir seria trair tudo que acredito ser certo.",
        scorePrincipal: 0,
        afinidade: { hughie: 3, atrain: 1, mm: 1 }
      }
    ]
  },

  {
    // P8 — Diferencia os RACIONAIS (Stan Edgar / Noir / Victoria Neuman)
    // scorePrincipal: 0 — não interfere na categoria, só conta afinidade
    id: 8,
    enunciado: "Qual é sua maior vantagem em situações de pressão?",
    opcoes: [
      {
        texto: "Saber exatamente o que precisa ser feito e executar sem hesitar.",
        scorePrincipal: 0,
        afinidade: { noir: 3, stanedgar: 1, victoria: 1 }
      },
      {
        texto: "Entender o tabuleiro melhor do que qualquer outro jogador na sala.",
        scorePrincipal: 0,
        afinidade: { stanedgar: 3, noir: 1, victoria: 1 }
      },
      {
        texto: "Saber qual versão de mim essa situação exige — e me tornar ela.",
        scorePrincipal: 0,
        afinidade: { victoria: 3, stanedgar: 1, noir: 1 }
      }
    ]
  },

  // --- BLOCO 3: Confirmação ---

  {
    id: 9,
    enunciado: "Você cometeu um erro grave que afetou outras pessoas. O que passa pela sua cabeça primeiro?",
    opcoes: [
      {
        texto: "Como minimizar os danos e evitar que isso se repita.",
        scorePrincipal: 2,
        afinidade: { stanedgar: 1, noir: 1, victoria: 1 }
      },
      {
        texto: "Culpa genuína, mas com dúvida se consigo mudar de verdade.",
        scorePrincipal: 4,
        afinidade: { atrain: 1, hughie: 1, mm: 1 }
      },
      {
        texto: "Raiva — de mim mesmo ou de quem me colocou nessa situação.",
        scorePrincipal: 7,
        afinidade: { homelander: 1, butcher: 1, thedeep: 1 }
      }
    ]
  },

  {
    id: 10,
    enunciado: "Qual frase descreve melhor sua relação com as regras?",
    opcoes: [
      {
        texto: "Regras são ferramentas — eu as uso, crio ou reinterpreto conforme necessário.",
        scorePrincipal: 2,
        afinidade: { stanedgar: 1, noir: 1, victoria: 1 }
      },
      {
        texto: "Respeito regras até o ponto em que elas fazem sentido.",
        scorePrincipal: 4,
        afinidade: { atrain: 1, hughie: 1, mm: 1 }
      },
      {
        texto: "Regras existem pra quem não tem escolha — eu sempre tenho.",
        scorePrincipal: 7,
        afinidade: { homelander: 1, butcher: 1, thedeep: 1 }
      }
    ]
  }

];