var listaFilmes = 
[
    "https://images-na.ssl-images-amazon.com/images/I/81zeqn6hofL.jpg",
    "https://i.pinimg.com/736x/9f/79/41/9f794146e0488d3e6da7bf7667414916.jpg",
    "https://ingresso-a.akamaihd.net/prd/img/movie/demon-slayer-kimetsu-no-yaiba-the-movie-infinity-train/505c829b-023d-406a-b6ae-b6c84cb9bde1.jpg"
]

for (var i = 0; i < listaFilmes.length; i++) 
{
    document.write("<img src=" + listaFilmes[i] + ">")
}

// console.log = imprimir um texto no console ( auxilia no desenvolvimento )
// document.write = imprimir um text na tela utilizando comandos em HTML
// Array = lista, se inicia com []
// .length = retoma a quantidade de elementos em uma string
// .Push = "empurra" para dentro do array algum valor, esse passa a ser o último.