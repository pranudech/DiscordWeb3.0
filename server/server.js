import express from 'express'
import Gun from 'gun'
import cors from 'cors'

const app = express()
const prot = process.env.PORT || 9000

app.use(cors())
app.use(Gun.serve)  

app.get('/', (_, res) => {
    res.status(200).send('> DEBUG Discord Node is Live !')
})

const serer = app.listen(prot, () => {
    console.log(`DEBUG Discord Node is listen as http://localhost:${prot}`)
})

Gun({ web: serer })