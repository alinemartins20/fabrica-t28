function salvar() {
    // 1º coletar os campos
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let cpf = document.getElementById("cpf").value
    let estado = document.getElementById("estado").value
    let modalidadeSelecionada = document.querySelector("input[type=radio]:checked")

    console.log(nome)
    console.log(email)
    console.log(cpf)
    console.log(estado)

    // 2º validação
    // se o campo estiver vazio, exibe o alerta de erro
    // quero comparar se o nome é igual a uma string vazia ("")

    // SE-ENTÃO if-else-if

    // nome <- ""
    // email <- ""
    // cpf <- ""

    // SE-SENÃO
    // 8 - 80

    if (nome == "") { //  Plano A
        exibirAlertaErro("Preencha o nome!")
    } else if(email == "") { //planob
        exibirAlertaErro("Preencha o email!")
    } else if(cpf == "") { //plano c
        exibirAlertaErro("Preencha o CPF!")
    } else if(estado == "") {
        exibirAlertaErro("Escolha um estado!")
    }
    else if(modalidadeSelecionada == null) {
        exibirAlertaErro("Escolha a modalidade")
    }
    else {
        exibirAlertaSucesso() // Plano Z Caso contrário "final" "absoluto"
        exibirResultado()
    }
}

function exibirAlertaSucesso() {
    //acessar  adiv .alerta - deixar visivel
    document.querySelector(".alerta").style.visibility = "visible"
    //acessar a div .alerta - colocar fundo verde
    document.querySelector(".alerta").style.backgroundColor = "lightgreen"
    //acessar a imagem da div alerta - colocar icone de check
    document.querySelector(".alerta img").src = "tick.svg"
    //acessar o texto da div .alerta - colocar texto "salvo com sucesso"
    document.querySelector(".alerta p").innerHTML = "Salvo com sucesso!"
}

function exibirAlertaErro(mensagem) { // mensagem <- "Preencha o nome"
    document.querySelector(".alerta").style.visibility = "visible"
    document.querySelector(".alerta").style.backgroundColor = "lightcoral"
    document.querySelector(".alerta img").src = "alert.svg"
    document.querySelector(".alerta p").innerHTML = mensagem  // "Preencha o nome"

}

function fecharAlerta() {
    document.querySelector(".alerta").style.visibility = "hidden" // "Esconde" o alerta
}

function exibirResultado() {
    let resultado = document.getElementById("resultado").value
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let cpf = document.getElementById("cpf").value
    let estado = document.getElementById("estado").value
    let modalidade = document.querySelector("input[type=radio]:checked").value

    let modalidadeFormatada = ""
    //Se modalidade == 1 -> modalidadeFormatada <- "Presencial"
    //Se modalidade == 2 -> modalidadeFormatada <- "Online"

    switch(modalidade) {
        case "1": //if modalidade =="1"
        modalidadeFormatada = "Presencial"
        break
        case "2": 
        modalidadeFormatada = "Online"
        break
default: // else
modalidadeFormatada = "Modalidade Invalida"
break

    }
      // String template + Interpolação
      resultado.innerHTML = `
      Nome: ${nome}
      Email: ${email}
      CPF: ${cpf}
      Estado: ${estado} 
      Modalidade: ${modalidadeFormatada}
      `
}