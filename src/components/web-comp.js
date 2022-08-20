import { defineCustomElement } from 'vue'
import MyWebComp from "./MyWebComp.ce.vue";

const MyWebElement = defineCustomElement(MyWebComp);

//register
customElements.define('myweb-element', MyWebElement);
customElements.define('mine-element', MineElement);