export default class Article {
    constructor(id, title, content, writer, likeUsers = []) {
        this._id = id // Unique String
        this._title = title // String
        this._content = content // String (Just String or Image Url)
        this._writer = writer // User Instance
        this._likeUsers = likeUsers // Array : Element is User Instance.
    }

    get id() {
        return this._id
    }

    get title() {
        return this._title
    }

    get content() {
        return this._content
    }

    get writer() {
        return this._writer
    }

    get likes() {
        return this._likes
    }

    getUsersLike(user) {
        this._likeUsers = [...this._likeUsers, user]
    }

    loseUsersUnlike(user) {
        this._likeUsers.filter((userEl) => {
            return !Object.is(user, userEl)
        })
    }
}
