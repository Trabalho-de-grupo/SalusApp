import UserController from '../controllers/controllersRegisto.js'

export default class UserView {
    constructor() {
        this.userController = new UserController();

        // Inputs Registo
        this.registerNome = document.getElementById('txtRegisterNome');
        this.registerEmail = document.getElementById('txtRegisterEmail');
        this.registerPassword = document.getElementById('txtRegisterPassword');
        this.registerPassword2 = document.getElementById('txtRegisterConfPassword');
        this.registerButton = document.getElementById('btnRegister');
        this.bindRegisterForm();

        // Inputs Login
        this.loginNome = document.getElementById('txtLoginNome');
        this.loginPassword = document.getElementById('txtLoginPassword');
        this.loginButton = document.getElementById('btnLogin');
        this.logoutButton = document.getElementById('btnLogout');
        this.bindLoginForm();

        // Mensagem de Erro
        this.messages = document.querySelector('#messages')

        //Confirmar Sessão
        this.checkLoginStatus();
    }

    bindRegisterForm() {
        this.registerButton.addEventListener('click', () => {

            try {
                if (this.registerPassword.value !== this.registerPassword2.value) {
                    throw Error('Password and Confirm Password are not equal');
                }
                this.userController.register(this.registerUsername.value, this.registerPassword.value);
                this.displayMessage('User registered with success!', 'success');
            } catch (e) {
                this.displayMessage(e, 'danger');
            }
        });
    }




    
    checkLoginStatus() {
        if (this.userController.isLogged()) {
            this.updateButtons('login');
        } else {
            this.updateButtons('logout');
        }
    }

    displayMessage(message, type) {
        this.messages.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }

    updateButtons(event) {
        switch (event) {
            case 'login':
                this.loginButton.style.visibility = 'hidden'
                this.logoutButton.style.visibility = 'visible'
                break;
            case 'logout':
                this.loginButton.style.visibility = 'visible'
                this.logoutButton.style.visibility = 'hidden'
        }
    }

}
