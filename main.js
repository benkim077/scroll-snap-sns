import User from "./modules/user.js"
import Article from "./modules/article.js"

const App = document.querySelector("#App")
App.innerText = "Hello App"

const newUser = new User(0, "benkim077", "just07#")
const newArticle = new Article(0, "first article", "content", "ben", 0)

console.log(newUser)
