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

        console.log(this.users)
        console.log(this.users2)

        Object.values(this.users).forEach(user => {
            if (user.username == this.sessionName) {

                if (this.users2.find(user2 => user2.username == inputName.value)) {
                    console.log(inputName.value)
                }
                else {
                    user.username = inputName.value
                    user.email = inputEmail.value
                    user.password = inputPass.valueç
                }
            }
        })



        console.log(this.users)

        /*
        if (this.users2.find(user => user.username === inputName.value)) {
                    throw Error(`Nome de utilizador "${inputName.value}" já existe!`);
                } 
                else {
                    if (this.users2.find(user => user.email === inputEmail.value)) {
                        throw Error(`Este email "${inputEmail.value}" já existe!`);
                    }
                    else {
                        console.log(user)   
                    }
                }
        
        */
    }
}