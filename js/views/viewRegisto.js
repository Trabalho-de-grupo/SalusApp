import UserController from '../controllers/controllersRegisto.js'

export default class UserView {
    constructor() {
        this.userController = new UserController();

        // register DOM
        this.registerNome = document.getElementById('txtRegisterNome');
        this.registerEmail = document.getElementById('txtRegisterEmail');
        this.registerPassword = document.getElementById('txtRegisterPassword');
        this.registerPassword2 = document.getElementById('txtRegisterConfPassword');
        this.registerButton = document.getElementById('btnRegister');
        this.bindRegisterForm();

        // login/logout DOM
        this.loginNome = document.getElementById('txtLoginNome');
        this.loginPassword = document.getElementById('txtLoginPassword');
        this.loginButton = document.getElementById('btnLogin');
        this.logoutButton = document.getElementById('btnLogout');
        this.bindLoginForm();

        this.messages = document.querySelector('#messages')
        this.checkLoginStatus();
    }
}
