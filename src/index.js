import Vue from "vue";

import App from "./app/App";

// register jw pagination component globally
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

new Vue({
    el: "#app",
    render: h => h(App)
});
