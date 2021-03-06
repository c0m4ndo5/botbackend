import { IReplyCreator } from './Interfaces/IReplyCreator';
import { Reply } from '../Models/Reply';
var replies = require('../../../data/replies.json');

export class StaticReplyCreator implements IReplyCreator{//static as in hard coded. Pending database implementation, if worth it for this bot
    public repliesList:Reply[] = [];
    //public usedReplies:Reply[] = [];
    public constructor(){
        replies.replyList.forEach(element => {
            this.repliesList.push({
                content: element.content,
                category: element.category,
                clarifyState: element.clarifyState,
                suggestions: element.suggestions
            })
        });
    }

    isValid(category:string): boolean{
        var responses = this.repliesList.filter(_entity => _entity.category.indexOf(category) >= 0)
        return responses.length > 0;
    }

    getRandomReply(category: string, listOfUsedReplies?:Reply[]): Reply | void{//check if reply used or not
        let _listOfUsedReplies:Reply[] = listOfUsedReplies ? listOfUsedReplies : [];
        var responses = this.repliesList.filter(_entity => _entity.category.indexOf(category) >= 0 && 
            _listOfUsedReplies!.filter(__entity => __entity.content == _entity.content).length == 0);//Check if already used to filter out
        var selected = Math.floor((Math.random() * responses.length));
        if(responses.length > 0){
            
            return responses[selected];
        }
        else{
            return undefined;
        }
    }
/* 
    getRandomJoke(): Reply {
        var responses = this.repliesList.filter(_entity => _entity.category == "joke")

        var selected = Math.floor((Math.random() * responses.length));
        return responses[selected];
    }
    getRandomAdventure(): Reply {
        var response: string[] = [
            "He once went to an off-road adventure in the coast of Sao Paulo and, with his friends, "+
            "drove 70km on sandy beaches before reaching one of Brazil's oldest towns, Cananéia. I wish I could have been there!<br/>" +
            "<img src='../files/adv1.jpg'></img>",
            "He went to the second largest Oktoberfest in the world at Blumenau, SC, in Brazil. Two kegs of beer were served in the bus! " +
            "Before he'd even get there! He didn't tell me much more about that trip, though. Said he didn't remember much...",
            "In the 2015 Brazillian Carnival, he went to a public state park on an event with 50+ attendees. It was a bit hard to get to but "+
            "not a problem on a 4x4 pick-up. The bus however, bringing the bulk of the attendees, got stuck and Yuri had to rescue them! " +
            "It had just rained a lot, though, and he almost slipped off a cliff due to all the slippery mud! That was some adrenaline!"
        ];
        var selected = Math.floor((Math.random() * response.length));
        return response[selected];
    }
    getRandomWork(recent: boolean): Reply{
        var works: string[] = [
            "He's created a chat bot for ExxonMobil, whose objective is to be the central digital assistant for employees, kind of like " +
            "siri or cortana for internal matters. He participated designing the architecture of the bot/service and it's implementation. "+
            "The bot was designed service oriented architecture principles and utilized C# .NET, entity framework, REST APIs and the Azure bot " +
            "platform. It also utilized Natural Language Recognition (NLP) technology. I envy her, Yuri's spent more time with her than me!",
            "Yuri worked on a project to redesign service request forms on ExxonMobil's IT Services portal. He created a platform for easy " +
            "design of forms using Angular and REST APIs (C# .NET) in which developers could quickly put together forms for requests (such as " +
            "access, hardware and software requests) with little coding. It interfaced with BMC's complex platform, ITSM Remedy, hiding it's " +
            "complexities under a simple REST API's endpoints."
        ];
        if(recent){
            return works[0];
        } else {

            var selected = Math.floor((Math.random() * works.length));
            return works[selected];
        }
    }
    getRandomGreeting(short: boolean): Reply {
        var greetings: string[];
        if(short){
            greetings = [
                "Hi there!",
                "Hey, what's up?",
                "Heya!"
            ];
        }else{
            greetings = [
                "Well hello there! My name is Curdia. What brings you here?",
                "Heya! Name's Curdia, glad you've come to visit. What can I do for you?"
            ]
        }
        var selected = Math.floor((Math.random() * greetings.length));
        return greetings[selected];
    }
    getRandomFollowup(): Reply{
        var fups: string[] = [
            "Are you there?",
            "Is there anyone there?",
            "Hello? Sir?",
            "Hey, I'm still here",
            "Please don't go yet!"
        ];
        var selected = Math.floor((Math.random() * fups.length));
        return fups[selected];
    }
    getRandomFarewell(timeout: boolean): Reply {
        var farewell: string[];
        if(timeout){
            farewell = [
                "Well, hope you come back",
                "Hey, if you come back.. say something, it's lonely here.",
                "Aaand I'm alone again..."
            ];
        }else{
            farewell = [
                "Bye bye! Thanks for visiting!",
                "Farewell!! Hope you return someday!",
                "Leaving already? Okay, hope you come back! See ya!",
                "Leaving? Aww.. Okay, good bye!"
            ]
        }
        var selected = Math.floor((Math.random() * farewell.length));
        return farewell[selected];
    }
    getTopicExplanation(topic: string): Reply {
        var reply = "";
        if(topic == "travels"){
            reply += "Yuri loves to travel and go on exciting adventures! " + this.getRandomAdventure();
         } else if (topic == "technologies"){
            reply += "he has worked mostly in the windows platform and with Microsoft products - Azure (several services), Active Directory" +
            "MS SQL Databases, IIS, Exchange... He's also used the BMC Orchestrator/ITSM platform and is learning nodejs. His most recent " + 
            "project involves work with natural language processing for chatbots (such as me!)";
        } else if (topic == "adventures"){
            reply += "Yuri loves to travel and go on exciting adventures! " + this.getRandomAdventure();
        } else if (topic == "programming languages"){
            reply += "he's worked with C# quite frequently during the last 4 years and it is the language he's best at. However, " +
            "Yuri has been working with web development using AngularJS and Angular2 for just over a year and says he enjoys it a lot. " +
            "He enjoys learning new languages and is always open to them.";
        } else if (topic == "languages"){
            reply += "Yuri speaks Portuguese and English fluently and comfortably even in presence of audiences, if necessary."
        }
        return reply;
    } */

}