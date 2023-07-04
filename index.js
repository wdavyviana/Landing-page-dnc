var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaDireta = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function ScrollRight(){
    leonardo.style = "display:none;"
    bruna.style = "display:flex;"
    setaDireta.style = "display:none;"
    setaEsquerda.style = "display:flex; margin-top:65px;"
}

function ScrollLeft(){
    leonardo.style = "display:flex;"
    bruna.style = "display:none;"
    setaDireta.style = "display:flex;"
    setaEsquerda.style = "display:none;"
}
