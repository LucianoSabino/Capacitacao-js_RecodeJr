// Declaração de variavel junto com estrutura de condição

function enviar() {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
    const verificacao = pessoa.user.find(e => e.nome == nome) 
    if(!verificacao){
        
        alert("Nome incorreto!")
    } else {
        const verificacao = pessoa.user.find(e => e.senha == senha)
        if(!verificacao){
            alert("Senha incorreta!")
        } else {
            alert("Ola " + nome)
            estilo()
            lista()
        }
    } 
}