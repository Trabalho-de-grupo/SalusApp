import PageCategoriaController from '../controllers/PageCategoriaController.js'

export default class PageCategoriaView {

    constructor() {
        this.PageCategoriaController = new PageCategoriaController();

        this.tableCategoria = document.querySelector('table');
        this.updatePageCategoria();

        this.btnLinkVerMais = document.getElementsByClassName("linkVerMais");
        this.bindBtnCategoria();
    }
    
    bindBtnCategoria() {
        for (const btnVerMais of this.btnLinkVerMais) {
            btnVerMais.addEventListener('click', () => {
                console.log(btnVerMais.parentNode.parentNode.children[0].innerHTML)
                this.PageCategoriaController.sendLinkAtividade(btnVerMais.parentNode.parentNode.children[0].innerHTML)
            });
        }
    } 
    
    updatePageCategoria() {
        this.PageCategoriaController.updatePage(this.tableCategoria);
    }
}