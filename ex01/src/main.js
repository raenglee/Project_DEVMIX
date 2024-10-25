import './assets/main.css';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import FontAwesomeIcon from './assets/FontAwesome.js'; //폰트 어썸 전역 등록
import SvgIcon from '@/assets/SvgIcon.vue'; //SvgIcon 전역 등록

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon); // 컴포넌트 전역등록
app.component('SvgIcon', SvgIcon);

app.use(router);

app.mount('#app');
