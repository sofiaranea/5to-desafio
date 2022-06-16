const express = require('express')

const app = express()

const fakeApi = () => [
    {name: 'cerveza', price: 250},
    {name: 'vodka', price: 400},
    {name: 'fernet', price: 770},
    {name: 'gancia', price: 520},
    {name: 'campari', price: 680}
]

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.send('OK')
})

app.get('/template', (req, res) => {
    res.render('index.pug', {
        titulo: 'lista de productos',
        productos: fakeApi()
    })
})

app.listen(8080)