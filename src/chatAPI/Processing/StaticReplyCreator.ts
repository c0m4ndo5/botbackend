import { IReplyCreator } from './Interfaces/IReplyCreator';

export class StaticReplyCreator implements IReplyCreator{//static as in hard coded. Pending database implementation, if worth it for this bot
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
    getRandomFarewell(timeout: boolean): string {
        throw new Error("Method not implemented.");
    }
    getTopicExplanation(topic: string): string {
        var reply = "";
        if(topic == "travels"){
            
         } else if (topic == "technologies"){
            
        } else if (topic == "adventures"){

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