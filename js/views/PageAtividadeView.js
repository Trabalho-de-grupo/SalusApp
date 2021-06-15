import PageAtividadeController from '../controllers/PageAtividadeController.js'

export default class AtividadeView {
    constructor() {
        this.PageAtividadeController = new PageAtividadeController();

        this.tableAtividade = document.querySelector('table');
        this.updatePageListagem();

        this.btnLinkVerMais = document.getElementsByClassName("linkVerMaisAtividade");
        this.bindBtnAtividade();
    }

    bindBtnAtividade() {
        for (const btnVerMais of this.btnLinkVerMais) {
            btnVerMais.addEventListener('click', () => {
                this.PageAtividadeController.sendLinkAtividade(btnVerMais.parentNode.parentNode.children[0].innerHTML)
            });
        }
    } 

    updatePageListagem() {
        if (sessionStorage.getItem('atividadeID') != null) {
            this.PageAtividadeController.updatePage(this.tableAtividade);
        } else {
            //Segurança que nao permite utilizador ir para listagem sem escolher categoria
            //window.location.replace('/html/categoria.html')
        }
    }
}