import { IntentData, Entity } from '../Models/Intent';
import { SessionObject } from '../Models/SessionObject';
import { CacheObject } from '../Models/CacheObject';
import NodeCache = require('node-cache');
import { StaticReplyCreator } from './StaticReplyCreator';

export class ConversationHandler{
    public nodeCache: NodeCache;
    public replyCreator: StaticReplyCreator;
    public constructor(){
        this.nodeCache = new NodeCache({ stdTTL: 6000, checkperiod: 300 });
        this.replyCreator = new StaticReplyCreator();
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
            if(item.name.toLowerCase() == "bye" && item.confidence! > 0.7 && item.value == "true")
                mainIntent = item;
        });

        let clarificationSuccess: boolean = true;
        if (userCache.conversationState == "clarify") {
            if(userCache.clarifySubject == "whois_yuri"){
                var topics = intent.entities.filter(_entity => _entity.name == "topic" && _entity.confidence! > 0.6);
                let topicFound: boolean = false;
                var that = this;
                topics.forEach(function(_topic){
                    if(!topicFound)
                        reply += "In terms of " + _topic.value + ", ";
                    else
                        reply += "As for " + _topic.value + ", ";
                    
                    reply += that.replyCreator.getTopicExplanation(_topic.value ? _topic.value : "none");
                    topicFound = true;
                });
                if(topics.length == 0) clarificationSuccess = false;
            } else{
                clarificationSuccess = false;
            }
        } 
        if(mainIntent.name == "intent" && (userCache.conversationState == "init" || !clarificationSuccess)){
            //handle typical static intents
            if(mainIntent.value == "hello"){
                reply = this.replyCreator.getRandomGreeting(false);
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
                "I don't believe it. He gave me this link <a href='https://github.com/c0m4ndo5/botbackend'>this link</a> which supposedly has my code in it. I can't believe my brain is just" +
                " some lines of code!"
            } else if(mainIntent.value == "professional"){
                reply = "Looking for his professional information? Alright! You'll find his CV <a href='../files/Yuri_CV.pdf'>here</a> and " +
                "if you'd rather just see everything in good ol' LinkedIn, please check <a href='https://www.linkedin.com/in/yuri-wergrzn-4269b497/'>his profile</a> out!"
            }
        }  else if(mainIntent.name == "bye"){
            reply = this.replyCreator.getRandomFarewell(false);
        }else if (intent.chatMessage.length == 0){
            reply = this.replyCreator.getRandomFollowup();
        }

        this.nodeCache.set(userSession.userID, userCache);
        return reply;
    }
}