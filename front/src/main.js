import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { config } from '../config'

const app = createApp(App)

app.use(router)
app.config.globalProperties.$api_url = config.api_url;
app.mount('#app')
