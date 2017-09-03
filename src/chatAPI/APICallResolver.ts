import { Router, Request, Response} from "express";
let router = Router();

router.post('/message', function(req, res, next) {
    if(req.body.message == "hi") res.json({reply:"hi"});
    else if(req.body.message == "bye") res.json({reply:"bye"});
    else res.json({reply:"what?"});
});

//var express = require('express');
//var router = express.Router();

/* GET users listing. */
//router.get('/message', function(req, res, next) {
    
//    res.send('respond with a resource');
//});

//module.exports = router;
export = router;