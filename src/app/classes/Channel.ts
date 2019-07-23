export class Channel{
    channel_id:number;
    channel_name:string;
    user_id:number;
    publics:number;

    constructor(channel_id:number, channel_name:string, user_id:number, publics:number){
        this.channel_id = channel_id;
        this.channel_name = channel_name;
        this.user_id = user_id;
        this.publics = publics;
    }
}