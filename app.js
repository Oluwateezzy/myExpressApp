const { request } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

const people = [
    { id: 1, name: 'john' },
    { id: 2, name: 'peter' },
    { id: 3, name: 'susan' },
    { id: 4, name: 'anna' },
    { id: 5, name: 'emma' },
  ]

app.get('/api/people', (req, res) => {
    res.send(people)
})

app.post('/api/people', (req, res) => {
    const person = {
        id: people.length + 1,
        name: req.body.name
    };
    people.push(person);
    res.send(person)
})

app.put('/api/people/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body

    person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res.status(404).json({success: false, msg: 'Provide valid id'})
    }

    const newperson = people.map((person) => {
        if (person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newperson})
    console.log(person)
})

app.delete('/api/people/:id', (req, res) => {
    const {id} = req.params

    person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res.status(404).json({success: false, msg: 'Provide valid id'})
    }

    const newpeople = people.filter((person) => person.id !== Number(id))

    return res.status(200).json({success: true, data: newpeople})
})
app.listen(5000, () => {
    console.log('Server is listening on port 5000.....')
})