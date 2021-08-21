const express = require("express");

let router = express.Router();

const notes  = require('./notes.json');

router.get('/',(req,res)=>{
    res.send(notes);
});

module.exports = router;