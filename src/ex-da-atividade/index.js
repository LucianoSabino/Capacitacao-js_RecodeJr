const db = {
    cidade: [
        {
            cidade1: "São Paulo",
            quantidade: 15,
            classe: ["econômica", "executiva", "primeira"],
            passagem: ["ida", "volta"]
        },
        {
            cidade2: "Rio de Janeiro",
            quantidade: 12,
            classe: ["econômica", "executiva"],
            passagem: ["ida"]
        },
        {
            cidade3: "Belo Horizonte",
            quantidade: 5,
            classe: ["executiva", "primeira"],
            passagem: ["ida", "volta"]
        },
        {
            cidade4: "Salvador",
            quantidade: 9,
            classe: ["econômica", "executiva", "primeira"],
            passagem: ["ida", "volta"]
        },
        {
            cidade5: "Brasília",
            quantidade: 19,
            classe: ["primeira"],
            passagem: ["ida", "volta"]
        },
        {
            cidade6: "Curitiba",
            quantidade: 30,
            classe: ["econômica", "executiva", "primeira"],
            passagem: ["ida", "volta"]
        },
        {
            cidade7: "Fortaleza",
            quantidade: 10,
            classe: ["econômica", "primeira"],
            passagem: ["volta"]
        },
        {
            cidade8: "Recife",
            quantidade: 50,
            classe: ["econômica"],
            passagem: [ "volta"]
        },
        {
            cidade9: "Porto Alegre",
            quantidade: 9,
            classe: ["econômica", "executiva", "primeira"],
            passagem: null
        },
        {
            cidade10: "Manaus",
            quantidade: null,
            classe: null,
            passagem: ["ida", "volta"]
        }
    ]
}



function enviar() {
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;
    const numero = document.getElementById("quantidade").value;
    const classe = document.getElementById("classe").value;
    const formulario = document.getElementById("formulario");
    const idavolta = document.getElementById("idavolta");

    if(origem === ''){
        alert("Digite cidade de origem");
    } else if(destino === '') {
        alert("Digite cidade de destino");
    } else if(numero === '') {
        alert("Digite Quantidade de pasagem");
    } else if(classe === '') {
        alert("Digite Qual classe vc quer");
    } else {
        const verificacao1 = db.cidade.find(obj => Object.values(obj).includes(origem));

        if(!verificacao1){
            alert("Essa cidade " +  origem + " não tem disponivel em seu local de origem!");
        }else {
            const verificacao2 = db.cidade.find(obj => Object.values(obj).includes(destino));
            if(!verificacao2){
                alert("Essa cidade " + destino + " não tem disponivel em local de destino!");
            } else if (verificacao1 == verificacao2){
                alert("Tem certeza que quer ir para mesma cidade, Peça um Uber!")
                
            } else {
                if (verificacao2 && verificacao2.quantidade < numero) {
                    const p = document.getElementById("aviso");
                    if(verificacao2.quantidade == null){
                        p.textContent = "Para a cidade " + destino + " não tem passagem disponivel";
                        setTimeout(function() {
                            p.textContent = "";
                        }, 3000); // Tempo em milissegundos (3 segundos no exemplo)
                    } else {
                        
                        p.textContent = "Para a cidade " + destino + " só tem disponivel " + verificacao2.quantidade;
                        setTimeout(function() {
                            p.textContent = "";
                        }, 3000); // Tempo em milissegundos (3 segundos no exemplo)
                    }
                } else {
                    const p = document.getElementById("avisoc");
                    const ida = "ida";
                    const volta = "volta"
                    if(verificacao2 && verificacao2.classe && verificacao2.classe.includes(classe)){
                        if (idavolta.checked && verificacao2 && verificacao2.passagem && verificacao2.passagem.includes(ida) && verificacao2.passagem.includes(volta)) {
                            if(verificacao2.passagem.includes(volta)) {
                                p.textContent = "Para a cidade " + destino + " só tem pasagem de volta";
                                setTimeout(function() {
                                    p.textContent = "";
                                    formulario.reset();
                                }, 3000);
                            } else {
                                p.textContent = "Para a cidade " + destino + " só tem pasagem de volta";
                                setTimeout(function() {
                                    p.textContent = "";
                                    formulario.reset();
                                }, 3000);                                }
                        } else {
                            p.textContent = "Para a cidade " + destino + " não tem passagem de volta!";
                            setTimeout(function() {
                                p.textContent = "";
                                formulario.reset();
                            }, 3000);
                        }

                        

                        
                    } else {
                        p.textContent = "Para a cidade " + destino + " não tem calsse " + classe;
                        setTimeout(function() {
                            p.textContent = "";
                        }, 3000);
                    }
                }
            }
        }
    }
}

