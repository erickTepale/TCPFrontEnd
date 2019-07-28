export class Channel{
    channel_id:number;
    channel_name:string;
    user_id:number;
    public:boolean;

    constructor(channel_name:string, user_id:number, publics:boolean){
        this.channel_name = channel_name;
        this.user_id = user_id;
        this.public = publics;
    }
}