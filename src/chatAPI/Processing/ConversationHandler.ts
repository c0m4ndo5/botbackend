import { IntentData, Entity } from '../Models/Intent';
import { SessionObject } from '../Models/SessionObject';
import { CacheObject } from '../Models/CacheObject';
import NodeCache = require('node-cache');
import { StaticReplyCreator } from './StaticReplyCreator';
import { IReplyCreator } from './Interfaces/IReplyCreator';
import { Reply } from '../Models/Reply';
import { APIResponseData } from '../Models/APIResponse';

export class ConversationHandler{
    public nodeCache: NodeCache;
    public replyCreator: IReplyCreator;
    public constructor(){
        this.nodeCache = new NodeCache({ stdTTL: 6000, checkperiod: 300 });
        this.replyCreator = new StaticReplyCreator();//todo injection to remove coupling
    }

    public handleMessage(intent: IntentData, userSession: SessionObject): APIResponseData{
        let userCache: CacheObject;
        userCache = this.nodeCache.get(userSession.userID);
        if(!userCache) {
            userCache = { 
                conversationState: "init",
                usedReplies:[],
                intentHistory:[]
            };
        }

        var reply = '';
        var suggestions:string[] = ["Who is yuri?", "Who are you?"];//default suggestions
        var mainIntent: Entity = {name: "none"};
        intent.entities.forEach(function(item,i){
            if(item.name.toLowerCase() == "intent" && item.confidence! > 0.5){
                mainIntent = item;
            }
            if(item.name.toLowerCase() == "bye" && item.confidence! > 0.7 && item.value == "true")
                mainIntent = item;
        });
        userCache.intentHistory.push(intent);
        let gotTopic: boolean = true;

        //topic: free text detection for topics/multiple topics
        var topics = intent.entities.filter(_entity => _entity.name == "topic" && _entity.confidence! > 0.6 && !_entity.suggested);
        let topicFound: boolean = false;
        var that = this;//lol
        topics.forEach(function(_topic){
            if(!topicFound)
                reply += "In terms of " + _topic.value + ", ";
            else
                reply += "As for " + _topic.value + ", ";
            var replyItem = that.replyCreator.getRandomReply(_topic.value ? _topic.value : "none", userCache.usedReplies);
            if(replyItem){
                reply += replyItem.content;// getTopicExplanation(_topic.value ? _topic.value : "none");
                suggestions = replyItem.suggestions;
                userCache.usedReplies.push(replyItem);
                topicFound = true;
            } else if (that.replyCreator.isValid(_topic.value ? _topic.value : "none")){
                reply += "I've already told you everything I know. Perhaps I can talk about something else?";
                topicFound = true;
            }
            
        });
        if(!topicFound) {
            gotTopic = false;
            reply = "";
        }

        //Intent = normal intent detection on wit (single intent)
        if(mainIntent.name == "intent" && (userCache.conversationState == "init" || !gotTopic)){
            //handle typical static intents
            var intentPhrase = mainIntent.value ? mainIntent.value : "";
            var replyItem = this.replyCreator.getRandomReply(intentPhrase);
            if(replyItem){
                reply = replyItem.content;
                suggestions = replyItem.suggestions;
                if(replyItem.clarifyState != "none")
                    userCache.conversationState = replyItem.clarifyState;
            }
            else {//dynamic stuff
                if(mainIntent.value == "where_yuri"){
                    reply = "Yuri is from Curitiba, Brazil and "
                    let Departure:Date = new Date(2017, 10, 13);
                    let now:Date = new Date();
                    if(now <= Departure) {
                        reply += "he is currently still living there. He will move to Canada as a Permanent Resident in November 13th, 2017.";
                    } else if((now.getDay() == Departure.getDay() || now.getDay() == Departure.getDay()+1) && now.getMonth() == Departure.getMonth() && now.getFullYear() == Departure.getFullYear()){
                        reply += "he is currently moving to Canada as a Permanent Resident. Currently as in, right now! November 13-14th 2017!";
                    } else if((now.getDay() < Departure.getDay() + 4) && now.getMonth() == Departure.getMonth() && now.getFullYear() == Departure.getFullYear()){
                        reply += "he has just landed in Canada as a Permanent Resident. Literally! His landing day was November 14th 2017";
                    } else {
                        reply += "he is living in Canada as a Permanent Resident since November 14th 2017.";
                    }
                } else if(mainIntent.value == "thanks" && userCache.intentHistory.length < 2){
                    var replyItem = this.replyCreator.getRandomReply("appreciation_more");
                    if(replyItem){
                        reply = replyItem.content;
                        suggestions = replyItem.suggestions;
                    }
                } else if(mainIntent.value == "thanks" && userCache.intentHistory.length >= 2){
                    var replyItem = this.replyCreator.getRandomReply("appreciation_normal");
                    if(replyItem){
                        reply = replyItem.content;
                        suggestions = replyItem.suggestions;
                    }
                }
            }   

/*             if(mainIntent.value == "hello"){
                var replyItem = this.replyCreator.getRandomReply("greeting");
                if(replyItem){
                    reply = replyItem.content;
                }
            } else if(mainIntent.value == "whois"){
                reply = "You're asking about me? I'm just Yuri's virtual assistant. I'm hoping I can handle your general questions about him." + 
                "Maybe one day I'll be as smart as him and do his job! Just don't tell him I said that."//describe making of bot
            } else if(mainIntent.value == "whois_yuri"){
                reply = "Yuri? He's a very cool guy who likes traveling, gaming and making new friends and hanging out with them." +
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
            } else if(mainIntent.value == "thanks"){
                var replyItem = this.replyCreator.getRandomReply("thanks");
                if(replyItem)
                    reply = replyItem.content;
            } else if(mainIntent.value == "where_yuri"){
                reply = "Yuri is from Curitiba, Brazil and "
                let Departure:Date = new Date(2017, 10, 13);
                let now:Date = new Date();
                if(now <= Departure) {
                    reply += "he is currently still living there. He will move to Canada as a Permanent Resident in November 13th, 2017.";
                } else if((now.getDay() == Departure.getDay() || now.getDay() == Departure.getDay()+1) && now.getMonth() == Departure.getMonth() && now.getFullYear() == Departure.getFullYear()){
                    reply += "he is currently moving to Canada as a Permanent Resident. Currently as in, right now! November 13-14th 2017!";
                } else if((now.getDay() < Departure.getDay() + 4) && now.getMonth() == Departure.getMonth() && now.getFullYear() == Departure.getFullYear()){
                    reply += "he has just landed in Canada as a Permanent Resident. Literally! His landing day was November 14th 2017";
                } else {
                    reply += "he is living in Canada as a Permanent Residence since November 14th 2017.";
                }
            } */
        }  else if(mainIntent.name == "bye"){
            var replyItem = this.replyCreator.getRandomReply("bye");
            if(replyItem)
                reply = replyItem.content;
        }else if (intent.chatMessage.length == 0){
            var replyItem = this.replyCreator.getRandomReply("fup");
            if(replyItem)
                reply = replyItem.content;
        }

        if(reply.length == 0) reply = "I'm sorry, I don't know how to answer that yet, please try something else!"; //improve

        this.nodeCache.set(userSession.userID, userCache);
        var result:APIResponseData = {
            reply: reply,
            suggestions:suggestions
        }
        return result;
    }
}