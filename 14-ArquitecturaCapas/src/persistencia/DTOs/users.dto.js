export default class UsersDTO {
    constructor(obj){
        this.fullname = `${obj.first_name} ${obj.last_name}`
        this.email = obj.email
        this.password = obj.password
    }
}