# The Boys - Quiz de Personalidade

Quiz interativo de personalidade inspirado na série The Boys, desenvolvido como projeto acadêmico.

## Sobre o Projeto

O quiz apresenta 10 perguntas que avaliam características de personalidade e comportamento para identificar qual dos 9 personagens de The Boys mais se aproxima da forma de pensar e agir do usuário.

### Personagens Disponíveis

Os personagens são classificados em três categorias:

**Racionais:**
- Stan Edgar
- Black Noir
- Victoria Neuman

**Meio-Termo:**
- A-Train
- Hughie Campbell
- Mother's Milk (MM)

**Emocionais:**
- Homelander
- Billy Butcher
- The Deep

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript Vanilla
- Google Fonts (Bebas Neue, Barlow Condensed)

## Estrutura do Projeto

```
AT2-TheBoys/
├── index.html              # Estrutura principal
├── css/
│   └── style.css          # Estilos do projeto
├── js/
│   ├── data.js            # Dados dos personagens e perguntas
│   ├── quiz.js            # Lógica de pontuação (POO)
│   └── main.js            # Manipulação do DOM
└── assets/
    ├── favicon.svg
    └── images/            # Imagens dos personagens
```

## Funcionalidades

- Interface responsiva e acessível
- Sistema de pontuação baseado em duas métricas:
  - Score principal (determina categoria: racional/meio-termo/emocional)
  - Sistema de afinidade (diferencia personagens dentro da mesma categoria)
- Barra de progresso visual
- Animações e transições suaves
- Suporte a movimento reduzido (`prefers-reduced-motion`)
- Semântica adequada com ARIA labels
- Meta tags Open Graph para compartilhamento em redes sociais

## Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/Gabiue/AT2-THEBOYS
```

2. Navegue até a pasta do projeto:
```bash
cd AT2-TheBoys
```

3. Abra o arquivo `index.html` em um navegador moderno

Não há necessidade de servidor ou dependências adicionais.

## Algoritmo de Pontuação

O quiz utiliza um sistema duplo de pontuação:

1. **Score Principal** (determina a categoria)
   - Valores baixos (≤20): Categoria Racional
   - Valores médios (21-35): Categoria Meio-Termo
   - Valores altos (≥36): Categoria Emocional

2. **Sistema de Afinidade** (diferencia personagens)
   - Cada opção adiciona pontos para personagens específicos
   - O personagem com maior afinidade dentro da categoria é selecionado

## Requisitos Técnicos Implementados

- Orientação a Objetos (classe `Quiz`)
- Funções tradicionais e arrow functions
- Estruturas de dados (arrays e objetos)
- Manipulação do DOM
- Event listeners
- Controle de fluxo (loops, condicionais)
- Métodos de array (`forEach`, `filter`, `map`)

## Acessibilidade

- Labels ARIA para leitores de tela
- Semântica HTML adequada
- Suporte a `prefers-reduced-motion`
- Contraste de cores apropriado
- Navegação por teclado

## SEO

- Meta tags descritivas
- Open Graph para redes sociais
- Twitter Cards
- Favicon SVG
- Estrutura semântica

## Autor

Projeto acadêmico desenvolvido para UCB (5º Semestre) - 2026

## Licença

Este é um projeto acadêmico com fins educacionais. The Boys é uma marca registrada da Amazon Studios.
