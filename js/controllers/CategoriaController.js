import CategoriaModel from '../models/CategoriaModel.js'

export default class CategoriaController {

    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
    }




    
    CreateCategoriaStorage() {
        const categoria = ""
        if (!localStorage.categoria) {
            localStorage.setItem('categoria', JSON.stringify(categoria));
        }
    }




}