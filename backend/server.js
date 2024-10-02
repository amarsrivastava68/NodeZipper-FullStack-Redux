const express = require('express')
const app = express()
const notes = require('./data/notes')
const dotenv = require ('dotenv')
const connectDB = require('./db')
dotenv.config()
connectDB()
const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(
      `Server running on port ${PORT}..`
    )
  );
app.get('/' ,(req , res)=>{res.send('API is running')})
app.get('/api/notes' , (req , res ) => {
    res.json(notes)
})
app.get('/api/notes/:id' , (req , res ) => {
     
    const note = notes.find(n => (n._id) === (req.params.id))
    console.log(req.params)
    res.json(note)
})