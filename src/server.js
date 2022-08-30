const porta = 3003

const express = require('express')

const app = express()

const dataBase = require('./dataBase.')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended : true })) //Transforma o corpo das requisições em objeto para ser acessados mais facilmente

app.get('/produtos', (req, res, next) => {
    res.send(dataBase.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(dataBase.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = dataBase.salvarProduto({
        nome:req.body.name,
        preco:req.body.preco,
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log('Servidor executando na porta' , porta)
})