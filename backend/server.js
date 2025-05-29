require('dotenv').config()
const app = require('./src/app')

const PORT = 3000;

app.get('/', (req, res)=>{
    res.send("hello Amisha");
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}!`)
})