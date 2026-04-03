import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routes/route';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

createApp(App)
.use(PrimeVue);
.use(ToastService);
.use(router)
.mount('#app')
