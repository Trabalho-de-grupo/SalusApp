import CategoriaModel from '../models/CategoriaModel.js'

export default class PageCategoriaController {

    constructor() {
        this.categorias = localStorage.categorias ? JSON.parse(localStorage.categorias) : []
        this.tableTeste = ""
        sessionStorage.removeItem('categoriaID')
    }

    updatePage(table) {
        let length = this.categorias.length

        for (let i = 0; i < length; i = i + 3) {
            if (i > length) {
                break;
            } else {
                this.tableTeste +=
                    `  
                    <tr class="linhaCategoria">
                `
                for (let j = i; j < i + 3; j++) {
                    if (j >= length) {
                        break;
                    } else {
                        this.tableTeste +=
                            `
                    <td>
                        <div class="imagemCategoria" style="background-color:#${this.categorias[j].color};">
                        <span class="nomeCategoria">${this.categorias[j].name}</span>
                        <img class="iconCategoria" src="../img/iconsAtividades/${this.categorias[j].icon}" width="150px" height="150px">
                        <div class="imgOverlay"><a class="linkVerMais" href="#"><div class="verMais"><span>VER MAIS</span></div></a></div>
                        </div>
                    </td>
                    `
                    }
                }
                this.tableTeste +=
                    `  
                    </tr>
                    <tr class="linhaDescCategoria">
                `

                for (let j = i; j < i + 3; j++) {
                    if (j >= length) {
                        break;
                    } else {
                        this.tableTeste +=
                            `
                        <td>
                            <div class="descCategoria">${this.categorias[j].description}</div>
                        </td>
                    `
                    }
                }
                this.tableTeste +=
                    `  
                    </tr>
                `
            }
        }
        table.innerHTML += this.tableTeste
    }

    sendLinkAtividade(name) {
        Object.values(this.categorias).forEach(categoria => {
            if (categoria.name == name) {
                sessionStorage.setItem('categoriaID', categoria.id);
                window.location.replace('/html/listagem.html')
            }
        });
    }
}