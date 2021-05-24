import UserModel from '../models/UserModel.js'

export default class UserController {

    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
    }

    register(username, email, password) {
        if (this.users.find(user => user.username === username)) 
        {
            throw Error(`User with username "${username}" already exists!`);
        } 
        else 
        {
            if (this.users.find(user => user.email === email))
            {
                throw Error(`User with email "${email}" already exists!`);
            }
            else
            {
                const newId = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1
                this.users.push(new UserModel(newId, username, email, password));
                localStorage.setItem('users', JSON.stringify(this.users));
            }
        }
    }

    login(username, password) {
        if (this.users.some(user => user.email === username && user.password === password)) {
            sessionStorage.setItem('loggedUser', username);
            return true;
        } else {
            throw Error('Invalid login!');
        }
    }

    logout() {
        sessionStorage.removeItem('loggedUser');
    }

    isLogged() {
        return sessionStorage.getItem('loggedUser') !== null ? true : false;
    }

    btnRegistar() {
        x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left = "104px";
    }

    btnLogin() {
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0";
    }
    
}