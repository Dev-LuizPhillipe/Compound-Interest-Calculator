<div align="center">

<img src="public/icon-progress.png" alt="Logo da Calculadora de Juros Compostos" width="120" />

# Calculadora de Juros Compostos

**Simule o crescimento de um investimento mês a mês, com valor inicial, aportes mensais e taxa de juros.**

<p>
  <img src="https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React_Router_7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
</p>

<p>
  <img src="https://img.shields.io/badge/status-portf%C3%B3lio-32E875?style=flat-square" alt="Status: portfólio" />
  <img src="https://img.shields.io/badge/deploy-Vercel-040F0F?style=flat-square&logo=vercel&logoColor=white" alt="Deploy: Vercel" />
</p>

<p>
  🔗 <a href="https://compound-interest-calculator-red.vercel.app/"><b>Acesse o projeto online</b></a>
</p>

</div>

---

## 📖 Sobre o projeto

A **Calculadora de Juros Compostos** é uma aplicação web que mostra quanto um investimento rende ao longo do tempo. Você informa o **valor inicial**, o **investimento mensal**, a **taxa de juros mensal** e o **período em meses**. A calculadora mostra um resumo com o resultado final e uma tabela com a evolução mês a mês.

O projeto foi desenvolvido para o meu **portfólio**, com foco em criar uma interface simples, responsiva e acessível.

---

## ✨ Funcionalidades

- 🧮 **Cálculo de juros compostos** com valor inicial, aportes mensais opcionais, taxa mensal e período de até 600 meses (50 anos).
- 📊 **Resumo do resultado** em três cartões: total investido, juros acumulados e total acumulado.
- 📅 **Tabela mês a mês**, com cabeçalho fixo ao rolar e valores formatados em reais (`R$`).
- ✅ **Validação dos campos**, com mensagens de erro embaixo de cada campo, sem `alert()`.
- 🇧🇷 **Números no formato brasileiro**: aceita tanto `1.000,50` quanto `1000.50`.
- ⌨️ **Uso pelo teclado**: o `Enter` calcula, e todos os campos e botões mostram onde está o foco.
- ♿ **Acessibilidade**: campos com rótulos, resultado anunciado para leitores de tela e respeito à configuração de reduzir animações.
- 📱 **Layout responsivo**, com os campos em uma coluna e teclado numérico no celular.

### Como o cálculo funciona

A cada mês, o saldo rende a taxa de juros e depois recebe o aporte mensal:

```
saldo do mês = saldo anterior × (1 + taxa / 100) + aporte mensal
juros acumulados = saldo do mês − total investido
```

---

## 🛠️ Tecnologias

| Tecnologia                                                                                                              | Uso no projeto                                    |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [React 18](https://react.dev/)                                                                                          | Interface e estado da aplicação                   |
| [Vite 6](https://vite.dev/)                                                                                             | Servidor de desenvolvimento e build               |
| [TypeScript](https://www.typescriptlang.org/)                                                                           | Tipagem dos componentes e do cálculo              |
| [React Router 7](https://reactrouter.com/)                                                                              | Navegação entre a tela inicial e a simulação      |
| CSS puro                                                                                                                | Estilos com variáveis de cor, sem framework de UI |
| [Intl.NumberFormat](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) | Formatação dos valores em reais                   |
| [Vercel](https://vercel.com/)                                                                                           | Hospedagem                                        |

---

## 🗂️ Estrutura de pastas

```
├── index.html                # HTML base, fonte e metadados
├── public/                   # Ícones da aplicação
└── src/
    ├── main.jsx              # Rotas: "/" (inicial) e "/home" (simulação)
    ├── App.jsx               # Tela inicial
    ├── index.css             # Paleta de cores, estilos globais e foco
    ├── App.css               # Layout das páginas e do formulário
    ├── pages/
    │   └── Home.tsx          # Formulário, validação e cálculo dos juros
    └── components/
        ├── ButtonPage/       # Botão principal
        ├── Header/           # Cabeçalho da página de simulação
        ├── InputBox/         # Campo com ícone (R$, %, #)
        └── ResultTable/      # Cartões de resumo e tabela mês a mês
```

### 🎨 Paleta de cores

As cores ficam como variáveis CSS em `src/index.css`:

| Cor                                                                   | Variável         | Hex       |
| --------------------------------------------------------------------- | ---------------- | --------- |
| ![#040f0f](https://placehold.co/16x16/040f0f/040f0f.png) Rich Black   | `--rich-black`   | `#040f0f` |
| ![#2d3a3a](https://placehold.co/16x16/2d3a3a/2d3a3a.png) Gunmetal     | `--gunmetal`     | `#2d3a3a` |
| ![#d9dcd6](https://placehold.co/16x16/d9dcd6/d9dcd6.png) Platinum     | `--platinum`     | `#d9dcd6` |
| ![#33a075](https://placehold.co/16x16/33a075/33a075.png) Jungle Green | `--jungle-green` | `#33a075` |
| ![#32e875](https://placehold.co/16x16/32e875/32e875.png) Malachite    | `--malachite`    | `#32e875` |

---

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/Dev-LuizPhillipe/Compound-Interest-Calculator.git
cd Compound-Interest-Calculator

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Depois, abra no navegador o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

---

## 🧭 Próximos passos

- [ ] Escolher entre taxa de juros mensal e anual
- [ ] Gráfico com a evolução do investimento
- [ ] Exportar a tabela em CSV ou PDF
- [ ] Guardar a simulação na URL para compartilhar o resultado
- [ ] Remover do `package.json` as dependências que não são mais usadas (`bootstrap`, `react-bootstrap`, `react-number-format`)

---

## 👨‍💻 Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Dev-LuizPhillipe">
        <img src="https://github.com/Dev-LuizPhillipe.png" width="100" alt="Foto de Luiz Phillipe" /><br />
        <b>Luiz Phillipe</b>
      </a><br />
      <a href="https://www.linkedin.com/in/dev-luiz-phillipe/">LinkedIn</a>
    </td>
  </tr>
</table>

<div align="center">
  <sub>Feito com 💚 para ajudar a planejar o futuro financeiro.</sub>
</div>
