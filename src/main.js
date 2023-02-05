class article {
    constructor(id, title, content, writer, likes) {
        this.id = id
        this.title = title
        this.content = content
        this.writer = writer
        this.likes = likes
    }

    changeTitle(newTitle) {
        this.title = newTitle
    }

    changeContent(newContent) {
        this.content = newContent
    }
}
