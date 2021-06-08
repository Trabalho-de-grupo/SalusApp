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

        this.messages = document.querySelectorAll('#messages')

        this.bindAdicionarCategoria();
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