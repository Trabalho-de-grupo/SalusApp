import CategoriaModel from '../models/CategoriaModel.js'

export default class CategoriaController {

    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
        this.categorias = localStorage.categorias ? JSON.parse(localStorage.categorias) : []

    }

    newCategoria(name, color, icon, description) {
        if (this.categorias.find(categoria => categoria.name === name.value)) {
            throw Error(`Categoria com nome "${name.value}" já existe!`);
        } else {
            if (this.categorias.find(categoria => categoria.color === color.value)) {
                throw Error(`A cor #"${color.value}" já existe!`);
            } else {
                const newId = this.categorias.length > 0 ? this.categorias[this.categorias.length - 1].id + 1 : 1
                this.categorias.push(new CategoriaModel(newId, name.value, color.value, icon.value, description.value));
                localStorage.setItem('categorias', JSON.stringify(this.categorias));
                location.reload();
            }
        }
    }

    updateTable(table) {
        Object.values(this.categorias).forEach(categoria => {
            table.innerHTML += `
                <tr class="linhaCategoria">
                    <td scope="row">${categoria.id}</td>
                    <td>${categoria.name}</td>
                    <td>${categoria.color}</td>
                    <td>${categoria.icon}</td>
                    <td>${categoria.description}</td>
                    <td>
                        <button class="btnEditCategoria btn btn-outline-secondary" data-toggle="modal" data-target="#editCategoriaModal">Edit</button>
                        <button class="btnDeleteCategoria btn btn-outline-secondary" data-toggle="modal" data-target="#deleteCategoriaModal">Delete</button>
                    </td>
                </tr>
            `
        })
    }











}