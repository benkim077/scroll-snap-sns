export default class User {
    constructor(uid, id, password) {
        this._uid = uid
        this._id = id
        this._password = password
    }

    get uid() {
        return this._uid
    }

    get id() {
        return this._id
    }

    get password() {
        return this._password
    }

    postArticle() {}

    leaveComment(article) {}

    likePost(article) {}
}
