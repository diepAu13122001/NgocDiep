import Create from "./pages/create.js";
import Table from "./pages/table.js"

export class App {
    activeScreen
    container

    constructor(container) {
        this.container = container;

    }

    changeActiveScreen(screen) {
        if (this.activeScreen !== undefined) {
            this.container.innerHTML = ""
        }

        this.activeScreen = screen
        this.activeScreen.initRender(this.container)
    }
}

// Khai bao app va chen vao index de hien thi ra man hinh
const container = document.getElementsByTagName("main")[0];
const app = new App(container)
const table = new Table();
app.changeActiveScreen(table)

//export instant của app chứ ko export class vì App là duy nhất 
export default app;




