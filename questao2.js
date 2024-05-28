var entrada = require('readline-sync');

while (true) {
  var operation = entrada.question('Escolha a operacao desejada - adicao (+), subtracao (-), multiplicacao (*), divisao (/), potenciacao (**) ou radiciacao (raiz): ');
  console.log('-----------‐---------------');

  var result;
  switch (operation) {
    case '+':
      var num1 = parseFloat(entrada.question('Insira o primeiro numero: '));
      if (isNaN(num1)) {
        console.log('Erro: Por favor, insira um número válido.');
        continue;
      }
      var num2 = parseFloat(entrada.question('Insira o segundo numero: '));
      if (isNaN(num2)) {
        console.log('Erro: Por favor, insira um número válido.');
        continue;
      }
      console.log('-----------‐---------------');
      result = num1 + num2;
      break;

    case '-':
      var num1 = parseFloat(entrada.question('Insira o primeiro numero: '));
      if (isNaN(num1)) {
        console.log('Erro: Por favor, insira um número válido.');
        continue;
      }
      var num2 = parseFloat(entrada.question('Insira o segundo numero: '));
      if (isNaN(num2)) {
        console.log('Erro: Por favor, insira um número válido.');
        continue;
      }
      console.log('-----------‐---------------');
      result = num1 - num2;
      break;

    case '*':
      var num1 = parseFloat(entrada.question('Insira o primeiro numero: '));
      if (isNaN(num1)) {
        console.log('Erro: Por favor, insira um número válido.');
        continue;
      }
      var num2 = parseFloat(entrada.question('Insira o segundo numero: '));
      if (isNaN(num2)) {
        console.log('Erro: Por favor, insira um número válido.');
        continue;
      }
      console.log('-----------‐---------------');
      result = num1 * num2;
      break;

    case '/':
      var num1 = parseFloat(entrada.question('Insira o primeiro numero: '));
      if (isNaN(num1)) {
        console.log('Erro: Por favor, insira um número válido.');
        continue;
      }
      var num2 = parseFloat(entrada.question('Insira o segundo numero: '));
      if (isNaN(num2)) {
        console.log('Erro: Por favor, insira um número válido.');
        continue;
      }
      console.log('-----------‐---------------');
      if (num2 === 0) {
        console.log('Nao e possivel dividir por zero.');
        continue;
      }
      result = num1 / num2;
      break;

    case '**':
      var num1 = parseFloat(entrada.question('Insira a base da potência: '));
      if (isNaN(num1)) {
        console.log('Erro: Por favor, insira um número válido.');
        continue;
      }
      var num2 = parseFloat(entrada.question('Insira o expoente da potência: '));
      if (isNaN(num2)) {
        console.log('Erro: Por favor, insira um número válido.');
        continue;
      }
      console.log('-----------‐---------------');
      result = Math.pow(num1, num2);
      break;

    case 'raiz':
      var num1 = parseFloat(entrada.question('Insira o numero do radicando: '));
      if (isNaN(num1)) {
        console.log('Erro: Por favor, insira um número válido.');
        continue;
      }
      var num2 = parseFloat(entrada.question('Insira o indice do radical: '));
      if (isNaN(num2)) {
        console.log('Erro: Por favor, insira um número válido.');
        continue;
      }
      console.log('-----------‐---------------');
      if (num2 < 0) {
        console.log('Nao e possivel calcular a raiz de um numero negativo.');
        continue;
      }
      result = Math.sqrt(num1, num2);
      break;
    default:
      console.log('Operacao invalida. Escolha entre adicao, subtracao, multiplicacao, divisao, potenciacao ou radiciacao.');
      console.log('-----------‐---------------');
      continue;
  }

  console.log('Resultado: ' + result);
  console.log('-----------‐---------------');
  do {
    var continuar = entrada.question('Deseja continuar? (Digite "sair" para encerrar ou pressione Enter para continuar): ').trim();
    console.log('-----------‐---------------');
    if (continuar !== 'sair' && continuar !== '') {
      console.log('Entrada inválida. Por favor, digite "sair" para encerrar ou pressione Enter para continuar.');
    } else {
      break;
    }
    console.log('-----------‐---------------');
  } while (true);
  if (continuar === 'sair') {
    break;
  }
}