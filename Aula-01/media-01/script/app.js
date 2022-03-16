function Converter(){

    //Nota do Primeiro Semestre
    var notaElemento = document.getElementById("1s")
    var nota = notaElemento.value;
    var nprimeiro = parseFloat(nota)

    //Nota do Segundo Semestre
    var notaElemento = document.getElementById("2s")
    var nota = notaElemento.value;
    var nsegundo = parseFloat(nota)

    //Nota do Terceiro Semestre
    var notaElemento = document.getElementById("3s")
    var nota = notaElemento.value;
    var nterceiro = parseFloat(nota)

    //Nota do Quarto Semestre
    var notaElemento = document.getElementById("4s")
    var nota = notaElemento.value;
    var nquarto = parseFloat(nota)

    var notaFinal = (nprimeiro + nsegundo + nterceiro + nquarto) / 4
    console.log(notaFinal)

    var mediaNota = document.getElementById("mediaDaNota")
    var mediaDaNota = "A média das notas é " + notaFinal 
    mediaNota.innerHTML = mediaDaNota



}

//Revisão
//O que são variáveis?
//São a "memória" do computador onde vamos salvar e referenciar depois um valor
//Para strings (palavras): sempre usar aspas duplas ""
//Lembrar de sempre usar a regra da segunda palavra com letra maiúscula
//Números vão sempre sem aspas


//atribuição =
//comparação == 
