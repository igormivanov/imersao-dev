var igor = { nome: "Igor", vitorias: 2, empates: 1, derrotas: 1, pontos: 0};
var ana = { nome: "Ana", vitorias: 1, empates: 1, derrotas: 2, pontos: 0};
var jogadores = [igor, ana];

function calculaPontos(jogador)
{
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

function exibeJogadoresNaTela(jogadores)
{
    var elemento = "";
    for(var i = 0; i < jogadores.length; i++)
    {
        elemento += "<tr>";
        elemento += "<td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento +=" </tr>";
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;   
}

function adicionarVitoria(i) 
{
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) 
{
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores);
}


function adicionarDerrota(i) 
{
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}

exibeJogadoresNaTela(jogadores);
