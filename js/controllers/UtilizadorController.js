import UserModel from '../models/UserModel.js'


export default class UtilizadorController {
    
    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
    }
}