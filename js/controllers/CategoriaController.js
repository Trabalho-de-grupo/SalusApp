import CategoriaModel from '../models/CategoriaModel.js'

export default class CategoriaController {

    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
        this.categorias = localStorage.categorias ? JSON.parse(localStorage.categorias) : []
        this.idUtilizador

    }

    newCategoria(name, color, icon, description) {
        if (this.categorias.find(categoria => categoria.name === name.value)) {
            throw Error(`Categoria com nome "${name.value}" já existe!`);
        } else {
            if (this.categorias.find(categoria => categoria.color === color.value)) {
                throw Error(`A cor #"${color.value}" já existe!`);
            } else {
                const newId = this.categorias.length > 0 ? this.categorias[this.categorias.length - 1].id + 1 : 1
                let iconPath = icon.value
                let iconPath2 = iconPath.substring(iconPath.lastIndexOf("\\") + 1)
                this.categorias.push(new CategoriaModel(newId, name.value, color.value, iconPath2, description.value));
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

    BtnEditData(chave, name, color, icon, desc) {
        this.idUtilizador = chave.innerText
        Object.values(this.categorias).forEach(categoria => {
            if (categoria.id == chave.innerHTML) {
                name.setAttribute('placeholder', categoria.name);
                color.setAttribute('placeholder', categoria.color);
                icon.setAttribute('value', categoria.icon);
                desc.setAttribute('placeholder', categoria.description);
            }
        })
    }

    BtnEditConfirmar(name, color, icon, desc) {
        this.categorias2 = this.categorias.filter(categoria2 => categoria2.id != this.idUtilizador)

        Object.values(this.categorias).forEach(categoria => {
            if (categoria.id == this.idUtilizador) {
                if (name.value == "" && color.value == "" && icon.value == "" && desc.value == "") {
                    throw Error('Preencha pelo menos um campo!');
                }
                if (this.categorias2.find(categoria2 => categoria2.name == name.value)) {
                    throw Error(`Nome de Categoria "${name.value}" já existe!`);
                }
                if (this.categorias2.find(categoria2 => categoria2.color == color.value)) {
                    throw Error(`Cor da Categoria #"${color.value}" já existe!`);
                } else {
                    if (name.value !== "") {
                        categoria.name = name.value
                    }
                    if (color.value !== "") {
                        categoria.color = color.value
                    }
                    if (icon.value !== "") {
                        let iconPath = icon.value
                        let iconPath2 = iconPath.substring(iconPath.lastIndexOf("\\") + 1)
                        categoria.icon = iconPath2
                    }
                    if (desc.value !== "") {
                        categoria.description = desc.value
                    }
                }

            }
        })
        console.log(this.categorias)
        localStorage.setItem('categorias', JSON.stringify(this.categorias));
    }

    BtnDeleteData(chave) {
        Object.values(this.categorias).forEach(categoria => {
            if (categoria.id == chave.innerHTML) {
                this.idUtilizador = chave.innerHTML
            }
        })
    }

    BtnDeleteConfirmar() {
        this.categorias = this.categorias.filter(categoria => categoria.id != this.idUtilizador)
        localStorage.setItem('categorias', JSON.stringify(this.categorias));
        location.reload();
    }












}