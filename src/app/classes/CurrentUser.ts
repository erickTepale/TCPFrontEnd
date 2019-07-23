export class CurrentUser{
    user_id:number;
    username:string;
    password:string;

    constructor(id:number, name:string, pass:string){
        this.user_id = id;
        this.username = name;
        this.password = pass;
    }
  
}