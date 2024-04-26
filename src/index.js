const pessoa = {
    user: [
        {
            nome: "Luciano",
            senha: 123,
            email: "Luciano@gmal.com",
            facul: "UFBR"
        },
        {
            nome: "Maria",
            senha: 124,
            email: "Luciano@gmal.com",
            facul: "UFBR"
        },
        {
            nome: "Lucas",
            senha: 125,
            email: "Luciano@gmal.com",
            facul: "UFBR"
        },
    ],
    
    cidade: [
            {cidade1: "São Paulo"},
            {cidade2: "Rio de Janeiro"},
            {cidade3: "Belo Horizonte"},
            {cidade4: "Salvador"},
            {cidade5: "Cruz das Almas"},
            {cidade6: "Saj"}
        ]

}

function estilo() {
    const text = document.getElementById("text")
    text.style.display = "block"
    text.style.background = "red"


}


function lista() {
    const text2 = document.getElementById("text2");
    const ul = document.createElement("ul");
    for (const cidadeObj of pessoa.cidade) {
        for (const chave in cidadeObj) {
            const li = document.createElement("li");
            li.textContent = cidadeObj[chave];
            ul.appendChild(li);
        }
    }

    text2.appendChild(ul)
}


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