//must be very small (1kb expected)
export interface SessionObject{
    userName?: string,
    userGender?: string,
    userConversationState?: string,
    tempData?: JSON
}