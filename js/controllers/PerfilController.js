import UserModel from '../models/UserModel.js'

export default class PerfilController {
    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
        this.sessionName = sessionStorage.getItem('loggedUser')
    }

    updatePefilInput(inputName, inputEmail) {
        console.log(this.sessionName)
        
        Object.values(this.users).forEach(user => {
            if (user.username == this.sessionName) {
                inputName.setAttribute('value', user.username);
                inputEmail.setAttribute('value', user.email);
            }
        })


    }
}