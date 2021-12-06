const express = require("express")
const router = express.Router()
const axios = require("axios")

router.get('/', (req, res)=> {
    res.send("hello")
})

router.get('/:limit/:offset', (req, res) => {
    const { offset } = req.params
    const { limit } = req.params
      
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => res.json(response.data))
    })

router.get('/:id', (req, res) => {
    const { id } = req.params

    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => res.json(response.data))
    })

module.exports = router;