var entrada = require("readline-sync");
var numSecreto = Math.floor(Math.random()*100);
var contador = 0;
var numDigitado;
while (numDigitado != numSecreto) {
    numDigitado = parseFloat(entrada.question("Digite um numero de 1 a 100: "));
    console.log('-----------‐---------------');
    if (numDigitado < numSecreto) {
        console.log("O numero que voce digitou e menor que o numero secreto!");
    }
    else if (numDigitado > numSecreto) {
        console.log("O numero que voce digitou e maior que o numero secreto!");
    }
    else {
        console.log(`Parabens, voce acertou!!! Esse foi seu numero de tentativas : ${contador}`);
    }
    console.log('-----------‐---------------');
    while (palavra !== "S") {
        var palavra = entrada.question("Voce deseja encerrar o jogo? S/N").toUpperCase();
        console.log('-----------‐---------------');
        if (palavra == "S") {
            console.log("Você encerrou o jogo.");
            numDigitado = numSecreto
            break
        }
        else if (palavra == "N"){
            console.log("Você ira continuar!");
            break
        }
        else{
            console.log("Palavra inválida!");
        }
    }
    contador++
    console.log('-----------‐---------------');
}