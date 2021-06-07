import UserModel from '../models/UserModel.js'


export default class UtilizadorController {

    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
        this.idUtilizador
        this.idStatus 
    }

    //Contrução da Tabela de Utilizadores
    UpdateTable(table) {
        Object.values(this.users).forEach(user => {
            table.innerHTML += `
                <tr class="linhaUtilizador">
                    <td scope="row">${user.id}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                    <td>${user.idActivities}</td>
                    <td>${user.status}</td>
                    <td>
                        <button class="btnEditUtilizador btn btn-outline-secondary" data-toggle="modal" data-target="#editModal">Edit</button>
                        <button class="btnDeleteUtilizador btn btn-outline-secondary" data-toggle="modal" data-target="#deleteModal">Delete</button>
                    </td>
                </tr>
            `
        })
    }

    //Botão que verifica a linha do botão pressionado
    BtnEditData(chave) {
        Object.values(this.users).forEach(user => {
            if (user.id == chave.innerText) {
                this.idUtilizador = chave.innerText
                this.idStatus = user.status
            }
        })
    }

    //Botão que confirma o Editar do Utilizador
    BtnEditConfirmar(radioStatus) {
        Object.values(radioStatus).forEach(status => {
            if (status.checked) {
                if (status.value != this.idStatus) {
                    Object.values(this.users).forEach(user => {
                        if (user.id == this.idUtilizador) { 
                            this.users[this.idUtilizador-1].status = status.value
                            localStorage.setItem('users', JSON.stringify(this.users));
                            location.reload();
                        }
                    })
                }
            }
        })
    }

    //Botão que verifica a linha do botão pressionado
    BtnDeleteData(chave) {
        Object.values(this.users).forEach(user => {
            if (user.id == chave.innerText) {
                this.idUtilizador = chave.innerText
            }
        })
    }

    //Botão que confirma o Delete do Utilizador
    BtnDeleteConfirmar() {
        this.users = users.filter(user => user.id != this.idUtilizador)
        localStorage.setItem('users', JSON.stringify(this.users));
        location.reload();
    }
}