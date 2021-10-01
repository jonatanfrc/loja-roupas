const express = require("express");
const router = express.Router();
const purchases = require("../controller/purchases")

router 
    .get("/roupas", purchases.GETpurchases)
    .get("/roupas/:id", purchases.GETpurchase) 
    .post("/roupas", purchases.POSTpurchases)
    .delete("/roupas/:id", purchases.DELETEpurchase)
    .put("/roupas/:id", purchases.PUTpurchase)
    
module.exports = router;
