import UserModel from '../models/UserModel.js'


export default class UtilizadorController {

    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
        this.idUtilizador
    }

    UpdateTable(table) {

        let length = this.users.length;
        console.log(table)

        for (let i = 0; i < length; i++) {

            table.innerHTML += `
                <tr class="linhaUtilizador">
                    <td scope="row">${this.users[i].id}</td>
                    <td>${this.users[i].username}</td>
                    <td>${this.users[i].email}</td>
                    <td>${this.users[i].password}</td>
                    <td>${this.users[i].status}</td>
                    <td>
                        <button class="btnEditUtilizador btn btn-outline-secondary" data-toggle="modal" data-target="#editModal">Edit</button>
                        <button class="btnDeleteUtilizador btn btn-outline-secondary" data-toggle="modal" data-target="#deleteModal">Delete</button>
                    </td>
                </tr>
            `
        }
    }

    BtnEditData(chave) {
        Object.values(this.users).forEach(user => {
            if (user.id == chave.innerText) {
                this.idUtilizador = chave.innerText
            }
        })
    }

    BtnEditConfirmar(status) {
        console.log(status.value)
    }

    BtnDeleteData(chave) {
        Object.values(this.users).forEach(user => {
            if (user.id == chave.innerText) {
                this.idUtilizador = chave.innerText
            }
        })
    }

    BtnDeleteConfirmar() {
        Object.values(this.users).forEach(user => {
            if (user.id == this.idUtilizador) {
                //Remove toda a tabela user
                //Falta remover apenas a linha do utilizador com a o id = idUtilizador
                console.log(user.username)
                window.localStorage.removeItem('')
            }
        })
    }
}