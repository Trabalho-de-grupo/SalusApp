import PagePrincipalController from '../controllers/PageAtividadeController.js'

export default class PagePrincipalView {
    constructor() {
        this.PagePrincipalController = new PagePrincipalController();

        this.atividades = localStorage.atividades ? JSON.parse(localStorage.atividades) : []
        this.categorias = localStorage.categorias ? JSON.parse(localStorage.categorias) : []
        this.pageAux = ""

        this.pageDivAll = document.getElementById("divPrincipalID")
        this.updatePagePrincipal();
    }

    updatePagePrincipal() {
        Object.values(this.atividades).forEach(atividade => {
            if (atividade.id == sessionStorage.getItem('atividadeID')) {
                
                console.log(atividade.steps.split("-").length)
                this.pageAux += `
                    <br><br><br>
                    <h5 class="tituloAtividades" id="nomeAtividade">${atividade.name}</h5>
                    <div class="atividadeBox"><img class="imgVideo" src="../img/${atividade.image}" width="490px"
                    height="382.2px"></div>
                    <span class="tempo">Tempo estimado: ${atividade.time} min</span>
                    <span class="likePartilha"><button class="like"><img src="../img/heart.png" width="30px"
                    height="30px"></button><button class="partilha"><img src="../img/share.png" width="30px"
                    height="30px"></button></span>
                    <div class="passos">
                    <div class="container">
                    <div class="row">
                    <div class="atividade-col">
                    <ul class="ulAtividade">
                    <li>MATERIAIS:</li>
                `

                for(let i = 0; i < atividade.materials.split("-").length; i++) {
                    this.pageAux += ` 
                        <li> ${i + 1} - ${atividade.materials.split("-")[i]} </li>
                    `
                }

                this.pageAux += `
                </ul>
                </div>
                <div class="atividade-col">
                <ul class="ulAtividade">
                <li>PASSOS:</li>
                `

                for(let i = 0; i < atividade.steps.split("-").length; i++) {
                    this.pageAux += ` 
                        <li> ${i + 1} - ${atividade.steps.split("-")[i]} </li>
                    `
                }

                `
                <li>1- conectar mente e corpo.</li>
                <li>2- oxigenar e energizar.</li>
                <li>3- libertar as tensões.</li>
                <li>4- ativar o tónus.</li>
                <li>5- soltar quadris e pernas.</li>
                <li>6- tracionar a coluna.</li>
                <li>7- realinhar as vértebras.</li>
                <li>8- meditação: aquietar a mente e o coração.</li>
                `

                this.pageAux += `
                </ul>
                </div>
                <div class="atividade-col">
                <ul class="ulAtividade">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                </ul>
                </div>
                <div class="atividade-col">
                <ul class="ulAtividade">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                </ul>
                </div>
                </div>
                </div>
                </div>
                <button class="finalizar">FINALIZAR</button>
                `
            }
        });

        this.pageDivAll.innerHTML = this.pageAux
    }
}