# 📊 Calculadora de IMC

Uma aplicação web moderna e responsiva para calcular o Índice de Massa Corporal (IMC), desenvolvida como atividade do 3º bimestre da disciplina de Programação Web 3 (PW3).

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 🎯 Sobre o Projeto

A Calculadora de IMC é uma aplicação web que permite aos usuários calcular seu Índice de Massa Corporal de forma rápida e intuitiva. O projeto foi desenvolvido com foco em uma experiência de usuário moderna, incluindo validações em tempo real, feedback visual e design responsivo.

### ✨ Funcionalidades

- ✅ **Cálculo preciso do IMC** - Baseado na fórmula: IMC = peso(kg) / altura²(m)
- ✅ **Interface moderna e responsiva** - Design adaptável para todos os dispositivos
- ✅ **Validação em tempo real** - Feedback imediato sobre dados inválidos
- ✅ **Classificação automática** - Categorização do resultado conforme padrões da OMS
- ✅ **Barra visual interativa** - Representação gráfica da posição do IMC
- ✅ **Tabela de referência** - Valores de referência destacados
- ✅ **Animações fluidas** - Transições suaves e micro-interações
- ✅ **Acessibilidade** - Ícones, cores e contraste adequados

### 🎨 Design Features

- **Gradiente de fundo** suave e moderno
- **Cards com sombras** e bordas arredondadas
- **Ícones SVG** personalizados para peso e altura
- **Cores semânticas** para diferentes categorias de IMC
- **Animações CSS** para melhor UX

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca para construção da interface
- **Vite 7.1.2** - Build tool moderna e rápida
- **Tailwind CSS 4.1.13** - Framework CSS utility-first

### Desenvolvimento
- **ESLint** - Linting e padronização de código
- **React Hooks** - useState para gerenciamento de estado
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Compatibilidade de CSS cross-browser

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
```bash
git clone [URL_DO_REPOSITORIO]
cd calculadoraimc_react
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev      # Executa em modo de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Preview do build de produção
npm run lint     # Executa o ESLint
```

## 📱 Layout e Responsividade

A aplicação foi desenvolvida com design responsivo, adaptando-se perfeitamente a:

- 📱 **Mobile** - Smartphones (320px+)
- 📱 **Tablet** - Tablets (768px+)
- 💻 **Desktop** - Desktops (1024px+)
- 🖥️ **Large Desktop** - Monitores grandes (1440px+)

### Componentes Principais

```
src/
├── components/
│   ├── Header.jsx      # Cabeçalho com título e ícone
│   ├── InfoSection.jsx # Seção para informações sobre IMC
│   ├── InputForm.jsx   # Formulário de entrada (peso/altura)
│   └── Result.jsx      # Exibição do resultado e classificação
├── assets/
│   ├── height.svg      # Ícone de altura
│   └── weight.svg      # Ícone de peso
├── App.jsx             # Componente principal
└── main.jsx            # Ponto de entrada da aplicação
```

## 📊 Classificação do IMC

A aplicação utiliza os padrões internacionais da OMS:

| Categoria | IMC (kg/m²) | Cor | Status |
|-----------|-------------|-----|---------|
| Abaixo do peso | < 18,5 | 🔵 Azul | ⚠️ Atenção |
| Peso normal | 18,5 - 24,9 | 🟢 Verde | ✅ Ideal |
| Sobrepeso | 25,0 - 29,9 | 🟡 Amarelo | ⚠️ Cuidado |
| Obesidade | ≥ 30,0 | 🔴 Vermelho | ⚠️ Risco |

## 🎯 Validações Implementadas

### Peso
- ✅ Valor obrigatório e maior que zero
- ✅ Limite máximo de 500kg
- ✅ Aceita valores decimais (ex: 70.5)

### Altura
- ✅ Valor obrigatório e maior que zero
- ✅ Entrada em centímetros (ex: 175)
- ✅ Conversão automática para metros no cálculo
- ✅ Limite máximo de 300cm

## 👨‍💻 Autor

**Vinícius Ribeiro Lopes**
- Estudante de Programação Web 3 (PW3)
- 3º Bimestre - 2025

---
