import PageAtividadeController from '../controllers/PageAtividadeController.js'

export default class AtividadeView {
    constructor() {
        this.PageAtividadeController = new PageAtividadeController();

        this.tableAtividade = document.querySelector('table');
        this.updatePageListagem();
    }

    updatePageListagem() {
        if (sessionStorage.getItem('categoriaID') != null) {
            this.PageAtividadeController.updatePage(this.tableAtividade);
        } else {
            window.location.replace('/html/categoria.html')
        }
    }
}