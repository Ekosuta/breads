//dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker')
const bakerSeedData = require('../models/baker_seed')

//seed
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
    .then(res.redirect('/breads'))
})

//index
baker.get('/', (req, res) => {
    Baker.find()
    .populate('breads')
    .then(foundBakers => {
        res.send(foundBakers)
    })
})

//show
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
    .populate('breads')
    .then(foundBaker => {
        res.render('bakerShow', {
            baker: foundBaker
        })
    })
})

//export
module.exports = baker
