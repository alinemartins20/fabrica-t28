let convidados = []

function adicionar() {
    //1-pegar o valor
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let email = document.getElementById("email").value
    //2-adcionar no vetor
    convidados.push({ nome, idade,email })
    //3-atualizar o html
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