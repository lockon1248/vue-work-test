import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/assets/plugins/fontawesome-pro-5.13.0-web/css/all.min.css';
import laleUI from 'lale-ui';
import 'lale-ui/src/assets/css/main.scss';

const app = createApp(App);
app.use(createPinia());
app.use(laleUI);
app.use(router)
app.use(Antd);
app.mount('#app');
