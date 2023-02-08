export default class Article {
    #id // Unique String
    #title // String
    #content // String (Just String or Image Url)
    #writer // User Instance
    #likeUsers // Array : Element is User Instance.
    // constructor(id, title, content, writer, likeUsers = []) {
    // }

    get id() {
        return this.#id
    }

    get title() {
        return this.#title
    }

    get content() {
        return this.#content
    }

    get writer() {
        return this.#writer
    }

    get likeUsers() {
        return this.#likeUsers
    }

    addUsersLike(user) {
        this.#likeUsers = [...this.#likeUsers, user]
    }

    deleteUsersUnlike(user) {
        this.#likeUsers.filter((userEl) => {
            return !Object.is(user, userEl)
        })
    }
}
