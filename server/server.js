//this code is running on a server underground somewhere

const express = require('express')

//express is a function that returns an app object
const app = express();

//two arguments request and response
//setup a GET /space-jams endpoint
//endpoint === method + URL
//http://http://localhost:5000/space-jams

//a shortcut to setup endpoints for 
//GET /index.html
//GET /anotherOne.html
//.......and any other files inside of /server/public
//app.use is how we share files
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

//GET comments endpoint
//localhost:5000/comments
//get is the method and comments is the URL.path
//2-----coming to app.get /comments to get 
//2------data and send the obj array
app.get('/comments', (req,res)=>{
    console.log('in GET comments');
    
res.send([
    {
        author:'Edan',
        message: 'new sj sucks'
    }
])
});

//if you dont have endpoint you will get 404 error
//post /comments endpoint
app.post('/comments',(req, res) => {
    console.log('in post /comments');

    
});