export interface Entity{
    name: string;
    confidence?: number;
    value?: string;
    suggested?: boolean;
}

export interface IntentData{
    chatMessage: string;
    entities: Entity[];
}