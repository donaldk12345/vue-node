import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
// eslint-disable-next-line no-undef
axios.defaults.withCredentials = true;
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:8000/';



//axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('jwt');

/*axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwt');

        if (token) {
            config.headers.Authorization = 'Bearer ${token}';
        }
        return config;
    },
);*/




Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')