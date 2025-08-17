let amigos = []

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value
        if (nomeAmigo === "") {
        alert("Por favor, insira o nome do amigo-secreto.")
        return
    }
    if (amigos.includes(nomeAmigo)) {
        alert("Este amigo já foi adicionado.")
        return
    }
    amigos.push(nomeAmigo)
    document.getElementById("amigo").value = ""
    console.log(amigos)
    listarAmigos()
}

function listarAmigos() {
    let lista = "<ul>"
    for (let i = 0; i < amigos.length; i++) {
        lista += "<li>" + amigos[i] + "</li>"
    }
    lista += "</ul>"
    document.getElementById("listaAmigos").innerHTML = lista
}
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.")
        return
    }

    let sorteios = {}
    let amigosDisponiveis = [...amigos]

    for (let i = 0; i < amigos.length; i++) {
        let amigoAtual = amigos[i]
        let indexSorteado = Math.floor(Math.random() * amigosDisponiveis.length)
        let amigoSorteado = amigosDisponiveis[indexSorteado]

        // Evita que alguém tire a si mesmo
        while (amigoSorteado === amigoAtual) {
            indexSorteado = Math.floor(Math.random() * amigosDisponiveis.length)
            amigoSorteado = amigosDisponiveis[indexSorteado]
        }

        sorteios[amigoAtual] = amigoSorteado
        amigosDisponiveis.splice(indexSorteado, 1)
    }   
     exibirResultados(sorteios)
} 
function exibirResultados(sorteios) {
    let resultados = "<h2>Resultados do Sorteio:</h2><ul>"
    for (let amigo in sorteios) {
        resultados += "<li>" + amigo + " tirou " + sorteios[amigo] + "</li>"
    }
    resultados += "</ul>"
    document.getElementById("resultado").innerHTML = resultados
}



