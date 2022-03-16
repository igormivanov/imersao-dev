function Converter() {
    var valorDeEntrada = document.getElementById("valor")
    var valor = valorDeEntrada.value
    var valorEmReal = parseFloat(valor)

    var dolarHoje = 5
    var valorEmDolar = valorEmReal / dolarHoje

    var elementoConvertidoDolar = document.getElementById("valorConvertidoDolar")
    var resultadoEmDolar = "O valor em dólar é U$ " + valorEmDolar
    elementoConvertidoDolar.innerHTML = resultadoEmDolar

}

// .value = para imprimir apenas o conteúdo e não o código
// .parseFloat = transformar o conteúdo que estava em texto para número
// .innerHTML = inserir o conteúdo ( a frase ) do resultadoEmDolar
// no input já está com type="number", isso siginifica que só pode digitar número
// na linguagem JavaScript não é necessário o uso de ;