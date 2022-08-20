import {defineCustomElement} from 'vue'
import MyWebComp from "./MyWebComp.ce.vue";
import Mine from "./Mine.ce.vue";

const MyWebElement = defineCustomElement(MyWebComp);
const MineElement = defineCustomElement(Mine);

export {MyWebElement, MineElement}

//register
export function register() {
    customElements.define('myweb-element', MyWebElement);
    customElements.define('mine-element', MineElement);
}
register();