const express = require("express");
const app = express();

let users = [];

app.use(express.json());

const logHoraMiddleware = (req, res, next) => {
    const horaAtual = new Date().toISOString();
    console.log(
      `[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`
      );
    next(); 
  };

app.use(logHoraMiddleware)

app.get("/", function(req, res){
    res.send("Exercícios Semana 09!")
});

app.get("/sobre", function(req, res){
    res.send("Criação da rota Sobre, referente ao exercício 02")
});

app.get("/contato", function(req, res){
    res.send("Criação da rota Contato, referente ao exercício 02")
});

app.get("/produto/:id", function(req, res){
    const id = req.params.id

    res.send("Requisição da ID: " + id)
});

app.get("/html", function(req, res){
    res.sendFile(__dirname + "/public/index.html")
});

app.post("/users", function(req, res){
    const pessoa = req.body;
    pessoa.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    users.push(pessoa);
    res.status(201).send('Created');
});

app.get("/users", function(req, res){
    res.json(users)
});

app.get("/users/:id", (req, res)=> {
    const { id } = req.params;
    const pessoa = users.find(pessoa => pessoa.id === parseInt(id));
    if(!pessoa){
        res.status(404).send("Not found");
        return
    }
    res.json(pessoa);
});

app.put("/users/:id", (req, res)=>{
    const { id } = req.params;
    const newData = req.body;
    const index = users.findIndex(pessoa => pessoa.id === parseInt(id));
    if(index === -1){
        res.status(404).send("Not found");
        return;
    }
    users[index] = {...users[index], ...newData};
    res.status(200).send("Ok");
});

app.delete("/users/:id", (req, res)=>{
    const { id } = req.params;
    const index = users.findIndex(pessoa => pessoa.id === parseInt(id));
    if(index === -1){
        res.status(404).send("Not found");
        return;
    }
    users.splice(index, 1);
    res.status(200).send("Ok");
});

app.listen(3000, function(){
    console.log("Servidor em funcionamento.")
});