import UserController from '../controllers/UserController.js'

export default class UserView {
    
    constructor() {
        this.userController = new UserController();

        // register DOM
        this.registerUsername = document.getElementById('txtRegisterUsername');
        this.registerEmail = document.getElementById('txtRegisterEmail');
        this.registerPassword = document.getElementById('txtRegisterPassword');
        this.registerPassword2 = document.getElementById('txtConfirmRegisterPassword');
        this.registerButton = document.getElementById('btnRegister');
        this.bindRegisterForm();

        // login/logout DOM
        this.loginUsername = document.getElementById('txtUsername');
        this.loginPassword = document.getElementById('txtPassword');
        this.loginButton = document.getElementById('btnLogin');
        this.logoutButton = document.getElementById('btnLogout');
        this.bindLoginForm();

        this.messages = document.querySelector('#messages');
        this.checkLoginStatus();

        // Animation DOM
        this.x = document.getElementById("login");
        this.y = document.getElementById("registar");
        this.z = document.getElementById("btn");
        this.btnAnimation = document.querySelectorAll('.login-btn');
        this.bindAnimationLogin();
        this.bindAnimationRegisto();
    }

    bindRegisterForm() {
        this.registerButton.addEventListener('click', () => {

            try {
                if (this.registerPassword.value !== this.registerPassword2.value) {
                    throw Error('Password e Confirmar Password não coincidem!');
                }
                if (this.registerUsername.value == '' || this.registerEmail.value == '' || this.registerPassword.value == '') {
                    throw Error('Preencha todos os campos!');
                }
                this.userController.register(this.registerUsername.value, this.registerEmail.value, this.registerPassword.value);
                this.displayMessage('Utilizador registado com sucesso!', 'success');

                //Link que envia depois do Loggin
                window.location.replace('/html/registo.html')

                // Wait 1 second before reloading, so the user can see the login success message
                setTimeout(() => {
                    this.updateButtons('login');
                    location.reload()
                },
                1000);

            } catch (e) {
                this.displayMessage(e, 'danger');
            }
        });
    }

    bindLoginForm() {
        this.loginButton.addEventListener('click', () => {
            try {
                if (this.loginUsername.value == '' || this.loginPassword.value == '') {
                    throw Error('Preencha todos os campos!');
                }
                this.userController.login(this.loginUsername.value, this.loginPassword.value);
                this.displayMessage('Login bem sucedido!', 'success');

                //Link que envia depois do Loggin
                window.location.replace('/html/categoria.html')

                // Wait 1 second before reloading, so the user can see the login success message
                setTimeout(() => {
                        this.updateButtons('login');
                        location.reload()
                    },
                    1000);

            } catch (e) {
                this.displayMessage(e, 'danger');
            }
        });

        this.logoutButton.addEventListener('click', () => {
            this.userController.logout();
            this.updateButtons('logout');
            location.reload()
        });
    }

    checkLoginStatus() {
        if (this.userController.isLogged()) {
            this.updateButtons('login');
        } else {
            this.updateButtons('logout');
        }
    }

    bindAnimationLogin() {
        this.btnAnimation[0].addEventListener('click', () => {
            this.userController.btnLogin(this.x,this.y,this.z)
        })
    }

    bindAnimationRegisto() {
        this.btnAnimation[1].addEventListener('click', () => {
            this.userController.btnRegistar(this.x,this.y,this.z)
        })
    }

    displayMessage(message, type) {
        this.messages.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>;
            `;
            
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
