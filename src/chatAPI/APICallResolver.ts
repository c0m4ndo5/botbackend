import { Router, Request, Response} from "express";
import { WitIntentProcessor, IIntentProcessor} from "./Processing/IntentProcessing";
import { ConversationHandler } from "./Processing/ConversationHandler";
import { IntentData, Entity } from './Models/Intent';
import { SessionObject } from './Models/SessionObject';
import request = require('request');
import cookieSession = require('cookie-session');

let router = Router();
let cHandler = new ConversationHandler();

router.post('/message', function(req, res, next) {
    var reply = '';
    if(req.body){
        if(req.body.message){
            var userData: SessionObject;
            if(req.session)
                if(req.session.userData){
                    userData = req.session.userData;
                } else {
                    var test =  Math.floor(Math.random()*100000000).toString();
                    userData = {
                        userGender:"",
                        userName:"",
                        userID: Math.floor(Math.random()*100000000).toString(),
                        tempData: JSON.parse("{}")
                    }
                    req.session.userData = userData;
                }
            
            var intentProcessor = new WitIntentProcessor();
            intentProcessor.callAPI(req.body.message, function(_intent: IntentData){
                var response = cHandler.handleMessage(_intent, userData);
                res.json({reply:response});
            });
        } else res.json({reply:'Unexpected request format'});
    } else res.json({reply:'Unexpected request format'});
    
    
    

    // var options = {
    //     url: 'https://api.wit.ai/message?v=20170909&q=who%20are%20you',
    //     method: 'GET',
    //     headers:{Authorization: 'Bearer I6MEJNBJ64PMLBHS6ABRD3M43Z6QTMF5'}
    // }
    // request(options, function(error, response, body){
    //     var bodyJson = JSON.parse(body);
    //     res.json({reply: bodyJson['entities']['intent'][0]['value']}) ;
    // })

    //if(req.body.message == "hi") res.json({reply:"hi"});
    //else if(req.body.message == "bye") res.json({reply:"bye"});
    //else res.json({reply:"what?"});
});

export = router;