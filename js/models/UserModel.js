export default class UserModel {
    constructor(id, username, email, password, idActivities, status) {
        this.id = id
        this.username = username
        this.email = email
        this.password = password
        this.idActivities = idActivities
        this.status = status
    }
}