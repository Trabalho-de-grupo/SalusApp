import CategoriaModel from '../models/CategoriaModel.js'

export default class PageCategoriaController {

    constructor() {
        this.categorias = localStorage.categorias ? JSON.parse(localStorage.categorias) : []
        this.idUtilizador
    }

    updatePage(table) {

        //Object.values(this.categorias).forEach(categoria => {  })
        console.log(table)
        console.log(this.categorias)
        let tableTeste = ""

        let length = this.categorias.length


        for(let i = 0; i < length; i=i+3) {
            console.log(i)
            tableTeste =+ `  
                <tr class="linhaCategoria">
            `
            for(let j = i; j < i+3; j++){
                console.log(j)
                if(j > length)
                    break;

                tableTeste =+ `
                <td scope="row">
                    <div class="atividade1"></div>
                </td>
                `
            }
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