export default class User {
    #uid
    #id
    #password
    // constructor(uid, id, password) {
    // }

    get uid() {
        return this.#uid
    }

    get id() {
        return this.#id
    }

    get password() {
        return this.#password
    }

    postArticle() {}

    leaveComment(article) {}

    likePost(article) {}
}
