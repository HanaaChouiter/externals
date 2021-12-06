const express = require("express")
const app = express()
const port = 5000

const gameRoute = require("./routes/game")
const pokemonRoute = require("./routes/pokemon")
app.use('/game', gameRoute)
app.use('/pokemon', pokemonRoute)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })