export interface IReplyCreator{
    getRandomGreeting(short: boolean): string;
    getRandomFarewell(timeout: boolean): string;
    getTopicExplanation(topic:string):string;
}