import { IntentData, Entity } from '../Models/Intent';
import { SessionObject } from '../Models/SessionObject';
import { CacheObject } from '../Models/CacheObject';
import NodeCache = require('node-cache');

export class ConversationHandler{
    public nodeCache: NodeCache;
    public constructor(){
        this.nodeCache = new NodeCache({ stdTTL: 6000, checkperiod: 300 });
        
    }

    public handleMessage(intent: IntentData, userSession: SessionObject): string{
        let userCache: CacheObject;
        userCache = this.nodeCache.get(userSession.userID);
        if(!userCache) {
            userCache = { conversationState: "init" };
        }

        var reply = '';
        var mainIntent: Entity = {name: "none"};
        intent.entities.forEach(function(item,i){
            if(item.name.toLowerCase() == "intent" && item.confidence! > 0.5){
                mainIntent = item;
            }
        });

        //INIT state
        if(mainIntent.name == "intent" && userCache.conversationState == "init"){
            //handle typical static intents
            if(mainIntent.value == "hello"){
                reply = "Well hello there! My name is Curdia. What brings you here?";
            } else if(mainIntent.value == "whois"){
                reply = "You're asking about me? I'm just Yuri's virtual assistant. I'm hoping I can handle your general questions about him." + 
                "Maybe one day I'll be as smart as him and do his job! Just don't tell him I said that."
            } else if(mainIntent.value == "whois_yuri"){
                reply = "Glad you've asked! He's a very cool guy who likes traveling, gaming and making new friends and having some beer with them." +
                "He's been a software developer since 2012, having worked with a lot of different technologies and languages since.\n" +
                "I could go on but you might get bored - what specifically you'd like to know about him? Technologies or languages he's worked with?"+ 
                "His adventures or travels? Personal life?"
                userCache.conversationState = "clarify";
                userCache.clarifySubject = "whois_yuri";
            } else if(mainIntent.value == "creator"){
                reply = "I've been created by Yuri using Node.js, Expressjs, Typescript, Angular2... Well, that's what he tells me anyway. " +
                "I don't believe it. He gave me this link () which supposedly has my code in it. I can't believe my brain is just" +
                " some lines of code!"
            }
        } else if (userCache.conversationState == "clarify") {
            if(userCache.clarifySubject == "whois_yuri"){
                var topics = intent.entities.filter(_entity => _entity.name == "topic" && _entity.confidence! > 0.6);
                let topicFound: boolean = false;
                topics.forEach(function(_topic){
                    if(!topicFound)
                        reply += "In terms of " + _topic.value + ", ";
                    else
                        reply += "As for " + _topic.value + ", ";
                    if(_topic.value == "travels"){

                    } else if (_topic.value == "technologies"){

                    } else if (_topic.value == "adventures"){

                    } else if (_topic.value == "programming languages"){

                    } else if (_topic.value == "languages"){
                        reply += "yuri speaks Portuguese and English fluently and comfortably even in presence of audiences, if necessary."
                    }
                    topicFound = true;
                });
            }
        }

        this.nodeCache.set(userSession.userID, userCache);
        return reply;
    }
}