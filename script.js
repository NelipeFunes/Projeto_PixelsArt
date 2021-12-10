//feito na ajuda dos colegas na sala de estudos
let linhas = 5;

for(let index = 0; index<linhas; index+=1){
    let lines = document.createElement('div');
    lines.classList.add('linha');
    document.getElementById('pixel-board').appendChild(lines);

    for(i = 0; i<linhas;i+=1){
        let coluns = document.createElement('div');
        coluns.classList.add('pixel')
        lines.appendChild(coluns)
    }
}