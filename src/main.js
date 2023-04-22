import { createApp } from 'vue'
import App from './App.vue'
import "normalize.css"
import "./assets/css/index.css"//引用错误/reset.css
import router from "@/router/index";
import pinia from "@/stores/index";

createApp(App).use(router).use(pinia).mount('#app')

