var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool=require('pg').pool;

var config={
    user:'akhiltkclt',
    database:'akhiltkclt',
    host:'akhiltkclt@ssh.imad.hasura-app.io',
    port:'5432',
    password:process.emv.DB_PASSWORD
    
};
var app = express();
app.use(morgan('combined'));

var articles={

     'article-one':{
         title:'Article One |Akhil',
        heading:'Article One',
        date:'feb 21,2017',
        content:`  <p>This is my first article This is my first articleThis is my first articleThis is my first articleThis is my first articleThis is my first articleThis is my first articleThis is my first articleThis is my first article</p>
                <p>This is my first article This is my first articleThis is my first articleThis is my first articleThis is my first articleThis is my first articleThis is my first articleThis is my first articleThis is my first article</p>
                <p>This is my first article This is my first articleThis is my first articleThis is my first articleThis is my first articleThis is my first articleThis is my first articleThis is my first articleThis is my first article</p>`
    },
     'article-two':{ 
        title:'Article Two |Akhil',
        heading:'Article TWO',
        date:'feb 22,2018',
        content:`  <p>This is my second article This is my first articleThis is my first articleThis is my first articleThis is my first articleThis is my first articleThis is my first articleThis is my first articleThis is my first article</p>
               `},
     'article-three':{
        title:'Article Three |Akhil',
        heading:'Article THREE',
        date:'feb 24,2018',
        content:`  <p>This is my third article /p>`}
};
        

function createTemplate(data){
    var title=data.title;
    var date =data.date;
    var heading=data.heading;
    var content=data.content;

var pool=new pool(config);
app.get('/test-db',function(req,res){
    //make aselect req
    //return result
    pool.query('select*from test',function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result));
        }
    });
});



var htmlTemplate=`<html>
    <head>
        <title>${title}</title>
        <meta name="viewport"content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css"rel="stylesheet"/>
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">home</a>
                </div>
                <hr/>
                <h3>${heading}</h3>
                <div>${date}</div>
                <div>
                  ${content}
                </div>
            </div>
    </body>
</html>
`;
 
    return htmlTemplate;
}   



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
 res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port =80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
