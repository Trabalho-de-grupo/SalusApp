import UserModel from '../models/UserModel.js'

export default class PerfilController {
    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
        this.sessionName = sessionStorage.getItem('loggedUser')
    }

    updatePefilInput(inputName, inputEmail) {        
        Object.values(this.users).forEach(user => {
            if (user.username == this.sessionName) {
                inputName.setAttribute('value', user.username);
                inputEmail.setAttribute('value', user.email);
            }
        })
    }

    guardarInputPerfil(inputName, inputEmail, inputPass) {
        this.users2 = this.users.filter(user2 => user2.username != this.sessionName)

        Object.values(this.users).forEach(user => {
            if (user.username == this.sessionName) {
                if (this.users2.find(user2 => user2.username == inputName.value)) {
                    throw Error(`Nome de utilizador "${inputName.value}" já existe!`);
                }
                if (this.users2.find(user2 => user2.email == inputEmail.value)) {
                    throw Error(`Email "${inputEmail.value}" já existe!`);
                }
                user.username = inputName.value
                user.email = inputEmail.value
                user.password = inputPass.value
            }
        })

        localStorage.setItem('users', JSON.stringify(this.users));
    }
}