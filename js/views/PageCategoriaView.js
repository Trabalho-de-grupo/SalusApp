import PageCategoriaController from '../controllers/PageCategoriaController.js'

export default class PageCategoriaView {

    constructor() {
        this.PageCategoriaController = new PageCategoriaController();

        this.tableCategoria = document.querySelector('table');
        this.updatePageCategoria();

    }

    updatePageCategoria () {
        this.PageCategoriaController.updatePage(this.tableCategoria);
    }
}

new PageCategoriaView();