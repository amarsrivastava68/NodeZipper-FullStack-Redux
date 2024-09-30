const express = require('express')
const app = express()

app.listen(5000  , console.log('server started on 5000'))

app.get('/' ,(req , res)=>{res.send('API is running')})