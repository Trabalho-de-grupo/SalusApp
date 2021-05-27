import UserModel from '../models/UserModel.js'


export default class UtilizadorController {

    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
    }

    UpdateTable() {

        length = this.users.length;
        console.log(length)
        
        for(let i = 0; i < length; i++) {
            console.log(this.users[i])
            console.log(this.users[i].username)       
            console.log(this.users[i].email)
            console.log(this.users[i].password)
            console.log(this.users[i].status)
        }
    }
}