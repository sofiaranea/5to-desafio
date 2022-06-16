const express = require('express')
const Contenedor = require('./container')

const app = express()
const itemDB = 'productos.json'
const productos = new Contenedor(itemDB)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/static', express.static('public'))

//Ejs
app.set('views', 'ejs')
app.set('views', './views')


app.get('/api/productos', (req, res) => {
    const data = productos.getAll()
    const title = 'Lista de productos'
    res.render('productos.ejs', {data, title})
})

app.get('/api/productoRandom', (req, res) => {
    const data = productos.getAll()
    res.json(data[Math.floor(Math.random() * data.length)])
})

app.get('/api/productos/:id', (req, res) => {
    const query = req.params.id
    //console.log(query)
    const id = productos.getById(query)

    if (id) {
        res.json(id)
    } else {
        res.status(400).send({error: 'No se encontró el producto.'})
    }
})



//Post
app.post('/api/productos', (req, res) => {
    const {name, price} = req.body
    productos.save({ name, price })
    res.send({message: 'Producto agregado con éxito.'})
})


//Put
app.put('/api/productos/:id', (req, res) => {
    
})


//Delete
app.delete('/api/productos/:id', (req, res) => {
    const query = req.params.id
    const id = productos.getById(query)
    if (id) {
        productos.deleteById(query)
        res.send({message: 'Producto eliminado con éxito.'})
    } else {
        res.status(400).send({error: 'El producto no existe.'})
    }
})


app.listen(8080)