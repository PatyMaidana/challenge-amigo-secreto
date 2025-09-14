let amigos = []

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value.toLowerCase()
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

    // Solicita o nome do participante
    let nomeDigitado = prompt("Digite seu nome para descobrir seu amigo secreto:").toLowerCase()
    if (!nomeDigitado || !amigos.includes(nomeDigitado)) {
        alert("Nome não encontrado na lista de amigos.")
        return
    }

    let amigoSecreto = sorteios[nomeDigitado]
    document.getElementById("resultado").innerHTML = 
        "Olá, " + nomeDigitado + "! Seu amigo secreto é: <strong>" + amigoSecreto +"</strong>. <p> Para saber o amigo secreto de outra pessoa, clique novamente no botão Sortear Amigo.</p>"}

    function reiniciarJogo() {
    location.reload()
}