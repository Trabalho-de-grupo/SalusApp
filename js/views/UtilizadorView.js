import UtilizadorController from '../controllers/UtilizadorController.js'


class UtilizadorView {
    constructor() {
        this.utilizadorController = new UtilizadorController()

        this.tableUtilizador = document.querySelector('table');

        this.updateTableUtilizador();

        this.btnEditUtilizador = document.getElementsByClassName("btnEditUtilizador");
        this.btnDeleteUtilizador = document.getElementsByClassName("btnDeleteUtilizador");
        this.linesUtilizador = document.querySelector('tbody')

        this.bindEditUtilizador();
        this.bindDeleteUtilizador();

    }

    bindEditUtilizador() {

        for (const btnEdit of this.btnEditUtilizador) {
            btnEdit.addEventListener('click', () => {
                let id = (btnEdit.parentNode.parentNode.cells[0])
                this.utilizadorController.BtnEditData(id);
            });
        }

    }

    bindDeleteUtilizador() {

        for (const btnDelete of this.btnDeleteUtilizador) {
            btnDelete.addEventListener('click', () => {
                let id = (btnDelete.parentNode.parentNode.cells[0])
                this.utilizadorController.BtnDeleteData(id);
            });
        }
    }

    updateTableUtilizador() {
        this.utilizadorController.UpdateTable(this.tableUtilizador);
    }

    displayMessage(message, type) {
        this.messages.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }
}

new UtilizadorView();