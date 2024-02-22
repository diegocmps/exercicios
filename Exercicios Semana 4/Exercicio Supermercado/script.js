let produtos = {
  "1": { nome: "Hortifruti", quantidade: 0 },
  "2": { nome: "Laticínios", quantidade: 0 },
  "3": { nome: "Carnes", quantidade: 0 },
  "4": { nome: "Peixes", quantidade: 0 },
  "5": { nome: "Aves", quantidade: 0 }
};

while (true){
  let pergunta = prompt("Escolha entre as opções:\n (1)Hortifruti\n(2)Laticínios\n(3)Carnes\n(4)Peixes\n(5)Aves\n(6)Sair")
  if(pergunta === "6"){
      break;
  }
  if(produtos[pergunta]){     
        let quantidade = prompt("Digite a quantidade de itens do produto:")
        produtos[pergunta].quantidade += quantidade
      
  } else{
      alert("Opção inválida")

  }
}

let produtoMaisComprado = Object.values(produtos).reduce((a, b) => a.quantidade > b.quantidade ? a : b);

console.log(`O produto mais comprado foi ${produtoMaisComprado.nome} com ${produtoMaisComprado.quantidade} itens.`);
