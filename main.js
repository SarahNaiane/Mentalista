function Chutar() {

    var elementoResultado = document.getElementById("resultado");

    //pegar o valor do chute no input 
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    //se o chute for igual ao numero secreto tem que mostrar "Acertou"
    var numeroDaTentativas = 3;

    if (chute === numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou";

    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Digite um número maior do que zero e manor do que 10!";

    } else {
        elementoResultado.innerHTML = "Você errou o número secretro!"

    }



}

//math.random = sorteia um número aleatório

var numeroSecreto = parseInt(Math.random() * 11)

//mostrar resiltado