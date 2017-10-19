import { Reply } from "../../Models/Reply";

export interface IReplyCreator{
    getRandomReply(category: string): Reply;
}