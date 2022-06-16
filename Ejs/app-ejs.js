const express = require('express')

const app = express()

app.set('views', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.send('OK')
})
app.get('/pets', (req, res) => {
    const pets = [
        {name: 'Lola', animal: 'perro', age: 13},
        {name: 'Mishi', animal: 'gato', age: 4},
        {name: 'Nemo', animal: 'pez', age: 1}
    ]

    const mesage = 'Mis mascotas'

    res.render('pets.ejs', {pets, mesage})
})

app.listen(8080)