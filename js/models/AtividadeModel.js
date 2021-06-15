export default class AtividadeModel {
    constructor(id, idCategoria, name, image, video, description, likes, views, materials, steps, time, date) {
        this.id = id
        this.idCategoria = idCategoria
        this.name = name
        this.image = image
        this.video = video
        this.description = description
        this.likes= likes
        this.views = views
        this.materials= materials
        this.steps = steps
        this.time = time
        this.date= date
    }
}