import UtilizadorController from '../controllers/UtilizadorController.js'


export default class UtilizadorView {
    constructor() {
            this.utilizadorController = new UtilizadorController()

            this.tableUtilizador = document.getElementById("tableUtilizador");

            this.btnEditUtilizador = document.getElementById("btnEditUtilizador");
            this.btnDeleteUtilizador = document.getElementById("btnDeleteUtilizador");

            this.bindEditUtilizador();
            this.bindDeleteUtilizador();
    }

    bindEditUtilizador() {
        this.btnEditUtilizador.addEventListener('click', () => {
            
        })


    }

    bindDeleteUtilizador() {
        
    }






    displayMessage(message, type) {
        this.messages.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }
}