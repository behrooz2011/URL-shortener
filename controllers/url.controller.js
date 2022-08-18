const db = require("../models/urlDB.index");
const { hashB } = require("../utils/myHashFunction");
const MyUrl = db.urls;
const Op = db.Sequelize.Op;

exports.postBigUrl= async (req,res)=>{
    console.log("POST: /submitt");
    //if URL doesn't exist
    const {originalUrl} = req.body;
    if( !originalUrl ){
        res.status(400).send({message: "URL needed!"})
    }
    try{
        const bigUrl = await MyUrl.findOne({ where: { originalUrl: originalUrl } });
        if(bigUrl === null){
            // create a hash
            const hashedVal = hashB(6);// a hash string with 6 random characters
            const entry = {
                originalUrl: originalUrl,
                shortUrl:`${process.env.DOMAIN}/`+hashedVal,
                hashValue: hashedVal
            };
            console.log("entry:",entry)
            MyUrl.create(entry)
            .then(data => {
            res.send(data);
            })
            .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the URLS."
            });
            });

        }else{
            console.log("bigUrl is not empty!");
            // console.log("bigUrl:",bigUrl)
            res.status(400).send({message: "this big URL already exists"})
        }
            
    }catch(err){
            console.log("Error caught!")
        }

    
}
// Get all urls
exports.getAllUrl= async (req,res)=>{
    console.log("get all URLs \n")
        MyUrl.findAll()
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({err: err.message || "Unable to find urls from server"})
        })
}

// Update a short url
exports.updateShortUrl =  async (req,res)=>{
    const {newValue,originalUrl} = req.body;
    try{
        MyUrl.update(
                { hashValue: newValue},
                { where: { originalUrl : originalUrl}}
            ).then(data=>{
                res.send(data)
            }).catch(err=>console.log(err))
    }catch(err){
        console.log("ERR: ",err)
        res.status(500).send({mssg: "server error"})
    }

}