let avaliacoesRuins = 0

function realizarEntrevista(){
    const avaliacao = prompt("Qual a sua avaliação para a série Stranger Things? (ruim, bom ou excelente)")
    switch (avaliacao){
        case "ruim":
            avaliacoesRuins++;
            break;
        case "bom":
        case "excelente":
            break
        default:
            console.log("Opção inválida. Favor escolher entre ruim, bom ou excelente.")
    }
}

let usuario = 1
while(usuario <=4) {
    realizarEntrevista();
    usuario++;
}
document.write(`Número de pessoas que classificaram a série como "ruim": ${avaliacoesRuins}`)