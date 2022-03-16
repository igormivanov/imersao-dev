function media() 
{
    var primeiraNota = parseFloat(document.getElementById("nota1").value);
    var segundaNota = parseFloat(document.getElementById("nota2").value);
    var terceiraNota = parseFloat(document.getElementById("nota3").value);
    var quartaNota = parseFloat(document.getElementById("nota4").value);

    var notaFinal = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;
    var notaFixada = notaFinal.toFixed(2);

    var elementoNota = document.getElementById("notaCalculada");
    var notaCalculada = "Sua média é " + notaFixada;
    elementoNota.innerHTML = notaCalculada;
    
}
