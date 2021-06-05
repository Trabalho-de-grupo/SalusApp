import UserModel from '../models/UserModel'

export default class PerfilController {
    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
    }
}