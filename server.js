var expresss = require('express'); 
var ejs = require('ejs');
var app = expresss(); 

//app.set('view engine', 'ejs');
app.get('/', function(req, res){
    res.render('index.ejs');
})

app.listen(3000, function(){
    console.log('server now running'); 
})