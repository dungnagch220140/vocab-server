const express = require('express')
const app = express()

const cors = require('cors')
//enable all client access + all methods (post, put,....)
app.use(cors({
    origin: 'https://vocab-client-blond.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

const mongoose = require ('mongoose')
const db = "mongodb+srv://dungnagch220140:dung123@cluster0.id5zqpu.mongodb.net/vocab?retryWrites=true&w=majority"
mongoose.connect(db)
    .then(() => console.log('success'))
.catch((err) => console.error('failure: ' + err))
const router = require('./api/routes/VocabRoute')
router(app)


const port = 3000
app.listen(port, () => {
    console.log("Server started at http://localhost:" + port)
})
