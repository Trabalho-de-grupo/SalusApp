import AtividadeModel from '../models/AtividadeModel.js'

export default class PageAtividadeController {
    constructor() {
        this.atividades = localStorage.atividades ? JSON.parse(localStorage.atividades) : []
        this.categorias = localStorage.categorias ? JSON.parse(localStorage.categorias) : []
        this.tableTeste = ""
    }

    updatePage(table) {
        this.atividades = this.atividades.filter(atividade => atividade.idCategoria == sessionStorage.getItem('categoriaID'))
        let length = this.atividades.length
        console.log(length)
        console.log(this.atividades)

        for (let i = 0; i < length; i = i + 3) {
            if (i > length) {
                break;
            } else {
                this.tableTeste +=
                    `  
                <tr class="linhaAtividade">
            `
                for (let j = i; j < i + 3; j++) {
                    if (j >= length) {
                        break;
                    } else {
                        this.tableTeste +=
                            `
                <td>
                    <div class="imagemAtividade" style="background-color:#${this.categorias[(this.atividades[j].idCategoria)-1].color};">
                    <span class="nomeAtividade">${this.atividades[j].name}</span>
                    <img class="iconAtividade" src="../img/${this.atividades[j].image}" width="150px" height="150px">
                    <div class="imgOverlay"><a class="linkVerMais" href="#"><div class="verMais"><span>VER MAIS</span></div></a></div>
                    </div>
                </td>
                `
                    }
                }
                this.tableTeste +=
                    `  
                </tr>
                <tr class="linhaDescAtividade">
            `

                for (let j = i; j < i + 3; j++) {
                    if (j >= length) {
                        break;
                    } else {
                        this.tableTeste +=
                            `
                    <td>
                        <div class="descAtividade">${this.atividades[j].description}</div>
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
}