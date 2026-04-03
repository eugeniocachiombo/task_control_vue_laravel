import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routes/route';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ToastService from 'primevue/toastservice';

createApp(App)
.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: false
      }
    }
  })
.use(ToastService)
.use(router)
.mount('#app')
