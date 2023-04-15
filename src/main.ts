import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/normalize.css'
import components from './components/index'

const app = createApp(App)
components.forEach((comp) => app.component(comp.name, comp))

app.use(createPinia())
app.use(router)
app.mount('#app')
// https://www.themealdb.com/api.php
