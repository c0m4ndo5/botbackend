export interface Entity{
    name: string;
    confidence: number;
    value: string;
}

export interface IntentData{
    chatMessage: string;
    entities: Entity[];
}