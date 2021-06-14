import CategoriaController from '../controllers/CategoriaController.js'

export default class CategoriaView {

    constructor() {
        this.CategoriaController = new CategoriaController();

        this.tableCategoria = document.querySelectorAll('table');
        this.updateTableCategoria();

        this.btnAdicionarCategoria = document.getElementById("btnAdicionarCategoria");
        this.inputNameCategoria = document.getElementById("nameCategoria");
        this.inputColorCategoria = document.getElementById("colorCategoria");
        this.inputIconCategoria = document.getElementById("iconCategoria");
        this.inputDescCategoria = document.getElementById("descriptionCategoria");

        this.inputNameEditCategoria = document.getElementById("nameEditCategoria");
        this.inputColorEditCategoria = document.getElementById("colorEditCategoria");
        this.inputIconEditCategoria = document.getElementById("iconEditCategoria");
        this.inputDescEditCategoria = document.getElementById("descriptionEditCategoria");

        this.btnEditCategoria = document.getElementsByClassName("btnEditCategoria");
        this.btnDeleteCategoria = document.getElementsByClassName("btnDeleteCategoria");

        this.btnDeleLineCategoria = document.getElementById("btnDeleteLineCategoria");
        this.btnEditLineCategoria = document.getElementById("btnEditLineCategoria");

        this.messages = document.querySelectorAll('#messages')

        this.bindAdicionarCategoria();

        this.bindEditCategoria();
        this.bindEditLine();
        this.bindDeleteCategoria();
        this.bindDeleteLine();
    }

    bindEditCategoria() {
        for (const btnEdit of this.btnEditCategoria) {
            btnEdit.addEventListener('click', () => {
                let id = (btnEdit.parentNode.parentNode.cells[0])
                this.CategoriaController.BtnEditData(id, this.inputNameEditCategoria, this.inputColorEditCategoria, this.inputIconEditCategoria, this.inputDescEditCategoria)
            });
        }
    }

    bindEditLine() {
        this.btnEditLineCategoria.addEventListener('click', () => {
            try {
                this.CategoriaController.BtnEditConfirmar(this.inputNameEditCategoria, this.inputColorEditCategoria, this.inputIconEditCategoria, this.inputDescEditCategoria)
                this.displayMessage('Alterações Guardadas com sucesso!', 'success');
                setTimeout(() => {
                        location.reload()
                    },
                    2000);

            } catch (e) {
                this.displayMessage(e, 'danger');
                this.inputNameEditCategoria.value = ""
                this.inputColorEditCategoria.value = ""
                this.inputIconEditCategoria.value = ""
                this.inputDescEditCategoria.value = ""
            }
        });
    }

    bindDeleteCategoria() {
        for (const btnDelete of this.btnDeleteCategoria) {
            btnDelete.addEventListener('click', () => {
                let id = (btnDelete.parentNode.parentNode.cells[0])
                this.CategoriaController.BtnDeleteData(id)
            });
        }
    }

    bindDeleteLine() {
        this.btnDeleLineCategoria.addEventListener('click', () => {
            this.CategoriaController.BtnDeleteConfirmar()
        });
    }

    bindAdicionarCategoria() {
        this.btnAdicionarCategoria.addEventListener('click', () => {
            try {
                if (this.inputNameCategoria.value == '' || this.inputColorCategoria.value == '' || this.inputIconCategoria.value == '' || this.inputDescCategoria.value == '') {
                    throw Error('Preencha todos os campos!');
                } else {
                    this.CategoriaController.newCategoria(this.inputNameCategoria, this.inputColorCategoria, this.inputIconCategoria, this.inputDescCategoria);
                }
            } catch (e) {
                this.displayMessage(e, 'danger');
            }
        });
    }

    updateTableCategoria() {
        this.CategoriaController.updateTable(this.tableCategoria[1]);
    }

    displayMessage(message, type) {
        this.messages[0].innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>;
            `;

    }

}