import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes/routes.js'
const app = express()
app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(routes)
app.use('/', (req,res) => {
    res.send('success!')
})



//mongodb+srv://dbUser:<password>@cluster0.evhow.mongodb.net/<dbname>?retryWrites=true&w=majority
const CONNECTION_URL = 'mongodb+srv://dbUser:Yrm1sdrmp9GZMOLK@cluster0.evhow.mongodb.net/Blog-site?retryWrites=true&w=majority'


const PORT = process.env.PORT || 5000
 
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running at port ${PORT}'`)))
    .catch(e => console.log(e.message))
mongoose.set('useFindAndModify',false)


