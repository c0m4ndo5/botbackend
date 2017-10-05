import { IReplyCreator } from './Interfaces/IReplyCreator';

export class StaticReplyCreator implements IReplyCreator{//static as in hard coded. Pending database implementation, if worth it for this bot
    getRandomJoke(): string {
        throw new Error("Method not implemented.");
    }
    getRandomAdventure(): string {
        throw new Error("Method not implemented.");
    }
    getRandomGreeting(short: boolean): string {
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
    getRandomFollowup(): string{
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
    getRandomFarewell(timeout: boolean): string {
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
    getTopicExplanation(topic: string): string {
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
    }

}