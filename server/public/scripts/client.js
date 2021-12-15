$(document).ready(onReady);
function onReady(){
    console.log('so damn ready');
    $('#commentForm').on('submit,')


//$('#refresh').on('click', refresh)

//and grab data + render
//immediatly on page load,tpp
//refresh();
}

function onAddComment(evt){
    evt.preventDefault();


let comment={
    author: $('#authorInput').val(),
    message: $('#messageInput').val()
}
console.log('comment', comment);

//send data to server
$.ajax ({
    method: 'post',
    url: 'comments',
    //send the comment to the server
    //in the request "body"
    data: comment
})

.then((response) => {
    console.log('post response', response);
    
});
}

//todo 
//write some code to get data from 
//GET /comments endpoint
//and then render that date to the DOM

//make a network request
//make a HTTP request
//AJAX == "asynchronous javascript and XML"

//this object is our argument for our ajaxOption
//1-----goes to app.get comments looks for the send 
//1----and returns
let ajaxOptions ={
    method:'GET',
    url: '/comments'
}
$.ajax(ajaxOptions)
    .then((response) => {
        console.log('ajax request complete', response);
        render(response);
        //3-----response became the obj array and called
        //3-----render with response as an argument
});

console.log(`made a network request but now 
one has time to wait for that `);


function onClick(){
    $(this).css("background" , "green")
}
//4-----render response is the argument for comments
//4------which is the obj array
function render(comments){
    //do some Jq to render comments (state) to the DOM
    //grabbing data from the server app.get comments
    //and rendering it to the DOM
    for(bean of comments){
        $('body').append(`
        <ul>    
        <li>${bean.author}</li>
           <li> ${bean.message}</li>
        </ul>
        `)
    }
    
}