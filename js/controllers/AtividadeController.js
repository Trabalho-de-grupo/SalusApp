import AtividadeModel from '../models/AtividadeModel.js'

export default class AtividadeController {
    constructor() {
        this.atividades = localStorage.atividades ? JSON.parse(localStorage.atividades) : []
        this.categorias = localStorage.categorias ? JSON.parse(localStorage.categorias) : []
        this.idUtilizador
    }

    createSelect(select, selectEdit) {
        Object.values(this.categorias).forEach(categoria => {
            select.innerHTML += `
                <option value="${categoria.id}">${categoria.name}</option>
            `
            selectEdit.innerHTML += `
                <option value="${categoria.id}">${categoria.name}</option>
            `
        });
    }


    newAtividade(idCategoria, name, image, video, desc, materials, steps, time) {
        if (this.atividades.find(atividade => atividade.name == name.value)) {
            throw Error(`Nome da Atividade "${name.value}" já existe!`);
        } else {
            const newId = this.atividades.length > 0 ? this.atividades[this.atividades.length - 1].id + 1 : 1
            let imagePath = image.value
            let imagePath2 = imagePath.substring(imagePath.lastIndexOf("\\") + 1)
            let videoPath = video.value
            let videoPath2 = imagePath.substring(videoPath.lastIndexOf("\\") + 1)

            var today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = mm + '-' + dd + '-' + yyyy;

            this.atividades.push(new AtividadeModel(newId, idCategoria.value, name.value, imagePath2, videoPath2, desc.value, 0, 0, materials.value, steps.value, time.value, today));
        }

        localStorage.setItem('atividades', JSON.stringify(this.atividades));
        location.reload();
    }

    updateTable(table) {
        Object.values(this.atividades).forEach(atividade => {
            table.innerHTML += `
                <tr class="linhaAtividade">
                    <td scope="row">${atividade.id}</td>
                    <td>${atividade.idCategoria}</td>
                    <td>${atividade.name}</td>
                    <td>${atividade.image}</td>
                    <td>${atividade.video}</td>
                    <td>${atividade.description}</td>
                    <td>${atividade.likes}</td>
                    <td>${atividade.views}</td>
                    <td>${atividade.materials}</td>
                    <td>${atividade.steps}</td>
                    <td>${atividade.time}</td>
                    <td>${atividade.date}</td>
                    <td>
                        <button class="btnEditAtividade btn btn-outline-secondary" data-toggle="modal" data-target="#editAtividadeModal">Edit</button>
                        <button class="btnDeleteAtividade btn btn-outline-secondary" data-toggle="modal" data-target="#deleteAtividadeModal">Delete</button>
                    </td>
                </tr>
            `
        })
    }

    BtnEditData(chave, idCategoria, name, image, video, desc, materials, steps, time) {
        this.idUtilizador = chave.innerText
        Object.values(this.atividades).forEach(atividade => {
            if (atividade.id == chave.innerHTML) {
                name.setAttribute('placeholder', atividade.name)
                desc.setAttribute('value', atividade.description)
                materials.setAttribute('value', atividade.materials)
                steps.setAttribute('values', atividade.steps)
                time.setAttribute('placeholder', atividade.time)
            }
        })
    }

    BtnEditConfirmar(idCategoria, name, image, video, desc, materials, steps, time) {
        this.atividades2 = this.atividades.filter(atividade2 => atividade2.id != this.idUtilizador)
        Object.values(this.atividades).forEach(atividade => {
            if (atividade.id == this.idUtilizador) {

                if (idCategoria.value == "" && name.value == "" && image.value == "" && video.value == "" && desc.value == "" && materials.value == "" && steps.value == "" && time.value == "") {
                    throw Error('Preencha pelo menos um campo!');
                }
                if (this.atividades2.find(atividade2 => atividade2.name == name.value)) {
                    throw Error(`Nome da Atividade "${name.value}" já existe!`);
                } else {
                    if (idCategoria.value !== "") {
                        //this.categorias2 = this.categorias.filter(categoria2 => categoria2.id == idCategoria.value)
                        atividade.idCategoria = idCategoria.value
                    }
                    if (name.value !== "") {
                        atividade.name = name.value
                    }
                    if (image.value !== "") {
                        let iconPath = image.value
                        let iconPath2 = iconPath.substring(iconPath.lastIndexOf("\\") + 1)
                        atividade.image = iconPath2
                    }
                    if (video.value !== "") {
                        let iconPath = video.value
                        let iconPath2 = iconPath.substring(iconPath.lastIndexOf("\\") + 1)
                        atividade.video = iconPath2
                    }
                    if (desc.value !== "") {
                        atividade.description = desc.value
                    }
                    if (materials.value !== "") {
                        atividade.materials = materials.value
                    }
                    if (steps.value !== "") {
                        atividade.steps = steps.value
                    }
                    if (time.value !== "") {
                        atividade.time = time.value
                    }
                }
            }
        })
        localStorage.setItem('atividades', JSON.stringify(this.atividades));
    }

    BtnDeleteData(chave) {
        Object.values(this.atividades).forEach(atividade => {
            if (atividade.id == chave.innerHTML) {
                this.idUtilizador = chave.innerHTML
            }
        })
    }

    BtnDeleteConfirmar() {
        this.atividades = this.atividades.filter(atividade => atividade.id != this.idUtilizador)
        localStorage.setItem('atividade', JSON.stringify(this.atividade));
        location.reload();
    }
}