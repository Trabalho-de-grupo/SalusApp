import UserModel from '../models/UserModel.js'

export default class EstatisticaController{
    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
    }

    
}