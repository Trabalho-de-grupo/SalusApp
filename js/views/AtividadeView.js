import AtividadeController from '../controllers/AtividadeController.js'

export default class AtividadeView {
    constructor() {
        this.AtividadeController = new AtividadeController();

        this.tableAtividade = document.querySelectorAll('table');
        this.updateTableAtividade();
        
        this.btnAdicionarAtividade = document.getElementById("btnAdicionarAtividade");

        this.inputDropdownCategoriatAtividade = document.getElementById("dropdownCategoriaAtividade");
        this.inputNameAtividade = document.getElementById("nameAtividade");
        this.inputImageAtividade = document.getElementById("imageAtividade");
        this.inputVideoAtividade = document.getElementById("videoAtividade");
        this.inputDescAtividade = document.getElementById("descriptionAtividade");
        this.inputMaterialsAtividade = document.getElementById("materialsAtividade");
        this.inputStepsAtividade = document.getElementById("stepsAtividade");
        this.inputTimeAtividade = document.getElementById("timeAtividade");

        this.inputDropdownCategoriaEditAtividade = document.getElementById("dropdownCategoriaEditAtividade");
        this.inputNameEditAtividade = document.getElementById("nameEditAtividade");
        this.inputImageEditAtividade = document.getElementById("imageEditAtividade");
        this.inputVideoEditAtividade = document.getElementById("videoEditAtividade");
        this.inputDescEditAtividade = document.getElementById("descriptionEditAtividade");
        this.inputMaterialsEditAtividade = document.getElementById("materialsEditAtividade");
        this.inputStepsEditAtividade = document.getElementById("stepsEditAtividade");
        this.inputTimeEditAtividade = document.getElementById("timeEditAtividade");

        this.btnEditAtividade = document.getElementsByClassName("btnEditAtividade");
        this.btnDeleteAtividade = document.getElementsByClassName("btnDeleteAtividade");
        
        this.btnDeleLineAtividade = document.getElementById("btnDeleteLineAtividade");
        this.btnEditLineAtividade = document.getElementById("btnEditLineAtividade");
        
        this.messages = document.querySelectorAll('#messages')
        
        this.bindAdicionarAtividade();

        this.bindEditAtividade();
        this.bindEditLine();
        this.bindDeleteAtividade();
        this.bindDeleteLine();
    }

    bindEditAtividade() {
        for (const btnEdit of this.btnEditAtividade) {
            btnEdit.addEventListener('click', () => {
                let id = (btnEdit.parentNode.parentNode.cells[0])
                this.AtividadeController.BtnEditData(id, this.inputDropdownCategoriaEditAtividade, this.inputNameEditAtividade, this.inputImageEditAtividade, this.inputVideoEditAtividade, this.inputDescEditAtividade, this.inputMaterialsEditAtividade, this.inputStepsEditAtividade, this.inputTimeEditAtividade)
            });
        }
    }

    bindEditLine() {
        this.btnEditLineAtividade.addEventListener('click', () => {
            try {
                this.AtividadeController.BtnEditConfirmar(this.inputDropdownCategoriaEditAtividade, this.inputNameEditAtividade, this.inputImageEditAtividade, this.inputVideoEditAtividade, this.inputDescEditAtividade, this.inputMaterialsEditAtividade, this.inputStepsEditAtividade, this.inputTimeEditAtividade)
                this.displayMessage('Alterações Guardadas com sucesso!', 'success');
                setTimeout(() => {
                        location.reload()
                    },
                    2000);

            } catch (e) {
                this.displayMessage(e, 'danger');
            }
        });
    }

    bindDeleteAtividade() {
        for (const btnDelete of this.btnDeleteAtividade) {
            btnDelete.addEventListener('click', () => {
                let id = (btnDelete.parentNode.parentNode.cells[0])
                this.AtividadeController.BtnDeleteData(id)
            });
        }
    }

    bindDeleteLine() {
        this.btnDeleLineAtividade.addEventListener('click', () => {
            this.AtividadeController.BtnDeleteConfirmar()
        });
    }

    bindAdicionarAtividade() {
        this.btnAdicionarAtividade.addEventListener('click', () => {
            try {
                if (this.inputDropdownCategoriatAtividade.value == '' || this.inputNameAtividade.value == '' || this.inputImageAtividade.value == '' || this.inputVideoAtividade.value == '' || this.inputDescAtividade.value == '' || this.inputMaterialsAtividade.value == '' || this.inputStepsAtividade.value == '' || this.inputTimeAtividade.value == '') {
                    throw Error('Preencha todos os campos!');
                } else {
                    this.AtividadeController.newAtividade(this.inputDropdownCategoriatAtividade, this.inputNameAtividade, this.inputImageAtividade, this.inputVideoAtividade, this.inputDescAtividade, this.inputMaterialsAtividade, this.inputStepsAtividade, this.inputTimeAtividade);
                }
            } catch (e) {
                this.displayMessage(e, 'danger');
            }
        });
    }

    updateTableAtividade() {
        console.log(this.tableAtividade[2])
        this.AtividadeController.updateTable(this.tableAtividade[2]);
    }

    displayMessage(message, type) {
        this.messages[1].innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>;
            `;

    }
}