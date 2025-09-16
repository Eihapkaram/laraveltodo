import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { createPinia } from 'pinia'
// إنشاء pinia instance
const pinia = createPinia();

import App from './App.vue'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// إعداد الـ Router
const router = createRouter({
    history: createWebHistory(),
    routes,
});
// 👇 استدعاء أيقونات mdi
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})




// إنشاء التطبيق
const app = createApp(App);
// ربط pinia بالتطبيق
app.use(pinia);
// ربط الـ Router
app.use(router);
app.use(vuetify)
// Mount
app.mount('#app');
