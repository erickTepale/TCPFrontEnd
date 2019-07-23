export class ChannelMessage{
    channel_id:number;
    message_id:number;

    constructor(channel_id:number, message_id:number){
        this.channel_id = channel_id;
        this.message_id = message_id;
    }
}