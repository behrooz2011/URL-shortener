const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors");
app.use(cors())
require('dotenv').config()
// app.use(express.json());
const PORT = process.env.PORT ||3003;


app.get('/', function(req, res){
    res.redirect('/user');
    //redirect to the hashed value equivalent
});
app.get('/shorts/:hashValue', function(req, res){
    console.log("hi")
    console.log("req.params",req.params)
    res.redirect('/user');
    //redirect to the hashed value equivalent
});
app.get('/user', function(req, res){
    res.send("Redirected to User Page");
});


//Redirect
app.get('/:hashID',async(req,res)=>{
    const {hashID} = req.params;
    console.log("hashID:",hashID)
    try{
        const bigUrl = await MyUrl.findOne({ where: { hashValue: hashID } });
        if(bigUrl !== null){
            console.log("main URL:",bigUrl.originalUrl);
            
            // Increment the clicks
            const result = await MyUrl.update(
                { clicks: bigUrl.clicks + 1},
                { where: { originalUrl : bigUrl.originalUrl}}
              )
              //Absolute url by '//'
            return res.redirect('//'+bigUrl.originalUrl);
        }else{
            res.status(400).send({message: "this SHORT URL does not exist"})
        }
    }catch(err){
        console.log("ERROR: ",err)
    }
})

//DB :PostgreSQL
const db = require("./models/urlDB.index");
db.sequelize.sync();
const MyUrl = db.urls;
require("./routes/url.routes")(app);

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});