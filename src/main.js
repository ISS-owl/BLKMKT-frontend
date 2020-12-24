import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/index';
import "./sass/index.scss";
import store from "./store/index";
import { initAxiosInstance } from './utils/LocalStorage'

const app = createApp(App);
app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount('#app');

initAxiosInstance();
