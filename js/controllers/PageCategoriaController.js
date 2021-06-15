import CategoriaModel from '../models/CategoriaModel.js'

export default class PageCategoriaController {

    constructor() {
        this.categorias = localStorage.categorias ? JSON.parse(localStorage.categorias) : []
        this.idUtilizador
        this.tableTeste = ""
    }

    updatePage(table) {

        //Object.values(this.categorias).forEach(categoria => {  })
        console.log(table)
        console.log(this.categorias)

        let length = this.categorias.length

        for (let i = 0; i < length; i = i + 3) {
            if (i > length) {
                break;
            } else {
                this.tableTeste +=
                    `  
                    <tr class="linhaCategoria">
                `
                for (let j = i; j < i + 3; j++) {
                    if (j >= length) {
                        break;
                    } else {
                        this.tableTeste +=
                            `
                    <td>
                        <div class="imagemCategoria" style="background-color:#${this.categorias[j].color};"><span class="nomeCategoria">${this.categorias[j].name}</span><img class="iconCategoria" src="../img/${this.categorias[j].icon}" width="150px" height="150px"></div>
                    </td>
                    `
                    }
                }
                this.tableTeste +=
                    `  
                    </tr>
                    <tr class="linhaDescCategoria">
                `

                for (let j = i; j < i + 3; j++) {
                    if (j >= length) {
                        break;
                    } else {
                        this.tableTeste +=
                            `
                        <td>
                            <div class="descCategoria">${this.categorias[j].description}</div>
                        </td>
                    `
                    }
                }
                this.tableTeste +=
                    `  
                    </tr>
                `
            }
        }

        table.innerHTML += this.tableTeste
        /*
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
        */
    }
}