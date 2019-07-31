export class UserChannelPk{
    channelID:number;
    userId:number;

    constructor(channel_id:number, user_id:number){
        this.channelID = channel_id;
        this.userId = user_id;
    }  
}