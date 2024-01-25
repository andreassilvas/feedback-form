import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap-icons/font/bootstrap-icons.css';
import i18n from './translations';

const app = createApp(App);
app.use(i18n);
app.mount('#app');
