import { Reply } from '../Models/Reply';
export interface CacheObject{
    conversationState: string,
    clarifySubject?: string,
    usedReplies:Reply[]
}