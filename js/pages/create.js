export default class Create {
    $code

    constructor() {
        this.$code = "hello world";
    }

    initRender = (container) => {
        container.innerHTML += this.$code;
    }
}