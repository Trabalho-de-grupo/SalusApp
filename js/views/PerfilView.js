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
    }
    
    bindGuardarPerfil() {
        this.btnGuardarPerfil.addEventListener('click', () => {
            console.log("oi")
        });
    }

    updatePerfilInfo() {
        this.perfilController.updatePefilInput(inputName, inputEmail);
    }
    
}

new PerfilView()