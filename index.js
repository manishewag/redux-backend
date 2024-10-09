const express = require("express")
const cors = require("cors")

const products = require("./products")

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('shop...')
})

app.get('/products', (req, res) => {
    res.send(products);
})


const port = process.env.PORT || 3000

app.listen(port, console.log(`server run on port ${port}`))