const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.send('Home Page 4')
})

app.get('/about', (req, res) =>{
    res.send('about page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1> Resource not found </h1>')
})
app.listen(5000, () => {
    console.log('Server is Listening on port 5000')
})

/* const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('App Js')
})

app.all('*', (req, res) => {
    res.status(404).send('Page resources not found')
})

app.listen(5000, () => {
    console.log('Server is Running on PORT 5000')
})*/