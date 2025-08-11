let amigos = []

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value
    if (nomeAmigo === "") {
        alert("Por favor, insira o nome do amigo.")
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
