import UtilizadorController from '../controllers/UtilizadorController.js'


class UtilizadorView {
    constructor() {
        this.utilizadorController = new UtilizadorController()

        this.tableUtilizador = document.querySelector('table');

        this.updateTableUtilizador();

        this.btnEditUtilizador = document.getElementById("btnEditUtilizador");
        this.btnDeleteUtilizador = document.getElementById("btnDeleteUtilizador");

        this.bindEditUtilizador();
        this.bindDeleteUtilizador();

        this.lineUtilizador = document.querySelectorAll("#tableUtilizador")
    }

    bindEditUtilizador() {

        this.btnEditUtilizador.addEventListener('click', () => {
            console.log("EDIT")
            console.log(this.btnEditUtilizador)
            this.utilizadorController.btnEditUtilizador()
        });

    }

    bindDeleteUtilizador() {

        this.btnDeleteUtilizador.addEventListener('click', () => {
            console.log("DELETE")
            console.log(this.btnDeleteUtilizador)
            this.utilizadorController.btnDeleteUtilizador()
        });
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