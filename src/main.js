import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import PrimeVue from 'primevue/config';
import Vuelidate from 'vuelidate';
// eslint-disable-next-line no-undef
axios.defaults.withCredentials = true;
Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://localhost:8001/';

/*axios.interceptors.response.use(
    ...function(error) {
        // handle error
        if (error.response) {
            toast.error(error.response.data.message);
        }
    });*/

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


Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
    router,
    PrimeVue,
    render: h => h(App)
}).$mount('#app')