import PerfilController from '../controllers/PerfilController.js'

class PerfilView {
    constructor() {
        this.perfilController = new PerfilController()

        this.inputName = document.getElementById("inputName");
        this.inputEmail = document.getElementById("inputEmail");
        this.inputPassword = document.getElementById("inputPassword");
        this.inputConfPassword = document.getElementById("inputConfPassword");

        this.btnGuardarPerfil = document.getElementById("btnGuardarPerfil");

        this.bindGuardarPerfil();
        this.updatePerfilInfo();

        this.messages = document.querySelector('#messages')
    }
    
    bindGuardarPerfil() {
        this.btnGuardarPerfil.addEventListener('click', () => {
            try {
                if (this.inputPassword.value != this.inputConfPassword.value) {
                    throw Error('Password e Confirmar Password não coincidem!');
                }
                if (this.inputPassword.value == '' || this.inputConfPassword.value == '') {
                    throw Error('Password nao podem ficar em branco!');
                }
                this.perfilController.guardarInputPerfil(this.inputName, this.inputEmail, this.inputPassword);
                this.displayMessage('Alterações Guardadas com sucesso!', 'success');

            } catch (e) {
                this.displayMessage(e, 'danger');
            }
        });
    }

    updatePerfilInfo() {
        this.perfilController.updatePefilInput(inputName, inputEmail);
    }
    
    displayMessage(message, type) {
        this.messages.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>;
            `;
            
    }
}

new PerfilView()