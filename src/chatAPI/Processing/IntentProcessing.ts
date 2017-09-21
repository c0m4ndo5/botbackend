import { IntentData, Entity } from '../Models/Intent';
import request = require('request');
import settings = require('../../settings.json');

export interface IIntentProcessor{
    callAPI(message: string, callback: ((_intent: IntentData) => void)): void;
}

export class WitIntentProcessor implements IIntentProcessor{
    url: string;
    auth: string;

    public callAPI(message: string, callback: ((_intent: IntentData) => void)): void{
        var options = {
            url: settings.wit_url + encodeURI(message),
            method: 'GET',
            headers:{Authorization: 'Bearer ' + settings.auth_token_wit}
        }
        request(options, function(error, response, body){
            var bodyJson = JSON.parse(body);
            var entities : Entity[] = [];
            if(bodyJson['entities']){
                for(var _key in bodyJson['entities']){
                    bodyJson['entities'][_key].forEach(_element => {
                        var entity : Entity = {
                            name: _key,
                            confidence: _element['confidence'],
                            value: _element['value']
                        }
                        entities.push(entity);
                    });
                }
            } 
            else{
                entities.push({
                    name: 'intent',
                    confidence: 1,
                    value: 'none'
                });
            }
            var result : IntentData = {
                chatMessage: message,
                entities: entities
            }
            callback(result);
            //res.json({reply: bodyJson['entities']['intent'][0]['value']}) ;
        })
        
    }
}