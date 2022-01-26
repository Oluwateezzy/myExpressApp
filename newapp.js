const express = require('express')
const app = express()
const {people} = require('./data')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended: false}))

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.post('/api/people', (req, res) => {
    res.status(201).send('success')
})

app.post('/login', (req, res) => {
    const {testing} = req.body
    console.log(req.body)
    if (testing) {
        return res.status(200).send(`welcome ${testing}`)
    }
    
    
    res.status(401).send('please provide credentials')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000.....')
})