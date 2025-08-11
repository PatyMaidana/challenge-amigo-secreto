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