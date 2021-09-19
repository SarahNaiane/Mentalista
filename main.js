var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var resultado = document.getElementById("resultado");
    var quantidadeTentativas = document.getElementById("tentativas");

    while (tentativas > 0) {
        if (chute == numeroSecreto) {
            resultado.innerHTML = "Você conseguiu ;)";
            quantidadeTentativas.innerHTML = "";
            document.getElementById("corpo").style.backgroundImage =
                "url('https://1.bp.blogspot.com/-hGSk_XeJxWA/UpOcfW1MrvI/AAAAAAAANcU/bS-TiNU-fzg/s1600/wallpaper-hp1-28-1024x768.jpg')";
            tentativas = 0;
            break;
        } else if (chute > 10 || chute < 0) {
            resultado.innerHTML = "Você deve digitar um número de 0 a 10";
        } else if (chute < numeroSecreto) {
            resultado.innerHTML = "Ops, o número secreto é maior que seu chute!";
            tentativas--;
        } else if (chute > numeroSecreto) {
            resultado.innerHTML = "Ops, o número secreto é menor que seu chute!";
            tentativas--;
        }

        if (tentativas > 0) {
            quantidadeTentativas.innerHTML = "Tentativas restantes:" + tentativas;
        } else if (tentativas == 0 && chute != numeroSecreto) {
            quantidadeTentativas.innerHTML = "";
            resultado.innerHTML = "Gamer over!";
            document.getElementById("corpo").style.backgroundImage =
                "url('https://www.researchgate.net/profile/Bruno-Baere-Pedrazzi-Lomba-De-Araujo/publication/261550704/figure/fig7/AS:649316393811971@1531820500732/Figura-53-Tela-de-fim-de-jogo.png')";
        }
        break;
    }
}