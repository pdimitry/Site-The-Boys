const perguntas = [
    {
        pergunta:"Quem estava no laboratório de pesquisa usando o lazer dos olhos?",
        crimeLocation:"Laboratório de pesquisa",
        weapon:"Lazer dos olhos",
        supe:"Capitão Pátria",
    },
    {
        pergunta:"Quem estava na sala de conferência com uma seringa de composto v?",
        crimeLocation:"Conferência",
        weapon:"Seringa de Composto v",
        supe:"Luz estrela",
    },
    {
        pergunta:"Quem estava no escritório executivo com explosivo C4?",
        crimeLocation:"Escritório",
        weapon:"C4",
        supe:"Black Noir",
    },
    {
        pergunta:"Quem estava no armazém de armas com um maço de dinheiro?",
        crimeLocation:"Armazém de armas",
        weapon:"Maço de dinheiro",
        supe:"Rainha  Maeve",
    }
]

function gerarPerguntaAleatoria(){
    const indiceAleatorio = Math.floor(Math.random() * perguntas.length)
    return perguntas [indiceAleatorio]
}

function verificarResposta(){
    const inputResposta = document.getElementById("resposta").value.trim
    ()
    const perguntaAtual = document.getElementById("pergunta").textContent
    const perguntaObjeto = perguntas.find(perg => perg.pergunta === perguntaAtual)

    if(inputResposta.toLowerCase() === perguntaObjeto.supe.toLowerCase())(
        documento.getElementById("resultado").textContent = "Correto! O culpado é " + perguntaObjeto.supe + "."
    )
    else{
        document.getElementById("resultado").textContent = "Errado! Tente novamente."
    }

}

document.addEventListener("DOMContentLoaded", () =>{
    const perguntaAleatoria = gerarPerguntaAleatoria()
    document.getElementById("pergunta").textContent = perguntaAleatoria.pergunta
})

if(crimeLocationInput.toLowerCase() === perguntaObjeto.crimeLocation.toLowerCase()){
    if(weaponInput.toLowerCase() === perguntaObjeto.weapon.toLowerCase()){
        if(crimeLocationInput.toLowerCase() === 'sala de confência'){
            if(weaponInput.toLowerCase() === 'seringa de composto v'){
                supe = 'Luz Estrela';
            } else{
                supe = 'Inconclusivo'
            }

        } else if(crimeLocationInput.toLowerCase() === 'laboratório de pesquisa'){
            if(weaponInput.toLowerCase() === 'laser dos olhos'){
                supe = 'Capitão Pátria';
            } else{
                supe = 'Inconclusivo'
            }
        } else if(crimeLocationInput.toLowerCase() === 'escritório executivo'){
            if(weaponInput.toLowerCase() === 'explosivo C4'){
                supe = 'Black Noir';
            } else{
                supe = 'Inconclusivo'
            }
        } else if (crimeLocationInput.toLowerCase() === 'armazém de armas'){
            if(weaponInput.toLowerCase() === 'maço de dinheiro'){
                supe = 'Rainha Maeve';
            } else{
                supe = 'Inconclusivo'
            }
        } else{
            supe = 'Erro: Local não corresponde a um lugar conhecido'
        }
    } else{
        supe = 'Inconclusivo'
    }
} else{
    supe = 'Inconclusivo'
}


      
    
