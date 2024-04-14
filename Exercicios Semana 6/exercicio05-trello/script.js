function buscarImagens(){
        let url = "https://api.thecatapi.com/v1/images/search?limit=10"
        return fetch(url)
        .then(resposta => resposta.json())
        .catch(erro => console.error(erro))
    }

    buscarImagens()
    .then(imagens =>{
        for (let imagem of imagens){
            let url_da_imagem = imagem.url
            document.write(`<img src='${url_da_imagem}' width='200'/> <br />`)
        }
    })
    .catch(erro =>{
        console.error(erro)
    })