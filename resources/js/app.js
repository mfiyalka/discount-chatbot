/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

require('moment');
require('../dashkit/libs/@shopify/draggable/lib/es5/draggable.bundle.legacy.js');
require('../dashkit/libs/autosize/dist/autosize.min.js');
// require('../dashkit/libs/chart.js/dist/Chart.min.js');
require('chart.js');
require('../dashkit/libs/dropzone/dist/min/dropzone.min.js'); // Uncaught Error: No URL provided.
require('../dashkit/libs/flatpickr/dist/flatpickr.min.js');
require('../dashkit/libs/highlightjs/highlight.pack.min.js');
require('../dashkit/libs/jquery-mask-plugin/dist/jquery.mask.min.js');
require('../dashkit/libs/list.js/dist/list.min.js');
require('../dashkit/libs/quill/dist/quill.min.js');
require('../dashkit/libs/select2/dist/js/select2.min.js');
require('../dashkit/libs/chart.js/Chart.extension.min');
require('../dashkit/js/theme.min');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
