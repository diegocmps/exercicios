fetch("https://rickandmortyapi.com/api/character/5", {method: "GET"})
.then((responseFetch)=>{
    return responseFetch.json();
})
.then((responseApi)=>{
    document.write(`<img src='${responseApi.image}'/>`);
    document.write(`<h1>${responseApi.name}</h1>`);
    document.write(`<h2>${responseApi.origin.name}</h2>`);
    document.write(`<h2>${responseApi.species}</h2>`); 

})
.catch((err)=>{
    console.error("Error: ", err);
})
