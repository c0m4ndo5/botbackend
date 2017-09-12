import { IntentData, Entity } from '../Models/Intent';
import { SessionObject } from '../Models/SessionObject';

export class ConversationHandler{
    public handleMessage(intent: IntentData, userSession: SessionObject): string{
        var reply = 'test';

        return reply;
    }
}