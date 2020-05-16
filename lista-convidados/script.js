let convidados = ["Jão da Silva, Maria da Silva"]

function adicionar() {
    //pegar o valor
    let nome = document.getElementById("nome").value
    //adcionar no vetor
    convidados.push(nome)
    //atualizar o html
    atualizarLista()
}
function atualizarLista () {
    //Pegar a section #Lista
    let lista = document.getElementById("lista")
    //limpar a Lista
    lista.innerHTML = ""
    //add elementos
   for(i=0; i < convidados.length; i++) { // i = 0 1 2 3
    lista.innerHTML += `
    <div>
        <span>${convidados[i]}</span>
        </div>`
   }
}