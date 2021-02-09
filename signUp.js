var express = require('express')
var app = express()
var mongojs = require('mongojs')

var cString = "mongodb+srv://kalesha:bandabetiirs@cluster0.h4ixo.mongodb.net/farmersportal?retryWrites=true&w=majority"
const db = mongojs(cString,['farmers','buyers','rice','beens','wheat','dal','potato','tomato'])

app.use(express.static('public'));
app.set('view engine', 'ejs');



app.get('/', function (req, res) {  
    res.sendFile(__dirname+"/public/"+"signup.html")  
})
app.get('/login', function (req, res) {  
    res.sendFile(__dirname+"/public/"+"loginfarmer.html")  
})
app.get('/sign', function (req, res) {  
    res.sendFile(__dirname+"/public/"+"signup.html")  
})
app.get('/signlog', function (req, res) {  
    res.sendFile(__dirname+"/public/"+"signup.html")  
})

app.get('/farmerdash', function (req, res) {  
    var d ={
        name : req.query.farmer_name,
        email : req.query.farmer_mail,
        phnno :req.query.farmer_phn,
        password : req.query.farmer_password
    }
    db.farmers.insert(d,function(err,docs){
        if(err){
            res.send("something went wrong")
        }
        if(docs.length>0){
            res.send("insert data")
        }
        else{
            res.sendFile(__dirname+"/public/"+"farmerdashboard.html")
        }
    })
})

app.get('/buyerdash', function (req, res) { 
     
    var d ={
        name : req.query.buyer_name,
        email : req.query.buyer_mail,
        phnno :req.query.buyer_phn,
        password : req.query.buyer_password
    }
    db.buyers.insert(d,function(err,docs){
        if(err){
            res.send("something went wrong")
        }
        else{
            res.sendFile(__dirname+"/public/"+"buyerdashboard.html")
        }
    })  
})



app.get('/home', function (req, res) {  
    var k ={
        email : req.query.log_email,
        password : req.query.log_password,
    }
    db.farmers.find(k,function(err,docs){
        if(err){
            res.send("invalid user name password")
        }
        if(docs.length>0){
            res.sendFile(__dirname+"/public/"+"farmerdashboard.html")
        }
        else{
            res.sendFile(__dirname+"/public/"+"wrong.html")
        }
    })
})
app.get('/home2', function (req, res) {  
    var k ={
        email : req.query.buylog_email,
        password : req.query.buylog_password
    }
    db.buyers.find(k,function(err,docs){
        if(err){
            res.send("invalid user name password")
        }
        if(docs.length>0){
            res.sendFile(__dirname+"/public/"+"buyerdashboard.html")
        }
        else{
            res.sendFile(__dirname+"/public/"+"wrong.html")
        }
    })
})


app.get('/riceupdate', function (req, res) {  
    res.sendFile(__dirname+"/public/"+"riceupdate.html")  
})

app.get('/rice', function (req, res) {  
    var uppdate ={
        name : req.query.update_name,
        quantity : req.query.update_quan,
        cost :req.query.update_cost,
        number : req.query.update_number,
        date : req.query.update_date,
        discription : req.query.discription_pro
    }
    db.rice.insert(uppdate,function(err,docs){
        if(err){
            res.send("something went wrong")
        }
        if(docs.length>0){
            res.send("insert data")
        }
        else{
            res.sendFile(__dirname+"/public/"+"farmerthanks.html")
        }
    })
})
app.get('/beenupdate', function (req, res) {  
    res.sendFile(__dirname+"/public/"+"beensupdate.html")  
})

app.get('/beens', function (req, res) {  
    var uppdate ={
        name : req.query.update_name,
        quantity : req.query.update_quan,
        cost :req.query.update_cost,
        number : req.query.update_number,
        date : req.query.update_date,
        discription : req.query.discription_pro
    }
    db.beens.insert(uppdate,function(err,docs){
        if(err){
            res.send("something went wrong")
        }
        if(docs.length>0){
            res.send("insert data")
        }
        else{
            res.sendFile(__dirname+"/public/"+"farmerthanks.html")
        }
    })
})
app.get('/wheatupdate', function (req, res) {  
    res.sendFile(__dirname+"/public/"+"wheatupdate.html")  
})
app.get('/wheat', function (req, res) {  
    var uppdate ={
        name : req.query.update_name,
        quantity : req.query.update_quan,
        cost :req.query.update_cost,
        number : req.query.update_number,
        date : req.query.update_date,
        discription : req.query.discription_pro
    }
    db.wheat.insert(uppdate,function(err,docs){
        if(err){
            res.send("something went wrong")
        }
        if(docs.length>0){
            res.send("insert data")
        }
        else{
            res.sendFile(__dirname+"/public/"+"farmerthanks.html")
        }
    })
})

app.get('/dalupdate', function (req, res) {  
    res.sendFile(__dirname+"/public/"+"dalupdate.html")  
})

app.get('/dal', function (req, res) {  
    var uppdate ={
        name : req.query.update_name,
        quantity : req.query.update_quan,
        cost :req.query.update_cost,
        number : req.query.update_number,
        date : req.query.update_date,
        discription : req.query.discription_pro
    }
    db.dal.insert(uppdate,function(err,docs){
        if(err){
            res.send("something went wrong")
        }
        if(docs.length>0){
            res.send("insert data")
        }
        else{
            res.sendFile(__dirname+"/public/"+"farmerthanks.html")
        }
    })
})

app.get('/potatoupdate', function (req, res) {  
    res.sendFile(__dirname+"/public/"+"potatoupdate.html")  
})
app.get('/potato', function (req, res) {  
    var uppdate ={
        name : req.query.update_name,
        quantity : req.query.update_quan,
        cost :req.query.update_cost,
        number : req.query.update_number,
        date : req.query.update_date,
        discription : req.query.discription_pro
    }
    db.potato.insert(uppdate,function(err,docs){
        if(err){
            res.send("something went wrong")
        }
        if(docs.length>0){
            res.send("insert data")
        }
        else{
            res.sendFile(__dirname+"/public/"+"farmerthanks.html")
        }
    })
})
app.get('/tomatoupdate', function (req, res) {  
    res.sendFile(__dirname+"/public/"+"tomatoupdate.html")  
})
app.get('/tomato', function (req, res) {  
    var uppdate ={
        name : req.query.update_name,
        quantity : req.query.update_quan,
        cost :req.query.update_cost,
        number : req.query.update_number,
        date : req.query.update_date,
        discription : req.query.discription_pro

    }
    db.tomato.insert(uppdate,function(err,docs){
        if(err){
            res.sendFile(__dirname+"/public/"+"wrong.html")
        
        }
        if(docs.length>0){
            res.sendFile(__dirname+"/public/"+"wrong.html")
        
        }
        else{
            res.sendFile(__dirname+"/public/"+"farmerthanks.html")
        }
    })
})

app.get('/buyrice', function (req, res) {
    db.rice.find({},function(err,docs){
        if(err){
            res.sendFile(__dirname+"/public/"+"wrong.html")
        
        }
        else{
            res.render("rice",{data : docs})
        }
    })
})
app.get('/buybeens', function (req, res) {
    db.beens.find({},function(err,docs){
        if(err){
            res.sendFile(__dirname+"/public/"+"wrong.html")
        
        }
        else{
            res.render("beens",{data : docs})
        }
    })
})
app.get('/buywheat', function (req, res) {
    db.wheat.find({},function(err,docs){
        if(err){
            res.sendFile(__dirname+"/public/"+"wrong.html")
        
        }
        else{
            res.render("wheat",{data : docs})
        }
    })
})

app.get('/buydal', function (req, res) {
    db.dal.find({},function(err,docs){
        if(err){
            res.sendFile(__dirname+"/public/"+"wrong.html")
        
        }
        else{
            res.render("dal",{data : docs})
        }
    })
})

app.get('/buypotato', function (req, res) {
    db.potato.find({},function(err,docs){
        if(err){
            res.sendFile(__dirname+"/public/"+"wrong.html")
        
        }
        else{
            res.render("potato",{data : docs})
        }
    })
})

app.get('/buytomato', function (req, res) {
    db.tomato.find({},function(err,docs){
        if(err){
            res.sendFile(__dirname+"/public/"+"wrong.html")
        
        }
        else{
            res.render("tomato",{data : docs})
        }
    })
})




app.get('/logout', function (req, res) {  
    res.sendFile(__dirname+"/public/"+"signup.html")  
})

app.get('/dashfor', function (req, res) {  
    res.sendFile(__dirname+"/public/"+"farmerdashboard.html")  
})
app.get('/dashforbuy', function (req, res) {  
    res.sendFile(__dirname+"/public/"+"buyerdashboard.html")  
})

app.get('/contact', function (req, res) {  
    res.sendFile(__dirname+"/public/"+"contact.html")  
})

app.get('/feedback', function (req, res) {  
    res.sendFile(__dirname+"/public/"+"feedback.html")  
})



app.listen(3000,function(){
    console.log("i started")
})