const express = require("express")
const router = express.Router()
const got = require("../got.json")
const axios = require("axios")

router.get('/', (req, res) => {
    res.json(got)
  })

router.get('/url', (req, res) => {
    axios.get('https://thronesapi.com/api/v2/Characters')
    .then(response => res.json(response.data))
  })

module.exports = router;
    