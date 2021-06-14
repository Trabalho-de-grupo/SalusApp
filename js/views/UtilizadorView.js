import UtilizadorController from '../controllers/UtilizadorController.js'


export default class UtilizadorView {
    constructor() {
        this.utilizadorController = new UtilizadorController()

        this.tableUtilizador = document.querySelectorAll('table');
        this.updateTableUtilizador();

        this.btnEditUtilizador = document.getElementsByClassName("btnEditUtilizador");
        this.btnDeleteUtilizador = document.getElementsByClassName("btnDeleteUtilizador");

        this.btnDeleLineUtilizador = document.getElementById("btnDeleteLineUtilizador");
        this.btnEditLineUtilizador = document.getElementById("btnEditLineUtilizador");

        this.bindEditUtilizador();
        this.bindEditLine();
        this.bindDeleteUtilizador();
        this.bindDeleteLine();

    }

    bindEditUtilizador() {
        for (const btnEdit of this.btnEditUtilizador) {
            btnEdit.addEventListener('click', () => {
                let id = (btnEdit.parentNode.parentNode.cells[0])
                this.utilizadorController.BtnEditData(id);
            });
        }
    }

    bindEditLine() {
        this.btnEditLineUtilizador.addEventListener('click', () => {
            this.radioUserStatus = document.getElementsByName("radioUserStatus")
            this.utilizadorController.BtnEditConfirmar(this.radioUserStatus);
        });
    }

    bindDeleteUtilizador() {
        for (const btnDelete of this.btnDeleteUtilizador) {
            btnDelete.addEventListener('click', () => {
                let id = (btnDelete.parentNode.parentNode.cells[0])
                this.utilizadorController.BtnDeleteData(id);
            });
        }
    }

    bindDeleteLine() {
        this.btnDeleLineUtilizador.addEventListener('click', () => {
            this.utilizadorController.BtnDeleteConfirmar();
        });
    }

    updateTableUtilizador() {
        this.utilizadorController.updateTable(this.tableUtilizador[0]);
    }

    displayMessage(message, type) {
        this.messages.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }

}