const express = require('express')

//express is a function that returns an app object
const app = express();

//two arguments request and response
//setup a GET /space-jams endpoint
//endpoint === method + URL
//http://http://localhost:5000/space-jams

//a shortcut to setup enpoints for 
//GET /index.html
//GET /anotherOne.html
//.......and any other files inside of /server/public
app.use(express.static('server/public'))


app.get('/space-jams', (req,res)=> {
    console.log('\'bout to get some space jams');
    //send back a response
    res.send(`
    <h1>ready to space jam?</h1>`); //res is short for response its like return
})

const port =5000

app.listen(port,()=>{
    console.log('im listening');   
});
//listen takes 2 arguments