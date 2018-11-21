import Vue from 'vue'
import App from './App.vue'
//引入axios
import axios from 'axios';
Vue.prototype.$http = axios;
//引入muse-ui
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')