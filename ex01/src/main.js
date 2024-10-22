import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleOauth2 from 'vue3-google-oauth2'

const CLIENT_ID = '296298834351-i3rb8vhr7repa385aum4jdm5agris39s.apps.googleusercontent.com'

const app = createApp(App)

app.use(router)

app.use(vue3GoogleOauth2, {
  clientId: CLIENT_ID
})

app.mount('#app')

window.Kakao.init('35e7fe329dcba968384d1dfa18514060')
