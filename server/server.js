const express = require('express')

//express is a function that returns an app object
const app = express();
//two arguments request and response
app.get('/space-jams', (req,res)=> {
    console.log('\'bout to get some space jams');
    res.send('ready to space jam?'); //res is short for response its like return
})

const port =5000

app.listen(port,()=>{
    console.log('im listening');   
});
//listen takes 2 arguments