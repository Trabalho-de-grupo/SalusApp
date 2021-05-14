import UserModel from '../models/modelRegisto.js'

export default class UserController {

    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
    }

    register(username, password) {
        if (this.users.find(user => user.username === username)) {
            throw Error(`O nome, "${username}" ja esta a ser utilizado!`);
        } else {
            const newId = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1
            this.users.push(new UserModel(newId, username, password));
            localStorage.setItem('users', JSON.stringify(this.users));
        }
    }

    login(username, password) {
        if (this.users.some(user => user.username === username && user.password === password)) {
            sessionStorage.setItem('loggedUser', username);
            return true;
        } else {
            throw Error('Login Invalido!');
        }
    }

    logout() {
        sessionStorage.removeItem('loggedUser');
    }

    isLogged() {
        return sessionStorage.getItem('loggedUser') !== null ? true : false;
    }
}