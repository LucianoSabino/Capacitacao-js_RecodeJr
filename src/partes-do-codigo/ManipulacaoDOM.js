// Primeiro forma de mexer com HTML

function lista() {
    // linkando a div no html
    const div = document.getElementById("text2")

    // Criando ul
    const lista = document.createElement("ul");

    // Criar os itens da lista
    const item1 = document.createElement("li");
    item1.textContent = "Item 1";
    const item2 = document.createElement("li");
    item2.textContent = "Item 2";
    const item3 = document.createElement("li");
    item3.textContent = "Item 3";

    // Adicionar os itens à lista
    lista.appendChild(item1);
    lista.appendChild(item2);
    lista.appendChild(item3);

    // Adicionando a lista na div
    div.appendChild(lista)
}


// Segunda forma criando dinamicamente e listando os items do banco de dados estatico
function lista2() {
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


// Modificando o css
function estilo() {
    const text = document.getElementById("text")
    text.style.display = "block"
    text.style.background = "red"


}