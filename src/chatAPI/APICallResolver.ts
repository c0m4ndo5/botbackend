import { Router, Request, Response} from "express";
import { WitIntentProcessor, IIntentProcessor} from "./Processing/IntentProcessing";
import { ConversationHandler } from "./Processing/ConversationHandler";
import { IntentData, Entity } from './Models/Intent';
import { SessionObject } from './Models/SessionObject';
import request = require('request');
import cookieSession = require('cookie-session');

let router = Router();

router.post('/message', function(req, res, next) {
    var reply = '';
    if(req.body){
        if(req.body.message){
            var userData: SessionObject;
            if(req.session)
                if(req.session.userData){
                    userData = req.session.userData;
                } else {
                    userData = {
                        userGender:"",
                        userName:"",
                        userConversationState:"init",
                        tempData: JSON.parse("{}")
                    }
                    req.session.userData = userData;
                }
            
            var intentProcessor = new WitIntentProcessor();
            var handler = new ConversationHandler();
            intentProcessor.callAPI(req.body.message, function(_intent: IntentData){
                var response = handler.handleMessage(_intent, userData);
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