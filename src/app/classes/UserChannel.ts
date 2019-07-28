import {UserChannelPk} from '../classes/UserChannelPk'
export class UserChannel{
    userChannelPK: UserChannelPk;
    constructor(uid: number, cid: number) {
        this.userChannelPK = new UserChannelPk(cid,uid);
    }

    // channel_id:number;
    // user_id:number;

    // constructor(channel_id:number, user_id:number){
    //     this.channel_id = channel_id;
    //     this.user_id = user_id;
    // }
}