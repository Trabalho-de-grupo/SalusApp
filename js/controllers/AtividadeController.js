import AtividadeModel from '../models/AtividadeModel.js'

export default class AtividadeController {
    constructor() {
        this.atividades = localStorage.atividades ? JSON.parse(localStorage.atividades) : []
    }
}