import CategoriaModel from '../models/CategoriaModel.js'

export default class PageCategoriaController {

    constructor() {
        this.categorias = localStorage.categorias ? JSON.parse(localStorage.categorias) : []
        this.idUtilizador
    }

    updatePage(table) {

        Object.values(this.categorias).forEach(categoria => {
            
        })

        console.log(this.categorias)
        console.log(this.categorias.length)
        let end = this.categorias.length

        for(let i = 0; i < end; i++) {
            console.log(i)
        }


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