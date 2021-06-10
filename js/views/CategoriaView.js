import CategoriaController from '../controllers/CategoriaController.js'

export default class CategoriaView {

    constructor() {
        this.CategoriaController = new CategoriaController();
        this.CreateCategoriaStorage();
       
        this.tableCategoria = document.querySelectorAll('table');
        this.updateTableCategoria();

        this.btnAdicionarCategoria = document.getElementById("btnAdicionarCategoria");
        this.inputNameCategoria = document.getElementById("nameCategoria");
        this.inputColorCategoria = document.getElementById("colorCategoria");
        this.inputIconCategoria = document.getElementById("iconCategoria");
        this.inputDescCategoria = document.getElementById("descriptionCategoria");

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
                //this.CategoriaController.BtnEditData(id);
                console.log(id)
            });
        }
    }

    bindEditLine() {
        this.btnEditLineCategoria.addEventListener('click', () => {
            //this.radioUserStatus = document.getElementsByName("radioUserStatus")
            //this.CategoriaController.BtnEditConfirmar(this.radioUserStatus);
            console.log("oi")
        });
    }

    bindDeleteCategoria() {
        for (const btnDelete of this.btnDeleteCategoria) {
            btnDelete.addEventListener('click', () => {
                let id = (btnDelete.parentNode.parentNode.cells[0])
                //this.CategoriaController.BtnDeleteData(id);
                console.log(id)
            });
        }
    }

    bindDeleteLine() {
        this.btnDeleLineCategoria.addEventListener('click', () => {
            //this.CategoriaController.BtnDeleteConfirmar();
            console.log("ola")
        });
    }

    CreateCategoriaStorage() {
        const categorias = [{
            id: 1,
            name: 'Yoga',
            color: 'F6B8C3',
            icon: 'yoga.png',
            description: 'Yoga é uma atividade muito boa',
        }];

        if (!localStorage.categorias) {
            localStorage.setItem('categorias', JSON.stringify(categorias));
        }
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

new CategoriaView();