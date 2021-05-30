import UserModel from '../models/UserModel.js'


export default class UtilizadorController {

    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
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
                        <button class="btnEditUtilizador btn btn-outline-secondary">Edit</button>
                        <button class="btnDeleteUtilizador btn btn-outline-secondary">Delete</button>
                    </td>
                </tr>
            `
        }
    }

    BtnEditData(chave) {
        let idvalue = chave.innerText
        console.log(idvalue)
        console.log(this.users[idvalue].username)
        
        
    }

    BtnDeleteData(chave) {
        
        console.log(chave)
    }



}