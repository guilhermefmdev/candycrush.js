const grid = document.querySelector(".grid")
const pontos = document.querySelector(".pontos")
const quadrados = []

function pegarDoce() {
    return ["🍬", "🍫", "🍡", "🍭"] [Math.floor(Math.random() * 4)]
}





for (let i = 0; i < 9; i++) {
    const quadrado = document.createElement("div")
    quadrado.setAttribute("draggable", true)
    quadrado.setAttribute("id", i)
    quadrado.textContent = pegarDoce()
    grid.appendChild(quadrado)
    quadrados.push(quadrado)
}



let doceDragged, doceReplaced, idDragged, idReplaced

quadrados.forEach((quadrado) => {
    quadrado.addEventListener("dragstart", dragStart)
    quadrado.addEventListener("drop", dragDrop)
    quadrado.addEventListener("dragover", e => e.preventDefault())
})

function dragStart() {
    doceDragged = this.textContent
    idDragged = parseInt(this.id)
}

function dragDrop() {
    doceReplaced = this.textContent
    idReplaced = parseInt(this.id)
    this.textContent = doceDragged
    quadrados[idDragged].textContent = doceReplaced


    for (i = 0; i <= 2; i++) {
        if (quadrados[i].textContent == quadrados[i+3]. textContent &&   
            quadrados[i].textContent == quadrados[i+6].textContent) {
            pontos.textContent = parseInt(pontos.textContent) + 1 
            for (j = 0; j <= 6; j+=3) {
                quadrados[i+j].textContent = pegarDoce()
            }   
        }
    }
} 