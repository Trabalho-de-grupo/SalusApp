import UserModel from '../models/UserModel.js'

export default class PagePrincipalController {
    constructor() {
        this.atividades = localStorage.atividades ? JSON.parse(localStorage.atividades) : []
        this.categorias = localStorage.categorias ? JSON.parse(localStorage.categorias) : []
    }





}
