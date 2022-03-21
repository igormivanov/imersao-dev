var cartaRafa = {
  nome: "Bulbassauro",
  imagem:
    "http://2.bp.blogspot.com/-5n0hFSjT8DE/VOdx_6BE-pI/AAAAAAAAAII/HsfmoVcDjzc/s1600/001%2BBubasaur.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

var cartaGui = {
  nome: "Darth Vader",
  imagem:
    "https://epipoca.com.br/wp-content/uploads/2022/03/darth-vader-10032022-300x300.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};

var cartaPaulo = {
  nome: "Shiryu de dragão",
  imagem:
    "https://cdn.awsli.com.br/600x450/1206/1206083/produto/129234498/a00db1a45c.jpg",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
};

var cartas = [cartaRafa, cartaGui, cartaPaulo];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 5);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 5);
  cartaJogador = cartas[numeroCartaJogador];
  while (numeroCartaMaquina == numeroCartaJogador) {
    var numeroCartaJogador = parseInt(Math.random() * 5);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributos");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu!</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu!</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou!</p>";
  }
  divResultado.innerHTML = htmlResultado;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var imagemCartajogador = document.getElementById("carta-jogador");
  imagemCartajogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status '>";
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributos' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class= "carta-subtitle">${cartaJogador.nome}</p>`;
  imagemCartajogador.innerHTML =
    moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var imagemCartaMaquina = document.getElementById("carta-maquina");
  imagemCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status '>";
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributos' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
  }
  var nome = `<p class= "carta-subtitle">${cartaMaquina.nome}</p>`;
  imagemCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}