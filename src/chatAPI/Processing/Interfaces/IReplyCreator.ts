import { Reply } from "../../Models/Reply";

export interface IReplyCreator{
    getRandomReply(category: string, listOfUsedReplies?:Reply[]): Reply | void;
    isValid(category: string):boolean;
}