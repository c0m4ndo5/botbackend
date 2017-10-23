import { Reply } from '../Models/Reply';
import { IntentData } from './Intent';
export interface CacheObject{
    conversationState: string,
    clarifySubject?: string,
    usedReplies:Reply[],
    intentHistory:IntentData[]
}