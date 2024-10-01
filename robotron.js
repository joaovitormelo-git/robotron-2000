const cores = {
  cores: [
    'img/robotron-vermelho.png', 
    'img/robotron-amarelo.png', 
    'img/robotron-branco.png', 
    'img/robotron-preto.png', 
    'img/robotron-rosa.png', 
    'img/robotron-azul.png'
  ]
};

let indiceCorAtual = 0;
const robo = document.querySelector('.robo');
const botaoProximo = document.querySelector('.proximo');
const botaoAnterior = document.querySelector('.anterior');

function atualizarCor() {
  robo.src = cores.cores[indiceCorAtual];  
}

botaoProximo.addEventListener('click', (event) => {
  event.preventDefault();
  indiceCorAtual = (indiceCorAtual + 1) % cores.cores.length;
  atualizarCor();
});

botaoAnterior.addEventListener('click', (event) => {
  event.preventDefault();
  indiceCorAtual = (indiceCorAtual - 1 + cores.cores.length) % cores.cores.length;
  atualizarCor();
});

// Ajuste dos botões
const botoesAjuste = document.querySelectorAll('.controle-ajuste');

botoesAjuste.forEach((botao) => {
  botao.addEventListener('click', (event) => {
    event.preventDefault();

    const controleContador = event.target.parentElement.querySelector('.controle-contador');
    let valorAtual = parseInt(controleContador.value); 

    if (event.target.textContent === "+") {
      if (valorAtual < 10) { 
        controleContador.value = valorAtual + 1;
      }
    } else {
      if (valorAtual > 0) {
        controleContador.value = valorAtual - 1;
      }
    }
  });
});
