module.exports = app => {
    const urls = require("../controllers/url.controller");
  
    var router = require("express").Router();
    router.post("/submit",urls.postBigUrl);
    router.get("/submit",urls.getAllUrl);
    router.put("/submit",urls.updateShortUrl);
    app.use("/api/v2", router);
  };
  