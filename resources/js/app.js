import './bootstrap';

// import css 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import { createApp } from "vue";
import App from './App.vue'
import router from './routers'

const app = createApp(App)


app.use(router)
app.mount('#app')


// import global js
import 'bootstrap/dist/js/bootstrap.bundle.min.js'