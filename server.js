const express = require("express")
const inventario = require("./inventario.json")

let cadastrarItem = (req,res) => {
    if(req.body){
        inventario.push(req.body)
        res.send('Item adicionado com sucesso.')
    }else{
        res.status(400).send('Falha ao adicionar o item.')
    }
}

let lerItens = (req, res) => {
    res.send(inventario)
}

let atualizarItem = (req, res) => {
    let id = req.params.id
    const item = req.body
    let cont = 0

    inventario.forEach((i) => {
        if(i.id == id){
            i.item = item.item
            i.local = item.local
            i.dataRegistro = item.dataRegistro
            i.valor = item.valor
            i.patrimonio = item.patrimonio
            cont = 1
        }
    })

    if(cont == 1){
        res.send('Item atualizado com sucesso.')   
    }else{
        res.status(404).send('Item não encontrado.')
    }
}

let deletarItem = (req, res) => {
    let id = req.params.id
    let cont = 0

    inventario.forEach((item, ind) => {
        if(item.id == id){
            inventario.splice(ind, 1)
            cont = 1
        }
    })

    if(cont == 1){
        res.send('Item deletado com sucesso.')
    }else{
        res.status(404).send('Item não encontrado.')
    }
}

let buscarPorId = (req, res) => {
    let id = req.params.id
    let cont = 0

    inventario.forEach((item) => {
        if(item.id == id){
            res.send(item)
            cont = 1
        }
    })

    if (cont = 0){
        res.status(404).send('Item não encontrado.')
    }
}

const app = express()
const PORT = 3000
app.use(express.urlencoded({ extended: true }))

app.get('/inventario', lerItens)
app.get('/inventario/:id', buscarPorId)
app.post('/inventario', cadastrarItem)
app.put('/inventario/:id', atualizarItem)
app.delete('/inventario/:id', deletarItem)

app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}/inventario`)
})