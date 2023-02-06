export class article {
    constructor(id, title, content, writer, likes) {
        this._id = id
        this._title = title
        this._content = content
        this._writer = writer
        this._likes = likes
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
        return this._writer
    }

    like() {
        this._likes += 1
    }

    unlike() {
        this._likes -= 1
    }
}
