function somar() {
  // 1º pegar o valor digitado no campo numero 1 armazenar em uma variavel
  let numero1 = document.getElementById("numero1").value
  // numero1 <- "2"
  // 2º pegar o valor digitado no campo numero 2 armazenar em uma variavel
  let numero2 = document.getElementById("numero2").value
  // numero2 <- "4"
  // 3º somar os valores
  let resultado = parseFloat(numero1) + parseFloat(numero2)
  // resultado <- "6"
  // 4º exibir o resultado
  document.getElementById("resultado").innerHTML = resultado

}
function subtrair() {
  // 1º pegar o valor digitado no campo numero 1 armazenar em uma variavel
  let numero1 = document.getElementById("numero1").value
  // numero1 <- "2"
  // 2º pegar o valor digitado no campo numero 2 armazenar em uma variavel
  let numero2 = document.getElementById("numero2").value
  // numero2 <- "4"
  // 3º somar os valores
  let resultado = parseFloat(numero1) - parseFloat(numero2)
  // resultado <- "6"
  // 4º exibir o resultado
  document.getElementById("resultado").innerHTML = resultado

}
function multiplicar() {
  // 1º pegar o valor digitado no campo numero 1 armazenar em uma variavel
  let numero1 = document.getElementById("numero1").value
  // numero1 <- "2"
  // 2º pegar o valor digitado no campo numero 2 armazenar em uma variavel
  let numero2 = document.getElementById("numero2").value
  // numero2 <- "4"
  // 3º somar os valores
  let resultado = parseFloat(numero1) * parseFloat(numero2)
  // resultado <- "6"
  // 4º exibir o resultado
  document.getElementById("resultado").innerHTML = resultado
}
function dividir() {
  let numero1 = parseFloat(document.getElementById("numero1").value)
  let numero2 = parseFloat(document.getElementById("numero2").value)
  let resultado = (numero1) / (numero2)
  exibirResultado(resultado)

  function exibirResultado(resultadoRecebido) {
    document.getElementById("resultado").innerHTML = resultadoRecebido
    document.getElementById("resultado").style.opacity = "1"

  }
function fecharREsultado () {
  document.getElementById("resultado").style.opacity = "0"

}

}