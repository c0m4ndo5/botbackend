import { IntentData, Entity } from '../Models/Intent';
import { SessionObject } from '../Models/SessionObject';

export class ConversationHandler{
    public handleMessage(intent: IntentData, userSession: SessionObject): string{
        var reply = 'I\'m sorry but I could not understand what you meant. Would you kindly retry?';
        var mainIntent: Entity = {name: "none"};
        intent.entities.forEach(function(item,i){
            if(item.name.toLowerCase() == "intent" && item.confidence! > 0.5){
                mainIntent = item;
            }
        });

        if(mainIntent.name == "intent"){
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
            } else if(mainIntent.value == "creator"){
                reply = "I've been created by Yuri using Node.js, Expressjs, Typescript, Angular2... Well, that's what he tells me anyway. " +
                "I don't believe it. He gave me this link () which supposedly has my code in it. I can't believe my brain is just" +
                " some lines of code!"
            }
        }
        return reply;
    }
}