import AtividadeModel from '../models/AtividadeModel.js'

export default class PageAtividadeController {
    constructor() {
        this.atividades = localStorage.atividades ? JSON.parse(localStorage.atividades) : []
        this.categorias = localStorage.categorias ? JSON.parse(localStorage.categorias) : []
        this.idUtilizador
    }
}