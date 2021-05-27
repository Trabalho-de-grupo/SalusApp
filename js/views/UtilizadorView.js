import UtilizadorController from '../controllers/UtilizadorController.js'


class UtilizadorView {
    constructor() {
            this.utilizadorController = new UtilizadorController()

            this.tableUtilizador = document.getElementById("tableUtilizador");

            this.btnEditUtilizador = document.getElementById("btnEditUtilizador");
            this.btnDeleteUtilizador = document.getElementById("btnDeleteUtilizador");

            this.bindEditUtilizador();
            this.bindDeleteUtilizador();
            this.updateTableUtilizador();
    }

    bindEditUtilizador() {
        this.btnEditUtilizador.addEventListener('click', () => {
            console.log("edit")
        })


    }

    bindDeleteUtilizador() {
        this.btnDeleteUtilizador.addEventListener('click', () => {
            console.log("delete")
        })
    }

    updateTableUtilizador() {
        this.utilizadorController.UpdateTable();
    }



    displayMessage(message, type) {
        this.messages.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }
}

new UtilizadorView();